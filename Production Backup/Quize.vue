<template>
	<div v-if="quiz.data">
		<!-- Intro Section -->
		<div class="bg-surface-blue-2 space-y-1 py-2 px-2 mb-4 rounded-md text-sm text-ink-blue-3">
			<div class="leading-5">
				{{ __('This quiz consists of {0} questions.').format(questions.length) }}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{ __('Please ensure that you complete all the questions in {0} minutes.').format(quiz.data.duration) }}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{ __('If you fail to do so, the quiz will be automatically submitted when the timer ends.') }}
			</div>
			<div v-if="quiz.data.passing_percentage" class="leading-relaxed">
				{{ __('You will have to get {0}% correct answers in order to pass the quiz.').format(quiz.data.passing_percentage) }}
			</div>
			<div v-if="quiz.data.max_attempts" class="leading-5">
				{{ __('You can attempt this quiz {0}.').format(
					quiz.data.max_attempts == 1 ? '1 time' : `${quiz.data.max_attempts} times`
				) }}
			</div>
		</div>

		<!-- Timer & Progress -->
		<div v-if="quiz.data.duration" class="flex flex-col space-x-1 my-4">
			<div class="mb-2">
				<span>{{ __('Time') }}:</span>
				<span class="font-semibold">{{ formatTimer(timer) }}</span>
			</div>
			<ProgressBar :progress="(answeredQuestions.length / questions.length) * 100" />
		</div>

		<!-- Start Screen -->
		<div v-if="activeQuestion == 0">
			<div class="border text-center p-20 rounded-md">
				<div class="font-semibold text-lg text-ink-gray-9">
					{{ quiz.data.title }}
				</div>
				<Button v-if="!quiz.data.max_attempts || attempts.data?.length < quiz.data.max_attempts" @click="startQuiz" class="mt-2 course-nav-btn" >
					<span>{{ __('Start') }}</span>
				</Button>
				<div v-else class="leading-5 text-ink-gray-7">
					{{ __('You have already exceeded the maximum number of attempts allowed for this quiz.') }}
				</div>
			</div>
		</div>

		<!-- Question Screen -->
		<div v-else-if="!quizSubmission.data">
			<div v-for="(question, qtidx) in questions">
				<div v-if="qtidx == activeQuestion - 1 && questionDetails.data" class="border rounded-md p-5">
					<!-- Question Header -->
					<div class="flex justify-between">
						<div class="text-sm text-ink-gray-5">
							<span class="mr-2">{{ __('Question {0}').format(activeQuestion) }}:</span>
							<span>{{ getInstructions(questionDetails.data) }}</span>
						</div>
						<div class="text-ink-gray-9 text-sm font-semibold item-left">
							{{ question.marks }}
							{{ question.marks == 1 ? __('Mark') : __('Marks') }}
						</div>
					</div>

					<!-- Question Body -->
					<div class="text-ink-gray-9 font-semibold mt-2 leading-5" v-html="questionDetails.data.question"></div>


					<!-- Choices -->
					<!-- Choices -->
					<div v-if="questionDetails.data.type == 'Choices'">
						<div v-for="index in 4" :key="index">
							<!-- ANSWERING -->
							<label
								v-if="!showAnswers.length && questionDetails.data[`option_${index}`]"
								class="flex items-center bg-surface-gray-3 rounded-md p-3 mt-4 w-full cursor-pointer">
								
								<input
									v-if="!questionDetails.data.multiple"
									type="radio"
									:name="encodeURIComponent(questionDetails.data.question)"
									class="w-3.5 h-3.5 text-ink-gray-9"
									@click="toggleSingleOption(index)"
									:checked="selectedOptions[index - 1]"
								/>
								
								<input
									v-else
									type="checkbox"
									:name="encodeURIComponent(questionDetails.data.question)"
									class="w-3.5 h-3.5 text-ink-gray-9 rounded-sm"
									@change="markAnswer(index)"
									:checked="selectedOptions[index - 1]"
								/>
								
								<span class="ml-2" v-html="questionDetails.data[`option_${index}`]"></span>
							</label>

							<!-- REVIEWING / SHOW ANSWERS -->
							<div
								v-else-if="showAnswers.length && questionDetails.data[`option_${index}`]"
								class="flex items-center bg-surface-gray-3 rounded-md p-3 mt-4 w-full">
								
								<span class="mr-2">
									<CheckCircle v-if="showAnswers[index - 1] == 1" class="w-4 h-4 text-ink-green-2" />
									<MinusCircle v-else-if="showAnswers[index - 1] == 2" class="w-4 h-4 text-ink-green-2" />
									<XCircle v-else-if="showAnswers[index - 1] == 0" class="w-4 h-4 text-ink-red-3" />
									<MinusCircle v-else class="w-4 h-4" />
								</span>
								
								<span v-html="questionDetails.data[`option_${index}`]"></span>
							</div>

							<!-- Explanation -->
							<div
								v-if="questionDetails.data[`explanation_${index}`]"
								class="mt-2 text-xs"
								v-show="showAnswers.length">
								{{ questionDetails.data[`explanation_${index}`] }}
							</div>
						</div>
					</div>


					<!-- User Input -->
					<div v-else-if="questionDetails.data.type == 'User Input'">
						<FormControl v-model="possibleAnswer" type="textarea" :disabled="!!showAnswers.length" class="my-2" />
						<div v-if="showAnswers.length">
							<Badge v-if="showAnswers[0]" :label="__('Correct')" theme="green">
								<template #prefix><CheckCircle class="w-4 h-4 text-ink-green-2 mr-1" /></template>
							</Badge>
							<Badge v-else theme="red" :label="__('Incorrect')">
								<template #prefix><XCircle class="w-4 h-4 text-ink-red-3 mr-1" /></template>
							</Badge>
						</div>
					</div>

					<!-- Open Ended -->
					<div v-else>
						<TextEditor class="mt-4" :content="possibleAnswer" @change="(val) => (possibleAnswer = val)" :editable="true" :fixedMenu="true" editorClass="prose-sm max-w-none border-b border-x bg-surface-gray-2 rounded-b-md py-1 px-2 min-h-[7rem]" />
					</div>

					<!-- Navigation Buttons -->
					<div class="question-count-text flex items-center justify-between mt-4">
						<div class="question-count-text text-sm text-ink-gray-5">
						{{ __('Question {0} of {1}').format(activeQuestion, questions.length) }}
					</div>

						<div class="flex space-x-2">
							<Button v-if="activeQuestion > 1" @click="prevQuestion" variant="outline" class="course-nav-btn">
								<span>{{ __('Previous') }}</span>
							</Button>
							<Button v-if="activeQuestion < questions.length" @click="skipQuestion" variant="outline" class="course-nav-btn">
								<span>{{ __('Skip') }}</span>
							</Button>
							<Button
								v-if="quiz.data.show_answers && !showAnswers.length && questionDetails.data.type != 'Open Ended'"
								@click="checkAnswer"
								class="course-nav-btn"
								>
								<span>{{ __('Check') }}</span>
							</Button>
							<Button v-else-if="activeQuestion != questions.length" @click="nextQuestion()" class="course-nav-btn">
								<span>{{ __('Next') }}</span>
							</Button>
							<Button v-else @click="submitQuiz()" class="course-nav-btn" :disabled="quizCompleted">
								<span>{{ __('Submit') }}</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Quiz Summary -->
		<div v-else class="border rounded-md p-20 text-center space-y-2">
			<div class="text-lg font-semibold text-ink-gray-9">
				<!-- {{ __('Quiz Summary') }} -->
			</div>
			<div v-if="quizSubmission.data.is_open_ended" class="leading-5 text-ink-gray-7">
				{{ __('Your submission has been successfully saved. The instructor will review and grade it shortly, and you\'ll be notified of your final result.') }}
			</div>
			<div v-else>
				<template v-if="quizCompleted">
					<template v-if="isPassed">
						<div class="results-container">
							<div class="results-title">Your Results</div>
							<div class="congratulations">Congratulations!</div>
							<div class="passing-text">You've met the passing criteria and are now eligible to receive your certificate.</div>
						<div class="font-semibold text-ink-green-7">
							
							{{ __('You got {0}% correct answers with a score of {1} out of {2}.').format(
								Math.ceil(quizSubmission.data.percentage),
								quizSubmission.data.score,
								quizSubmission.data.score_out_of
							) }}
						</div>
						
						<div class="mt-2">
						<Button
						v-if="certification.data && certification.data.certificate"
						class="certificate-button"
						@click="downloadCertificate"
						>
						<template #prefix>
							<GraduationCap class="size-4 stroke-1.5" />
						</template>
						{{ __('View Certificate') }}
						</Button>


							<router-link
								v-else-if="certification?.data?.membership && certification?.data?.paid_certificate && user?.data?.is_student && !certification.data.membership.purchased_certificate"
								:to="{ name: 'Billing', params: { type: 'certificate', name: courseName } }"
							>
								<Button>
								<span>{{ __('Get Certified') }}</span>
								</Button>
							</router-link>

							<router-link
								v-else-if="certification?.data?.membership && certification?.data?.paid_certificate && user?.data?.is_student && !certification.data.membership.certificate"
								:to="{ name: 'CourseCertification', params: { courseName: courseName } }"
							>
								<Button>
								<span>{{ __('Get Certified') }}</span>
								</Button>
							</router-link>
							</div>

							</div>

					</template>
					<template v-else>
						<div class="results-container">
						<div class="results-title">Your Results</div>
						<div class="congratulations">Try Again - You've Got This!</div>
						<div class="text-ink-red-6">
							{{ __('You got {0}% correct answers with a score of {1} out of {2}.').format(
								Math.ceil(quizSubmission.data.percentage),
								quizSubmission.data.score,
								quizSubmission.data.score_out_of
							) }}
						</div>
						<div class="mt-1 text-sm text-ink-gray-7">
							{{ __('Unfortunately,this does not meet the passing criteria for the certifciate') }}
						</div>
						<Button @click="resetQuiz()" class="mt-2 course-nav-btn" v-if="!quiz.data.max_attempts || attempts?.data.length < quiz.data.max_attempts">
							<span>{{ __('Try Again') }}</span>
						</Button>
						</div>
					</template>
				</template>
			</div>
		</div>

		<!-- Submission History -->
		<div v-if="quiz.data.show_submission_history && attempts?.data && attempts.data.length > 0" class="mt-10">
			<ListView
				:columns="getSubmissionColumns()"
				:rows="attempts?.data"
				row-key="name"
				:options="{
					selectable: false,
					showTooltip: false,
					emptyState: { title: __('No Quiz submissions found') },
				}"
			/>
		</div>
	</div>
