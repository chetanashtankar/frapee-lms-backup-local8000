http://localhost:8000/app/print-format/Course%20Certificate%20lms

<meta name="pdfkit-orientation" content="Landscape">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
{% set certificate = frappe.db.get_value("LMS Certificate", doc.name, ["name", "member", "course"], as_dict=True) %}
{% set member = frappe.db.get_value("User", certificate.member, ["full_name"], as_dict=True) %}
{% set course = frappe.db.get_value("LMS Course", certificate.course, ["title"], as_dict=True) %}
{% set participant_name = member.full_name or 'Participant' %}
{% set course_name = course.title or 'Course' %}
{% set background_url = '/files/eiqcoursecertificate.png' %}

<div class="certificate" style="background-image: url('{{ background_url }}');">
  <div class="participant-name">{{ participant_name }}</div>
  <div class="course-name">{{ course_name }}</div>
</div>




body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fff;
    font-family: 'Inter', sans-serif;
  }

.certificate {
  width: 1200px;
    height: 870px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  box-sizing: border-box;
}
 .course-name {
    position: absolute;
    top: 450px;
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold; 
    color: #02316a;
    
  }
.participant-name {
    position: absolute;
  top: 320px;                  /* Exact vertical placement */
  left: 50%;                   /* Horizontal center */
  transform: translateX(-50%); /* Center horizontally only */
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #02316a;
  width: 80%; /* Optional: prevent long names from overflowing */
  /*position: absolute;*/
  /*top: 295px;*/
  /*width: 100%;*/
  /*text-align: center;*/
  /*font-size: 32px;*/
  /*font-weight: bold;*/
  /*color: #02316a;*/
}

