/*/home/chetan/frappe-bench/apps/lms/frontend/src/components/CourseOutline.vue*/
<template>
  <div>
    <!-- Section Header (Optional Title) -->
    <div
      v-if="title && (outline.data?.length || allowEdit)"
      class="flex items-center justify-between space-x-2 mb-4 px-2"
      :class="{
        'sticky top-0 z-10 bg-white border-b px-3 py-2.5 sm:px-5': allowEdit
      }"
    >
      <div
        class="font-semibold text-lg leading-5 text-ink-gray-9"
        :class="{ 'font-medium text-base': allowEdit }"
      >
        {{ __(title) }}
      </div>
      <Button size="sm" v-if="allowEdit" @click="openChapterModal()">
        {{ __('Add Chapter') }}
      </Button>
    </div>

    <!-- Accordion Container -->
    <div
  :class="{
    'accordion-container': showOutline && outline.data?.length,
  }"
>

      <Disclosure
		v-slot="{ open, close }"
		v-for="(chapter, index) in outline.data"
		:key="chapter.name"
		:defaultOpen="openChapterDetail(chapter.idx)"
		>


        <!-- Accordion Header -->
<DisclosureButton
  :class="[
    'accordion-header mb-4',
    !isChapterUnlocked(index) ? 'locked-chapter' : ''
  ]"
  @click="handleChapterClick(index, close)"
>
  <div
    class="chapter-title"
    @click="redirectToChapter(chapter, index)"
  >
    {{ chapter.title }}
  </div>

  <div class="expand-button">
    <span>{{ open ? 'Collapse' : 'Expand' }}</span>
    <ChevronRight
      :class="['chevron-icon', { open }]"
    />
  </div>
</DisclosureButton>


        <!-- Accordion Panel -->
        <DisclosurePanel v-if="!chapter.is_scorm_package">
          <Draggable
            v-if="!chapter.is_scorm_package"
            :list="chapter.lessons"
            :disabled="!allowEdit"
            item-key="name"
            group="items"
            @end="updateOutline"
            :data-chapter="chapter.name"
          >
            <template #item="{ element: lesson }">
             <div
			class="accordion-lesson"
			:class="{
				'active-lesson': isActiveLesson(lesson.number),
				'continue-highlight': isContinueLesson(chapter, lesson)
			}"
			>



                <router-link
                  :to="{
                    name: allowEdit ? 'LessonForm' : 'Lesson',
                    params: {
                      courseName: courseName,
                      chapterNumber: lesson.number.split('.')[0],
                      lessonNumber: lesson.number.split('.')[1]
                    }
                  }"
                >
                  <div class="flex items-center text-sm leading-5 group">
                    <MonitorPlay
                      v-if="lesson.icon === 'icon-youtube'"
                      class="h-4 w-4 stroke-1 mr-2"
                    />
                    <HelpCircle
                      v-else-if="lesson.icon === 'icon-quiz'"
                      class="h-4 w-4 stroke-1 mr-2"
                    />
                    <FileText
                      v-else-if="lesson.icon === 'icon-list'"
                      class="h-4 w-4 text-ink-gray-9 stroke-1 mr-2"
                    />
                    {{ lesson.title }}
                    <Trash2
                      v-if="allowEdit"
                      @click.prevent="trashLesson(lesson.name, chapter.name)"
                      class="h-4 w-4 text-ink-red-3 ml-auto invisible group-hover:visible"
                    />
                    <Check
                      v-if="lesson.is_complete"
                      :stroke-width="3"
						class="h-4 w-4 text-green-500 ml-2"
                    />
                  </div>
                </router-link>
              </div>
            </template>
          </Draggable>
          <div v-if="allowEdit">
            <router-link class="add-lesson-button"
              v-if="!chapter.is_scorm_package"
              :to="{
                name: 'LessonForm',
                params: {
                  courseName: courseName,
                  chapterNumber: chapter.idx,
                  lessonNumber: chapter.lessons.length + 1
                }
              }"
            >
              <Button>
                {{ __('Add Lesson') }}
              </Button>
            </router-link>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>

  <ChapterModal
    v-if="user.data"
    v-model="showChapterModal"
    v-model:outline="outline"
    :course="courseName"
    :chapterDetail="getCurrentChapter()"
  />