</template>


<script setup>
import {
	Badge,
	Button,
	call,
	createResource,
	ListView,
	TextEditor,
	FormControl,
	toast,
} from 'frappe-ui'
import { ref, watch, reactive, inject, computed ,nextTick} from 'vue'
import { CheckCircle, XCircle, MinusCircle ,GraduationCap} from 'lucide-vue-next'
import { timeAgo } from '@/utils'
import { useRouter } from 'vue-router'
import ProgressBar from '@/components/ProgressBar.vue'

const user = inject('$user')
const quizCompleted = ref(false)
const activeQuestion = ref(0)
const currentQuestion = ref('')
const selectedOptions = reactive([0, 0, 0, 0])
const showAnswers = reactive([])
let questions = reactive([])
const possibleAnswer = ref(null)
const timer = ref(0)
let timerInterval = null
const router = useRouter()

const props = defineProps({
	quizName: {
		type: String,
		required: true,
	},
})

const quiz = createResource({
	url: 'frappe.client.get',
	makeParams(values) {
		return {
			doctype: 'LMS Quiz',
			name: props.quizName,
		}
	},
	cache: ['quiz', props.quizName],
	auto: true,
	transform(data) {
		data.duration = parseInt(data.duration)
	},
	onSuccess(data) {
		populateQuestions()
		setupTimer()
	},
})

