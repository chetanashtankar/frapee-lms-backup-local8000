<template>
	<div v-if="quiz.data">
		<div class="bg-surface-blue-2 space-y-1 py-2 px-2 mb-4 rounded-md text-sm text-ink-blue-3">
			<div class="leading-5">
				{{
					__('This quiz consists of {0} questions.').format(questions.length)
				}}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{
					__(
						'Please ensure that you complete all the questions in {0} minutes.'
					).format(quiz.data.duration)
				}}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{
					__(
						'If you fail to do so, the quiz will be automatically submitted when the timer ends.'
					)
				}}
			</div>
			<div v-if="quiz.data.passing_percentage" class="leading-relaxed">
				{{
					__(
						'You will have to get {0}% correct answers in order to pass the quiz.'
					).format(quiz.data.passing_percentage)
				}}
			</div>
			<div v-if="quiz.data.max_attempts" class="leading-5">
				{{
					__('You can attempt this quiz {0}.').format(
						quiz.data.max_attempts == 1
							? '1 time'
							: `${quiz.data.max_attempts} times`
					)
				}}
			</div>
		</div>

		<div v-if="quiz.data.duration" class="flex flex-col space-x-1 my-4">
			<div class="mb-2">
				<span class=""> {{ __('Time') }}: </span>
				<span class="font-semibold">
					{{ formatTimer(timer) }}
				</span>
			</div>
			<ProgressBar :progress="(answeredQuestions.length / questions.length) * 100" />

		</div>
		
		<div v-if="activeQuestion == 0">
			<div class="border text-center p-20 rounded-md">
				<div class="font-semibold text-lg text-ink-gray-9">
					{{ quiz.data.title }}
				</div>
				<Button v-if="
					!quiz.data.max_attempts ||
					attempts.data?.length < quiz.data.max_attempts
				" @click="startQuiz" class="mt-2">
					<span>
						{{ __('Start') }}
					</span>
				</Button>
				<div v-else class="leading-5 text-ink-gray-7">
					{{
						__(
							'You have already exceeded the maximum number of attempts allowed for this quiz.'
						)
					}}
				</div>
			</div>
		</div>
		
		<div v-else-if="!quizSubmission.data">
			<div v-for="(question, qtidx) in questions">
				<div v-if="qtidx == activeQuestion - 1 && questionDetails.data" class="border rounded-md p-5">
					<div class="flex justify-between">
						<div class="text-sm text-ink-gray-5">
							<span class="mr-2">
								{{ __('Question {0}').format(activeQuestion) }}:
							</span>
							<span>
								{{ getInstructions(questionDetails.data) }}
							</span>
						</div>
						<div class="text-ink-gray-9 text-sm font-semibold item-left">
							{{ question.marks }}
							{{ question.marks == 1 ? __('Mark') : __('Marks') }}
						</div>
					</div>
					<div class="text-ink-gray-9 font-semibold mt-2 leading-5" v-html="questionDetails.data.question">
					</div>
					<div v-if="questionDetails.data.type == 'Choices'" v-for="index in 4">
						<label v-if="questionDetails.data[`option_${index}`]"
							class="flex items-center bg-surface-gray-3 rounded-md p-3 mt-4 w-full cursor-pointer focus:border-blue-600">
							<input
								v-if="!showAnswers.length && !questionDetails.data.multiple"
								type="radio"
								:name="encodeURIComponent(questionDetails.data.question)"
								class="w-3.5 h-3.5 text-ink-gray-9 focus:ring-outline-gray-modals"
								@change="markAnswer(index)"
								:checked="selectedOptions[index - 1]"
								/>

								<input
								v-else-if="!showAnswers.length && questionDetails.data.multiple"
								type="checkbox"
								:name="encodeURIComponent(questionDetails.data.question)"
								class="w-3.5 h-3.5 text-ink-gray-9 rounded-sm focus:ring-outline-gray-modals"
								@change="markAnswer(index)"
								:checked="selectedOptions[index - 1]"
								/>

							<div v-else-if="quiz.data.show_answers" v-for="(answer, idx) in showAnswers">
								<div v-if="index - 1 == idx">
									<CheckCircle v-if="answer == 1" class="w-4 h-4 text-ink-green-2" />
									<MinusCircle v-else-if="answer == 2" class="w-4 h-4 text-ink-green-2" />
									<XCircle v-else-if="answer == 0" class="w-4 h-4 text-ink-red-3" />
									<MinusCircle v-else class="w-4 h-4" />
								</div>
							</div>
							<span class="ml-2" v-html="questionDetails.data[`option_${index}`]">
							</span>
						</label>
						<div v-if="questionDetails.data[`explanation_${index}`]" class="mt-2 text-xs"
							v-show="showAnswers.length">
							{{ questionDetails.data[`explanation_${index}`] }}
						</div>
					</div>
					<div v-else-if="questionDetails.data.type == 'User Input'">
						<FormControl v-model="possibleAnswer" type="textarea"
							:disabled="showAnswers.length ? true : false" class="my-2" />
						<div v-if="showAnswers.length">
							<Badge v-if="showAnswers[0]" :label="__('Correct')" theme="green">
								<template #prefix>
									<CheckCircle class="w-4 h-4 text-ink-green-2 mr-1" />
								</template>
							</Badge>
							<Badge v-else theme="red" :label="__('Incorrect')">
								<template #prefix>
									<XCircle class="w-4 h-4 text-ink-red-3 mr-1" />
								</template>
							</Badge>
						</div>
					</div>
					<div v-else>
						<TextEditor class="mt-4" :content="possibleAnswer" @change="(val) => (possibleAnswer = val)"
							:editable="true" :fixedMenu="true"
							editorClass="prose-sm max-w-none border-b border-x bg-surface-gray-2 rounded-b-md py-1 px-2 min-h-[7rem]" />
					</div>



					<!-- <div class="flex items-center justify-between mt-4">
						<div class="text-sm text-ink-gray-5">
							{{
								__('Question {0} of {1}').format(
									activeQuestion,
									questions.length
								)
							}}
						</div>
						<Button
							v-if="
								quiz.data.show_answers &&
								!showAnswers.length &&
								questionDetails.data.type != 'Open Ended'
							"
							@click="checkAnswer()"
						>
							<span>
								{{ __('Check') }}
							</span>
						</Button>
						<Button
							v-else-if="activeQuestion != questions.length"
							@click="nextQuestion()"
						>
							<span>
								{{ __('Next') }}
							</span>
						</Button>
						<Button v-else @click="submitQuiz()">
							<span>
								{{ __('Submit') }}
							</span>
						</Button>
					</div> -->

					<div class="flex items-center justify-between mt-4">
						<div class="text-sm text-ink-gray-5">
							{{ __('Question {0} of {1}').format(activeQuestion, questions.length) }}
						</div>

						<div class="flex space-x-2">
							<Button @click="resetQuiz" variant="outline">
							<span>{{ __('Start Over') }}</span>
							</Button>

							<Button v-if="activeQuestion > 1" @click="prevQuestion" variant="outline">
								<span>{{ __('Previous') }}</span>
							</Button>

							<Button v-if="activeQuestion < questions.length" @click="skipQuestion" variant="outline">
								<span>{{ __('Skip') }}</span>
							</Button>

							<Button
								v-if="quiz.data.show_answers && !showAnswers.length && questionDetails.data.type != 'Open Ended'"
								@click="checkAnswer()">
								<span>{{ __('Check') }}</span>
							</Button>

							<Button v-else-if="activeQuestion != questions.length" @click="nextQuestion()">
								<span>{{ __('Next') }}</span>
							</Button>

							<Button v-else @click="submitQuiz()">
								<span>{{ __('Submit') }}</span>
							</Button>
						</div>
					</div>


				</div>
			</div>
		</div>
		<div v-else class="border rounded-md p-20 text-center space-y-2">
			<div class="text-lg font-semibold text-ink-gray-9">
				{{ __('Quiz Summary') }}
			</div>
			<div v-if="quizSubmission.data.is_open_ended" class="leading-5 text-ink-gray-7">
				{{ __('Your submission has been successfully saved. The instructor will review and grade it shortly, and ' +
      'you\'ll be notified of your final result.') }}

			</div>

			<div v-else>
				{{
					__(
						'You got {0}% correct answers with a score of {1} out of {2}'
					).format(
						Math.ceil(quizSubmission.data.percentage),
						quizSubmission.data.score,
						quizSubmission.data.score_out_of
					)
				}}
			</div>
			<Button @click="resetQuiz()" class="mt-2" v-if="
				!quiz.data.max_attempts ||
				attempts?.data.length < quiz.data.max_attempts
			">
				<span>
					{{ __('Try Again') }}
				</span>
			</Button>
		</div>
		<div v-if="
			quiz.data.show_submission_history &&
			attempts?.data &&
			attempts.data.length > 0
		" class="mt-10">
			<ListView :columns="getSubmissionColumns()" :rows="attempts?.data" row-key="name" :options="{
				selectable: false,
				showTooltip: false,
				emptyState: { title: __('No Quiz submissions found') },
			}">
			</ListView>
		</div>
	</div>
	<div class="flex flex-wrap mb-4">
  <div
    v-for="(q, i) in questions"
    :key="q.question"
    class="flex items-center mr-2 mb-2 px-2 py-1 rounded border text-sm"
    :class="answeredQuestions.includes(q.question) ? 'bg-green-50 border-green-400 text-green-800' : 'bg-gray-100 border-gray-300 text-gray-800'"
  >
    {{ i + 1 }}
    <CheckCircle v-if="answeredQuestions.includes(q.question)" class="w-4 h-4 ml-1 text-green-500" />
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
import { ref, watch, reactive, inject, computed } from 'vue'
import { CheckCircle, XCircle, MinusCircle } from 'lucide-vue-next'
import { timeAgo } from '@/utils'
import { useRouter } from 'vue-router'
import ProgressBar from '@/components/ProgressBar.vue'

