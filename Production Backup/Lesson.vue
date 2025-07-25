<template>
	<div v-if="lesson.data" class="">
		<header
			class="sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"
		>
			<Breadcrumbs class="h-7" :items="breadcrumbs" />
			<div class="flex items-center space-x-2">
				<Tooltip v-if="canGoZen()" :text="__('Full Screen')">
					<Button @click="goFullScreen()" class="course-nav-btn">
						<template #icon>
							<Focus class="w-4 h-4 stroke-2" />
						</template>
					</Button>
				</Tooltip>
				<CertificationLinks :courseName="courseName" />
			</div>
		</header>
		<div class="grid md:grid-cols-[70%,30%] h-screen">
			<div v-if="lesson.data.no_preview" class="border-r">
				<div class="shadow rounded-md w-3/4 mt-10 mx-auto text-center p-4">
					<div class="flex items-center justify-center mt-4 space-x-2">
						<LockKeyholeIcon class="size-4 stroke-2 text-ink-gray-5" />
						<div class="text-lg font-semibold text-ink-gray-7">
							{{ __('This lesson is locked') }}
						</div>
					</div>
					<div class="mt-1 mb-4 text-ink-gray-7">
						{{
							__(
								'This lesson is not available for preview. Please enroll in the course to access it.'
							)
						}}
					</div>
					<Button
						v-if="user.data && !lesson.data.disable_self_learning"
						@click="enrollStudent()"
						variant="solid"
					>
						{{ __('Start Learning') }}
					</Button>
					<Badge
						theme="blue"
						size="lg"
						v-else-if="lesson.data.disable_self_learning"
						class="mt-2"
					>
						{{ __('Contact the Administrator to enroll for this course.') }}
					</Badge>
					<Button v-else @click="redirectToLogin()">
						<template #prefix>
							<LogIn class="w-4 h-4 stroke-1" />
						</template>
						{{ __('Login') }}
					</Button>
				</div>
			</div>
			<div
				v-else
				ref="lessonContainer"
				class="bg-surface-white"
				:class="{
					'overflow-y-auto': zenModeEnabled,
				}"
			>
				<div
					class="border-r container pt-5 pb-10 px-5 h-full"
					:class="{
						'w-full md:w-3/4 mx-auto border-none !pt-10': zenModeEnabled,
					}"
				>
					<div
						class="flex flex-col md:flex-row md:items-center justify-between"
					>
						<div class="flex flex-col">
							<div class="text-3xl font-semibold text-ink-gray-9">
								{{ lesson.data.title }}
							</div>

							<div
								v-if="zenModeEnabled"
								class="relative flex items-center space-x-2 text-sm mt-1 text-ink-gray-7 group w-fit mt-2"
							>
								<span>
									{{ lesson.data.chapter_title }} -
									{{ lesson.data.course_title }}
								</span>
								<Info class="size-3" />
								<div
									class="hidden group-hover:block rounded bg-gray-900 px-2 py-1 text-xs text-white shadow-xl absolute left-0 top-full mt-2"
								>
									{{ Math.ceil(lesson.data.membership.progress) }}%
									{{ __('completed') }}
								</div>
							</div>
						</div>

						<div class="flex items-center space-x-2 mt-2 md:mt-0">
							<Button v-if="zenModeEnabled" @click="showDiscussionsInZenMode()">
								<template #icon>
									<MessageCircleQuestion class="w-4 h-4 stroke-1.5" />
								</template>
							</Button>
							<router-link
								v-if="lesson.data.prev"
								:to="{
									name: 'Lesson',
									params: {
										courseName: courseName,
										chapterNumber: lesson.data.prev.split('.')[0],
										lessonNumber: lesson.data.prev.split('.')[1],
									},
								}"
							>
								<Button class="course-nav-btn">
									<template #prefix>
										<ChevronLeft class="w-4 h-4 stroke-1" />
									</template>
									<span>
										{{ __('Previous') }}
									</span>
								</Button>
							</router-link>
							<router-link
								v-if="allowEdit()"
								:to="{
									name: 'LessonForm',
									params: {
										courseName: courseName,
										chapterNumber: props.chapterNumber,
										lessonNumber: props.lessonNumber,
									},
								}"
							>
								<Button class="course-nav-btn">
									{{ __('Edit') }}
								</Button>
							</router-link>
							<!-- <router-link
								v-if="lesson.data.next"
								:to="{
									name: 'Lesson',
									params: {
										courseName: courseName,
										chapterNumber: lesson.data.next.split('.')[0],
										lessonNumber: lesson.data.next.split('.')[1],
									},
								}"
								>
								<Button class="course-nav-btn">
									<template #suffix>
										<ChevronRight class="w-4 h-4 stroke-1" />
									</template>
									<span>
										{{ __('Next') }}
									</span>
								</Button>
							</router-link> -->


							<Button
							v-if="lesson.data.next"
							class="course-nav-btn"
							@click="handleNextClick"
								>
							<template #suffix>
								<ChevronRight class="w-4 h-4 stroke-1" />
							</template>
							<span>
								{{ __('Next') }}
							</span>
						</Button>



							<a
								:href="getSmartRedirectURL()"
							>
								<Button class="course-nav-btn">
									{{ getSmartButtonText() }}
								</Button>
							</a>
						</div>
					</div>

					<div v-if="!zenModeEnabled" class="flex items-center mt-2">
						<span
							class="h-6 mr-1"
							:class="{
								'avatar-group overlap': lesson.data.instructors?.length > 1,
							}"
						>
							<UserAvatar
								v-for="instructor in lesson.data.instructors"
								:user="instructor"
							/>
						</span>
						<CourseInstructors
							v-if="lesson.data?.instructors"
							:instructors="lesson.data.instructors"
						/>
					</div>

					<div
						v-if="
							lesson.data.instructor_content &&
							JSON.parse(lesson.data.instructor_content)?.blocks?.length > 1 &&
							allowInstructorContent()
						"
						class="bg-surface-gray-2 p-3 rounded-md mt-6"
					>
						<div class="text-ink-gray-5 font-medium">
							{{ __('Instructor Notes') }}
						</div>
						<div
							id="instructor-content"
							class="ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-outline-gray-2 prose-th:border-outline-gray-2 prose-td:relative prose-th:relative prose-th:bg-surface-gray-2 prose-sm max-w-none !whitespace-normal"
						></div>
					</div>
					<div
						v-else-if="lesson.data.instructor_notes"
						class="ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-outline-gray-2 prose-th:border-outline-gray-2 prose-td:relative prose-th:relative prose-th:bg-surface-gray-2 prose-sm max-w-none !whitespace-normal mt-8"
					>
						<LessonContent :content="lesson.data.instructor_notes" />
					</div>
					<div
						v-if="lesson.data.content"
						class="ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-outline-gray-2 prose-th:border-outline-gray-2 prose-td:relative prose-th:relative prose-th:bg-surface-gray-2 prose-sm max-w-none !whitespace-normal mt-8"
					>
						<div id="editor"></div>
					</div>
					<div
						v-else
						class="ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-outline-gray-2 prose-th:border-outline-gray-2 prose-td:relative prose-th:relative prose-th:bg-surface-gray-2 prose-sm max-w-none !whitespace-normal mt-8"
					>
						<LessonContent
							v-if="lesson.data?.body"
							:content="lesson.data.body"
							:youtube="lesson.data.youtube"
							:quizId="lesson.data.quiz_id"
						/>
					</div>
					<div class="mt-20" ref="discussionsContainer">
						<Discussions
							v-if="allowDiscussions"
							:title="'Questions'"
							:doctype="'Course Lesson'"
							:docname="lesson.data.name"
							:key="lesson.data.name"
						/>
					</div>
				</div>
			</div>
			<div class="sticky top-10">
				<div class="bg-surface-menu-bar py-5 px-2 border-b">
					<div class="text-lg font-semibold text-ink-gray-9">
						{{ lesson.data.course_title }}
					</div>
					<div
						v-if="user && lesson.data.membership"
						class="text-sm mt-4 mb-2 text-ink-gray-5"
					>
						{{ Math.ceil(lessonProgress) }}% {{ __('completed') }}
					</div>

					<ProgressBar
						v-if="user && lesson.data.membership"
						:progress="lessonProgress"
					/>
				</div>
				<CourseOutline
					:courseName="courseName"
					:key="chapterNumber"
					:getProgress="lesson.data.membership ? true : false"
				/>
			</div>
		</div>

		

		<div v-if="showIncompleteLessonModal" class="modal-overlay">
			<div class="modal-box warning">
				<button class="modal-close" @click="showIncompleteLessonModal = false">&times;</button>
				<h2>Lesson Incomplete</h2>
				<p>
				Please complete the current lesson before proceeding to the next one.
  				Ensure you have fully engaged with the content to continue your learning journey.
				</p>
				<button class="modal-btn" @click="showIncompleteLessonModal = false">Close</button>
			</div>
			</div>

	</div>