const populateQuestions = () => {
	let data = quiz.data
	if (data.shuffle_questions) {
		questions = shuffleArray(data.questions)
		if (data.limit_questions_to) {
			questions = questions.slice(0, data.limit_questions_to)
		}
	} else {
		questions = data.questions
	}
}

const setupTimer = () => {
	if (quiz.data.duration) {
		const saved = parseInt(localStorage.getItem(`${quiz.data.title}_${user.data.name}-timer`))

		if (!isNaN(saved)) {
			if (saved <= 0) {
				console.log('💥 Timer expired. Auto-submitting on load...')
				submitQuiz()
			} else {
				timer.value = saved
				startTimer()
			}
		} else {
			timer.value = quiz.data.duration * 60
			startTimer()
		}
	}
}



const startTimer = () => {
	if (timerInterval) clearInterval(timerInterval) 

	timerInterval = setInterval(() => {
		if (timer.value > 0) {
			timer.value--
			localStorage.setItem(`${quiz.data.title}_${user.data.name}-timer`, timer.value)
		} else {
			clearInterval(timerInterval)
			submitQuiz()
		}
	}, 1000)
}



const formatTimer = (seconds) => {
	const hrs = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, '0')
	const mins = Math.floor((seconds % 3600) / 60)
		.toString()
		.padStart(2, '0')
	const secs = (seconds % 60).toString().padStart(2, '0')
	return hrs != '00' ? `${hrs}:${mins}:${secs}` : `${mins}:${secs}`
}

