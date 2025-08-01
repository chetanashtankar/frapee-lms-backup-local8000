<template>
  <div v-if="course.data">
    <!-- CERTIFICATE LANDING PAGE STYLE -->


    <div class="cert-container">
      <!-- Hero Section -->
      <div class="cert-header">
        <p class="cert-subtitle">
      <!-- Conditionally render based on certificationOrCourse -->
      {{ certificationOrCourse === 'Foundation Certification' ? 'For Intern' : (certificationOrCourse === 'Certification' ? 'For Professional' : 'For Intern') }}
    </p>
        <h1>{{ course.data.title }}</h1>

      </div>

      <!-- Status Bar -->
      <div class="cert-status-bar">
        <div class="cert-status-item">
          <span class="cert-status-label">
            <!-- Conditionally render based on course title -->
            {{ certificationOrCourse === 'Certification' ? 'Certification Test' : '5 Modules' }}
          </span>
          <p class="cert-status-description">
            {{ course.data.short_introduction }}
          </p>
        </div>

        <div class="cert-status-item">
          <span class="cert-status-label">Proficiency Level</span>
          <p class="cert-status-description">
            {{ proficiencyLevel }}
          </p>
        </div>

        <div class="cert-status-item">
          <span class="cert-status-label">Learning Format</span>
          <p class="cert-status-description">
            {{ certificationOrCourse === 'Certification' ? 'Fixed Schedule' : 'Flexible Schedule' }}
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
          <template v-if="!hideTopicsLabel">
            <h3>Topics Covered:</h3>
          </template>

          
          <CourseOutline :title="showCourseContentTitle ? __('Course Content') : ''" :courseName="course.data.name"
            :showOutline="true" :getProgress="true"
            class="course-outline"
            />

        </div>
      </div>

    </div>
    <div class="hidden md:block md:w-1/3">
      <CourseCardOverlay :course="course" />

      <!-- New Additional Info Block -->
      <div class="mt-6 p-5 rounded-lg border bg-white shadow space-y-4">
        <router-link :to="`  courses/${course.data.name}`"
          class="block w-full text-center bg-surface-gray-7 text-ink-white py-2 rounded hover:bg-surface-gray-6 active:bg-surface-gray-5 transition">
          Start Learning
        </router-link>

        <router-link :to="`/lms/courses/${course.data.name}/edit`"
          class="block w-full text-center bg-surface-gray-2 text-ink-gray-8 py-2 rounded hover:bg-surface-gray-3 active:bg-surface-gray-4 transition">
          Edit
        </router-link>
      </div>
    </div>
    
    <footer class="footer-section">
      <div class="container-line">
        <div class="footer-logo"> <div class="logo"></div> <!-- Logo container --></div>
        <h2 class="main-heading">Enhance your automation knowledge to the next level</h2>
        <h5 class="sub-heading">EIQ Platform - Intelligent Business Automation and beyond</h5>
        <p class="copyright">Copyright © 2025 | EvoluteIQ LMS</p>
      </div>
    </footer>
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
import { computed, watchEffect } from 'vue'
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

watchEffect(() => {
  if (course?.data?.title) {
    console.log("Course Title: ", course.data.title)
  }
})

// Computed property to determine whether it's a "Certification" or "Course"
const certificationOrCourse = computed(() => {
  const title = course?.data?.title || '';
  const lastWord = title.split(' ').pop();

  // Check if it's Foundation Certification and handle accordingly
  if (title.includes('Foundation Certification')) {
    return 'Foundation Certification'; // Specific flag for Foundation Certification
  }

  return lastWord === 'Certification' ? 'Certification' : 'Course';
});


const proficiencyLevel = computed(() => {
  const title = course?.data?.title || ''

  if (title.endsWith('Foundation Certification')) {
    return 'Beginner'
  } else if (title.endsWith('Consultant Certification')) {
    return 'Intermediate'
  } else if (title.endsWith('Certification')) {
    return 'Intermediate'
  } else {
    return 'No prior experience required.'
  }
})



