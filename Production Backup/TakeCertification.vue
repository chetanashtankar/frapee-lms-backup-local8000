<template>
  <div class="page-wrapper">
    <meta name="csrf-token" content="{{ frappe.csrf_token }}">
    <div class="certification-page">
      <h1 class="page-title">Certifications</h1>
      <div class="certification-grid">
        <div v-for="cert in certifications" :key="cert.id" :class="['cert-card', { 'coming-soon': !cert.enabled }]">
          <div :class="['cert-image', cert.imageClass]"></div>
          <div class="cert-info">
            <h2 class="cert-title">{{ cert.title }}</h2>
            <p class="cert-description">{{ cert.description }}</p>

            <div class="progress-bar-wrapper" v-if="cert.enabled">
              <template v-if="cert.progress < 100">
                <ProgressBar :progress="cert.progress" />
                <p>{{ cert.progress }}% Complete</p>
              </template>
              <p v-else class="completed-text">Completed</p>
            </div>


            <button v-if="cert.enabled" class="cert-btn" @click="handleStartClick(cert)">
              {{ cert.progress === 100 ? 'View Certificate' : (cert.progress > 0 ? 'Resume Test' : 'Get Certified') }}
            </button>




            <button v-else class="cert-btn-disabled" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>



    <!-- Modal -->
    <!-- HTML structure (add classes accordingly) -->
    <div v-if="showFoundationModal" class="modal-overlay">
    <div class="demo-modal">
      <h1>Oops, You Missed a Step!</h1>
      <p>You must finish the Foundation Course to access this certification.</p>
        <button class="go-to-course-btn" @click="showFoundationModal = false">OK</button>
      </div>
    </div>

    <div v-if="showCertPendingModal" class="modal-overlay">
      <div class="modal-box warning">
        <button class="modal-close" @click="showCertPendingModal = false">&times;</button>
        <h2>Certificate Pending</h2>
        <p>
          You’ve successfully completed this course. Your certificate is under review and will be issued by an
          administrator
          shortly.
          Please check back later to download it.
        </p>
        <button class="modal-btn" @click="showCertPendingModal = false">Okay</button>
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