const timerProgress = computed(() => {
	return (timer.value / (quiz.data.duration * 60)) * 100
})

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const attempts = createResource({
	url: 'frappe.client.get_list',
	makeParams(values) {
		return {
			doctype: 'LMS Quiz Submission',
			filters: {
				member: user.data?.name,
				quiz: quiz.data?.name,
			},
			fields: [
				'name',
				'creation',
				'score',
				'score_out_of',
				'percentage',
				'passing_percentage',
			],
			order_by: 'creation desc',
		}
	},
	transform(data) {
		data.forEach((submission, index) => {
			submission.creation = timeAgo(submission.creation)
			submission.idx = index + 1
		})
	},
})

const answeredQuestions = computed(() => {
  const saved = JSON.parse(localStorage.getItem(`${quiz.data?.title}_${user.data?.name}`) || '[]');
  return saved.map(q => q.question_name);
});
watch(
  () => quiz.data,
  () => {
    if (quiz.data) {
		localStorage.setItem('quizTitle', quiz.data.title);
        console.log('✅ Saved quizTitle to localStorage:', quiz.data.title);
      populateQuestions();
let savedAnswers = JSON.parse(localStorage.getItem(`${quiz.data.title}_${user.data?.name}`) || '[]');
let lastIndex = parseInt(localStorage.getItem(`${quiz.data.title}_${user.data?.name}-active-question`) || '0');
if (lastIndex && lastIndex > 0 && lastIndex <= questions.length) {
  activeQuestion.value = lastIndex;
  console.log(`Resuming at question ${activeQuestion.value}`);
} else if (savedAnswers.length > 0) {
  activeQuestion.value = savedAnswers.length + 1;
  console.log(`Auto-resume to question ${activeQuestion.value} (from saved answers)`);
}
      if (quiz.data.duration) {
        setupTimer();
      }

      if (quiz.data && quiz.data.max_attempts) {
        attempts.reload();
        resetQuiz();
      }
    }
  }
)
const quizSubmission = createResource({
	url: 'lms.lms.doctype.lms_quiz.lms_quiz.quiz_summary',
	makeParams(values) {
		return {
			quiz: quiz.data.name,
			results: localStorage.getItem(`${quiz.data.title}_${user.data.name}`),
		}
	},
})

watch(() => quiz.data, (newData) => {
  if (!newData) return;

  const completedKey = `${quiz.data.title}_${user.data.name}-completed`;
  const resultKey = `${quiz.data.title}_${user.data.name}-result`;

  if (localStorage.getItem(completedKey) === 'true') {
    quizCompleted.value = true;

    const resultData = JSON.parse(localStorage.getItem(resultKey) || '{}');

    // Set quizSubmission.data manually so your template renders correctly
    quizSubmission.data = {
      percentage: resultData.percentage,
      score: resultData.score,
      score_out_of: resultData.score_out_of,
    };

    return;
  }

  // Resume unfinished quiz
  let quizData = JSON.parse(localStorage.getItem(`${quiz.data.title}_${user.data.name}`) || '[]');
  if (quizData.length) {
    activeQuestion.value = quizData.length + 1;
  }
});



const questionDetails = createResource({
	url: 'lms.lms.utils.get_question_details',
	makeParams(values) {
		return {
			question: currentQuestion.value,
		}
	},
})
watch(activeQuestion, (value) => {
	if (value > 0) {
		currentQuestion.value = quiz.data.questions[value - 1].question
		questionDetails.reload()
		 // NEW: Save active question to localStorage
    localStorage.setItem(`${quiz.data.title}_${user.data.name}-active-question`, value);
	}
})


watch(activeQuestion, () => {
	loadAnswerFromLocalStorage();
});



watch(
	() => props.quizName,
	(newName) => {
		if (newName) {
			quiz.reload()
		}
	}
)

watch(
  () => questionDetails.data,
  (data) => {
    if (data) {
      loadSavedAnswer();
    }
  }
);
const startQuiz = () => {
  let quizData = JSON.parse(localStorage.getItem(`${quiz.data.title}_${user.data.name}`) || '[]')
  if (quizData.length && quizData.length < questions.length) {
    activeQuestion.value = quizData.length + 1
    console.log(`Resuming at question ${activeQuestion.value}`)
  } else {
    activeQuestion.value = 1
    localStorage.removeItem(`${quiz.data.title}_${user.data.name}`)
    localStorage.removeItem(`${quiz.data.title}_${user.data.name}-active-question`)
    console.log('Starting fresh at question 1')
  }
  if (quiz.data.duration) startTimer()
}