const title = computed(() => course?.data?.title || '')

const hideTopicsLabel = computed(() => {
  return (
    title.value.endsWith('Foundation Certification') ||
    title.value.endsWith('Consultant Certification') ||
    title.value.endsWith('Developer Certification') ||
    title.value.endsWith('Foundation Course')
  )
})

const showCourseContentTitle = computed(() => {
  return !(
    title.value.endsWith('Foundation Certification') ||
    title.value.endsWith('Consultant Certification') ||
    title.value.endsWith('Developer Certification')
  )
})




</script>

<style scoped>
.footer-section {
      background-color: #083279;
      padding: 119px 0 10px;
      text-align: center
}

.footer-logo {
    min-width: 5rem;
    /* height: 1.5rem; */
    /* object-fit: contain; */
    /* object-position: left; */
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
    justify-content: center;
}


.footer-logo .logo {
 width: 220px;
 height: 64px;
 background-image: url("/files/Evoluteiqlogofooter.png");
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 margin: -103px;
}

.container-line {
    margin: 0 auto;
    padding: 0 20px;
}

.container {
    max-width: 70%;
    margin: 0 auto;
    padding: 0 20px;
}

.main-heading {
  
    margin-bottom: 38px;
    font-family: "Roboto", Sans-serif;
    font-size: 42px;
    font-weight: 600;
    font-style: normal;
    line-height: 0px !important;
    letter-spacing: 0px;
    word-spacing: 0px;
    color: #fff;
}

.sub-heading {
    font-size: 20px;
    color: #666;
    margin-bottom: 30px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.2em;
}

.copyright {
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
}


.w-4 {
  width: revert !important;
}

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
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 49px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: left;
  overflow: hidden;
}

.cert-header::after {
  content: "";
  position: relative;
  inset: 0;
  z-index: 0;
}

.cert-header * {
  position: relative;
  z-index: 1;
}

.cert-subtitle {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cert-header h1 {
  font-size: 2.9rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  position: relative;
  z-index: 1;
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
  margin: 20px auto;
  max-width: 95%;
  margin-top: -41px;
}

.cert-status-item {
  position: relative;
  text-align: center;
  padding: 40px;
}

.cert-status-item::after {
  content: "";
  position: absolute;
  top: 25%;
  /* adjust as needed */
  bottom: 25%;
  /* adjust as needed */
  right: 0;
  width: 2px;
  background-color: #e9ecef;
}


.cert-status-item:last-child {
  border-right: none;
}

.cert-status-label {
  font-size: 14px;
  font-weight: 600;
  color: #0355A4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  display: block;
}

.cert-status-description {
  font-size: 16px;
  color: #374151;
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
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
  max-width: 95%;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
}

.cert-overview {
  margin-bottom: 40px;
  /* margin-left: 40px;
  margin-right: 40px; */
}



.cert-overview h2 {
  font-size: 2rem;
  color: #0355a4;
  margin-bottom: 24px;
  font-weight: 700;
  position: relative;
}





.cert-description {
  font-size: 16px;
  line-height: 3.4;
  color: #4b5563;
  margin-bottom: 32px;

}


.cert-description br {
  display: block !important;
  margin-bottom: 0.75rem !important;
  /* spacing after <br> */
  content: "" !important;
  /* optional, but helps in some cases */
}

.cert-prereqs {
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #0355A4;
  margin-top: 20px;
}

.cert-prereqs h3 {
  color: #0355A4;
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
  /* padding: 0px 106px 0px 106px; */
  background: #f8f9fa;
  /* max-width: 95%; */
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
}

.cert-topics h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 24px;
  font-weight: 700;
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
}

.cert-instructors {
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.cert-instructors h3 {
  font-size: 1.5rem;
  color: #0355A4;
  margin-bottom: 15px;
}

.cert-container .cert-description ul {
  list-style-type: disc !important;
  margin-left: 60px !important;
  margin-bottom: 16px !important;
}


.mt-6.p-5.rounded-lg.border.bg-white.shadow.space-y-4 {
  display: none;
}
</style>
