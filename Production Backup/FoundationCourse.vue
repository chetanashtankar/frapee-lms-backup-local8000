<template>
	  <div class="page-wrapper">
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


					<div class="progress-bar-wrapper">
          <template v-if="foundationProgress < 100">
            <ProgressBar :progress="foundationProgress" />
            <p>{{ foundationProgress }}% Complete</p>
          </template>
          <p v-else class="completed-text">Completed</p>
        </div>

        
        <button
  class="cert-btn"
  @click="foundationProgress >= 100 ? redirectToCertification() : startCourse()"
>
  {{ foundationProgress >= 100 ? 'Get Certified' : (foundationProgress > 0 ? 'Continue Course' : 'Start Course') }}
</button>







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
	<!-- Footer -->
	
  <div v-if="showCertPendingModal" class="modal-overlay">
  <div class="modal-box warning">
    <button class="modal-close" @click="showCertPendingModal = false">&times;</button>
    <h2>Certificate Pending</h2>
    <p>
      You’ve successfully completed this course. Your certificate is under review and will be issued by an administrator shortly.
      Please check back later to download it.
    </p>
    <button class="modal-btn" @click="showCertPendingModal = false">Okay</button>
  </div>
</div>



		<footer data-v-efc29c82="" class="footer-section">
      <div data-v-efc29c82="" class="container-line">
        <div data-v-efc29c82="" class="footer-logo">
          <div data-v-efc29c82="" class="logo"></div>
        </div>
        <h2 data-v-efc29c82="" class="main-heading">Enhance your automation knowledge to the next level</h2>
        <h5 data-v-efc29c82="" class="sub-heading">EIQ Platform - Intelligent Business Automation and beyond</h5>
        <div class="footer-bottom">
          <div class="left-space"></div> <!-- invisible, for layout balance -->

          <div class="copyright">
            Copyright © 2025 | EvoluteIQ LMS
          </div>

          <div class="social-icons">
            <a href="https://www.facebook.com/EvoluteIQ" target="_blank" class="icon facebook"
              aria-label="Facebook"></a>
            <a href="https://www.youtube.com/@EvoluteIQ" target="_blank" class="icon youtube" aria-label="YouTube"></a>
            <a href="https://www.linkedin.com/company/evoluteiq/posts/?feedView=all" target="_blank"
              class="icon linkedin" aria-label="LinkedIn"></a>
            <a href="https://www.instagram.com/evoluteiq/" target="_blank" class="icon instagram"
              aria-label="Instagram"></a>
          </div>
        </div>

      </div>
    </footer>

			</div>

     <!-- ✅ Show chatbot only when completed -->
<Chatbot v-if="isCourseCompleted" />
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';
import Chatbot from "@/components/Chatbot.vue";


export default {
  name: 'CourseList',
  components: {
    ProgressBar,
    Chatbot
  },
  data() {
    return {
      courseSlug: 'eiq-agentic-automation-platform-foundation-certification',
      foundationProgress: 0,
      showCertPendingModal: false,
      showSnackbar: false,
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
      ]
    }
  },
  computed: {
    coursePath() {
      return `/lms/courses/${this.courseSlug}`;
    },
    isCourseCompleted() {
    return this.foundationProgress >= 100;
  }
  },
  methods: {
    getProgress(course) {
      if (course.totalLessons === 0) return 0;
      return Math.round((course.completedLessons / course.totalLessons) * 100);
    },

    startCourse() {
      window.location.href = this.coursePath;
    },
    redirectToCertification() {
    // Redirect to the certification page
    window.location.href = '/lms/take-certification';
  },
    async viewCertificate(courseId) {
      try {
        const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token', {
          method: 'GET',
          credentials: 'include'
        });
        const csrfToken = (await csrfRes.json()).message;

        const certRes = await fetch('/api/method/lms.lms.api.get_certification_details', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({ course: courseId })
        });

        const certData = await certRes.json();
        const certId = certData.message?.certificate?.name;

        if (!certId) {
          this.showCertPendingModal = true;
          return;
        }

        const certUrl = `/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${certId}&format=LMS%20Certificate`;
        window.open(certUrl, '_blank');
      } catch (err) {
        console.error("❌ Error viewing certificate:", err);
        alert("Something went wrong while fetching the certificate.");
      }
    }
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
          const message = outlineRes.message || [];
          const total = message.reduce((acc, section) => acc + (section.lessons?.length || 0), 0);

          let firstLessonName = null;
          for (const section of message) {
            if (section.lessons && section.lessons.length > 0) {
              firstLessonName = section.lessons[0].name;
              break;
            }
          }

          if (!firstLessonName) return;

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
            const progressPercent = Math.round(progressRes.message);
            this.foundationProgress = isNaN(progressPercent) ? 0 : progressPercent;

            this.certifications.forEach(cert => {
              if (cert.course_id === this.courseSlug) {
                cert.totalLessons = total;
                cert.completedLessons = Math.round(progressPercent * total / 100);
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
/* Modal Styles */
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

/* Responsive design for modals */
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



/* Progress Bar Styles */
.progress-bar-wrapper {
    margin-bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.progress-bar-wrapper p {
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
    color: #666;
   
}

.progress-bar-container {
    width: 100%;
    background-color: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    height: 8px;
    margin-bottom: 0.5rem;
}

.progress-bar {
    height: 100%;
    transition: width 0.3s ease;
    background-color: #2563eb;
    border-radius: 4px;
}

.progress-bar.completed {
    background-color: #22c55e;
}


.completed-text {
    color: #006400!important;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
    padding: .5rem 0;
}

.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.certification-page {
    flex-grow: 1;
    padding: 5rem 6.25rem 1.25rem;
}

.page-title {
    margin-bottom: 1.5rem;
    font-size: 20px;
    line-height: 1.15;
    letter-spacing: .02em;
    font-weight: 600;
}

.certification-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 393px); /* Fixed width columns */
    gap: 1.5rem;
    align-items: stretch;
    justify-content: start; /* Align grid items to the left */
}

.cert-card {
    display: flex;
    flex-direction: column;
    min-height: 500px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px #0000001a;
    transition: transform .2s ease;
    background: #fff;
}

.cert-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px #00000026;
    border-color: #ff6b35;
}

.cert-card.coming-soon {
    display: none; /* Hide coming soon cards completely */
}

.cert-card.coming-soon:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff4d;
    -webkit-backdrop-filter: blur(1px);
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

/* Fixed height image section */
.cert-image {
    width: 100%;
    height: 180px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
}

/* Content area - uses flexbox to distribute space */
.cert-info {
    padding: 1.5rem;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
}

/* Title styling - consistent height */
.cert-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    min-height: 2.6rem;
    display: flex;
    align-items: flex-start;
}