const markAnswer = (index) => {
	if (!questionDetails.data.multiple)
		selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
	selectedOptions[index - 1] = selectedOptions[index - 1] ? 0 : 1

	saveAnswerToLocalStorage(); 
}


const toggleSingleOption = (index) => {
	const isAlreadySelected = selectedOptions[index - 1] === 1;
	selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0]);
	// If it wasn't selected, select it
	if (!isAlreadySelected) {
		selectedOptions[index - 1] = 1;
	}
	saveAnswerToLocalStorage(); // ← Save after select/unselect
};



const getAnswers = () => {
	let answers = []
	const type = questionDetails.data.type

	if (type == 'Choices') {
		selectedOptions.forEach((value, index) => {
			if (selectedOptions[index])
				answers.push(questionDetails.data[`option_${index + 1}`])
		})
	} else {
		answers.push(possibleAnswer.value)
	}

	return answers
}


const checkAnswer = () => {
	let answers = getAnswers()
	if (!answers.length) {
		toast.error(__('Please select an option'))
		return
	}

	createResource({
		url: 'lms.lms.doctype.lms_quiz.lms_quiz.check_answer',
		params: {
			question: currentQuestion.value,
			type: questionDetails.data.type,
			answers: JSON.stringify(answers),
		},
		auto: true,
		onSuccess(data) {
			let type = questionDetails.data.type
			if (type == 'Choices') {
				selectedOptions.forEach((option, index) => {
					if (option) {
						showAnswers[index] = option && data[index]
					} else if (data[index] == 2) {
						showAnswers[index] = 2
					} else {
						showAnswers[index] = undefined
					}
				})
			} else {
				showAnswers.push(data)
			}
			addToLocalStorage()
			if (!quiz.data.show_answers) {
				resetQuestion()
			}
		},
	})
}

const addToLocalStorage = () => {
  let quizData = localStorage.getItem(`${quiz.data.title}_${user.data.name}`)
  let parsedData = quizData ? JSON.parse(quizData) : []

  const answer = getAnswers().join().trim()


	if (!answer) {
	console.log('Skipping save for empty answer!');
	return;
	}

  let questionData = {
    question_name: currentQuestion.value,
    answer: answer,
    is_correct: showAnswers.filter((answer) => answer != undefined),
  }

  const existingIndex = parsedData.findIndex(q => q.question_name === currentQuestion.value)
  if (existingIndex !== -1) {
    parsedData[existingIndex] = questionData
  } else {
    parsedData.push(questionData)
  }

  localStorage.setItem(`${quiz.data.title}_${user.data.name}`, JSON.stringify(parsedData))
  console.log('Saved to localStorage', parsedData)
}



const loadSavedAnswer = () => {
  const quizDataRaw = localStorage.getItem(`${quiz.data?.title}_${user.data?.name}`);
  if (!quizDataRaw) return;

  const quizData = JSON.parse(quizDataRaw);
  const thisAnswer = quizData.find(item => item.question_name === currentQuestion.value);

  if (!thisAnswer) return;

  const type = questionDetails.data.type;

  if (type === 'Choices') {
    // Reset first
    selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0]);

    for (let i = 0; i < 4; i++) {
      const optionText = questionDetails.data[`option_${i + 1}`];
      if (optionText && thisAnswer.answer.includes(optionText)) {
        selectedOptions[i] = 1;
      }
    }

  } else if (type === 'User Input' || type === 'Open Ended') {
    possibleAnswer.value = thisAnswer.answer;
  }

  console.log('Restored answer from localStorage:', thisAnswer);
};



const saveProgressToServer = () => {
 let quizData = localStorage.getItem(`${quiz.data.title}_${user.data.name}`)

  if (!quizData) {
    console.log('No quiz data in localStorage. Nothing to save.')
    return
  }

  console.log('Sending progress to server:', {
    user: user.data.name,
    quiz: quiz.data.name,
    current_question_index: activeQuestion.value,

    answers: quizData
  })

  call('lms.lms.lms.api.save_quiz_progress', {
    user: user.data.name,
    quiz: quiz.data.name,
    current_question_index: activeQuestion.value,
    answers: quizData
  }).then(() => {
    console.log('Progress saved to server')
  }).catch(err => {
    console.error('Failed to save progress', err)
  })
}






