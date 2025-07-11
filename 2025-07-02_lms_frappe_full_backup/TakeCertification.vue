/*/home/chetan/frappe-bench/apps/lms/frontend/src/components/Modals/TakeCertification.vue*/
/* /home/chetan/frappe-bench/apps/lms/frontend/src/pages/TakeCertification.vue */
<template>

 <div class="page-wrapper">
	<meta name="csrf-token" content="{{ frappe.csrf_token }}">
	<div class="certification-page">
		<h1 class="page-title">Certifications</h1>
		<div class="certification-grid">
			<div class="cert-card">
				<div class="cert-image java-beginner"></div>
				<div class="cert-info">
					<h2 class="cert-title">Consultant Certification</h2>
					<p class="cert-description">Master the fundamentals of intelligent business automation with our Consultant Certification Program. The EIQ Foundation equips you with essential platform skills.</p>
					<!-- Progress Bar here -->
					<div class="progress-bar-wrapper">
					<template v-if="foundationProgress > 0">
						<ProgressBar :progress="foundationProgress" />
						<p>{{ foundationProgress }}% Complete</p>
					</template>
					<template v-else>
						<p>Not Started</p>
					</template>
					</div>

					
					<button class="cert-btn" @click="startCourse">Get Certified</button>
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
	<footer class="footer-section">
        <div class="container-line">
            <h2 class="main-heading">Enhance your automation knowledge to the next level</h2>

            <h5 class="sub-heading">EIQ Platform - Intelligent Business Automation and beyond</h5>
            
            <p class="copyright">Copyright © 2025 | EvoluteIQ LMS</p>
        </div>
    </footer>
	</div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  name: 'CourseList',
  components: {
    ProgressBar
  },
  data() {
    return {
      courseSlug: 'eiq-platform-consultant-certification',
      certifications: [
        {
          id: 1,
          course_id: 'eiq-platform-consultant-certification',
          title: 'Consultant Certification',
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
    },
    startCourse() {
      window.location.href = this.coursePath;
    }
  },
  mounted() {
    const quizKey = 'eiq test quize'; // LocalStorage key for quiz answers
    const activeQuestionKey = `${quizKey}-active-question`; // key for current question
    const totalQuestions = 11; // ✅ Set this to your actual total

    const answersRaw = localStorage.getItem(quizKey);
    const answered = answersRaw ? JSON.parse(answersRaw).length : 0;

    const activeQuestion = parseInt(localStorage.getItem(activeQuestionKey), 10) || 0;

    const progressPercentage = totalQuestions > 0
      ? Math.round((answered / totalQuestions) * 100)
      : 0;

    console.log(`✅ Quiz Key: ${quizKey}`);
    console.log(`🧠 Questions Answered: ${answered} / ${totalQuestions}`);
    console.log(`📍 Current Active Question Index: ${activeQuestion}`);
    console.log(`📊 Progress: ${progressPercentage}%`);

    this.foundationProgress = isNaN(progressPercentage) ? 0 : progressPercentage;
  }
}
</script>




<style scoped>

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ensures full height of viewport */
}

.certification-page {
  flex-grow: 1; /* this makes the main content stretch to fill space */
}

/* Existing footer styles */
.footer-section {
  background-color: #083279;
  padding: 60px 0;
  text-align: center;
}

/* Update this class name to match your template */
.container-line {
  max-width: 70%;
  margin: 0 auto;
  padding: 0 20px;
}

.main-heading {
  font-size: 2.0rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: #FFFFFF;
  margin-bottom: 20px;
  font-family: "Roboto", Sans-serif;
}

.sub-heading {
  font-size: 1.25rem;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.2em;
  margin-bottom: 30px;
}

.copyright {
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}


.footer-section {
    background-color: #083279;
    padding: 60px 0;
    text-align: center;
}

.container {
    max-width: 70%;
    margin: 0 auto;
    padding: 0 20px;
}



.sub-heading {
    font-size: 1.25rem;
    /* color: #666; */
    margin-bottom: 30px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.2em;
}

.cta-button {
    display: inline-block;
    background-color: #007cba;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease;
    margin-bottom: 40px;
    background-color: #FFFFFF;
    fill: #0D68AE;
    color: #0D68AE;
    font-size: 0.9375rem 15px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-top: 15px;
    padding-right: 40px;
    padding-bottom: 16px;
    padding-left: 40px;
    display: inline-block;
    /* background: #ff6b6b; */
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    /* border-radius: 50px; */
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    /* box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3); */
    background-color: #ff6b35;
    /* background: transparent; */
    /* color: inherit; */
    text-decoration: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-top: 15px;
    padding-right: 40px;
    padding-bottom: 16px;
    padding-left: 40px;
}

/* .cta-button:hover {
    background-color: #005a87;
} */

.copyright {
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
}

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
	transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, .15);
    border-color: #ff6b35;
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
	border-color: inherit; 
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
	background-image: url('/files/certification1.jpeg');
}

.java-intermediate {
	background-image: url('/files/certification2.png');
}

.java-advanced {
	background-image: url('/files/certification3.png');
}

.java-expert {
	background-image: url('/files/certification4.png');
}

</style>