</template>
<script setup>
import {
	createResource,
	Badge,
	Breadcrumbs,
	Button,
	Tooltip,
	usePageMeta,
} from 'frappe-ui'
import {
	computed,
	watch,
	inject,
	ref,
	onMounted,
	onBeforeUnmount,
	nextTick,
} from 'vue'
import CourseOutline from '@/components/CourseOutline.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { useRouter, useRoute } from 'vue-router'
import {
	ChevronLeft,
	ChevronRight,
	LockKeyholeIcon,
	LogIn,
	Focus,
	Info,
	MessageCircleQuestion,
} from 'lucide-vue-next'
import Discussions from '@/components/Discussions.vue'
import { getEditorTools, enablePlyr } from '@/utils'
import { sessionStore } from '@/stores/session'
import EditorJS from '@editorjs/editorjs'
import LessonContent from '@/components/LessonContent.vue'
import CourseInstructors from '@/components/CourseInstructors.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import CertificationLinks from '@/components/CertificationLinks.vue'

const showIncompleteLessonModal = ref(false)
const user = inject('$user')
const router = useRouter()
const route = useRoute()
const allowDiscussions = ref(false)
const editor = ref(null)
const instructorEditor = ref(null)
const lessonProgress = ref(0)
const lessonContainer = ref(null)
const zenModeEnabled = ref(false)
const hasQuiz = ref(false)
const discussionsContainer = ref(null)
const timer = ref(0)
const { brand } = sessionStore()
let timerInterval