const nextQuestion = () => {
  // Validation for Choices type
  if (
    questionDetails.data?.type === 'Choices' &&
    !selectedOptions.some(val => val === 1)
  ) {
    alert(__('Please answer this question or click Skip.'));
    return;
  }

  // Validation for User Input type
  if (
    questionDetails.data?.type === 'User Input' &&
    !possibleAnswer.value?.trim()
  ) {
    alert(__('Please answer this question or click Skip.'));
    return;
  }

  // Save answers
  if (questionDetails.data?.type === 'Open Ended') {
    addToLocalStorage();
  } else if (!quiz.data.show_answers) {
    checkAnswer();
  }
  saveProgressToServer();
}




const resetQuestion = () => {
  if (activeQuestion.value < questions.length) {
    activeQuestion.value += 1
  }
  selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
  showAnswers.length = 0
  possibleAnswer.value = null
}



const prevQuestion = () => {
	if (activeQuestion.value > 1) {
		activeQuestion.value -= 1
		selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
		showAnswers.length = 0
		possibleAnswer.value = null
	}
}



const skipQuestion = () => {
	debugger;
  const quizKey = `${quiz.data.name}_${user.data.name}` || 'default_quiz';
	const currentQuestion = quiz.data.questions[activeQuestion.value];
	const questionKey = currentQuestion?.name || `q${activeQuestion.value}`;
	const storageKey = `quiz_${quizKey}_question_${questionKey}`;

	let answers = getAnswers();
	if (!answers.length || answers.every(a => !a.trim())) {
		console.log('User is skipping without answering. Nothing to save.');

		
		localStorage.removeItem(storageKey);
	} else {
		
		saveAnswerToLocalStorage();
	}

	 if (activeQuestion.value < quiz.data.questions.length) {
		activeQuestion.value += 1;
		selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0]);
		showAnswers.length = 0;
		possibleAnswer.value = null;
  }

	saveProgressToServer();
};



const submitQuiz = () => {
  // Fallback: Get userAnswers from localStorage if not defined
  let userAnswers = window.userAnswers || JSON.parse(localStorage.getItem('userAnswers') || '{}')

  if (!quiz.data.show_answers) {
    if (questionDetails.data.type === 'Open Ended') {
      addToLocalStorage()
    } else {
      const answers = getAnswers()
      if (!answers.length) {
        // Just mark the current question as skipped
        addToLocalStorage()
        console.log(" Skipped: No option selected for this question")
      } else {
        checkAnswer()
      }
    }
  }

  // Mark quiz as completed in localStorage
  localStorage.setItem('quizCompleted', 'true')

  // Re-fetch userAnswers from localStorage in case new entries were added
  userAnswers = JSON.parse(localStorage.getItem('userAnswers') || '{}')

  // Calculate result
  const totalQuestions = quiz.data.questions.length
  const attempted = Object.keys(userAnswers).length
  const correct = Object.values(userAnswers).filter(ans => ans.isCorrect).length
  const incorrect = attempted - correct
  const skipped = totalQuestions - attempted
  const score = ((correct / totalQuestions) * 100).toFixed(2)

  
  // Save result to localStorage
  localStorage.setItem('quizResult', JSON.stringify({
    correct,
    incorrect,
    skipped,
    score
  }))

  clearQuizAnswersFromLocalStorage();
  createSubmission()



}


