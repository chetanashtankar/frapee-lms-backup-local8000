/*/home/chetan/frappe-bench/apps/lms/frontend/src/components/Modals/TakeCertification.vue*/
/* /home/chetan/frappe-bench/apps/lms/frontend/src/pages/TakeCertification.vue */
<template>
	<div class="certification-page">
		<h1 class="page-title">Certifications</h1>

		<div class="certification-grid">

			<div class="cert-card">
				<div class="cert-image java-beginner"></div>
				<div class="cert-info">
					<h2 class="cert-title">Foundation Certification</h2>
					<p class="cert-description">Master the fundamentals of intelligent business automation with our Foundation Certification Program. The EIQ Foundation equips you with essential platform skills.</p>
					<button class="cert-btn">Get Certified</button>
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
</template>

<script setup>
const javaCertifications = [
	{
		id: 1,
		title: 'Foundation Certification',
		description: 'Start your Java journey with core concepts and syntax fundamentals.',
		image: '/ai-certification-image.png',
	},
	{
		id: 2,
		title: 'Citizen Developer',
		description: 'Master OOP, collections, and error handling in Java.',
		image: '/ai-certification-image.png',
	},
	{
		id: 3,
		title: 'Developer',
		description: 'Deep dive into multithreading, JDBC, and Java I/O.',
		image: '/ai-certification-image.png',
	},
	{
		id: 4,
		title: 'Architect',
		description: 'Explore Spring Boot, REST APIs, and best practices.',
		image: '/ai-certification-image.png',
	},
]
</script>

<style scoped>
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
	transform: translateY(-4px);
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