const props = defineProps({
	courseName: {
		type: String,
		required: true,
	},
	chapterNumber: {
		type: String,
		required: true,
	},
	lessonNumber: {
		type: String,
		required: true,
	},
})
const getSmartRedirectURL = () => {
	const path = window.location.pathname

	if (isQuizLesson()) {
		return '/lms/take-certification'
	}

	// If last lesson (no next)
	if (!lesson.data?.next) {
		return '/lms/take-certification'
	}

	// For regular lessons
	return '/lms/foundation-course'
}
const isLessonPage = computed(() => route.path.includes('/learn/'))
const getSmartButtonText = () => {
	const path = window.location.pathname

	if (isQuizLesson()) {
		return __('Go Back')
	}

	if (!lesson.data?.next) {
		return __('Get Certified')
	}

	return __('Back to Courses')
}

// Helper function to detect quiz lesson
const isQuizLesson = () => {
	if (lesson.data?.quiz_id) return true
	if (lesson.data?.content) {
		try {
			const contentBlocks = JSON.parse(lesson.data.content)?.blocks || []
			return contentBlocks.some(block => block.type === 'quiz')
		} catch {
			return false
		}
	}
	// fallback check in case older quiz format uses body
	if (lesson.data?.body && lesson.data.body.includes('{{ Quiz(')) {
		return true
	}
	return false
}

onMounted(() => {
	startTimer()
	enablePlyr()
	document.addEventListener('fullscreenchange', attachFullscreenEvent)
})

const attachFullscreenEvent = () => {
	if (document.fullscreenElement) {
		zenModeEnabled.value = true
		allowDiscussions.value = false
	} else {
		zenModeEnabled.value = false
		if (!hasQuiz.value) {
			allowDiscussions.value = true
		}
	}
}