</template>

<script setup>
import { Button, createResource, Tooltip, toast } from 'frappe-ui'
import { getCurrentInstance, inject, ref ,watch} from 'vue'
import Draggable from 'vuedraggable'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {
	Check,
	ChevronRight,
	FileText,
	FilePenLine,
	HelpCircle,
	MonitorPlay,
	Trash2,
} from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import ChapterModal from '@/components/Modals/ChapterModal.vue'

const route = useRoute()
const router = useRouter()
const user = inject('$user')
const showChapterModal = ref(false)
const currentChapter = ref(null)
const app = getCurrentInstance()
const { $dialog } = app.appContext.config.globalProperties

const props = defineProps({
	courseName: {
		type: String,
		required: true,
	},
	showOutline: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: '',
	},
	allowEdit: {
		type: Boolean,
		default: false,
	},
	getProgress: {
		type: Boolean,
		default: false,
	},
})

const outline = createResource({
	url: 'lms.lms.utils.get_course_outline',
	cache: ['course_outline', props.courseName],
	params: {
		course: props.courseName,
		progress: props.getProgress,
	},
	auto: true,
})

const deleteLesson = createResource({
	url: 'lms.lms.api.delete_lesson',
	makeParams(values) {
		return {
			lesson: values.lesson,
			chapter: values.chapter,
		}
	},
	onSuccess() {
		outline.reload()
		toast.success(__('Lesson deleted successfully'))
	},
})

const updateLessonIndex = createResource({
	url: 'lms.lms.api.update_lesson_index',
	makeParams(values) {
		return {
			lesson: values.lesson,
			sourceChapter: values.sourceChapter,
			targetChapter: values.targetChapter,
			idx: values.idx,
		}
	},
	onSuccess() {
		toast.success(__('Lesson moved successfully'))
	},
})

const trashLesson = (lessonName, chapterName) => {
	$dialog({
		title: __('Delete this lesson?'),
		message: __(
			'Deleting this lesson will permanently remove it from the course. This action cannot be undone. Are you sure you want to continue?'
		),
		actions: [
			{
				label: __('Delete'),
				theme: 'red',
				variant: 'solid',
				onClick(close) {
					deleteLesson.submit({
						lesson: lessonName,
						chapter: chapterName,
					})
					close()
				},
			},
		],
	})
}

const openChapterDetail = (index) => {
	return index == route.params.chapterNumber || index == 1
}

const openChapterModal = (chapter = null) => {
	currentChapter.value = chapter
	showChapterModal.value = true
}

const getCurrentChapter = () => {
	return currentChapter.value
}

const updateOutline = (e) => {
	updateLessonIndex.submit({
		lesson: e.item.__draggable_context.element.name,
		sourceChapter: e.from.dataset.chapter,
		targetChapter: e.to.dataset.chapter,
		idx: e.newIndex,
	})
}

const deleteChapter = createResource({
	url: 'lms.lms.api.delete_chapter',
	makeParams(values) {
		return {
			chapter: values.chapter,
		}
	},
	onSuccess() {
		outline.reload()
		toast.success(__('Chapter deleted successfully'))
	},
})

const trashChapter = (chapterName) => {
	$dialog({
		title: __('Delete this chapter?'),
		message: __(
			'Deleting this chapter will also delete all its lessons and permanently remove it from the course. This action cannot be undone. Are you sure you want to continue?'
		),
		actions: [
			{
				label: __('Delete'),
				theme: 'red',
				variant: 'solid',
				onClick(close) {
					deleteChapter.submit({ chapter: chapterName })
					close()
				},
			},
		],
	})
}

//Helper Method to Check Chapter Unlock

