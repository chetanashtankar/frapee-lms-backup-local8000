<template>
    
    <button class="chat-toggle" id="chatToggle" @click="toggleChat"></button>

    <div class="chatbot-container">
        <div class="chatbot-header">
            <div class="header-left">
                <div class="bot-avatar">
                </div>
                <div class="bot-name">LMS Assistant</div>
            </div>
            <div class="header-controls">
                <button class="control-btn minimize-btn" @click="minimizeChat">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path v-if="!isMinimized"
                            d="M408 64L552 64C565.3 64 576 74.7 576 88L576 232C576 241.7 570.2 250.5 561.2 254.2C552.2 257.9 541.9 255.9 535 249L496 210L409 297C399.6 306.4 384.4 306.4 375.1 297L343.1 265C333.7 255.6 333.7 240.4 343.1 231.1L430.1 144.1L391.1 105.1C384.2 98.2 382.2 87.9 385.9 78.9C389.6 69.9 398.3 64 408 64zM232 576L88 576C74.7 576 64 565.3 64 552L64 408C64 398.3 69.8 389.5 78.8 385.8C87.8 382.1 98.1 384.2 105 391L144 430L231 343C240.4 333.6 255.6 333.6 264.9 343L296.9 375C306.3 384.4 306.3 399.6 296.9 408.9L209.9 495.9L248.9 534.9C255.8 541.8 257.8 552.1 254.1 561.1C250.4 570.1 241.7 576 232 576z" />
                        <path v-else
                            d="M503.5 71C512.9 61.6 528.1 61.6 537.4 71L569.4 103C578.8 112.4 578.8 127.6 569.4 136.9L482.4 223.9L521.4 262.9C528.3 269.8 530.3 280.1 526.6 289.1C522.9 298.1 514.2 304 504.5 304L360.5 304C347.2 304 336.5 293.3 336.5 280L336.5 136C336.5 126.3 342.3 117.5 351.3 113.8C360.3 110.1 370.6 112.1 377.5 119L416.5 158L503.5 71zM136.5 336L280.5 336C293.8 336 304.5 346.7 304.5 360L304.5 504C304.5 513.7 298.7 522.5 289.7 526.2C280.7 529.9 270.4 527.9 263.5 521L224.5 482L137.5 569C128.1 578.4 112.9 578.4 103.6 569L71.6 537C62.2 527.6 62.2 512.4 71.6 503.1L158.6 416.1L119.6 377.1C112.7 370.2 110.7 359.9 114.4 350.9C118.1 341.9 126.8 336 136.5 336z" />
                    </svg>
                </button>

                <button class="control-btn close-btn" @click="closeChat">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                    </svg>
                </button>
            </div>

        </div>

        <div class="chat-area" id="chatArea">
            <div class="welcome-message">
                Hi, I’m your LMS Assistant! I can help you with basic FAQs about the website, guide you through courses,
                and
                clarify your doubts about course content.
            </div>
        </div>

        <div class="input-area">
            <input type="text" class="message-input" id="messageInput" placeholder="Ask about your course or the LMS..."
                @keypress.enter="sendMessage" />

            <!-- <button class="mic-btn" id="micButton" @click="startVoiceInput" title="Speak">
                <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path
                        d="M192 352c53 0 96-43 96-96V96c0-53-43-96-96-96S96 43 96 96v160c0 53 43 96 96 96zm176-96c-13.3 0-24 10.7-24 24 0 88.4-71.6 160-160 160S24 368.4 24 280c0-13.3-10.7-24-24-24S-24 266.7-24 280c0 106 80.6 193.1 184 207v25h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-25c103.4-13.9 184-101 184-207 0-13.3-10.7-24-24-24z" />
                </svg>
            </button> -->


            <!-- ➤ Send Button -->
            <button class="send-btn" @click="sendMessage" title="Send Message">
                ➤
            </button>
        </div>
    </div>
</template>


<script>