onBeforeUnmount(() => {
	document.removeEventListener('fullscreenchange', attachFullscreenEvent)
})

const lesson = createResource({
	url: 'lms.lms.utils.get_lesson',
	makeParams(values) {
		return {
			course: props.courseName,
			chapter: values ? values.chapter : props.chapterNumber,
			lesson: values ? values.lesson : props.lessonNumber,
		}
	},
	auto: true,
})

const setupLesson = (data) => {
	if (Object.keys(data).length === 0) {
		router.push({
			name: 'CourseDetail',
			params: { courseName: props.courseName },
		})
		return
	}
	lessonProgress.value = data.membership?.progress
	if (data.content) editor.value = renderEditor('editor', data.content)
	if (
		data.instructor_content &&
		JSON.parse(data.instructor_content)?.blocks?.length > 1
	)
		instructorEditor.value = renderEditor(
			'instructor-content',
			data.instructor_content
		)
	editor.value?.isReady.then(() => {
		checkIfDiscussionsAllowed()
	})

	if (!editor.value && data.body) {
		const quizRegex = /\{\{ Quiz\(".*"\) \}\}/
		hasQuiz.value = quizRegex.test(data.body)
		if (!hasQuiz.value && !zenModeEnabled) allowDiscussions.value = true
	}
}

const renderEditor = (holder, content) => {
	// empty the holder
	if (document.getElementById(holder))
		document.getElementById(holder).innerHTML = ''
	return new EditorJS({
		holder: holder,
		tools: getEditorTools(),
		data: JSON.parse(content),
		readOnly: true,
		defaultBlock: 'embed', // editor adds an empty block at the top, so to avoid that added default block as embed
	})
}

const markProgress = () => {
	if (user.data && lesson.data && !lesson.data.progress) {
		progress.submit()
	}
}

const progress = createResource({
	url: 'lms.lms.doctype.course_lesson.course_lesson.save_progress',
	makeParams() {
		return {
			lesson: lesson.data.name,
			course: props.courseName,
		}
	},
	onSuccess(data) {
		lessonProgress.value = data
	},
})

const breadcrumbs = computed(() => {
	let items = [{ label: 'Courses', route: { name: 'Courses' } }]
	items.push({
		label: lesson?.data?.course_title,
		route: { name: 'CourseDetail', params: { courseName: props.courseName } },
	})
	items.push({
		label: lesson?.data?.title,
		route: {
			name: 'Lesson',
			params: {
				courseName: props.courseName,
				chapterNumber: props.chapterNumber,
				lessonNumber: props.lessonNumber,
			},
		},
	})
	return items
})

watch(
	[() => route.params.chapterNumber, () => route.params.lessonNumber],
	(
		[newChapterNumber, newLessonNumber],
		[oldChapterNumber, oldLessonNumber]
	) => {
		if (newChapterNumber || newLessonNumber) {
			editor.value = null
			instructorEditor.value = null
			allowDiscussions.value = false
			lesson.submit({
				chapter: newChapterNumber,
				lesson: newLessonNumber,
			})
			clearInterval(timerInterval)
			timer.value = 0
			startTimer()
			enablePlyr()
		}
	}
)

watch(
	() => lesson.data,
	(data) => {
		setupLesson(data)
	}
)

// const startTimer = () => {
// 	timerInterval = setInterval(() => {
// 		timer.value++
// 		if (timer.value == 30) {
// 			clearInterval(timerInterval)
// 			markProgress()
// 		}
// 	}, 1000)
// }

onBeforeUnmount(() => {
	clearInterval(timerInterval)
})

const checkIfDiscussionsAllowed = () => {
	JSON.parse(lesson.data?.content)?.blocks?.forEach((block) => {
		if (block.type === 'quiz') hasQuiz.value = true
	})

	if (
		!hasQuiz.value &&
		!zenModeEnabled.value &&
		(lesson.data?.membership ||
			user.data?.is_moderator ||
			user.data?.is_instructor)
	)
		allowDiscussions.value = true
}

