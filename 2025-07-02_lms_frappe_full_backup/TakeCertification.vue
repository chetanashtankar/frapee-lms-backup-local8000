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


            <button v-if="cert.enabled" class="cert-btn" @click="startCourse(cert)">
              {{ cert.progress === 100 ? 'View Certificate' : (cert.progress > 0 ? 'Resume Test' : 'Get Certified') }}
            </button>


            <button v-else class="cert-btn-disabled" disabled>
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


    <button class="chat-toggle" id="chatToggle" @click="toggleChat">
      💬
    </button>

    <div class="chatbot-container">
      <div class="chatbot-header">
        <div class="header-left">
                <div class="bot-avatar">
                    <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/>
                    </svg>
                </div>
                <div class="bot-name">GenIQ Bot</div>
            </div>
        <div class="header-controls">
          <button class="control-btn minimize-btn" @click="minimizeChat">−</button>
          <button class="control-btn close-btn" @click="closeChat">×</button>
        </div>
      </div>

      <div class="chat-area" id="chatArea">
        <div class="welcome-message">
          Start a conversation with GenIQ Bot!
        </div>
      </div>

      <div class="input-area">
        <input type="text" 
        class="message-input" 
        id="messageInput" 
        placeholder="Type your message"
          onkeypress="handleKeyPress(event)">
        <button class="send-btn" @click="sendMessage">
          ➤
        </button>
      </div>
    </div>

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
       isChatOpen: false,
      hasStartedChat: false, 
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

    toggleChat() {
      const container = document.querySelector('.chatbot-container');
      const toggleBtn = document.getElementById('chatToggle');

      if (this.isChatOpen) {
        container.style.display = 'none';
        toggleBtn.textContent = '💬';
        toggleBtn.classList.remove('active');
        this.isChatOpen = false;
      } else {
        container.style.display = 'flex';
        toggleBtn.textContent = '×';
        toggleBtn.classList.add('active');
        this.isChatOpen = true;

        // Show welcome message only if chat is new
        if (!this.hasStartedChat) {
          const chatArea = document.getElementById('chatArea');
          chatArea.innerHTML = `
            <div class="welcome-message">💬 Start a conversation with GenIQ Bot!</div>
          `;
        }

        setTimeout(() => {
          document.getElementById('messageInput').focus();
        }, 100);
      }
    },


    minimizeChat() {
     const container = document.querySelector('.chatbot-container');
     container.classList.toggle('fullscreen');
    },

    closeChat() {
      this.toggleChat();  
    },
async sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message) return;

  // First message → remove welcome text
  if (!this.hasStartedChat) {
    document.querySelector('.welcome-message')?.remove();
    this.hasStartedChat = true;
  }

  // Add user message (right side)
  this.addMessage(message, 'user');
  input.value = '';

  try {
    // Fetch CSRF token
    const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token');
    const csrfData = await csrfRes.json();
    const csrfToken = csrfData.message;

    // Call EvoluteIQ API
    const resp = await fetch('/api/method/lms.lms.api.call_evoluteiq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Frappe-CSRF-Token': csrfToken
      },
      body: JSON.stringify({
        question: message,
        assistant_id: 163,
        input_variables: "{}",
        conversational_id: localStorage.getItem('conv_id') || null,
        rating: 0
      })
    });

    const json = await resp.json();
    const payload = json.message || json;

    // Extract AI answer
    const answer = payload?.data?.[0]?.answer || "No answer returned.";
    this.addMessage(answer, 'bot'); // Left side

    // Save conversational_id for continuity
    if (payload?.data?.[0]?.conversational_id) {
      localStorage.setItem('conv_id', payload.data[0].conversational_id);
    }

  } catch (err) {
    console.error("❌ Error:", err);
    this.addMessage("Sorry, something went wrong talking to the AI.", 'bot');
  }
},


addMessage(text, sender) {
  // Remove welcome message if still showing
  const welcomeMsg = document.querySelector('.welcome-message');
  if (welcomeMsg) {
    welcomeMsg.remove();
  }

  const chatArea = document.getElementById('chatArea');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;

  // Create avatar container
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'message-avatar';

  // SVGs for user and bot
  const botSVG = `
    <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/>
    </svg>
  `;

  const userSVG = `
    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
    </svg>
  `;

  // Set SVG according to sender
  avatarDiv.innerHTML = sender === 'user' ? userSVG : botSVG;

  // Create message bubble
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = `message-bubble ${sender}`;
  bubbleDiv.textContent = text;

  // Append avatar and bubble to message div
  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(bubbleDiv);

  // Append message to chat area
  chatArea.appendChild(messageDiv);

  // Auto-scroll
  chatArea.scrollTop = chatArea.scrollHeight;
},


    setEnabledCardsBasedOnRoles() {
      const roles = this.user.roles.map(r => r.toLowerCase());
      let targetKey = null;

      if (roles.includes('lms student')) {
        targetKey = ['foundation', 'consultant'];
      } else if (roles.includes('it consultant')) {
        targetKey = ['consultant'];
      } else if (roles.includes('developer')) {
        targetKey = ['developer'];
      }

      this.certifications.forEach(cert => {
        cert.enabled = targetKey.includes(cert.key);
        if (cert.enabled) {
          cert.progress = this.getProgressFromLocalStorage(cert.key);
        } else {
          cert.progress = 0;
        }
      });

      console.log('✅ Enabled certifications:', this.certifications);
    },

    getProgressFromLocalStorage(certKey) {
      try {
        let quizTitle = '';
        if (certKey === 'foundation') {
          quizTitle = 'Foundation Certification quize';
        } else if (certKey === 'consultant') {
          quizTitle = 'Consultant Certification quiz';
        } else {
          quizTitle = localStorage.getItem('quizTitle') || 'default-quiz';
        }

        const quizKey = `${quizTitle}_${this.user.name}`;
        const activeQuestionKey = `${quizKey}-active-question`;
        const totalQuestions = 11;

        const activeQuestion = parseInt(localStorage.getItem(activeQuestionKey), 10) || 0;
        const progressPercentage = totalQuestions > 0
          ? Math.round((activeQuestion / totalQuestions) * 100)
          : 0;

        return isNaN(progressPercentage) ? 0 : progressPercentage;
      } catch (error) {
        console.error('❌ Error reading progress from localStorage for', certKey, error);
        return 0;
      }
    }
  },
  mounted() {
    fetch('/api/method/lms.lms.utils.get_csrf_token')
      .then(res => res.json())
      .then(data => {
        const csrfToken = data.message;
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
        if (data && data.message) {
          this.user.name = data.message.email || '';
          this.user.roles = data.message.roles || [];
          this.setEnabledCardsBasedOnRoles();
        }
      })
      .catch(error => {
        console.error('❌ Error:', error);
      });
  }
}
</script>






