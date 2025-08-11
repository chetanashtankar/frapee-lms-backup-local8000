/* /home/frappe/frappe-bench/apps/lms/frontend/src/pages/ProfileCertificates.vue */

<template>
	<div class="mt-7 mb-10">
		<h2 class="mb-3 text-lg font-semibold text-ink-gray-9">
			{{ __('Certificates') }}
		</h2>
		<div class="grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
                v-for="certificate in certificates.data.filter(c => !hiddenCertificates.includes(c.name))"
                :key="certificate.name"
                class="flex flex-col bg-surface-white border rounded-lg p-3 cursor-pointer hover:bg-surface-menu-bar"
                @click="openCertificate(certificate)"
            >
                <div class="font-medium leading-5 mb-2 text-ink-gray-9">
                    {{ certificate.course_title || certificate.batch_title }}
                </div>
                <div class="text-sm text-ink-gray-7 font-medium mt-auto">
                    <span> {{ __('Issued on') }}: </span>
                    {{ dayjs(certificate.issue_date).format('DD MMM YYYY') }}
                </div>
            </div>
        </div>
	</div>
	<!-- Modal for Incomplete Course -->
<div v-if="showFoundationModal" class="modal-overlay">
  <div class="demo-modal">
    <h1>Oops, You Missed a Step!</h1>
    <p>
      You need to complete the 
      <strong>{{ modalCourseTitle }}</strong>
      before downloading your certificate.
    </p>
    <button class="go-to-course-btn" @click="showFoundationModal = false">OK</button>
  </div>
</div>


</template>
<script setup>
import { createListResource } from 'frappe-ui'
import { ref,inject, onMounted } from 'vue'

const showFoundationModal = ref(false)
const modalCourseTitle = ref('')
const hiddenCertificates = ref([])

const dayjs = inject('$dayjs')
const props = defineProps({
	profile: {
		type: Object,
		required: true,
	},
})

onMounted(() => {
	if (props.profile.data?.name) {
		certificates.reload()
	}
})

const certificates = createListResource({
	doctype: 'LMS Certificate',
	filters: {
		member: props.profile.data?.name,
	},
	fields: ['name', 'course_title', 'batch_title', 'issue_date', 'template'],
	cache: ['certificates', props.profile.data?.name],
})



const openCertificate = (certificate) => {
	const courseTitle = certificate.course_title || certificate.batch_title

	// convert title to slug for backend
	const dynamicCourse = courseTitle
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll(/[^\w-]/g, '')

	console.log('Rendering certificate:', courseTitle)

	fetch('/api/method/lms.lms.utils.get_lesson', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			course: dynamicCourse,
			chapter: '1',
			lesson: '1',
		}),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Full API Response:', data)

			const progress = data.message?.membership?.progress ?? null
			console.log('Progress:', progress)

			if (progress >= 100) {
				window.open(
					`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${certificate.name}&format=${encodeURIComponent(certificate.template)}`
				)
			} else {
				modalCourseTitle.value = courseTitle
				showFoundationModal.value = true
			}
		})
		.catch(error => console.error('Error:', error))
}


const checkCertificateProgress = async (certificate) => {
	const courseTitle = certificate.course_title || certificate.batch_title

	const dynamicCourse = courseTitle
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll(/[^\w-]/g, '')

	try {
		const response = await fetch('/api/method/lms.lms.utils.get_lesson', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				course: dynamicCourse,
				chapter: '1',
				lesson: '1',
			}),
		})
		const data = await response.json()
		const progress = data.message?.membership?.progress ?? null

		if (progress < 100) {
			hiddenCertificates.value.push(certificate.name)
		}
	} catch (error) {
		console.error('Error checking progress:', error)
	}
}

onMounted(async () => {
	if (props.profile.data?.name) {
		await certificates.reload()
		// Check progress for each certificate
		const checkPromises = certificates.data.map(cert => checkCertificateProgress(cert))
		await Promise.all(checkPromises)
	}
})

</script>

<style>

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
</style>