const user = inject('$user')
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
		timer.value = quiz.data.duration * 60
	}
}

const startTimer = () => {
	timerInterval = setInterval(() => {
		timer.value--
		if (timer.value == 0) {
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
  const saved = JSON.parse(localStorage.getItem(quiz.data?.title) || '[]');
  return saved.map(q => q.question_name);
});


watch(
  () => quiz.data,
  () => {
    if (quiz.data) {
      populateQuestions();
	
	  let savedAnswers = JSON.parse(localStorage.getItem(quiz.data.title) || '[]');
      let lastIndex = parseInt(localStorage.getItem(`${quiz.data.title}-active-question`) || '0');
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
			results: localStorage.getItem(quiz.data.title),
		}
	},
})

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
    localStorage.setItem(`${quiz.data.title}-active-question`, value);
	}
})


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
  let quizData = JSON.parse(localStorage.getItem(quiz.data.title) || '[]')
  if (quizData.length && quizData.length < questions.length) {
    activeQuestion.value = quizData.length + 1
    console.log(`Resuming at question ${activeQuestion.value}`)
  } else {
    activeQuestion.value = 1
    localStorage.removeItem(quiz.data.title)
    console.log('Starting fresh at question 1')
  }
  if (quiz.data.duration) startTimer()
}



const markAnswer = (index) => {
	if (!questionDetails.data.multiple)
		selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
	selectedOptions[index - 1] = selectedOptions[index - 1] ? 0 : 1
}

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
		toast.warn(__('Please select an option'))
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
  let quizData = localStorage.getItem(quiz.data.title)
  let parsedData = quizData ? JSON.parse(quizData) : []

  const answer = getAnswers().join().trim()

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

  localStorage.setItem(quiz.data.title, JSON.stringify(parsedData))
  console.log('Saved to localStorage', parsedData)
}



