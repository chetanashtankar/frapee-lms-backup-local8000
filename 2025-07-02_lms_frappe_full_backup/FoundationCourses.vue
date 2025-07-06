/* /home/chetan/frappe-bench/apps/lms/frontend/src/pages/FoundationCourses.vue */

<template>
	<div class="certification-page">
		<h1 class="page-title">Courses</h1>

		<div class="certification-grid">

			<div class="cert-card">
				<div class="cert-image java-beginner"></div>
				<div class="cert-info">
					<h2 class="cert-title">Foundation Course</h2>
					<p class="cert-description">
						Master the fundamentals of intelligent business automation with our
						Foundation Certification Program. The EIQ Foundation equips you with
						essential platform skills.
					</p>


					<!-- Progress Bar here -->
					<div class="progress-bar-wrapper">
					<ProgressBar :progress="foundationProgress" />
					<p>{{ foundationProgress }}% Complete</p>
					</div>
					<button class="cert-btn" @click="startCourse">Start Course</button>



				</div>
			</div>

			<div class="cert-card coming-soon">
				<div class="cert-image java-intermediate"></div>
				<div class="cert-info">
					<h2 class="cert-title">Citizen Developer</h2>
					<p class="cert-description">Build powerful applications using our intuitive no-code tools. Learn to automate workflows and integrate systems—no programming required.</p>
					<button class="cert-btn-disabled" disabled>Coming Soon</button>
				</div>
			</div>

			<div class="cert-card coming-soon">
				<div class="cert-image java-advanced"></div>
				<div class="cert-info">
					<h2 class="cert-title">Developer</h2>
					<p class="cert-description">Advance your skills with low-code and pro-code features. Learn to create robust apps using JavaScript, Python, APIs, and platform scripting.</p>
					<button class="cert-btn-disabled" disabled>Coming Soon</button>
				</div>
			</div>

			<div class="cert-card coming-soon">
				<div class="cert-image java-expert"></div>
				<div class="cert-info">
					<h2 class="cert-title">Architect</h2>
					<p class="cert-description">Design scalable, secure enterprise solutions using the full EIQ stack. Master architecture, integrations, and AI-driven automation.</p>
					<button class="cert-btn-disabled" disabled>Coming Soon</button>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  name: 'CourseList',
  components: {
    ProgressBar
  },
  data() {
    return {
      courseSlug: 'eiq-agentic-automation-platform-foundation-certification',
      foundationProgress: 0,
      certifications: [
        {
          id: 1,
          course_id: 'eiq-agentic-automation-platform-foundation-certification',
          title: 'Foundation Certification',
          description: 'Master the fundamentals...',
          image: '/files/certification1.jpeg',
          completedLessons: 0,
          totalLessons: 0
        }
      ],
	  foundationProgress: 0  
    }
  },
  computed: {
    coursePath() {
      return `/lms/courses/${this.courseSlug}`;
    }
  },
  methods: {
    getProgress(course) {
      if (course.totalLessons === 0) return 0;
      return Math.round((course.completedLessons / course.totalLessons) * 100);
    }
	,startCourse() {
    window.location.href = this.coursePath; // or this.$router.push(this.coursePath) if using Vue Router
  }
  },
  startCourse() {
    window.location.href = this.coursePath; // or this.$router.push(this.coursePath) if using Vue Router
  },
  mounted() {
    console.log('Component mounted, fetching CSRF token...');
    fetch('/api/method/lms.lms.utils.get_csrf_token')
      .then(res => res.json())
      .then(data => {
        const csrfToken = data.message;
        console.log('✅ CSRF Token from server:', csrfToken);

        // 1️⃣ Fetch the course outline
        return fetch('/api/method/lms.lms.utils.get_course_outline', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
            course: 'eiq-agentic-automation-platform-foundation-certification',
            progress: false
          })
        })
        .then(res => res.json())
        .then(outlineRes => {
          console.log('✅ Course Outline API response:', outlineRes);
          const message = outlineRes.message || [];

          // Count total lessons
          const total = message.reduce((acc, section) => acc + (section.lessons?.length || 0), 0);
          console.log('✅ Total lessons:', total);

          // Find the first lesson
          let firstLessonName = null;
          for (const section of message) {
            if (section.lessons && section.lessons.length > 0) {
              firstLessonName = section.lessons[0].name;
              break;
            }
          }

          if (!firstLessonName) {
            console.warn('⚠️ No lessons found in course outline.');
            return;
          }

          console.log('✅ First lesson name:', firstLessonName);

          // 2️⃣ Call save_progress with course + lesson
          return fetch('/api/method/lms.lms.doctype.course_lesson.course_lesson.save_progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Frappe-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
              course: 'eiq-agentic-automation-platform-foundation-certification',
              lesson: firstLessonName
            })
          })
          .then(res => res.json())
          .then(progressRes => {
            console.log('✅ Progress API response:', progressRes);
            const progressPercent = Math.round(progressRes.message);
            console.log(`✅ Rounded Progress: ${progressPercent}%`);

			  this.foundationProgress = isNaN(progressPercent) ? 0 : progressPercent;

            // 3️⃣ Update local certification data
            this.certifications.forEach(cert => {
              if (cert.course_id === 'eiq-agentic-automation-platform-foundation-certification') {
                cert.totalLessons = total;
                cert.completedLessons = Math.round(progressPercent * total / 100);
                console.log('✅ Updated certification:', cert);
              }
            });
          });
        });
      })
      .catch(err => {
        console.error('❌ Error in mounted flow:', err);
      });
  }
}



</script>




<style scoped>
.certification-page {
	padding: 5rem 1.25rem 1.25rem 1.25rem;
}

.page-title {
	margin-bottom: 1.5rem;
	font-size: 16px;
	line-height: 1.15;
	letter-spacing: .02em;
	font-weight: 600;
}

.certification-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1.5rem;
}

.cert-card {
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
	background: white;
}

.cert-card:hover {
	transform: translateY(-4px);
}

/* Coming Soon Cards Styling */
.cert-card.coming-soon {
	opacity: 0.7;
	position: relative;
}

.cert-card.coming-soon::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(1px);
	z-index: 1;
}

.cert-card.coming-soon:hover {
	transform: none;
}

.cert-card.coming-soon .cert-image {
	filter: grayscale(50%);
}

.cert-card.coming-soon .cert-title,
.cert-card.coming-soon .cert-description {
	color: #888;
}

.cert-info {
	padding: 1rem;
	position: relative;
	z-index: 2;
}

.cert-title {
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.cert-description {
	font-size: 0.95rem;
	color: #555;
	margin-bottom: 1rem;
}

.cert-btn {
	background-color: #2563eb;
	color: white;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.cert-btn:hover {
	background-color: #1e40af;
}

/* Disabled Button Styling */
.cert-btn-disabled {
	background-color: #d1d5db;
	color: #6b7280;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 6px;
	cursor: not-allowed;
	transition: none;
}

.cert-btn-disabled:hover {
	background-color: #d1d5db;
}

.cert-image {
	width: 100%;
	height: 180px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.java-beginner {
	background-image: url('/files/learning1.jpeg');
}

.java-intermediate {
	background-image: url('/files/learning2.jpeg');
}

.java-advanced {
	background-image: url('/files/learning3.jpeg');
}

.java-expert {
	background-image: url('/files/learning3.jpeg');
}


</style>