<style scoped>

.chatbot-container.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0; /* Remove rounded corners */
    box-shadow: none; /* Optional: remove box shadow in fullscreen mode */
    z-index: 1001; /* Ensure it stays above other elements */
    display: flex;
    flex-direction: column;
    background: #fff; /* Keep background white */
}

.chat-area {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: #fafafa;
    height: calc(100% - 60px); /* Adjust chat area height when in fullscreen mode */
}

.input-area {
    padding: 15px 20px;
    background: white;
    border-top: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    gap: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0;
}


.chat-area {
    overflow-y: auto;
    scrollbar-width: thin; /* Show a thin scrollbar */
    max-height: 400px;
}

  .chatbot-container {
            position: fixed;
            bottom: 100px;
            right: 20px;
            width: 400px;
            height: 600px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            display: none;
            flex-direction: column;
            z-index: 1000;
        }

        .chat-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
            transition: all 0.3s ease;
            z-index: 1001;
        }

        .chat-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(74, 144, 226, 0.6);
        }

        .chat-toggle.active {
            background: #666;
        }

        .chatbot-header {
            background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
            color: white;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .bot-avatar {
            width: 35px;
            height: 35px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .bot-avatar svg {
            width: 20px;
            height: 20px;
            fill: white;
        }

        .bot-name {
            font-size: 18px;
            font-weight: 600;
        }

        .header-controls {
            display: flex;
            gap: 8px;
        }

        .control-btn {
            width: 24px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: background-color 0.2s;
        }

        .control-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .chat-area {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: #fafafa;
        }

        .chatbot-container .message {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-end;
            gap: 10px;
            max-width: 85%;
            clear: both;
        }

        .chatbot-container .message.user {
            margin-left: auto;
            flex-direction: row-reverse;
        }

        .chatbot-container .message-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .chatbot-container .message.bot .message-avatar {
            background: #4A90E2 !important;
        }

        .chatbot-container .message.user .message-avatar {
            background: #28a745 !important;
        }

        .chatbot-container .message-avatar svg {
            width: 18px !important;
            height: 18px !important;
            fill: white !important;
        }

        .chatbot-container .message-bubble {
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 14px;
            line-height: 1.4;
            position: relative;
            max-width: 280px;
            word-wrap: break-word;
        }

        .chatbot-container .message.bot .message-bubble {
            background: #e3f2fd !important;
            color: #1976d2 !important;
            border-bottom-left-radius: 6px !important;
        }

        .chatbot-container .message.user .message-bubble {
            background: #4A90E2 !important;
            color: white !important;
            border-bottom-right-radius: 6px !important;
        }

        .input-area {
            padding: 15px 20px;
            background: white;
            border-top: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .message-input {
            flex: 1;
            border: none;
            background: #f5f5f5;
            padding: 12px 16px;
            border-radius: 25px;
            font-size: 14px;
            outline: none;
            transition: background-color 0.2s;
        }

        .message-input:focus {
            background: #eeeeee;
        }

        .message-input::placeholder {
            color: #999;
        }

        .send-btn {
            width: 40px;
            height: 40px;
            background: #4A90E2;
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            transition: all 0.2s;
        }

        .send-btn:hover {
            background: #357ABD;
            transform: scale(1.05);
        }

        .send-btn:active {
            transform: scale(0.95);
        }

        .welcome-message {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 100px;
        }

        /* Scrollbar styling */
        .chat-area::-webkit-scrollbar {
            width: 4px;
        }

        .chat-area::-webkit-scrollbar-track {
            background: transparent;
        }

        .chat-area::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 2px;
        }

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
  background-color: #2563eb;
  /* default blue */
}

.progress-bar.completed {
  background-color: green;
}

.completed-text {
  color: green;
  font-weight: bold;
  font-size: 1rem;
  /* optional, adjust size if you want */
  margin-top: 0.5rem;
  /* optional, add some spacing */
}


.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* ensures full height of viewport */
}

.certification-page {
  flex-grow: 1;
  /* this makes the main content stretch to fill space */
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

.Consultant-Certification {
  background-image: url('/files/certification5.png');
}


</style>