const allowEdit = () => {
	if (window.read_only_mode) return false
	if (user.data?.is_moderator) return true
	if (lesson.data?.instructors?.includes(user.data?.name)) return true
	return false
}

const allowInstructorContent = () => {
	if (user.data?.is_moderator) return true
	if (lesson.data?.instructors?.includes(user.data?.name)) return true
	return false
}

const enrollment = createResource({
	url: 'frappe.client.insert',
	makeParams() {
		return {
			doc: {
				doctype: 'LMS Enrollment',
				course: props.courseName,
				member: user.data?.name,
			},
		}
	},
})

const enrollStudent = () => {
	enrollment.submit(
		{},
		{
			onSuccess() {
				window.location.reload()
			},
		}
	)
}

const canGoZen = () => {
	if (
		user.data?.is_moderator ||
		user.data?.is_instructor ||
		user.data?.is_evaluator
	)
		return false
	if (lesson.data?.membership) return true
	return false
}

const goFullScreen = () => {
	if (lessonContainer.value.requestFullscreen) {
		lessonContainer.value.requestFullscreen()
	} else if (lessonContainer.value.mozRequestFullScreen) {
		lessonContainer.value.mozRequestFullScreen()
	} else if (lessonContainer.value.webkitRequestFullscreen) {
		lessonContainer.value.webkitRequestFullscreen()
	} else if (lessonContainer.value.msRequestFullscreen) {
		lessonContainer.value.msRequestFullscreen()
	}
}

const showDiscussionsInZenMode = () => {
	if (allowDiscussions.value) {
		allowDiscussions.value = false
	} else {
		allowDiscussions.value = true
		scrollDiscussionsIntoView()
	}
}

const scrollDiscussionsIntoView = () => {
	nextTick(() => {
		discussionsContainer.value?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		})
	})
}

const redirectToLogin = () => {
	window.location.href = `/login?redirect-to=/lms/courses/${props.courseName}`
}

usePageMeta(() => {
	return {
		title: lesson?.data?.title,
		icon: brand.favicon,
	}
})

// const handleNextClick = () => {
// 	// Require either saved progress or at least 30 seconds watched
// 	if (!lesson.data?.progress && timer.value < 30) {
// 		showIncompleteLessonModal.value = true
// 		return
// 	}

// 	// Navigate to next lesson
// 	router.push({
// 		name: 'Lesson',
// 		params: {
// 			courseName: props.courseName, // ✅ use props here
// 			chapterNumber: lesson.data.next.split('.')[0],
// 			lessonNumber: lesson.data.next.split('.')[1],
// 		},
// 	})
// }


onMounted(() => {
  const courseName = route.params.courseName;   // Extract from route params
  const chapterNumber = route.params.chapterNumber;   // Extract from route params
  const lessonNumber = route.params.lessonNumber;   // Extract from route params

  fetchLessonData(courseName, chapterNumber, lessonNumber);
});

// Global variable to hold video duration
let videoDuration = 0;  // Set to zero initially

// Function to fetch and process lesson data
const fetchLessonData = (courseName, chapterNumber, lessonNumber) => {
  fetch('/api/method/lms.lms.utils.get_csrf_token')
    .then(res => res.json())
    .then(data => {
      const csrfToken = data.message;  // Get CSRF token
      console.log('✅ CSRF Token:', csrfToken);

      fetch('/api/method/lms.lms.utils.get_lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          course: courseName,
          chapter: chapterNumber,
          lesson: lessonNumber,
        })
      })
      .then(response => response.json())
      .then(lessonData => {
        if (lessonData && lessonData.message) {
          const contentData = JSON.parse(lessonData.message.content);
          const videoBlock = contentData.blocks.find(block => block.type === 'upload');

          if (videoBlock) {
            const videoUrl = videoBlock.data.file_url;
            console.log('✅ Video URL:', videoUrl);

            // Set the video URL and fetch the video duration
            createAndPlayVideo(videoUrl);
          } else {
            console.warn('⚠️ No video URL found.');
          }
        }
      });
    });
};