const loadSavedAnswer = () => {
  const quizDataRaw = localStorage.getItem(quiz.data?.title);
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
  let quizData = localStorage.getItem(quiz.data.title)
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

  call('lms.lms.api.save_quiz_progress', {
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
  let answers = getAnswers();
  if (!answers.length || answers.every(a => !a.trim())) {
    console.log('User is skipping without answering. Nothing to save.');
  } else {
    addToLocalStorage();
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
	if (!quiz.data.show_answers) {
		if (questionDetails.data.type == 'Open Ended') addToLocalStorage()
		else checkAnswer()
		setTimeout(() => {
			createSubmission()
		}, 500)
		return
	}
	createSubmission()
}

const createSubmission = () => {
	quizSubmission.submit(
		{},
		{
			onSuccess(data) {
				markLessonProgress()
				if (quiz.data && quiz.data.max_attempts) attempts.reload()
				if (quiz.data.duration) clearInterval(timerInterval)
			},
			onError(err) {
				const errorTitle = err?.message || ''
				if (errorTitle.includes('MaximumAttemptsExceededError')) {
					const errorMessage = err.messages?.[0] || err
					toast.error(__(errorMessage))
					setTimeout(() => {
						window.location.reload()
					}, 3000)
				}
			},
		}
	)
}

const resetQuiz = () => {
  activeQuestion.value = 0
  selectedOptions.splice(0, selectedOptions.length, ...[0, 0, 0, 0])
  showAnswers.length = 0
  quizSubmission.reset()
  localStorage.removeItem(quiz.data.title);
  localStorage.removeItem(`${quiz.data.title}-active-question`);
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
</script>
<style>
p {
	line-height: 1.5rem;
}

button#headlessui-disclosure-button-v-16 {
    display: none !IMPORTANT;
}

div#headlessui-disclosure-panel-v-17 {
    display: none !important;
}

p {
	line-height: 1.5rem;
}


button#headlessui-disclosure-button-v-16 {
    display: none !IMPORTANT;
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

button[aria-controls^="headlessui-disclosure-panel-"][data-headlessui-state],
div[data-headlessui-state][id^="headlessui-disclosure-panel-"] {
  display: none !important;
}
.flex.flex-col.md\:flex-row.md\:items-center.justify-between {
    display: none;
}
.bg-surface-blue-2.space-y-1.py-2.px-2.mb-4.rounded-md.text-sm.text-ink-blue-3 {
    display: none;
}
</style>
