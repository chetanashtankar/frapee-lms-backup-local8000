<template>
  <div class="page-wrapper">
    <meta name="csrf-token" content="{{ frappe.csrf_token }}">
    <div class="certification-page">
      <h1 class="page-title">Certifications</h1>
      <div class="certification-grid">
        <div
          v-for="cert in certifications"
          :key="cert.id"
          :class="['cert-card', { 'coming-soon': !cert.enabled }]"
        >
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


           <button
            v-if="cert.enabled"
            class="cert-btn"
            @click="cert.progress === 100 ? viewCertificate(cert.courseSlug) : startCourse(cert)"

          >
            {{ cert.progress === 100 ? 'View Certificate' : (cert.progress > 0 ? 'Resume Test' : 'Get Certified') }}
          </button>



            <button
              v-else
              class="cert-btn-disabled"
              disabled
            >
              Coming Soon
            </button>
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
      user: {
        name: '',
        roles: []
      },
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
        {
          id: 2,
          title: 'Consultant Certification',
          key: 'consultant',
          enabled: false,
          progress: 0,
          description: 'The EIQ Platform Consultant Certification validates a professional’s expertise in designing, building, and managing intelligent automation solutions using the EIQ Platform.',
          imageClass: 'Consultant-Certification',
          courseSlug: 'eiq-platform-consultant-certification',
        },
        {
          id: 3,
          title: 'Developer',
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
      alert("❌ Certificate not found for this course.");
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




  async setEnabledCardsBasedOnRoles() {
    const roles = this.user.roles.map(r => r.toLowerCase());
    let targetKeys = [];

    if (roles.includes('lms student')) {
      targetKeys = ['foundation', 'consultant'];
    } else if (roles.includes('it consultant')) {
      targetKeys = ['foundation', 'consultant'];
    } else if (roles.includes('developer')) {
      targetKeys = ['foundation', 'consultant'];
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

.progress-bar.completed {
  background-color: green;
}

.progress-bar-container {
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  height: 12px;
}

.progress-bar {
  height: 100%;
  transition: width 0.3s ease;
  background-color: #2563eb; /* default blue */
}

.progress-bar.completed {
  background-color: green;
}

.completed-text {
  color: green;
  font-weight: bold;
  font-size: 1rem;     /* optional, adjust size if you want */
  margin-top: 0.5rem;  /* optional, add some spacing */
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

.Consultant-Certification{
  background-image: url('/files/certification5.png');
}

</style>