const isChapterUnlocked = (index) => {
  // Always unlock the first chapter
  if (index === 0) return true;

  // Get previous chapter
  const previousChapter = outline.data[index - 1];
  if (!previousChapter || !previousChapter.lessons) return false;

  // Check if all lessons in previous chapter are complete
  return previousChapter.lessons.every((lesson) => lesson.is_complete);
};




const redirectToChapter = (chapter, index) => {
  if (!isChapterUnlocked(index)) {
		$dialog({
			title: __('Chapter Locked'),
			message: __('Please complete the previous chapter before accessing this one.'),
			actions: [
				{
				label: __('Got It'),
				theme: 'primary',
				variant: 'solid',
				class: 'custom-dialog-button'
				}
			],
			class: 'custom-dialog-box'
			});

    return;
  }

  if (!chapter.is_scorm_package) return;
  event.preventDefault();
  if (props.allowEdit) return;

  if (!user.data) {
    toast.success(__('Please enroll for this course to view this lesson'));
    return;
  }

  router.push({
    name: 'SCORMChapter',
    params: {
      courseName: props.courseName,
      chapterName: chapter.name,
    },
  });
};


const lockedChapters = ref([])

watch(outline, () => {
  if (outline.data?.length) {
    lockedChapters.value = outline.data.map((_, index) => !isChapterUnlocked(index));
  }
})



const handleChapterClick = (index, closeDisclosure) => {
  if (!isChapterUnlocked(index)) {
    
    closeDisclosure?.()  // force close if clicked accidentally
  }
}


const isActiveLesson = (lessonNumber) => {
	return (
		route.params.chapterNumber == lessonNumber.split('.')[0] &&
		route.params.lessonNumber == lessonNumber.split('.')[1]
	)
}

const getChapterStatus = (chapter) => {
  if (!chapter.lessons || chapter.lessons.length === 0) return ''

  const total = chapter.lessons.length
  const completed = chapter.lessons.filter(l => l.is_complete).length

  if (completed === 0) {
    return ''  // Nothing
  } else if (completed === total) {
    return 'complete'
  } else {
    return 'in-progress'
  }
}

// Helper: returns 'complete', 'in-progress', or 'not-started' for a lesson
const getLessonStatus = (lesson) => {
  if (lesson.is_complete) return 'complete'
  if (lesson.attempts && lesson.attempts > 0) return 'in-progress'
  return 'not-started'
}

// Helper: returns the first lesson in a chapter that is not complete
const getNextLessonToContinue = (chapter) => {
  return chapter.lessons.find((lesson) => !lesson.is_complete)
}

// Adds highlight class if this is the next lesson to continue
const getLessonHighlightClass = (lesson, chapter) => {
  const nextLesson = getNextLessonToContinue(chapter)
  if (nextLesson && nextLesson.name === lesson.name) {
    return 'highlight-next-lesson'
  }
  return ''
}

const isContinueLesson = (chapter, lesson) => {
  // Find first incomplete lesson in this chapter
  const firstIncomplete = chapter.lessons.find(l => !l.is_complete)
  if (!firstIncomplete) return false

  // Only mark *this* lesson
  return lesson.name === firstIncomplete.name
}


</script>

<style>

svg.lucide.lucide-circle-help-icon.h-4.w-4.stroke-1.mr-2 {
    color: #ff4602 !important;
}


svg.lucide.lucide-file-text-icon.h-4.w-4.text-ink-gray-9.stroke-1.mr-2
 {
    color: #ff4602 !important;
}
svg.lucide.lucide-monitor-play-icon.h-4.w-4.stroke-1.mr-2
 {
    color: #ff4602 !important;
}

.text-sm {
    font-size: 16px !important;
}


.locked-chapter {
  opacity: 0.6;
 
}


.custom-dialog-box {
  font-family: 'Inter', sans-serif;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.custom-dialog-box .frappe-dialog-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 0.75rem;
}

