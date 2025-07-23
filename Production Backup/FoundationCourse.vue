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
  @click="foundationProgress >= 100 ? viewCertificate(courseSlug) : startCourse()"
>
  {{ foundationProgress >= 100 ? 'View Certificate' : (foundationProgress > 0 ? 'Continue Course' : 'Start Course') }}
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
      showCertPendingModal: false,
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

.completed-text {
  color: green;
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 1rem;
}


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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
	background: white;
}

.cert-btn,
.cert-btn-disabled {
	margin-top: auto; /* pushes it to the bottom */
}

.cert-card:hover {
	transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, .15);
    border-color: #ff4400;
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
  width: fit-content;
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
  width: fit-content;
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