// Function to create video element and get duration
function createAndPlayVideo(videoUrl) {
  const videoElement = document.createElement('video');
  videoElement.src = videoUrl;
  videoElement.style.display = 'none';  // Hide the video element for loading

  // Wait for the video to be ready before starting the timer
  videoElement.onloadedmetadata = function() {
    videoDuration = videoElement.duration;  // Get the video duration
    console.log('✅ Video Duration:', videoDuration);  // Check the duration

    // Now that we have the duration, start the timer
    startTimer(videoDuration);  // Pass the video duration to start the timer
  };

  videoElement.onerror = function() {
    console.error('❌ Error loading video.');
  };
}

// Start the timer function
const startTimer = (videoDuration) => {
  if (videoDuration === 0) {
    console.warn('❌ Video duration is not set yet.');
    return;
  }

  console.log('Starting timer...');
  let timerInterval = setInterval(() => {
    console.log('Timer value:', timer.value);
    timer.value++;

    if (timer.value >= videoDuration) {  // When timer reaches the video duration
      console.log('✅ Timer reached video duration:', timer.value);
      clearInterval(timerInterval);
      markProgress();  // Call the progress function
    }
  }, 1000);
};

// Handle the next button click
const handleNextClick = () => {
  console.log('⚙️ Checking lesson progress...');
  console.log('Lesson Progress:', lesson.data?.progress);
  console.log('Timer Value:', timer.value);
  console.log('Video Duration:', videoDuration);

  // Require either saved progress or at least videoDuration seconds watched
  if (!lesson.data?.progress && timer.value < videoDuration) {
    console.log('⚠️ Incomplete lesson, showing modal...');
    showIncompleteLessonModal.value = true;
    return;
  }

  // If condition is not met, navigate to the next lesson
  console.log('Navigating to the next lesson...');
  router.push({
    name: 'Lesson',
    params: {
      courseName: props.courseName, // ✅ use props here
      chapterNumber: lesson.data.next.split('.')[0],
      lessonNumber: lesson.data.next.split('.')[1],
    },
  });
};


</script>
<style>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
}

/* Fade in animation */
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Scale in animation for modal box */
@keyframes slideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Modal Box - The actual modal content */
.modal-box {
    background: white;
    border-radius: 12px;
    padding: 32px;
    max-width: 450px;
    width: 90%;
    max-height: 90vh;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
    position: relative;
    animation: slideUp 0.3s ease-out;
}

/* Modal Header */
.modal-box h2 {
    margin: 0 0 16px 0;
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.3;
}

/* Modal Text */
.modal-box p {
    margin: 0 0 24px 0;
    color: #6b7280;
    font-size: 16px;
    line-height: 1.5;
}

/* Modal Button */
.modal-btn {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 100px;
    display: block;
    margin-left: auto;
}

.modal-btn:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.modal-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.modal-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Responsive design */
@media (max-width: 640px) {
    .modal-box {
        padding: 24px;
        margin: 20px;
    }

    .modal-box h2 {
        font-size: 20px;
    }

    .modal-btn {
        width: 100%;
        margin-left: 0;
    }
}

/* Close button alternative (if you want to add one) */
.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 24px;
    color: #9ca3af;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.2s ease;
}

.modal-close:hover {
    color: #6b7280;
    background: #f3f4f6;
}

/* Warning/Alert variant styles */
.modal-box.warning {
    border-left: 4px solid #1e4a72;
}

.modal-box.warning h2 {
    color: #1e4a72;
}

.modal-box.warning .modal-btn {
    background: #1e4a72;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;
    margin-top: auto;
    position: relative;
    overflow: hidden;
    z-index: 2;
}