<script>
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  name: 'CourseList',
  components: {
    ProgressBar
  },
  data() {
    return {
      user: {
        name: '',
        roles: []
      },
      courseProgress: 0,
      showFoundationModal: false,
      showCertPendingModal: false,
      certifications: [
        {
          id: 1,
          title: 'Foundation Certification',
          key: 'foundation',
          enabled: false,
          progress: 0,
          description: 'Master the fundamentals of intelligent business automation with our Consultant Certification Program. The EIQ Foundation equips you with essential platform skills.',
          imageClass: 'java-beginner',
          courseSlug: 'eiq-platform-foundation-certification',
        },
        // {
        //   id: 2,
        //   title: 'Consultant Certification',
        //   key: 'consultant',
        //   enabled: false,
        //   progress: 0,
        //   description: 'The EIQ Platform Consultant Certification validates a professional’s expertise in designing, building, and managing intelligent automation solutions using the EIQ Platform.',
        //   imageClass: 'Consultant-Certification',
        //   courseSlug: 'eiq-platform-consultant-certification',
        // },
        {
          id: 3,
          title: 'Developer Certification',
          key: 'developer',
          enabled: false,
          progress: 0,
          description: 'Advance your skills with low-code and pro-code features. Learn to create robust apps using JavaScript, Python, APIs, and platform scripting.',
          imageClass: 'java-advanced',
          courseSlug: 'eiq-platform-developer-certification',
        },
        {
          id: 4,
          title: 'Citizen Developer',
          key: 'citizen',
          enabled: false,
          progress: 0,
          description: 'Build powerful applications using our intuitive no-code tools. Learn to automate workflows and integrate systems—no programming required.',
          imageClass: 'java-intermediate',
          courseSlug: 'eiq-platform-citizen-developer-certification',
        },
        {
          id: 5,
          title: 'Architect',
          key: 'architect',
          enabled: false,
          progress: 0,
          description: 'Design scalable, secure enterprise solutions using the full EIQ stack. Master architecture, integrations, and AI-driven automation.',
          imageClass: 'java-expert',
          courseSlug: 'eiq-platform-citizen-architect-certification',
        }
      ]
    }
  },
  methods: {
    startCourse(cert) {

      window.location.href = `/lms/courses/${cert.courseSlug}`;
    },


    async viewCertificate(courseId) {
      try {
        // Step 1: Get CSRF Token
        const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token', {
          method: 'GET',
          credentials: 'include'
        });
        const csrfToken = (await csrfRes.json()).message;

        // Step 2: Get Certification Details
        const certRes = await fetch('/api/method/lms.lms.api.get_certification_details', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
            course: courseId   // Example: "eiq-platform-foundation-certification"
          })
        });

        const certData = await certRes.json();
        const certId = certData.message?.certificate?.name;

        if (!certId) {
          this.showCertPendingModal = true;
          return;
        }

        // Step 3: Download Certificate
        const certUrl = `/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${certId}&format=LMS%20Certificate`;
        window.open(certUrl, '_blank');

      } catch (err) {
        console.error("❌ Error viewing certificate:", err);
        alert("Something went wrong while fetching the certificate.");
      }
    },


    async fetchCourseProgress() {
      try {
        // Step 1: Get CSRF token
        const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token');
        const csrfData = await csrfRes.json();
        const csrfToken = csrfData.message;

        // Step 2: Get course outline
        const outlineRes = await fetch('/api/method/lms.lms.utils.get_course_outline', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
            course: 'eiq-agentic-automation-platform-foundation-certification',
            progress: false
          })
        });
        const outlineData = await outlineRes.json();
        const message = outlineData.message || [];

        // Step 3: Get first lesson name
        let firstLessonName = null;
        for (const section of message) {
          if (section.lessons && section.lessons.length > 0) {
            firstLessonName = section.lessons[0].name;
            break;
          }
        }
        if (!firstLessonName) return;

        // Step 4: Save progress for that lesson
        const progressRes = await fetch('/api/method/lms.lms.doctype.course_lesson.course_lesson.save_progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
            course: 'eiq-agentic-automation-platform-foundation-certification',
            lesson: firstLessonName
          })
        });
        const progressData = await progressRes.json();

        // Step 5: Store and log progress
        const progress = Math.round(progressData.message);
        this.courseProgress = isNaN(progress) ? 0 : progress;
        console.log(`📊 Course progress: ${this.courseProgress}%`);

      } catch (err) {
        console.error('❌ Error fetching course progress:', err);
        this.courseProgress = 0;
      }
    },


    async handleStartClick(cert) {
      debugger;
      if (cert.progress === 100) {
        this.viewCertificate(cert.courseSlug);
      } else if (cert.key === 'foundation') {
        // Manually check foundation course progress
        await this.fetchCourseProgress('eiq-agentic-automation-platform-foundation-certification');

        console.log(`📊 Foundation Course progress: ${this.courseProgress}%`);

        if (this.courseProgress >= 100) {
          this.startCourse(cert);
        } else {
          this.showFoundationModal = true; // show modal
        }
      } else {
        this.startCourse(cert);
      }
    },



    async setEnabledCardsBasedOnRoles() {

      const roles = this.user.roles.map(r => r.toLowerCase());
      let targetKeys = [];

      if (roles.includes('lms student')) {
        targetKeys = ['foundation', 'consultant','developer'];
      } else if (roles.includes('it consultant')) {
        targetKeys = ['foundation', 'consultant','developer'];
      } else if (roles.includes('developer')) {
        targetKeys = ['foundation', 'consultant','developer'];
      }

      for (const cert of this.certifications) {
        cert.enabled = targetKeys.includes(cert.key);




        if (cert.enabled) {
          try {
            const apiProgressRaw = await this.fetchProgressFromAPI(cert.courseSlug);

            const quizMeta = await this.fetchQuizMetadata(cert.key);
            const quizTitle = quizMeta.title;
            const totalQuestions = quizMeta.totalQuestions;

            const finalProgress = this.getFinalProgress(cert.key, quizTitle, totalQuestions, apiProgressRaw);
            cert.progress = finalProgress;
          } catch (err) {
            console.error(`❌ Error fetching progress for ${cert.title}:`, err);
            cert.progress = 0;
          }
        } else {
          cert.progress = 0;
        }

      }

      console.log('✅ Updated certifications with API progress:', this.certifications);
    },






    async fetchProgressFromAPI(courseSlug) {
      // Map course slug to required chapter/lesson values if needed
      const chapter = "1";
      const lesson = "1";

      // Get CSRF token
      const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token');
      const csrfToken = (await csrfRes.json()).message;

      const response = await fetch('/api/method/lms.lms.utils.get_lesson', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Frappe-CSRF-Token': csrfToken
        },
        body: JSON.stringify({
          course: courseSlug,
          chapter,
          lesson
        })
      });

      const result = await response.json();
      console.log('Progress API response:', result);

      const progressRaw = result?.message?.membership?.progress;

      if (typeof progressRaw === 'number') {
        return progressRaw;
      } else if (typeof progressRaw === 'string') {
        const numericProgress = parseInt(progressRaw.replace('%', ''), 10);
        return isNaN(numericProgress) ? 0 : numericProgress;
      }

      return 0;

    },


    async loadCertifications() {
      const certs = await this.fetchCertifications(); // Your method
      const progressData = await this.fetchProgressData(); // API returns list of progress entries

      certs.forEach(cert => {
        const match = progressData.find(p => p.course === cert.courseSlug);
        if (match) {
          cert.progress = match.progress;
        } else {
          cert.progress = 0;
        }
      });

      this.certifications = certs;
    },


    getProgressFromLocalStorage(certKey, quizTitle, totalQuestions) {
      try {
        const quizKey = `${quizTitle}_${this.user.name}`;
        const activeQuestionKey = `${quizKey}-active-question`;

        const activeQuestion = parseInt(localStorage.getItem(activeQuestionKey), 10) || 0;
        const progressPercentage = totalQuestions > 0
          ? Math.round((activeQuestion / totalQuestions) * 100)
          : 0;

        console.log(`📊 Progress for ${certKey} (quizTitle: ${quizTitle}):`, progressPercentage);
        return isNaN(progressPercentage) ? 0 : progressPercentage;
      } catch (error) {
        console.error('❌ Error reading progress from localStorage for', certKey, error);
        return 0;
      }
    },


    async fetchQuizMetadata(certKey) {
      const quizNameMap = {
        foundation: 'foundation-certification-quiz',
        consultant: 'consultant-certification-quiz',
        developer: 'developer-certification-quiz',
        citizen: 'citizen-developer-certification-quiz',
        architect: 'architect-certification-quiz'
      };

      const quizDocName = quizNameMap[certKey];
      if (!quizDocName) throw new Error(`Quiz name not found for certKey: ${certKey}`);

      // Step 1: Get CSRF Token
      const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token');
      const csrfData = await csrfRes.json();
      const csrfToken = csrfData.message;

      // Step 2: Get Quiz Data
      const quizRes = await fetch('/api/method/frappe.client.get', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Frappe-CSRF-Token': csrfToken
        },
        body: JSON.stringify({
          doctype: "LMS Quiz",
          name: quizDocName
        })
      });

      const data = await quizRes.json();

      if (!data.message || !Array.isArray(data.message.questions)) {
        throw new Error(`Invalid quiz data for ${quizDocName}`);
      }

      return {
        title: data.message.title || `${certKey} quiz`,
        totalQuestions: data.message.questions.length
      };
    },


    getFinalProgress(certKey, quizTitle, totalQuestions, apiProgressRaw) {
      try {
        // Step 1: Parse API progress
        let apiProgress = 0;
        if (typeof apiProgressRaw === 'number') {
          apiProgress = apiProgressRaw;
        } else if (typeof apiProgressRaw === 'string') {
          const parsed = parseInt(apiProgressRaw.replace('%', ''), 10);
          apiProgress = isNaN(parsed) ? 0 : parsed;
        }

        // Step 2: If API is 100%, trust it
        if (apiProgress === 100) {
          return 100;
        }

        // Step 3: Otherwise, use local progress
        const localProgress = this.getProgressFromLocalStorage(certKey, quizTitle, totalQuestions);
        const finalProgress = Math.min(localProgress, 98);

        // If it's exactly 98 and >= 80, return 0
        if (finalProgress === 98 && localProgress >= 80) {
          return 0;
        }
        return finalProgress;
      } catch (err) {
        console.error(`❌ Error calculating final progress for ${certKey}`, err);
        return 0;
      }
    }
  },
  mounted() {
    
    // ✅ Fetch CSRF Token first
    fetch('/api/method/lms.lms.utils.get_csrf_token')
      .then(res => res.json())
      .then(data => {
        const csrfToken = data.message;
        console.log('✅ CSRF Token from server:', csrfToken);

        // ✅ Now call get_user_info API with CSRFroot
        return fetch('/api/method/lms.lms.api.get_user_info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrfToken
          },
          body: JSON.stringify({})
        });
      })
      .then(res => res.json())
      .then(data => {
        console.log('✅ User Info Response:', data);

        if (data && data.message) {
          this.user.name = data.message.email || '';
          this.user.roles = data.message.roles || [];
          console.log('✅ User Email:', this.user.name);
          console.log('✅ User Roles:', this.user.roles);

          this.setEnabledCardsBasedOnRoles();
        } else {
          console.warn('⚠️ No user info found in response.');
        }
      })
      .catch(error => {
        console.error('❌ Error:', error);
      });
  }
}
</script>







