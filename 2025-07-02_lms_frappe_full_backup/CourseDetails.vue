<template>
  <div v-if="course.data">
    <!-- Header with Breadcrumbs -->
    <header class="sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5">
      <Breadcrumbs class="h-7" :items="breadcrumbs" />
    </header>

    <!-- Course Main Content -->
    <div class="m-5">
      <div class="flex flex-col md:flex-row justify-between w-full gap-8">
        <!-- Course Info Column -->
        <div class="md:w-2/3">
          <!-- Course Title -->
          <h1 class="text-3xl font-semibold text-ink-gray-9">
            {{ course.data.title }}
          </h1>

          <!-- Short Introduction -->
          <p class="my-3 leading-6 text-ink-gray-7">
            {{ course.data.short_introduction }}
          </p>

          <!-- Rating, Enrollments, Instructors -->
          <div class="flex flex-wrap items-center text-sm">
            <!-- Rating -->
            <Tooltip
              v-if="parseInt(course.data.rating) > 0"
              :text="__('Average Rating')"
              class="flex items-center"
            >
              <Star class="h-5 w-5 text-gray-100 fill-orange-500" />
              <span class="ml-1 text-ink-gray-7">{{ course.data.rating }}</span>
            </Tooltip>

            <span v-if="parseInt(course.data.rating) > 0" class="mx-3">&middot;</span>

            <!-- Enrolled Students -->
            <Tooltip
              v-if="course.data.enrollment_count"
              :text="__('Enrolled Students')"
              class="flex items-center"
            >
              <Users class="h-4 w-4 text-ink-gray-7" />
              <span class="ml-1">{{ course.data.enrollment_count_formatted }}</span>
            </Tooltip>

            <span v-if="course.data.enrollment_count" class="mx-3">&middot;</span>

            <!-- Instructors -->
            <div class="flex items-center">
              <div
                class="avatar-group"
                :class="{ overlap: course.data.instructors.length > 1 }"
              >
                <UserAvatar
                  v-for="(instructor, index) in course.data.instructors"
                  :key="index"
                  :user="instructor"
                  class="avatar"
                />
              </div>
              <CourseInstructors :instructors="course.data.instructors" />
            </div>
          </div>

          <!-- Tags -->
          <div v-if="course.data.tags" class="flex my-4 flex-wrap gap-2">
            <Badge
              v-for="(tag, index) in course.data.tags.split(', ')"
              :key="index"
              theme="gray"
              size="lg"
              class="text-ink-gray-9"
            >
              {{ tag }}
            </Badge>
          </div>

          <!-- Course Overlay (Mobile) -->
          <CourseCardOverlay :course="course" class="md:hidden mb-4" />

          <!-- Course Description -->
          <div
            v-html="course.data.description"
            class="ProseMirror prose prose-sm max-w-none mt-10 whitespace-normal prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-outline-gray-2 prose-th:border-outline-gray-2 prose-th:bg-surface-gray-2"
          ></div>

          <!-- Course Outline -->
          <div class="mt-10">
            <CourseOutline
              :title="__('Course Outline')"
              :courseName="course.data.name"
              :showOutline="true"
            />
          </div>

          <!-- Course Reviews -->
          <CourseReviews
            :courseName="course.data.name"
            :avg_rating="course.data.rating"
            :membership="course.data.membership"
          />
        </div>

        <!-- Course Overlay (Desktop) -->
        <div class="hidden md:block md:w-1/3">
          <CourseCardOverlay :course="course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  createResource,
  Breadcrumbs,
  Badge,
  Tooltip,
  usePageMeta,
} from 'frappe-ui'
import { computed } from 'vue'
import { Users, Star } from 'lucide-vue-next'
import { sessionStore } from '@/stores/session'
import CourseCardOverlay from '@/components/CourseCardOverlay.vue'
import CourseOutline from '@/components/CourseOutline.vue'
import CourseReviews from '@/components/CourseReviews.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import CourseInstructors from '@/components/CourseInstructors.vue'

const { brand } = sessionStore()

const props = defineProps({
  courseName: {
    type: String,
    required: true,
  },
})

const course = createResource({
  url: 'lms.lms.utils.get_course_details',
  cache: ['course', props.courseName],
  params: {
    course: props.courseName,
  },
  auto: true,
})

const breadcrumbs = computed(() => {
  const items = [{ label: 'Courses', route: { name: 'Courses' } }]
  if (course?.data?.title) {
    items.push({
      label: course.data.title,
      route: { name: 'CourseDetail', params: { courseName: course.data.name } },
    })
  }
  return items
})

usePageMeta(() => {
  return {
    title: course?.data?.title,
    icon: brand.favicon,
  }
})
</script>

<style scoped>
.avatar-group {
  display: inline-flex;
  align-items: center;
}

.avatar-group.overlap .avatar:not(:first-child) {
  margin-left: -12px;
  border: 2px solid white;
  border-radius: 9999px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: margin 0.2s ease-in-out;
  z-index: 0;
}

.avatar-group.overlap .avatar:hover {
  z-index: 10;
  margin-left: 0;
}

button[aria-controls^="headlessui-disclosure-panel-"][data-headlessui-state],
div[data-headlessui-state][id^="headlessui-disclosure-panel-"] {
  display: none !important;
}

</style>