.modal-box.warning .modal-btn:hover {
    background: linear-gradient(135deg, #2d5a8a, #3d6a9a);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 74, 114, .3);
}
.course-nav-btn {
	background-color: #ff4602 !important;
	color: #fff !important;
	font-weight: 600;
	box-shadow: 0 2px 6px #00000026;
	border-radius: 6px;
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.course-nav-btn:hover {
	background-color: #e04300 !important; /* slightly darker orange */
	box-shadow: 0 4px 10px #00000040; /* stronger shadow on hover */
}

/* Only remove right border on .border-r inside .bg-surface-white */
.bg-surface-white .border-r {
  border-right: none !important;
}

.bg-surface-white {
  display: flex;            /* Make parent a flex container */
  justify-content: center;  /* Center child horizontally */ 
}


.flex.min-w-0.items-center.h-7 {
    display: none;
}

.bg-surface-white > .border-r.container.pt-5.pb-10.px-5.h-full {
  margin: 0 auto;           /* Just horizontal centering fallback */
  border-right: none !important; /* Your existing border removal */
}

.avatar-group {
	display: inline-flex;
	align-items: center;
}

.avatar-group .avatar {
	transition: margin 0.1s ease-in-out;
}

.lesson-content p {
	margin-bottom: 1rem;
	line-height: 1.7;
}

.lesson-content li {
	line-height: 1.7;
}

.lesson-content ol {
	list-style: auto;
	margin: revert;
	padding: 1rem;
}

.lesson-content ul {
	list-style: auto;
	padding: 1rem;
	margin: revert;
}

.lesson-content img {
	border: 1px solid theme('colors.gray.200');
	border-radius: 0.5rem;
}

.lesson-content code {
	display: block;
	overflow-x: auto;
	padding: 1rem 1.25rem;
	background: #011627;
	color: #d6deeb;
	border-radius: 0.5rem;
	margin: 1rem 0;
}

.lesson-content a {
	color: theme('colors.gray.900');
	text-decoration: underline;
	font-weight: 500;
}

.embed-tool__caption,
.cdx-simple-image__caption {
	display: none;
}

.ce-block__content {
	max-width: unset;
}

.codex-editor__redactor {
	padding-bottom: 0px !important;
}

.codeBoxHolder {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

.codeBoxTextArea {
	width: 100%;
	min-height: 30px;
	padding: 10px;
	border-radius: 2px 2px 2px 0;
	border: none !important;
	outline: none !important;
	font: 14px monospace;
}

.codeBoxSelectDiv {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
}

.codeBoxSelectInput {
	border-radius: 0 0 20px 2px;
	padding: 2px 26px;
	padding-top: 0;
	padding-right: 0;
	text-align: left;
	cursor: pointer;
	border: none !important;
	outline: none !important;
}

.codeBoxSelectDropIcon {
	position: absolute !important;
	left: 10px !important;
	bottom: 0 !important;
	width: unset !important;
	height: unset !important;
	font-size: 16px !important;
}

.codeBoxSelectPreview {
	display: none;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 2px;
	box-shadow: 0 3px 15px -3px rgba(13, 20, 33, 0.13);
	position: absolute;
	top: 100%;
	margin: 5px 0;
	max-height: 30vh;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 10000;
}

.codeBoxSelectItem {
	width: 100%;
	padding: 5px 20px;
	margin: 0;
	cursor: pointer;
}

.codeBoxSelectItem:hover {
	opacity: 0.7;
}

.codeBoxSelectedItem {
	background-color: lightblue !important;
}

.codeBoxShow {
	display: flex !important;
}

.dark {
	color: #abb2bf;
	background-color: #282c34;
}

.light {
	color: #383a42;
	background-color: #fafafa;
}

.codeBoxTextArea {
	line-height: 1.7;
}

.tc-table {
	border-left: 1px solid #e8e8eb;
}

.plyr__volume input[type='range'] {
	display: none;
}

.plyr__control--overlaid {
	background: radial-gradient(
		circle,
		rgba(0, 0, 0, 0.4) 0%,
		rgba(0, 0, 0, 0.5) 50%
	);
}

.plyr__control:hover {
	background: none;
}

.plyr--video {
	border: 1px solid theme('colors.gray.200');
	border-radius: 8px;
}

:root {
	--plyr-range-fill-background: white;
	--plyr-video-control-background-hover: transparent;
}

.relative.inline-block.shrink-0.w-6.h-6.rounded-full.avatar.border.border-outline-gray-2.cursor-auto
 {
    display: none;
}
</style>