const createSubmission = () => {
  quizSubmission.submit(
    {},
    {
      onSuccess(data) {
        markLessonProgress();
        quizCompleted.value = true;

        // Store completed state
        const completedKey = `${quiz.data.title}_${user.data.name}-completed`;
        const resultKey = `${quiz.data.title}_${user.data.name}-result`;

        localStorage.setItem(completedKey, 'true');

        // Store result object as JSON (includes percentage, score, score_out_of)
        const resultToStore = {
          percentage: data.percentage,
          score: data.score,
          score_out_of: data.score_out_of,
        };
        localStorage.setItem(resultKey, JSON.stringify(resultToStore));

        if (quiz.data && quiz.data.max_attempts) attempts.reload();
        if (quiz.data.duration) clearInterval(timerInterval);
      },
      onError(err) {
        const errorTitle = err?.message || '';
        if (errorTitle.includes('MaximumAttemptsExceededError')) {
          const errorMessage = err.messages?.[0] || err;
          toast.error(__(errorMessage));
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      },
    }
  );
};


const resetQuiz = () => {
	quizCompleted.value = false;
	localStorage.removeItem(`${quiz.data.title}_${user.data.name}-completed`);
  activeQuestion.value = 0
  selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
  showAnswers.length = 0
  quizSubmission.reset()
  localStorage.removeItem(`${quiz.data.title}_${user.data.name}`);
localStorage.removeItem(`${quiz.data.title}_${user.data.name}-active-question`);

localStorage.removeItem(`${quiz.data.title}_${user.data.name}-timer`)
	if (timerInterval) clearInterval(timerInterval)
	timer.value = quiz.data.duration * 60

  populateQuestions();
  setupTimer();
};


const getInstructions = (question) => {
	if (question.type == 'Choices')
		if (question.multiple) return __('Choose all answers that apply')
		else return __('Choose one answer')
	else return __('Type your answer')
}

const markLessonProgress = () => {
	if (router.currentRoute.value.name == 'Lesson') {
		call('lms.lms.api.mark_lesson_progress', {
			course: router.currentRoute.value.params.courseName,
			chapter_number: router.currentRoute.value.params.chapterNumber,
			lesson_number: router.currentRoute.value.params.lessonNumber,
		})
	}
}

const getSubmissionColumns = () => {
	return [
		{
			label: 'No.',
			key: 'idx',
		},
		{
			label: 'Date',
			key: 'creation',
		},
		{
			label: 'Score',
			key: 'score',
			align: 'center',
		},
		{
			label: 'Score out of',
			key: 'score_out_of',
			align: 'center',
		},
		{
			label: 'Percentage',
			key: 'percentage',
			align: 'center',
		},
	]
}
/* for getting certifictae if got more than 60% else not */

// Assuming you want to use quiz.data.passing_percentage dynamically
const isPassed = computed(() => {
  if (!quizSubmission.data || !quiz.data) return false;
  const userPercentage = quizSubmission.data.percentage;
  const requiredPercentage = quiz.data.passing_percentage || 80;

  console.log('DEBUG isPassed:', {
    userPercentage,
    requiredPercentage,
    result: userPercentage >= requiredPercentage
  });

  return userPercentage >= requiredPercentage;
});

// Example: Check if the user already has a certificate
// Replace with your actual field if available!
const hasCertificate = computed(() => {
  console.log('DEBUG certificateIssued:', quizSubmission.data?.certificate_issued);
  return !!quizSubmission.data?.certificate_issued;
});




// Inject user




// 👇 Dynamic params with reactive binding!
const certification = createResource({
  url: 'lms.lms.api.get_certification_details',
  params: computed(() => ({
    course: props.courseName
  })),
  auto: user.data ? true : false,
  cache: ['certificationData', user.data?.name]
})

// Download button action
const downloadCertificate = () => {
  if (!certification.data?.certificate) {
    console.warn('No certificate found!');
    return;
  }

  const cert = certification.data.certificate;
  const url = `/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${cert.name}&format=${encodeURIComponent(cert.template)}`;
  window.open(url);
}


// watch(() => quizSubmission?.data, async (newVal) => {
// 	if (
// 		newVal &&
// 		newVal.percentage < quiz.data.passing_percentage // fixed key name
// 	) {
// 		await nextTick(); // wait for DOM to render the failure message
// 		resetQuiz(); // auto-restart
// 	}
// });




// Save answer using unique key
const saveAnswerToLocalStorage = () => {
	const quizKey = `${quiz.data.name}_${user.data.name}` || 'default_quiz';
	const questionKey = quiz.data.questions[activeQuestion.value]?.name || `q${activeQuestion.value}`;
	const key = `quiz_${quizKey}_question_${questionKey}`;
	const data = {
		selectedOptions: [...selectedOptions],
		possibleAnswer: possibleAnswer.value || ''
	};
	localStorage.setItem(key, JSON.stringify(data));
};

// Load answer from localStorage
const loadAnswerFromLocalStorage = () => {
	const quizKey = `${quiz.data.name}_${user.data.name}` || 'default_quiz';
	const questionKey = quiz.data.questions[activeQuestion.value]?.name || `q${activeQuestion.value}`;
	const key = `quiz_${quizKey}_question_${questionKey}`;
	const data = localStorage.getItem(key);

	if (data) {
		const parsed = JSON.parse(data);
		if (Array.isArray(parsed.selectedOptions)) {
			selectedOptions.splice(0, selectedOptions.length, ...parsed.selectedOptions);
		}
		if (typeof parsed.possibleAnswer === 'string') {
			possibleAnswer.value = parsed.possibleAnswer;
		}
	} else {
		selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0]);
		possibleAnswer.value = '';
	}
};