<style scoped>

/* css for show modal please complete foundation course first*/
/* Modal Overlay */
#foundation-warning-modal.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; /* Centers the modal */
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Modal Box Styling */
.demo-modal {
    background: white;
    border-radius: 16px;
    padding: 48px;
    width: 90%;
    max-width: 675px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    text-align: center;
}

/* Modal Heading */
.demo-modal h1 {
    color: #333;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
    letter-spacing: -0.8px;
}

/* Modal Paragraph */
.demo-modal p {
    color: #666;
    font-size: 18px;
    margin-bottom: 32px;
    line-height: 1.4;
}

/* Go to Course Button */
.go-to-course-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 16px 48px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 24px;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.go-to-course-btn:hover {
    background: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
}


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
    color: #006400 !important; /* or #228B22 */
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
    padding: .5rem 0;
}

/* Page Layout */
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

/* Main certification grid - ensures equal height cards */
.certification-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* 4 columns in the first row */
    grid-template-rows: auto auto;           /* Two rows */
    gap: 1.5rem;
    align-items: stretch;
}

/* Card container - uses flexbox for consistent internal layout */
.cert-card {
    display: flex;
    flex-direction: column;
    min-height: 500px;
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

/* Footer Styles */
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

.cta-button {
    display: inline-block;
    background-color: #ff6b35;
    color: white;
    padding: 15px 40px;
    text-decoration: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-bottom: 40px;
}

.cta-button:hover {
    background-color: #e55a2b;
    transform: translateY(-2px);
}

/* Image background classes */
.java-beginner {
    background-image: url('/files/certification1.jpeg');
}

.java-intermediate {
    background-image: url('/files/certification2.png');
}

.java-advanced {
     background-image: url('/files/certification5.png');
}

.java-expert {
    background-image: url('/files/certification4.png');
}

.Consultant-Certification {
    background-image: url('/files/certification5.png');
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

</style>