export default {
    name: "Chatbot",
    data() {
        return {
            isChatOpen: false,
            hasStartedChat: false,
            isMinimized: false,
        };
    },

    methods: {
        toggleChat() {
            const container = document.querySelector('.chatbot-container');
            const toggleBtn = document.getElementById('chatToggle');

            if (this.isChatOpen) {
                container.style.display = 'none';
                toggleBtn.classList.remove('active');
                this.isChatOpen = false;
            } else {
                container.style.display = 'flex';
                toggleBtn.classList.add('active');
                this.isChatOpen = true;
                setTimeout(() => document.getElementById('messageInput').focus(), 100);
            }
        },
        minimizeChat() {
            const container = document.querySelector('.chatbot-container');
            container.classList.toggle('fullscreen');
            this.isMinimized = !this.isMinimized;
        },
        closeChat() {
            this.toggleChat();
        },
        startVoiceInput() {
            debugger;
           const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert("Sorry, your browser doesn't support speech recognition.");
  return;
}

           
const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onstart = () => {
                const chatArea = document.getElementById('chatArea');

                const listeningDiv = document.createElement('div');
                listeningDiv.className = 'message bot';
                listeningDiv.id = 'listeningIndicator';

                listeningDiv.innerHTML = `
          <div class="message-avatar">
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/>
            </svg>
          </div>
          <div class="message-bubble bot">
            <div class="listening-wave">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        `;
                chatArea.appendChild(listeningDiv);
                chatArea.scrollTop = chatArea.scrollHeight;
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log("🗣️ You said:", transcript);
                document.getElementById('messageInput').value = transcript;
                this.sendMessage(); // Auto-send after recognition
            };

            recognition.onerror = (event) => {
                console.error("❌ Voice error:", event.error);
            };

            recognition.onend = () => {
                console.log("🛑 Stopped listening.");
                document.getElementById('listeningIndicator')?.remove();
            };
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


            // Add typing loader (bot side)
            const chatArea = document.getElementById('chatArea');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typingIndicatorMessage';

            typingDiv.innerHTML = `
  <div class="bot-icon"></div>
  <div class="message-bubble bot">
    <div class="loading-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
`;


            chatArea.appendChild(typingDiv);
            chatArea.scrollTop = chatArea.scrollHeight;

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

                document.getElementById('typingIndicatorMessage')?.remove();

                const answer = payload?.data?.[0]?.answer || "Ensure you're looking at the lessons and chapters that are part of the foundation course";
                this.addMessage(answer, 'bot'); // Left side

                if (payload?.data?.[0]?.conversational_id) {
                    localStorage.setItem('conv_id', payload.data[0].conversational_id);
                }

            } catch (err) {
                console.error("❌ Error:", err);
                document.getElementById('typingIndicatorMessage')?.remove(); // remove loader
                this.addMessage("Sorry, something went wrong talking to the AI.", 'bot');
            }
        },

        formatResponse(message) {
            debugger;
            message = message.replace(/\*+/g, ''); // remove asterisks
            const tableRegex = /\|.*\|/g;
            const isTable = tableRegex.test(message);

            if (isTable) {
                const rows = message.split('\n').filter(row => row.trim() !== '' && !/^[-| ]+$/.test(row));
                const tableHeaders = rows[0].split('|').map(header => header.trim()).filter(Boolean);
                const tableRows = rows.slice(1).map(row => {
                    const cells = row.split('|').map(cell => cell.trim()).filter(Boolean);
                    return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
                }).join('');
                return `
      <table>
        <thead>
          <tr>${tableHeaders.map(header => `<th colspan="2">${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
            }

            // Split by double new lines for paragraphs
            const paragraphs = message.split(/\n\s*\n/);

            let finalHtml = '';

            for (const para of paragraphs) {
                const lines = para.split('\n').map(line => line.trim()).filter(Boolean);
                const numberedListRegex = /^\d+\.\s+/;
                if (lines.length > 0 && lines.every(line => numberedListRegex.test(line))) {
                    const listItems = lines.map(line => {
                        return `<li>${line.replace(numberedListRegex, '')}</li>`;
                    }).join('');
                    finalHtml += `<ul>${listItems}</ul>`;
                    continue; // Skip the rest and go to next paragraph
                }
                if (/-\s/.test(para)) {
                    let listItems = '';
                    let otherText = '';

                    lines.forEach(line => {
                        if (line.startsWith('-')) {
                            listItems += `<li>${line.replace(/^-\s*/, '')}</li>`;
                        } else {
                            otherText += line;
                        }
                    });

                    if (otherText) {
                        finalHtml += `<p>${otherText}</p>`;
                    }
                    if (listItems) {
                        finalHtml += `<ul>${listItems}</ul>`;
                    }
                } else {
                    finalHtml += `<p>${para.trim()}</p>`;
                }
            }
            return finalHtml;
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
  <div class="bot-icon"></div>
`;


            const userSVG = `
    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
    </svg>
  `;

            // Set SVG according to sender
            avatarDiv.innerHTML = sender === 'user' ? userSVG : botSVG;
            const formattedText = this.formatResponse(text);
            // Create message bubble
            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = `message-bubble ${sender}`;
            bubbleDiv.innerHTML = formattedText;

            // Append avatar and bubble to message div
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(bubbleDiv);

            // Append message to chat area
            chatArea.appendChild(messageDiv);

            // Auto-scroll
            chatArea.scrollTop = chatArea.scrollHeight;
        },
    }
};
</script>


<style scoped>


.chat-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    width: 90px;
    height: 90px;
    border: none;
    outline: none;
    border-radius: 50%;
    background: url('/files/chatbot.gif') no-repeat center center; 
    background-size: contain;
    transition: transform .2s ease;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.chat-toggle:hover {
    transform: translateY(-5px) scale(1.05);
}

.chat-toggle:active {
    transform: scale(0.95);
}

.chat-toggle.active {
    display: none; /* hides when chatbot is opened */
}


.control-btn svg {
    width: 16px;
    height: 16px;
    fill: white;
}

/* ===== CHATBOT CONTAINER ===== */
.chatbot-container {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 90vw;
    height: 80vh;
    max-width: 430px;
    max-height: 600px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    display: none;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    transition: all 0.3s ease;
}

.chatbot-container:hover {
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

/* ===== FULLSCREEN MODE ===== */
.chatbot-container.fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height: 75vh;
    max-width: none;
    max-height: none;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.chatbot-container.fullscreen .chat-area {
    max-height: none;
    height: calc(100vh - 140px);
}

.chatbot-container.fullscreen .chat-area .message-bubble {
    max-width: 60%;
    width: fit-content;
}

/* ===== CHATBOT HEADER ===== */
.chatbot-header {
    background: linear-gradient(180deg, #1289c9 0%, #59acd9 100%);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px 20px 0 0;
}

.chatbot-container.fullscreen .chatbot-header {
    border-radius: 0;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.bot-avatar {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.2) url('/files/bot1.svg') center center no-repeat;
    background-size: 24px 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
}

.bot-avatar svg {
    width: 24px;
    height: 24px;
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
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
}

.control-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
}

/* ===== CHAT AREA ===== */
.chat-area {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: #fafbfc;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 400px;
}

/* ===== WELCOME MESSAGE ===== */
.welcome-message {
    text-align: center;
    color: #64748b;
    font-size: 16px;
    margin-top: 50px;
    padding: 30px 20px;
    background: white;
    border-radius: 15px;
    border: 2px dashed #e2e8f0;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* ===== INPUT AREA ===== */
.input-area {
    padding: 20px;
    background: white;
    border-top: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 0 0 20px 20px;
}

.chatbot-container.fullscreen .input-area {
    border-radius: 0;
}

.message-input {
    flex: 1;
    border: 2px solid #e2e8f0;
    background: #f8fafc;
    padding: 15px 20px;
    border-radius: 25px;
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;
}

.message-input:focus {
    border-color: #1289c9;
    background: white;
    box-shadow: 0 0 0 3px rgba(8, 50, 121, 0.1);
}

.message-input::placeholder {
    color: #94a3b8;
}

/* ===== BUTTON STYLES ===== */
.mic-btn,
.send-btn {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    font-size: 16px;
}

.mic-btn {
    background: #f1f5f9;
    color: #64748b;
    border: 2px solid #e2e8f0;
}

.mic-btn:hover {
    background: #e2e8f0;
    color: #1289c9;
    transform: translateY(-1px);
    border-color: #1289c9;
}

.mic-btn svg {
    width: 18px;
    height: 18px;
}

.send-btn {
    background: linear-gradient(180deg, #1289c9 0%, #59acd9 100%);
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(8, 50, 121, 0.3);
}

.send-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(8, 50, 121, 0.4);
}

.send-btn:active {
    transform: translateY(0);
}

.chat-area {
    overflow-y: auto;
    scrollbar-width: thin;
    max-height: 400px;
    scrollbar-color: #1289c9 #f1f1f1;
}

</style>