// Clear all answers after quiz completion
const clearQuizAnswersFromLocalStorage = () => {
	const quizKey = `${quiz.data.name}_${user.data.name}` || 'default_quiz';
	quiz.data.questions.forEach(q => {
		const key = `quiz_${quizKey}_question_${q.name}`;
		localStorage.removeItem(key);
	});
};



watch(quiz, (newVal) => {
  if (newVal?.data) {
    console.log("Slug:", newVal.data.course, " | Name:", newVal.data.course_name || newVal.data.title);
  }
});


watch(
  () => quizCompleted.value && isPassed.value,
  (passed) => {
    if (passed) {
	  createCertificate(quiz); 
    } else {
      console.log("❌ User has not passed (or quiz not completed yet)");
    }
  }
);


function getCookieValue(name) {
debugger;
    const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
    return value ? decodeURIComponent(value) : null;
}


async function createCertificate(quiz) {   
    try {
        const userId = getCookieValue('user_id');
        if (!userId) {
            throw new Error("User ID not found in cookies");
        }

        if (!quiz?.data?.course) {
            throw new Error("Course slug not found in quiz data");
        }

        const courseSlug = quiz.data.course;        
        const courseName = quiz.data.course_name || quiz.data.title;  
        console.log("Slug:", courseSlug, "| Name:", courseName);

        const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token', {
            method: 'GET',
            credentials: 'include'
        });
        const csrfToken = (await csrfRes.json()).message;
        console.log("CSRF Token:", csrfToken);

        const createRes = await fetch('/api/method/frappe.client.insert', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Frappe-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
                doc: {
                    doctype: "LMS Certificate",
                    issue_date: "2025-08-18",
                    expiry_date: "2025-08-31",
                    batch_name: "lms-certification-batch",
                    course: courseSlug,   
                    evaluator: "chetan.a@evoluteiq.com",
                    member: userId,
                    published: true,
                    template: "LMS Certificate"
                }
            })
        });
        const data = await createRes.json();
        console.log("Certificate creation response:", data);

    } catch (error) {
        console.error("Error creating certificate:", error);
    }
}



</script>

<style>

.question-count-text {
	color: #ff4602 !important;
	font-weight: 600;
	font-size: 14px;
}


.course-nav-btn {
	background-color: #ff4602 !important;
	color: #fff !important;
	font-weight: 600;
	box-shadow: 0 2px 6px #00000026;
	border-radius: 6px;
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.course-nav-btn:hover {
	background-color: #e04300 !important; /* slightly darker orange */
	box-shadow: 0 4px 10px #00000040; /* stronger shadow on hover */
}


/* Hides the avatar group when inside .flex.items-center.mt-2 */
.flex.items-center.mt-2 span.h-6.mr-1.avatar-group.overlap {
    display: none;
}



/* Hides the name text when inside .flex.items-center.mt-2 */
.flex.items-center.mt-2 .text-ink-gray-7 {
    display: none;
}

.flex.items-center.space-x-2.mt-2.md\:mt-0 > button:first-child {
      display: none;
    }


.bg-surface-menu-bar > .w-full.bg-surface-gray-3 {
  display: none;
}


.sticky.top-10 > .bg-surface-menu-bar {
  display: none;
}


p {
	line-height: 1.5rem;
}


button#headlessui-disclosure-button-v-16 {
    display: none !important;
}


div#headlessui-disclosure-panel-v-17 {
    display: none !important;
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
html,
body {
    overflow: hidden !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}

/* Make sure your Vue app wrapper or root container stretches fully */
#app, 
[v-cloak], 
.quiz-container {
    height: 100% !important;
    overflow: hidden !important;
    display: flex;
    flex-direction: column;
}

/* Optional: Prevent scrolling inside internal elements */
* {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}

*::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}




.results-container {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 40px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .results-title {
            font-size: 36px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
        }
        
        .congratulations {
            font-size: 28px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
        }
        
        .score-text {
            font-size: 20px;
            color: #1f2937;
            margin-bottom: 10px;
        }
        
        .passing-text {
            font-size: 18px;
            color: #1f2937;
        }
        
        .font-semibold {
            font-weight: 600;
        }
        
        .text-ink-green-7 {
            color: #059669;
        }
        
        .mt-2 {
            margin-top: 8px;
        }
        
        .certificate-button {
            background-color: #ff4602;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.2s;
        }
        
        .certificate-button:hover {
            background-color: #2563eb;
        }
        
        .button-icon {
            font-size: 16px;
        }

.relative.inline-block.shrink-0.w-6.h-6.rounded-full.avatar.border.border-outline-gray-2.cursor-auto
 {
    display: none;
}
</style>