/* Description with flexible height but consistent spacing */
.cert-description {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
}

/* Button area - always at bottom */
.cert-btn,
.cert-btn-disabled {
    margin-top: auto;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cert-btn {
    background-color: #083279;
    color: white;
}

.cert-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left .5s ease;
}

.cert-btn:hover::before {
    left: 100%;
}

.cert-btn:hover {
    background: linear-gradient(135deg, #2d5a8a, #3d6a9a);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30,74,114,.3);
}

.cert-btn:active {
    transform: translateY(0);
}
/* Disabled Button Styling */
.cert-btn-disabled {
    background-color: #d1d5db;
    color: #6b7280;
    cursor: not-allowed;
}

.cert-btn-disabled:hover {
    background-color: #d1d5db;
    transform: none;
}


.footer-section {
  background-image: url("/files/footerbg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 17px 0 10px;
  text-align: center;
  font-family: "Roboto", Sans-serif;
}

.footer-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.footer-logo .logo {
  width: 220px;
  height: 64px;
  background-image: url("/files/Evoluteiqlogofooter.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.container-line {
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 20px;
}

.main-heading {
  font-size: 42px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
  line-height: 1.2;
}

.sub-heading {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
  line-height: 1.4;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #ff6b35;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #e85a2a;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  color: #fff;
  font-size: 14px;
}

.footer-bottom .left-space {
  flex: 1;
}

.footer-bottom .copyright {
  flex: 1;
  text-align: center;
}

.footer-bottom .social-icons {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}


.social-icons .icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
    
}

/* Specific icons */
.social-icons .facebook {
  background-image: url('/files/facebook.png');
}

.social-icons .youtube {
  background-image: url('/files/youtube.png');
}

.social-icons .linkedin {
  background-image: url('/files/linkedin.png');
}

.social-icons .instagram {
  background-image: url('/files/instagram.png');
}

/* Responsive */
@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom .copyright {
    margin-bottom: 10px;
    text-align: center;
  }
}




/* Responsive Design */
@media (max-width: 768px) {
    .certification-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .cert-card {
        min-height: 450px;
    }
    
    .cert-info {
        padding: 1.25rem;
    }
    
    .cert-title {
        font-size: 1.1rem;
        min-height: 2.2rem;
    }
    
    .cert-description {
        font-size: 0.9rem;
    }
    
    .certification-page {
        padding: 3rem 1rem 1rem 1rem;
    }
    
    .progress-bar-wrapper {
        min-height: 50px;
    }
}

@media (max-width: 480px) {
    .cert-card {
        min-height: 400px;
    }
    
    .cert-info {
        padding: 1rem;
    }
    
    .certification-page {
        padding: 2rem 0.75rem 1rem 0.75rem;
    }
    
    .main-heading {
        font-size: 1.6rem;
    }
    
    .sub-heading {
        font-size: 1.1rem;
    }
}

/* Additional improvements for better card consistency */
.cert-card .cert-info > * {
    flex-shrink: 0;
}

.cert-card .cert-description {
    flex-shrink: 1;
    flex-grow: 1;
}

/* Ensure progress section doesn't cause layout issues */
.progress-bar-wrapper:empty {
    display: none;
}

/* Better button states */
.cert-btn:disabled,
.cert-btn-disabled:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* Improved focus states for accessibility */
.cert-btn:focus,
.cert-btn-disabled:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}


.java-beginner{
    background-image: url('/files/learning1.jpeg')
}

.java-intermediate {
    background-image: url('/files/learning2.jpeg')
}

.java-advanced {
    background-image: url('/files/learning3.jpeg')
}

.java-expert {
    background-image: url('/files/learning3.jpeg')
}

</style>
