/*/home/chetan/frappe-bench/apps/lms/frontend/src/components/Modals/TakeCertification.vue*/
/* /home/chetan/frappe-bench/apps/lms/frontend/src/pages/TakeCertification.vue */
<template>
	<div class="certification-page">
		<h1 class="page-title">Available Certifications</h1>

		<div class="certification-grid">

			<div class="cert-card">
				<div class="cert-image java-beginner"></div>
				<div class="cert-info">
					<h2 class="cert-title">Java Beginner</h2>
					<p class="cert-description">Start your Java journey with core concepts and syntax fundamentals.</p>
					<button class="cert-btn">Take Certification</button>
				</div>
			</div>

			<div class="cert-card">
				<div class="cert-image java-intermediate"></div>
				<div class="cert-info">
					<h2 class="cert-title">Java Intermediate</h2>
					<p class="cert-description">Master OOP, collections, and error handling in Java.</p>
					<button class="cert-btn">Take Certification</button>
				</div>
			</div>

			<div class="cert-card">
				<div class="cert-image java-advanced"></div>
				<div class="cert-info">
					<h2 class="cert-title">Java Advanced</h2>
					<p class="cert-description">Deep dive into multithreading, JDBC, and Java I/O.</p>
					<button class="cert-btn">Take Certification</button>
				</div>
			</div>

			<div class="cert-card">
				<div class="cert-image java-expert"></div>
				<div class="cert-info">
					<h2 class="cert-title">Java Expert</h2>
					<p class="cert-description">Explore Spring Boot, REST APIs, and best practices.</p>
					<button class="cert-btn">Take Certification</button>
				</div>
			</div>

		</div>
	</div>
</template>


<script setup>
const javaCertifications = [
	{
		id: 1,
		title: 'Java Beginner',
		description: 'Start your Java journey with core concepts and syntax fundamentals.',
		image: '/ai-certification-image.png',
	},
	{
		id: 2,
		title: 'Java Intermediate',
		description: 'Master OOP, collections, and error handling in Java.',
		image: '/ai-certification-image.png',
	},
	{
		id: 3,
		title: 'Java Advanced',
		description: 'Deep dive into multithreading, JDBC, and Java I/O.',
		image: '/ai-certification-image.png',
	},
	{
		id: 4,
		title: 'Java Expert',
		description: 'Explore Spring Boot, REST APIs, and best practices.',
		image: '/ai-certification-image.png',
	},
]
</script>

<style scoped>
.certification-page {
	padding: 2rem;
}

.page-title {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
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

.cert-info {
	padding: 1rem;
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


.cert-image {
	width: 100%;
	height: 180px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.java-beginner {
	background-image: url('../ai-certification-image.png');
}

.java-intermediate {
	background-image: url('../ai-certification-image.png');
}

.java-advanced {
	background-image: url('../ai-certification-image.png');
}

.java-expert {
	background-image: url('../ai-certification-image.png');
}

</style>