.custom-dialog-box .frappe-dialog-message {
  font-size: 15px;
  color: #4b5563; /* text-gray-600 */
}

.custom-dialog-button {
  background-color: #ff4602 !important; /* indigo-600 */
  border-radius: 6px !important;
  padding: 0.4rem 1.2rem !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  color: white !important;
}

.custom-dialog-button:hover {
  background-color: #4338ca !important; /* indigo-700 */
}



.continue-highlight {
  background-color: #fef9c3;
  border-left: 4px solid #facc15;
}


.highlight-next-lesson {
  background-color: #ecfdf5;    /* Very light green highlight */
  border-left: 4px solid #10b981; /* Emerald green bar */
}


.accordion-header {
    display: flex;
    width: 100%;
    padding: 12px 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px #00000014;
    margin-bottom: 16px;
    transition: background-color .2s ease, box-shadow .2s ease;
    cursor: pointer;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-between;
}

.accordion-header:hover {
  background-color: #f9fafb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.expand-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border: 2px solid #ff4602;
    border-radius: 9999px;
    background-color: #fff;
    font-size: 14px;
    font-weight: 600;
    color: #ff4602;
    cursor: pointer;
    transition: background-color .2s ease, border-color .2s ease;
}

.expand-button:hover {
  background-color: #f9fafb;
  border-color: #ff4602;
}

.chevron-icon {
  width: 20px;
  height: 20px;
  stroke: #ff4602;
  transition: transform 0.3s ease;
}

.chevron-icon.open {
  transform: rotate(90deg);
}



.action-icons {
  display: flex;
  margin-left: auto;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.accordion-header:hover .action-icons {
  opacity: 1;
}

.accordion-lesson {
  padding: 10px 16px 10px 32px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  transition: background-color 0.2s ease;
}

.accordion-lesson:hover {
  background-color: #f9fafb;
}

.active-lesson {
  background-color: #f3f4f6;
}

.add-lesson-button {
  display: block;
  margin: 16px 0 16px 32px;
  padding: 8px 16px;
  background-color: #ff4602;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.add-lesson-button:hover {
  background-color: #4338ca;
}


/* Accordion Container */
.accordion-container {
  /* border: 2px solid #e2e7ed; */
  border-radius: 8px;
  /* background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); */
  padding: 8px;
  background: #f8f9fa;
}

/* Accordion Header (DisclosureButton) */


.accordion-header:last-child {
  border-bottom: none;
}

.accordion-header:hover {
  background-color: #f9fafb;
}

/* Chevron Icon Rotation */


.chevron-icon.open {
  transform: rotate(90deg);
}

/* Chapter Title */
.chapter-title {
  font-size: 20px;
  font-weight: 500;
  color: #374151;
  margin-left: 12px;
 
}

/* Action Icons on Hover */
.accordion-header .action-icons {
  display: flex;
  margin-left: auto;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.accordion-header:hover .action-icons {
  opacity: 1;
}

/* Lesson Item */
.accordion-lesson {
  padding: 10px 16px 10px 32px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  transition: background-color 0.2s ease;
}

.accordion-lesson:last-child {
  border-bottom: none;
}

.accordion-lesson:hover {
  background-color: #f9fafb;
}

/* Active Lesson Highlight */
.active-lesson {
  background-color: #f3f4f6;
}

/* Lesson Link */
.accordion-lesson a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #374151;
  font-size: 14px;
  line-height: 20px;
}

/* Lesson Icons */
.lesson-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  stroke: #4b5563;
}

/* Trash Icon (Delete) */
.delete-icon {
  width: 16px;
  height: 16px;
  margin-left: auto;
  color: #dc2626;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.accordion-lesson:hover .delete-icon {
  opacity: 1;
}

/* Add Button in Panel */
.add-lesson-button {
  display: block;
  margin: 16px 0 16px 32px;
  padding: 8px 16px;
  background-color: #ff4602;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.add-lesson-button:hover {
  background-color: #4338ca;
}

</style>
