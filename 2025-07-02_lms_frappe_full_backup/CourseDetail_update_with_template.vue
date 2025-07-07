/*/home/chetan/frappe-bench/apps/lms/frontend/src/pages/CourseDetail.vue*/
<template>
  <div v-if="course.data">
    <!-- CERTIFICATE LANDING PAGE STYLE -->


  <div class="cert-container">
  <!-- Hero Section -->
  <div class="cert-header">
    <p class="cert-subtitle">For Students</p>
    <h1>{{ course.data.title }}</h1>
   
  </div>

  <!-- Status Bar -->
  <div class="cert-status-bar">
    <div class="cert-status-item">
      <span class="cert-status-label">Certification Test</span>
      <p class="cert-status-description">
        {{ course.data.short_introduction }}
      </p>
    </div>

    <div class="cert-status-item">
      <span class="cert-status-label">Level</span>
      <p class="cert-status-description">
        {{ course.data.level || 'Intermediate' }}
      </p>
    </div>

    <div class="cert-status-item">
      <span class="cert-status-label">Schedule</span>
      <p class="cert-status-description">
        Fixed schedule - Complete when ready
      </p>
    </div>
  </div>

  <!-- Description / Overview -->
  <div class="cert-section">
    <div class="cert-overview">
      <h2>Overview:</h2>
      <div v-html="course.data.description" class="cert-description"></div>

      <div class="cert-prereqs" v-if="course.data.prerequisites">
        <h3>Prerequisites:</h3>
        <p>{{ course.data.prerequisites }}</p>
      </div>
    </div>

    <!-- Topics from Outline -->
    <div class="cert-topics">
      <h3>Exam Topics Covered:</h3>
      <CourseOutline
        :title="__('Course Content')"
        :courseName="course.data.name"
        :showOutline="true"
        :getProgress="true"
      />
    </div>
  </div>

  </div>
  <div class="hidden md:block md:w-1/3">
  <CourseCardOverlay :course="course" />

  <!-- New Additional Info Block -->
  <div class="mt-6 p-5 rounded-lg border bg-white shadow space-y-4">
    <router-link
      :to="`/lms/courses/${course.data.name}`"
      class="block w-full text-center bg-surface-gray-7 text-ink-white py-2 rounded hover:bg-surface-gray-6 active:bg-surface-gray-5 transition"
    >
      Start Learning
    </router-link>

    <router-link
      :to="`/lms/courses/${course.data.name}/edit`"
      class="block w-full text-center bg-surface-gray-2 text-ink-gray-8 py-2 rounded hover:bg-surface-gray-3 active:bg-surface-gray-4 transition"
    >
      Edit
    </router-link>
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

.cert-header {
 background-image: url('/files/explorecourse.png');
 background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.space-y-4 {
    display: none !important;
}
/* CERTIFICATE PAGE STYLE */

.cert-container {
 
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
}

.cert-header {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: left;
  position: relative;
}

.cert-header::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.cert-header * {
  position: relative;
  z-index: 1;
}

.cert-subtitle {
  font-size: 1.2rem;
  opacity: 0.85;
  margin-bottom: 10px;
}

.cert-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.cert-cta-button {
  background: #FF6B03;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.cert-cta-button:hover {
  transform: translateY(-2px);
}

.cert-status-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  border-radius: 12px;
  overflow: hidden;
  margin: 20px auto;
  max-width: 95%;
}

.cert-status-item {
  text-align: center;
  padding: 20px;
  border-right: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cert-status-item:last-child {
  border-right: none;
}

.cert-status-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: #083279;
  margin-bottom: 8px;
}

.cert-status-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
}

.cert-badge {
  margin-top: 10px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.cert-not-enrolled {
  background: #FFD200;
  color: #555;
  border: 1px solid #fbbf24;
}

.cert-section {
  background: #f8f9fa;
  padding: 40px 20px;
}

.cert-overview {
  margin-bottom: 40px;
}

.cert-overview h2 {
  font-size: 2rem;
  color: #083279;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.cert-description {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 25px;
}

.cert-prereqs {
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #083279;
  margin-top: 20px;
}

.cert-prereqs h3 {
  color: #083279;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.cert-highlight {
  font-weight: 700;
}

.cert-topics {
  margin: 40px 0;
}

.cert-topics h3 {
  font-size: 1.5rem;
  color: #083279;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.cert-topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.cert-topic-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.cert-topic-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  font-weight: 600;
}

.cert-topic-list {
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
  color: #555;
}

.cert-course-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  margin-top: 40px;
}

.cert-instructors {
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.cert-instructors h3 {
  font-size: 1.5rem;
  color: #083279;
  margin-bottom: 15px;
}

.cert-container .cert-description ul {
  list-style-type: disc !important;
  margin-left: 60px !important;
}


.mt-6.p-5.rounded-lg.border.bg-white.shadow.space-y-4 {
    display: none;
}
</style>


