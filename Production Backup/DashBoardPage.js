//files/certificate.png

//files/certificate.png

document.body.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Header Section -->
    <header class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
        data-section="section-primary-header-builder">
        <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
            data-section="section-primary-header-builder">
            <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <!-- Logo Section -->
                <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div class="ast-builder-layout-element ast-flex site-header-focus-item"
                        data-section="title_tagline">
                        <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization"
                            itemscope="itemscope">
                            <span class="site-logo-img">
                                <a href="javascript:void(0);" id="homeLinkLogo" class="custom-logo-link" rel="home"
                                    aria-current="page">
                                    <img width="200" height="58"
                                        src="https://lms.evoluteiq.info/wp-content/uploads/2022/02/evoluteIQ.svg"
                                        class="custom-logo" alt="EvoluteIQ" decoding="async" loading="lazy">
                                </a>

                            </span>
                        </div>
                    </div>
                </div>

                <!-- Navigation Menu -->
                <!-- Navigation Menu -->
                <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                        data-section="section-hb-menu-1">
                        <div class="ast-main-header-bar-alignment">
                            <div class="main-header-bar-navigation">
                                <nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                                    id="primary-site-navigation-desktop" aria-label="Main Navigation"
                                    itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope">
                                    <div class="main-navigation ast-inline-flex">
                                        <ul id="ast-hf-menu-1"
                                            class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border astra-menu-animation-slide-up stack-on-mobile ast-mega-menu-enabled">

                                            <!-- Home -->
                                            <li id="menu-item-1510" class="menu-item ...">
                                                <a class="menu-link" id="homeLink" href="javascript:void(0)">
                                                    <span class="ast-icon icon-arrow"></span>
                                                    <span class="menu-text">Home</span>
                                                </a>
                                            </li>

                                   <!-- Course -->
                                    <li id="menu-item-course" class="menu-item">
                                      <a class="menu-link" id="courseLink" href="javascript:void(0)" onclick="goToCourse(this)">
                                        <span class="ast-icon icon-arrow"></span>
                                        <span class="menu-text">Course</span>
                                      </a>
                                    </li>
                                    
                                    
                                  <!-- Certification -->
                                <li id="menu-item-certification" class="menu-item">
                                  <a
                                    class="menu-link"
                                    id="certificationLink"
                                    href="#"
                                    onclick="handleCertifcationlink(event)"
                                  >
                                    <span class="ast-icon icon-arrow"></span>
                                    <span class="menu-text">Certification</span>
                                  </a>
                                </li>





                                            <li id="menu-item-courses" class="menu-item menu-item-courses" style="display: none;">
                                                <a href="javascript:void(0)" class="menu-link menu-link-with-icon"
                                                    id="coursesLink">
                                                    <span class="menu-text">Courses</span>
                                                    <!-- SVG arrow icon -->
                                                    <svg class="dropdown-icon" id="dropdownToggle" viewBox="0 0 20 20"
                                                        fill="currentColor" width="20" height="20">
                                                        <path fill-rule="evenodd"
                                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </a>

                                                <!-- Dropdown menu -->
                                                <ul class="dropdown-menu" id="coursesDropdown">
                                                    <li><a href="#" id="professionalCourse">EIQ Platform Certification</a></li>
                                                    <li><a href="#" id="studentCourse">EIQ Internship Program</a></li>
                                                </ul>
                                            </li>




                                            <!-- Documentation -->
                                            <li id="menu-item-27099"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27099" style="display: none;">
                                                <a class="menu-link" id="docLink">
                                                    <span class="ast-icon icon-arrow"></span>
                                                    <span class="menu-text">Documentation</span>
                                                </a>
                                            </li>
                                            
                                            <!-- Login -->
                                            <li id="menu-item-login" class="menu-item menu-item-login">
                                              <a href="javascript:void(0)" class="menu-link open-login-modal" id="loginLink">
                                                <span class="ast-icon icon-arrow"></span>
                                                <span class="menu-text">Login</span>
                                              </a>
                                            </li>

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>

    <main>



       <section class="slider-section">
            <div class="slider-container">
            <div class="slider-wrapper">
            <div class="slide active">
            <video class="background-video" autoplay muted loop playsinline>
            <source src="/files/LMSbg.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
             
              <div class="slide-overlay"></div>
             
              <div class="slide-content">
            <h2 class="slide-heading">Learn Intelligent Business Automation on the industry-leading EIQ Platform</h2>
            <p class="slide-description">Tailored Learning Paths for Aspiring Professionals and Enterprises.</p>
            <a href="#" class="slide-button">Explore Courses</a>
            </div>
            </div>
                </div>

            </div>
        </section>




        <section data-particle_enable="false" data-particle-mobile-disabled="false" style="display: none";
            class="elementor-section elementor-top-section elementor-element elementor-element-1e537621 elementor-section-boxed elementor-section-height-default"
            data-id="1e537621" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-259f3103"
                    data-id="259f3103" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <section data-particle_enable="false" data-particle-mobile-disabled="false"
                            class="elementor-section elementor-inner-section elementor-element elementor-element-5b4952c1 elementor-section-boxed elementor-section-height-default"
                            data-id="5b4952c1" data-element_type="section"
                            data-settings='{"background_background":"classic"}'>
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4fd7f709"
                                    data-id="4fd7f709" data-element_type="column"
                                    data-settings='{"background_background":"classic"}'>
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-78697e9 elementor-position-top elementor-widget elementor-widget-image-box"
                                            data-id="78697e9" data-element_type="widget"
                                            data-widget_type="image-box.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-image-box-wrapper">
                                                    <figure class="elementor-image-box-img training-img"></figure>
                                                    <div class="elementor-image-box-content">
                                                        <h3 class="elementor-image-box-title">EIQ Platform Training</h3>
                                                        <p class="elementor-image-box-description">Achieve your career
                                                            goals with industry-recognized learning paths from experts
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1ce5f945"
                                    data-id="1ce5f945" data-element_type="column"
                                    data-settings='{"background_background":"classic"}'>
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-aaaec23 elementor-position-top elementor-widget elementor-widget-image-box"
                                            data-id="aaaec23" data-element_type="widget"
                                            data-widget_type="image-box.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-image-box-wrapper">
                                                    <figure class="elementor-image-box-img opportunity-img"></figure>
                                                    <div class="elementor-image-box-content">
                                                        <h3 class="elementor-image-box-title">EIQ Platform
                                                            Certifications</h3>
                                                        <p class="elementor-image-box-description">Gain EIQ Platform
                                                            certifications to validate your skills &amp; advance your
                                                            career</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3c0f7d8a"
                                    data-id="3c0f7d8a" data-element_type="column"
                                    data-settings='{"background_background":"classic"}'>
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-09522da elementor-position-top elementor-widget elementor-widget-image-box"
                                            data-id="09522da" data-element_type="widget"
                                            data-widget_type="image-box.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-image-box-wrapper">
                                                    <figure class="elementor-image-box-img certificate-img"></figure>
                                                    <div class="elementor-image-box-content">
                                                        <h3 class="elementor-image-box-title">Guides &amp; Tutorials
                                                        </h3>
                                                        <p class="elementor-image-box-description">Discover EIQ Platform
                                                            with easy how-to videos and user manuals</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>





        <section data-particle_enable="false" data-particle-mobile-disabled="false" style="display: none;"
            class="elementor-section elementor-top-section elementor-element elementor-element-1e537621 elementor-section-boxed elementor-section-height-default"
            data-id="1e537621" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-259f3103"
                    data-id="259f3103" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">

                        <!-- First Card - EIQ Platform Certification -->
                        <section data-particle_enable="false" data-particle-mobile-disabled="false"
                            class="elementor-section elementor-inner-section elementor-element elementor-element-5b4952c1 elementor-section-boxed elementor-section-height-default certification-card"
                            data-id="5b4952c1" data-element_type="section"
                            data-settings='{"background_background":"classic"}'>
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4fd7f709"
                                    data-id="4fd7f709" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <figure class="certification-image"></figure>
                                    </div>
                                </div>
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1ce5f945"
                                    data-id="1ce5f945" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="certification-content">
                                            <span class="certification-label">For Professionals</span>
                                            <h2 class="certification-title">EIQ Platform Certification</h2>
                                            <p class="certification-description">
                                                The EIQ Platform Consultant Certification validates a professional's
                                                expertise in designing, building, and managing intelligent automation
                                                solutions using the EIQ Platform.
                                            </p>
                                            <button class="explore-course-btn">Explore Courses</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Second Card - EIQ Internship Program -->
                        <section data-particle_enable="false" data-particle-mobile-disabled="false"
                            class="elementor-section elementor-inner-section elementor-element elementor-element-internship elementor-section-boxed elementor-section-height-default internship-card"
                            data-id="internship" data-element_type="section"
                            data-settings='{"background_background":"classic"}'>
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-img2"
                                    data-id="img2" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <figure class="internship-image"></figure>
                                    </div>
                                </div>
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-content2"
                                    data-id="content2" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="internship-content">
                                            <span class="internship-label">For Students</span>
                                            <h2 class="internship-title">EIQ Internship Program</h2>
                                            <p class="internship-description">
                                                The EIQ Platform Foundation Certification introduces core features like
                                                automation, data integration, and workflow management, equipping
                                                learners to navigate the platform and drive digital transformation.
                                            </p>
                                            <button class="explore-course-btn">Explore Courses</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Third Section - Enterprise Solutions -->
                        <section data-particle_enable="false" data-particle-mobile-disabled="false"
                            class="elementor-section elementor-inner-section elementor-element elementor-element-enterprise elementor-section-boxed elementor-section-height-default enterprise-section"
                            data-id="enterprise" data-element_type="section"
                            data-settings='{"background_background":"gradient"}'>
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ent-img"
                                    data-id="ent-img" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <figure class="enterprise-image"></figure>
                                    </div>
                                </div>
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ent-content"
                                    data-id="ent-content" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="enterprise-content">
                                            <h2 class="enterprise-title">Enterprise Solutions</h2>
                                            <p class="enterprise-description">
                                                Our platform scales seamlessly from small teams to large organizations,
                                                providing consistent, high-quality training experiences across your
                                                business.
                                            </p>
                                            <p class="enterprise-description">
                                                The comprehensive course management system simplifies creation,
                                                delivery, and assessment of training materials, ensuring your team
                                                members
                                                and clients receive the knowledge they need to maximize their use of the
                                                EvoluteIQ platform.
                                            </p>
                                            <button class="signup-free-btn">Sign up for Free Course</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </section>




<!-- Four card Learning Path -->

<!-- Learning Paths Section -->
<div class="section" id="learning-paths">
  <h1 class="section-title">Learning Paths</h1>
  <div class="learning-paths-grid">
    <div class="path-card animate-on-scroll" id="learning-foundation">
      <div class="card-image learning-foundation-img"></div>
      <h3 class="card-title">Foundation Course</h3>
      <p class="card-description">Master the fundamentals of intelligent business automation with our Foundation Course. The EIQ Foundation equips you with essential platform skills.</p>
      <button class="card-button" id="learning-foundation-btn"
    onclick="goToCourse()">
  Start Course
</button>

    </div>

    <div class="path-card coming-soon animate-on-scroll">
      <div class="notification-bell"></div>
      <div class="card-image learning-citizen-developer-img"></div>
      <h3 class="card-title">Citizen Developer</h3>
      <p class="card-description">Build powerful applications using our intuitive no-code tools. Learn to automate workflows and integrate systems—no programming required</p>
      <button class="card-button animated">Coming Soon</button>
    </div>

    <div class="path-card coming-soon animate-on-scroll">
      <div class="notification-bell"></div>
      <div class="card-image learning-developer-img"></div>
      <h3 class="card-title">Developer</h3>
      <p class="card-description">Advance your skills with low-code and pro-code features. Learn to create robust apps using JavaScript, Python, APIs, and platform scripting.</p>
      <button class="card-button animated">Coming Soon</button>
    </div>

    <div class="path-card coming-soon animate-on-scroll">
      <div class="notification-bell"></div>
      <div class="card-image learning-architect-img"></div>
      <h3 class="card-title">Architect</h3>
      <p class="card-description">Design scalable, secure enterprise solutions using the full EIQ stack. Master architecture, integrations, and AI-driven automation.</p>
      <button class="card-button animated">Coming Soon</button>
    </div>
  </div>
</div>



<!-- Certification Paths Section -->
<div class="section">
  <h1 class="section-title">Certification Paths</h1>
  <div class="certification-paths-grid">
    <div class="path-card animate-on-scroll" id="cert-foundation">
      <div class="card-image cert-foundation-img"></div>
      <h3 class="card-title">Foundation Certification</h3>
      <p class="card-description">Master the fundamentals of intelligent business automation with our Foundation Certification. The EIQ Foundation equips you with essential platform skills.</p>
      <button class="card-button" id="foundation-btn" onclick="goToCertification(this)">
  Get Certified
</button>

    </div>

    <!-- Card 2: Citizen Developer (Coming Soon) -->
                <div class="path-card animate-on-scroll" id="cert-consultant">
                    <div class="card-image leadership-program-img"></div>
                    <h3 class="card-title">Consultant Certification</h3>
                    <p class="card-description">The EIQ Platform Consultant Certification validates a professional’s expertise in designing, building, and managing intelligent automation solutions using the EIQ Platform</p>
                    <button class="card-button" id="consultant-btn" onclick="goToCertification(this)">
  Get Certified
</button>

                </div>

                <!-- Card 3: Developer (Coming Soon) -->
                <div class="path-card coming-soon animate-on-scroll" id="cert-developer">
                    <div class="card-image developer-img"></div>
                    <h3 class="card-title">Developer</h3>
                    <p class="card-description">Dive into the latest information and AI fundamentals. Perfect for beginners or those looking to solidify their foundational knowledge. Start paving your path to success today!</p>
                    <button class="card-button animated" id="developer-btn">Coming Soon</button>
                </div>

                <!-- Second Row: 2 Cards (Centered) -->
                <div class="second-row">
                    <!-- Card 4: Architect (Coming Soon) -->
                    <div class="path-card coming-soon animate-on-scroll">
                        <div class="card-image architect-img"></div>
                        <h3 class="card-title">Architect</h3>
                        <p class="card-description">Dive into the latest information and AI fundamentals. Perfect for beginners or those looking to solidify their foundational knowledge. Start paving your path to success today!</p>
                        <button class="card-button animated">Coming Soon</button>
                    </div>

                    <!-- Card 5: Expert (Coming Soon) -->
                    <div class="path-card coming-soon animate-on-scroll">
                        <div class="card-image expert-img"></div>
                        <h3 class="card-title">Expert</h3>
                        <p class="card-description">Dive into the latest information and AI fundamentals. Perfect for beginners or those looking to solidify their foundational knowledge. Start paving your path to success today!</p>
                        <button class="card-button animated">Coming Soon</button>
                    </div>
                </div>
    
  </div>
  
</div>




        <!-- Testimonials Section -->

        <section class="reviews-section" aria-labelledby="testimonials-heading">
            <div class="container">
                <h2 id="testimonials-heading">Reviews</h2>

                <div class="testimonial-carousel">
                    <div class="testimonial-wrapper" id="testimonialWrapper">
                        <!-- Testimonial 1 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="1 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image malyam-reddy"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Malyam Reddy Varun</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "As an intern at EvoluteIQ, I had an amazing and invaluable experience. The
                                        company provided me with opportunities to learn and grow in a supportive and
                                        nurturing environment. The mentorship I received from experienced professionals
                                        was exceptional, and their guidance helped me develop new skills and gain
                                        practical industry knowledge. I am truly grateful for the opportunity to be part
                                        of such a great and helpful organization like EvoluteIQ during my internship."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="2 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image priyanka"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Priyanka R</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "I am able to learn new things and create interesting applications referring the
                                        use cases provided by our mentors. Mentors were very good and in contact with us
                                        while learning this platform. They are prompt to reply whenever we ask them any
                                        doubts. It is great experience learning about Intelligent business automation in
                                        this platform."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="3 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image priya"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Priya H P</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "The internship is going good and we are actually learning a new technology. The
                                        technology that we are learning is interesting and knowledgeable and I hope this
                                        will help us in the future."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 4 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="4 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image nischitha"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Nischitha CS</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "It is helpful for the students to learn new things on the Intelligent business
                                        automation."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 5 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="5 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image likhith"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Likhith Sai M</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "Thank you for considering my feedback on my internship experience at EvoluteIQ.
                                        It's a good platform to learn a new technology"
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 6 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="6 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image divya"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Divya B R</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "It's a new experience for me, but it is actually nice to work on new
                                        technologies. The team is very impressive and solves our doubts with ease. Team
                                        members as well as the team lead."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 7 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="7 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image anusha"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Anusha Santhe</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "Not only did the EIQ platform courses help me understand and learn all about
                                        Intelligent business automation, it has also helped me grow in my career"
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 8 -->
                        <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="8 of 8">
                            <div class="testimonial">
                                <div class="testimonial-left">
                                    <div class="testimonial-image inchara"></div>
                                </div>
                                <div class="testimonial-right">
                                    <span class="testimonial-name">Inchara A P</span>
                                    <span class="testimonial-role">Intern</span>
                                    <blockquote class="testimonial-text">
                                        "This training was very interactive and engaging."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Navigation Buttons -->
                    <button class="nav-button prev" onclick="prevSlide()" aria-label="Previous testimonial">
                        <i class="fas fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button class="nav-button next" onclick="nextSlide()" aria-label="Next testimonial">
                        <i class="fas fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

                <!-- Pagination Dots -->
                <div class="pagination" id="pagination" role="tablist">
                    <!-- Dots will be generated by JavaScript -->
                </div>
            </div>
        </section>


        <!-- Industry Partners Section -->
        <section class="partners-section" aria-labelledby="partners-heading">
            <div class="container">
                <h3 id="partners-heading">Industry Partners</h3>

                <div class="partners-carousel">
                    <div class="partners-wrapper">
                        <div class="partner-slide cms-logo"></div>
                        <div class="partner-slide infovision-logo"></div>
                        <div class="partner-slide omega-logo"></div>
                        <div class="partner-slide rgp-logo"></div>
                        <div class="partner-slide wns-logo"></div>
                        <div class="partner-slide it-logo"></div>
                        <div class="partner-slide jktech-logo"></div>
                        <div class="partner-slide medtronic-logo"></div>
                        <div class="partner-slide southern-logo"></div>
                        <div class="partner-slide tene-logo"></div>
                        <div class="partner-slide amoga-logo"></div>
                        <div class="partner-slide xpertnest-logo"></div>
                        <div class="partner-slide antares-logo"></div>

                        <!-- Duplicate for looping -->
                        <div class="partner-slide cms-logo"></div>
                        <div class="partner-slide infovision-logo"></div>
                        <div class="partner-slide omega-logo"></div>
                        <div class="partner-slide rgp-logo"></div>
                        <div class="partner-slide wns-logo"></div>
                        <div class="partner-slide it-logo"></div>
                        <div class="partner-slide jktech-logo"></div>
                        <div class="partner-slide medtronic-logo"></div>
                        <div class="partner-slide southern-logo"></div>
                        <div class="partner-slide tene-logo"></div>
                        <div class="partner-slide amoga-logo"></div>
                        <div class="partner-slide xpertnest-logo"></div>
                        <div class="partner-slide antares-logo"></div>
                    </div>

                </div>
            </div>
        </section>

    </main>


    <div class="doc-container" style="display: none;">
        <div class="doc-section">
            <h1 class="doc-heading">New Documentation Site Launch</h1>

            <p class="doc-paragraph">
                We are delighted to announce the launch of our enhanced Documentation Site, tailored to enrich your
                learning experience with our Platform and RPA offerings. This carefully curated resource provides
                seamless access to detailed information, guides, and support materials.<br>To ensure the utmost security
                and confidentiality of the content, we have implemented robust authentication measures to secure the
                server.
            </p>


            <p class="doc-paragraph">
                To unlock the full potential of this invaluable resource, please follow these simple steps:
            </p>

            <div class="doc-steps">
                <div class="doc-step">
                    <span class="doc-step-number">1.</span> Explore the Documentation Site:
                    <a class="doc-link" href="https://platform.evoluteiq.com/platformdocumentation/"
                        target="_blank">Click Here</a>
                </div>
                <div class="doc-step">
                    <span class="doc-step-number">2.</span> Login: Please contact the
                    <span class="doc-highlight">Course Administrator</span> for Login Details.
                </div>
            </div>

            <p class="doc-paragraph">
                We appreciate your commitment to learning, and we are confident that this Documentation Site will
                empower you with the knowledge and resources needed to excel in your studies and training.
            </p>
        </div>
    </div>



    <div class="cert-container" style="display: none;">
        <div class="cert-hero-img"></div>

        <div class="cert-main">
            <div class="cert-header">
                <p class="cert-subtitle">For Students</p>
                <h1>EIQ Platform Consultant Certification</h1>
                
            </div>

            <div class="cert-status-bar">

                <div class="cert-status-item">
                    <span class="cert-status-label">Certification Test</span>
                    <p class="cert-status-description">Understand the basics of a subject,<br> and gain valuable
                        insights.
                    </p>
                </div>
                <div class="cert-status-item">
                    <span class="cert-status-label">Intermediate Level</span>
                    <p class="cert-status-description">Pre-requisites necessary.<br></p>
                </div>
                <div class="cert-status-item">
                    <span class="cert-status-label">Fixed Schedule</span>
                    <p class="cert-status-description">Complete test once <br> is completed.</p>
                </div>
                <div class="cert-status-item">
                    <span class="cert-status-label">Current Status</span>
                    <span class="cert-badge cert-not-enrolled">Not Enrolled</span>

                </div>
            </div>


            <div class="cert-section">
                <div class="cert-overview">
                    <h2>EIQ Platform Consultant Certification Overview:</h2>
                    <p class="cert-description">
                        The EIQ Platform Consultant Certification validates a professional's expertise in designing,
                        building, and managing intelligent automation solutions using the EIQ Platform.
                    </p>

                    <div class="cert-prereqs">
                        <h3>Prerequisites:</h3>
                        <p>To enroll in the certification exam, participants must have <span
                                class="cert-highlight">12–24 months</span> of hands-on project experience with the <span
                                class="cert-highlight">EIQ Platform</span>.</p>
                    </div>
                </div>

                <div class="cert-topics">
                    <h3>Exam Topics Covered:</h3>
                    <div class="cert-topic-grid">
                        <div class="cert-topic-card cert-generic">
                            <h4>1.Generic Modules Fundamentals of HTML,CSS,Javascript and MySQL :</h4>
                        </div>

                        <div class="cert-topic-card cert-platform">
                            <h4>2.EIQ Platform Components</h4>
                            <ul class="cert-topic-list">
                                <li>App Studio</li>
                                <li>Process Flow</li>
                                <li>Dataflow</li>
                                <li>Configuration Management</li>
                                <li>Theme Development</li>
                                <li>Views</li>
                                <li>RPA (Robotic Process Automation)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="cert-course-content">
              <a href="http://216.48.181.71/lms/courses/eiq-platform-consultant-certification/learn/1-1" style="text-decoration: none; color: inherit;">
                <div class="cert-test-block">
                  <div class="cert-test-info">
                    <div class="cert-test-icon"></div>
                    <div class="cert-test-text">
                      <h4>Certification Test</h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            </div>
        </div>
    </div>
    </div>



    <div class="eiq-container-main" style="display: none;">

        <div class="eiq-cert-header">
           
            <h1>EIQ Agentic Automation Platform:<br>Foundation Certification</h1>
            <a href="#" class="cert-cta-button">Enroll Now</a>
        </div>

        <div class="cert-status-bar">
            <div class="cert-status-item">
                <span class="cert-status-label">7 Modules</span>
                <p class="cert-status-description">Understand the basics of a subject<br> and gain valuable
                    insights.
                </p>
            </div>
            <div class="cert-status-item">
                <span class="cert-status-label">Beginner Level</span>
                <p class="cert-status-description">No prior experience required.<br></p>
            </div>
            <div class="cert-status-item">
                <span class="cert-status-label">Flexible Schedule</span>
                <p class="cert-status-description">Explore the topic at your<br> speed and gain key insights.</p>
            </div>
            <div class="cert-status-item">
                <span class="cert-status-label">Current Status</span>
                <span class="cert-badge cert-not-enrolled">Not Enrolled</span>

            </div>
        </div>

        <div class="eiq-container">


            <h1 class="eiq-course-description-title">About the Course</h1>

            <div class="eiq-course-description">
                <p>Master the fundamentals of intelligent business automation with our flagship certification program.
                    The EIQ Intelligent Automation Foundation Certification equips professionals with the essential
                    skills to harness the full potential of our cutting-edge platform.This immersive learning journey
                    introduces you to the powerful capabilities of the EIQ platform
                    ecosystem. You will discover how to transform business operations through seamless process
                    automation, dynamic data integration, and intuitive application development — all while gaining
                    hands-on experience with our industry-leading process management tools.<br> this
                    certification, you will build practical expertise in:
                </p>

                <ul>
                    <li>Navigating the EIQ platform interface with confidence</li>
                    <li>Configuring automation solutions for optimal performance</li>
                    <li>Designing efficient business processes using visual modeling</li>
                    <li>Integrating diverse data sources to create integrated processes</li>
                    <li>Developing business applications without extensive coding</li>
                </ul>

                <p>Whether you are looking to accelerate your digital transformation initiatives or enhance your
                    professional skillset, this certification provides the foundation you need to succeed.Join thousands
                    of certified practitioners who are revolutionizing how work gets done with EIQ's
                    intelligent automation platform.</p>
            </div>

            <div class="eiq-course-description-skills-section">
                <h2 class="eiq-course-description-skills-title">Skills You Will Gain</h2>

                <div class="eiq-course-description-skills-grid">
                    <div class="eiq-course-description-skill-card">
                        <h3>Intelligent Automation & AI Integration</h3>
                    </div>

                    <div class="eiq-course-description-skill-card">
                        <h3>Low-Code/No-Code Development</h3>
                    </div>

                    <div class="eiq-course-description-skill-card">
                        <h3>Process Flow & Data Flow Management</h3>
                    </div>

                    <div class="eiq-course-description-skill-card">
                        <h3>RPA (Robotic Process Automation)</h3>
                    </div>

                    <div class="eiq-course-description-skill-card">
                        <h3>Business Problem-Solving</h3>
                    </div>

                    <div class="eiq-course-description-skill-card">
                        <h3>Industry-Relevant Project Execution</h3>
                    </div>
                </div>
            </div>



            <div class="eiq-course-content">
                <div class="eiq-content-header">
                    <h2 class="eiq-content-title">Course Content</h2>
                    <button class="eiq-expand-all-btn" onclick="toggleAllLessons()">
                        <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                            <path fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="btn-label">Expand All</span>
                    </button>

                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Getting Started with Intelligent Business Automation & EIQ
                                    Platform</div>
                                <div class="eiq-lesson-meta">2 Topics | 1 Test</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>



                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                               <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/1-1">
                                    <span>Introduction to Intelligent Business Automation & EIQ Platform</span>
                                </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
            <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/1-2">
                <span>Overview of Platform Dashboard</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-quiz-icon">?</div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/1-3">
                <span>Intelligent Business Automation & EIQ Platform – Quiz</span>
            </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-section-heading ">Initial Setup</div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Initial Setup in Manage</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Configuring Organization Calendar</div>
                                <div class="eiq-lesson-meta">1 Topic</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>

                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/2-1">
        <span>Configuring Organization Calendar</span>
    </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Configuring SMTP</div>
                                <div class="eiq-lesson-meta">1 Topic</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/2-2">
        <span>Configuring SMTP</span>
    </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Configuring Data Source</div>
                                <div class="eiq-lesson-meta">1 Topic</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>

                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/2-3">
            <span>Configuring Data Source</span>
        </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Configuring DMS</div>
                                <div class="eiq-lesson-meta">1 Topic</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/2-4">
            <span>Configuring DMS</span>
        </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-section-heading ">APP Studio</div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">App Studio Overview</div>
                                <div class="eiq-lesson-meta">1 Test</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>


                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-quiz-icon">?</div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/2-5">
            <span>App Studio Overview – Quiz</span>
        </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Process Flow</div>
                                <div class="eiq-lesson-meta">6 Topics | 1 Test</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>

                            </button>

                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-2">
                <span>1. Process Flow Designer</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-3">
                <span>2. Simple Process Flow – Start, Task, End</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-4">
                <span>3. Import Export Process</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-5">
                <span>4. Email Node</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-6">
                <span>5. DB Node</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-7">
                <span>6. Rule Builder Node</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-quiz-icon">?</div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-8">
                <span>Process Flow – Quiz</span>
            </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Smart Forms</div>
                                <div class="eiq-lesson-meta">3 Topics | 1 Test</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>

                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-9">
                <span>1. Basic Components</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-10">
                <span>2. Layout Components</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-11">
                <span>3. Special Components</span>
            </a>
                            </li>

                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-quiz-icon">?</div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/3-12">
                <span>Forms – Quiz</span>
            </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <!-- manage section -->

                <div class="eiq-section-heading ">Manage</div>


                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Overview of Manage Section</div>
                                <div class="eiq-lesson-meta">1 Test</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>


                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-quiz-icon">?</div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/4-4">
                <span>Manage – Quiz</span>
            </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Organization Management</div>
                                <div class="eiq-lesson-meta">2 Topics</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/4-3">
                <span>1. Creating a Role</span>
            </a>
                            </li>
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/4-2">
                <span>2. Creating a User</span>
            </a>
                            </li>

                        </ul>
                    </div>
                </div>


                <!-- Assignments -->

                <div class="eiq-section-heading ">Assignments</div>

                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Assignments for – Initial Setup, Manage, App Studio &
                                    Workspace</div>
                            </div>
                        </div>
                    </div>
                </div>



 

                <!-- Project -->


                <div class="eiq-section-heading ">Project</div>



                <div class="eiq-lesson-item">
                    <div class="eiq-lesson-preview" onclick="toggleLesson(this)">
                        <div class="eiq-lesson-left">
                            <div class="eiq-status-icon eiq-status-incomplete"></div>
                            <div>
                                <div class="eiq-lesson-title">Project Use Case</div>
                                <div class="eiq-lesson-meta">1 Topic</div>
                            </div>
                        </div>
                        <div class="eiq-lesson-right">
                            <button class="eiq-expand-btn">
                                <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="20"
                                    height="20">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4 3.615a.75.75 0 01-1.02 0l-4-3.615a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="btn-label">Expand</span>
                            </button>


                        </div>
                    </div>
                    <div class="eiq-lesson-expanded">
                        <ul class="eiq-topic-list">
                            <li class="eiq-topic-item">
                                <div class="eiq-status-icon eiq-status-incomplete"></div>
                                <a href="http://216.48.181.71/lms/courses/eiq-agentic-automation-platform-foundation-certification/learn/6-1">
            <span>Budget request process – Use Case</span>
        </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>



        </div>
    </div>







    <script src="script.js" defer></script>



<div id="foundation-warning-modal" class="modal-overlay" style="display: none;">
  <div class="modal-box warning">
    <h2>Complete Foundation Course First</h2>
    <p>Please complete the Foundation course before proceeding to this certification.</p>
    <button class="modal-btn" onclick="document.getElementById('foundation-warning-modal').style.display = 'none';">OK</button>
  </div>
</div>





    <footer class="footer-section">
        <div class="container-line">
            <h2 class="main-heading">Enhance your automation knowledge to the next level</h2>

            <h5 class="sub-heading">EIQ Platform - Intelligent Business Automation and beyond</h5>

            <a href="#" 
            class="cta-button open-login-modal"
            onclick="handleStartLearning(event)"
            >
                Start Learning
            </a>


            <p class="copyright">Copyright © 2025 | EvoluteIQ LMS</p>
        </div>
    </footer>

<!-- LOGIN MODAL POPUP -->
<div id="login-modal" class="modal-overlay">
<div class="modal-content login-modal-flex">
<!-- LEFT SIDE IMAGE DIV -->
<div class="login-modal-left"></div>
 
    <!-- RIGHT SIDE (your existing login section) -->
<div class="login-modal-right">
<span class="modal-close" onclick="document.getElementById('login-modal').style.display='none'">&times;</span>
<div id="page-login" data-path="login">
<div class="page-content-wrapper">
<main class="container my-4">
<div class="page_content">
 
              <!-- LOGIN SECTION -->
<section class="for-login">
<div class="page-card-head">
<div style="text-align: center;">
<img width="200" height="58" 

       src="https://lms.evoluteiq.info/wp-content/uploads/2022/02/evoluteIQ.svg" 

       alt="EvoluteIQ" 

       decoding="async" 

       loading="lazy">
</div>
 
                  
</div>
 
                <!-- Add this in your <head> if not already included -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
 
<!-- LOGIN SECTION -->
<div class="login-content page-card">
<form class="form-signin form-login" role="form">
<div class="page-card-body">
<!-- Username -->
<div class="form-group">
<label class="form-label" for="login_email">Username</label>
<div class="input-icon-group">
<i class="fas fa-user"></i>
<input

      type="text"

      id="login_email"

      class="form-control input-with-icon"

      placeholder="Enter your username"

      required

      autocomplete="username"

    />
</div>
</div>
 
<!-- Password -->
<div class="form-group">
<label class="form-label" for="login_password">Password</label>
<div class="input-icon-group">
<i class="fas fa-lock"></i>
<input

      type="password"

      id="login_password"

      class="form-control input-with-icon"

      placeholder="Enter your password"

      autocomplete="current-password"

      required

    />
</div>
</div>
 
 
      <!-- Forgot Password -->
<p class="forgot-password-message">
<a href="#" id="forgot-password-link">Forgot Password?</a>
</p>
</div>
 
    <!-- Login Button -->
<div class="page-card-actions">
<button class="btn btn-sm btn-primary btn-block btn-login" type="submit">

        Login
</button>
</div>
 
    <!-- Social Login -->
<div class="social-logins text-center">
<p class="text-muted login-divider">or</p>
<div class="social-login-buttons"></div>
<div class="login-with-email-link social-login-buttons">
<div class="login-button-wrapper">
<a

            href="#"

            id="login-with-email-link"

            class="btn btn-block btn-default btn-sm btn-login-option btn-login-with-email-link"
>

            Login with Email Link
</a>
</div>
</div>
</div>
</form>
</div>
 
<!-- FORGOT PASSWORD SECTION -->
<section class="for-forgot" style="display: none;">
<div class="page-card-head">
<h4>Reset Your Password</h4>
</div>
<div class="login-content page-card">
<form class="form-forgot-password">
<div class="page-card-body">
<div class="form-group">
<label for="forgot_email">Enter your email</label>
<input

            type="email"

            id="forgot_email"

            class="form-control"

            placeholder="you@example.com"

            required

          />
</div>
<button type="submit" class="btn btn-primary btn-block">

          Send Reset Link
</button>
</div>
</form>
<p class="text-center mt-3">
<a href="#" id="back-to-login-1">Back to Login</a>
</p>
</div>
</section>
 
<!-- LOGIN WITH EMAIL LINK SECTION -->
<section class="for-login-with-email-link" style="display: none;">
<div class="page-card-head">
<h4>Login with Email Link</h4>
</div>
<div class="login-content page-card">
<form class="form-email-link-login">
<div class="page-card-body">
<div class="form-group">
<label for="email_link">Email Address</label>
<input

            type="email"

            id="email_link"

            class="form-control"

            placeholder="you@example.com"

            required

          />
</div>
<button type="submit" class="btn btn-primary btn-block">

          Send Login Link
</button>
</div>
</form>
<p class="text-center mt-3">
<a href="#" id="back-to-login-2">Back to Login</a>
</p>
</div>
</section>
 
 
            </div>
</main>
</div>
</div>
</div>
</div>
</div>
 
 
 

`;


/* for going smoothly downside on click on explore course button */
setTimeout(() => {
  // Fully unbind any previous click handler if it was added globally
  const exploreButtons = document.querySelectorAll('.slide-button');
 
  exploreButtons.forEach(button => {
    // Clone the button and replace it (removes old handlers)
    const newBtn = button.cloneNode(true);
    button.parentNode.replaceChild(newBtn, button);
 
    newBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
 
      const target = document.getElementById('learning-paths');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        
      }
    });
  });
}, 200);


/*==================*/



/* For Opening Login Section */

function handleStartLearning(event) {
  event.preventDefault();

  if (isUserLoggedIn()) {
    // Redirect directly if user is logged in
    window.location.href = '/lms/courses/eiq-agentic-automation-platform-foundation-certification';
  } else {
    // Show login modal
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      loginModal.style.display = 'flex';
      if (typeof showSection === 'function') showSection('login');
    }
  }
}


function handleCertifcationlink(event) {
    event.preventDefault();

    if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
      // Redirect if user is logged in
      window.location.href = '/lms/take-certification';
    } else {
      // Show login modal
      const loginModal = document.getElementById('login-modal');
      if (loginModal) {
        loginModal.style.display = 'flex';
        if (typeof showSection === 'function') showSection('login');
      } else {
        console.warn('Login modal not found.');
      }
    }
  }



document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('login-modal');
  const loginSection = document.querySelector('.for-login');
  const forgotSection = document.querySelector('.for-forgot');
  const emailLinkSection = document.querySelector('.for-login-with-email-link');


    function isUserLoggedIn() {
      return document.cookie.includes('system_user=yes');
    }
    
    function handleOpenLogin(e) {
        if (isUserLoggedIn()) {
         
          if (e) e.preventDefault();
          return;
        }
        if (modal) {
          modal.style.display = 'flex';
          showSection('login');
        }
      }

    document.querySelectorAll('.slide-button.open-login-modal').forEach(button => {
    button.addEventListener('click', handleOpenLogin);
  });

  document.querySelectorAll('#professionalCourse, #studentCourse').forEach(item => {
    item.addEventListener('click', handleOpenLogin);
  });

  document.querySelectorAll('.signup-free-btn, .explore-course-btn , .cert-cta-button').forEach(button => {
    button.addEventListener('click', handleOpenLogin);
  });

  document.querySelectorAll('.open-login-modal').forEach(button => {
    button.addEventListener('click', handleOpenLogin);
  });

  window.addEventListener('click', function (e) {
    const content = document.querySelector('.modal-content');
    if (e.target === modal && !content.contains(e.target)) {
      modal.style.display = 'none';
    }
  });

  document.querySelector('.modal-close').addEventListener('click', function () {
    modal.style.display = 'none';
  });

  document.getElementById('forgot-password-link').addEventListener('click', function (e) {
    e.preventDefault();
    showSection('forgot');
  });

  document.getElementById('login-with-email-link').addEventListener('click', function (e) {
    e.preventDefault();
    showSection('email');
  });

  function showSection(section) {
    loginSection.style.display = section === 'login' ? 'block' : 'none';
    forgotSection.style.display = section === 'forgot' ? 'block' : 'none';
    emailLinkSection.style.display = section === 'email' ? 'block' : 'none';
  }

  modal.style.display = 'none';
});




/*  for changing name after logout login and  and hitiing login api in this */




function goToCourse(button) {
  if (isUserLoggedIn()) {
    //const slug = button.getAttribute('data-slug');
    const path = `/lms/courses/eiq-agentic-automation-platform-foundation-certification`;
    window.location.href = path;
  } else {
   
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      loginModal.style.display = 'flex';
      if (typeof showSection === 'function') showSection('login');
    }
  }
}



function isUserLoggedIn() {
  return document.cookie.includes('system_user=yes');
}



// Function to check Foundation Course Progress and act accordingly


function goToCertification(button = null) {
  const isFoundation = button && button.id === 'foundation-btn';
   const isConsultant = button && button.id === 'consultant-btn';
   

  if (!isUserLoggedIn()) {
    const redirectURL = 'http://216.48.181.71/login?redirect-to=/lms/take-certification';
    window.history.pushState({}, '', redirectURL);

    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      loginModal.style.display = 'flex';
      if (typeof showSection === 'function') showSection('login');
    }
    return;
  }


if (isConsultant) {
    window.location.href = '/lms/courses/eiq-platform-consultant-certification';
    return;
  }
// User is logged in
 

  fetch('/api/method/lms.lms.utils.get_csrf_token')
    .then(res => res.json())
    .then(data => {
      const csrfToken = data.message;

      return fetch('/api/method/lms.lms.utils.get_course_outline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Frappe-CSRF-Token': csrfToken
        },
        body: JSON.stringify({
          course: 'eiq-agentic-automation-platform-foundation-certification',
          progress: false
        })
      })
        .then(res => res.json())
        .then(outlineRes => {
          const message = outlineRes.message || [];
          let firstLessonName = null;

          for (const section of message) {
            if (section.lessons && section.lessons.length > 0) {
              firstLessonName = section.lessons[0].name;
              break;
            }
          }

          if (!firstLessonName) return;

          return fetch('/api/method/lms.lms.doctype.course_lesson.course_lesson.save_progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Frappe-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
              course: 'eiq-agentic-automation-platform-foundation-certification',
              lesson: firstLessonName
            })
          })
            .then(res => res.json())
            .then(progressRes => {
              const progress = Math.round(progressRes.message);
              console.log(`Course progress: ${isNaN(progress) ? 0 : progress}%`);


                // ✅ Update button text
  if (button && button.id === 'foundation-btn') {
    button.innerText = progress >= 100 ? 'Continue' : 'Get Certified';
  }
                

              if (progress >= 100) {
                window.location.href = '/lms/take-certification';
              } else if (isFoundation) {
                const modal = document.querySelector('.modal-overlay');
                if (modal) modal.style.display = 'flex';
              }
            });
        });
    })
    .catch(err => {
      console.error('Error:', err);
    });
}










/* NEW FUNCTION: Change button text on load if user is logged in */
function updateCourseButtonsForLoggedInUser() {
  if (isUserLoggedIn()) {
    document.querySelectorAll('.card-button').forEach(button => {
      const btnText = button.textContent.trim().toLowerCase();

      if (btnText === 'start course') {
        button.textContent = 'Continue';
      }

      if (btnText === 'get certified' && button.id === 'consultant-btn') {
        button.textContent = 'Continue';
      }

     
    });

    const loginMenuText = document.querySelector('#menu-item-login .menu-text');
    const loginLink = document.getElementById('loginLink');

    if (loginMenuText && loginMenuText.textContent.trim().toLowerCase() === 'login') {
        
      loginMenuText.textContent = 'Logout';

      loginLink.addEventListener('click', async function (e) {
        e.preventDefault();

        const csrf = frappe.csrf_token;
        const res = await fetch('/api/method/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Frappe-CSRF-Token': csrf,
          },
        });

        if (res.ok) {
           
                window.location.href = '/login#login';

          // Change button text back to Login
          loginMenuText.textContent = 'Login';

          // Optional: Close login modal if it's open
          const modal = document.getElementById('login-modal');
          if (modal) {
            modal.style.display = 'none';
          }

        } else {
          console.error('Logout failed:', res.status, await res.text());
        }
      });
    }

  } else {
    // In case user is logged out, ensure login opens modal
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
      loginLink.onclick = function (e) {
        e.preventDefault();
        showLoginPrompt();
      };
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateCourseButtonsForLoggedInUser();
});









/* Clicking on link Open pages */


document.addEventListener('DOMContentLoaded', function () {
    const docLink = document.getElementById('docLink');
    const homeLink = document.getElementById('homeLink');
    const homeLinkLogo = document.getElementById('homeLinkLogo');
    const coursesLink = document.getElementById('coursesLink');
    const exploreBtn = document.querySelector('.explore-course-btn'); 

    const docContainer = document.querySelector('.doc-container');
    const mainContent = document.querySelector('main');
    const certContainer = document.querySelector('.cert-container');
    const eiqContainer = document.querySelector('.eiq-container-main'); // the div to show

    const homeText = homeLink.querySelector('.menu-text');
    const docText = docLink.querySelector('.menu-text');
    const coursesText = coursesLink.querySelector('.menu-text');

    // Docs
    docLink.addEventListener('click', function (e) {
        e.preventDefault();
        docContainer.style.display = 'block';
        mainContent.style.display = 'none';
        certContainer.style.display = 'none';
        eiqContainer.style.display = 'none';

        docText.classList.add('active-link');
        homeText.classList.remove('active-link');
        coursesText.classList.remove('active-link');
    });

    // Home
     // Home
    [homeLink, homeLinkLogo].forEach(element => {
        if (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();

                docContainer.style.display = 'none';
                mainContent.style.display = 'block';
                certContainer.style.display = 'none';
                eiqContainer.style.display = 'none';

                homeText.classList.add('active-link');
                docText.classList.remove('active-link');
                coursesText.classList.remove('active-link');
            });
        }
    });



    // Courses
    document.getElementById("dropdownToggle").addEventListener("click", function (event) {
        event.stopPropagation(); // prevent global click from closing it immediately
        const dropdown = document.getElementById("coursesDropdown");
        const link = document.getElementById("coursesLink");

        dropdown.classList.toggle("show");
        link.classList.toggle("open");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function () {
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");
    });



     /* on clicking on dropdown page will get navigate  */
    document.getElementById('professionalCourse').addEventListener('click', function (e) {
        e.preventDefault();

        // Your "For Professionals" logic
        document.querySelector('.doc-container').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.cert-container').style.display = 'block';
        document.querySelector('.eiq-container-main').style.display = 'none';

        // Update nav styles
        document.querySelector('#homeLink .menu-text').classList.remove('active-link');
        document.querySelector('#docLink .menu-text').classList.remove('active-link');
        document.querySelector('#coursesLink .menu-text').classList.add('active-link');

        // Close dropdown after click
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");
    });

    document.getElementById('studentCourse').addEventListener('click', function (e) {
        e.preventDefault();

        // Your "For Students" logic
        document.querySelector('.doc-container').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.cert-container').style.display = 'none';
        document.querySelector('.eiq-container-main').style.display = 'block';

        // Update nav styles
        document.querySelector('#homeLink .menu-text').classList.remove('active-link');
        document.querySelector('#docLink .menu-text').classList.remove('active-link');
        document.querySelector('#coursesLink .menu-text').classList.add('active-link');

        // Close dropdown after click
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");
    });





    // For Students
    // Explore Courses
    
    /*
    
    
    document.querySelectorAll('.internship-content .explore-course-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

                
             debugger;
            setTimeout(() => {
                const scrollTarget = document.scrollingElement || document.documentElement || document.body;
                scrollTarget.scrollTop = 0;
            }, 50);
            
            // Optional: use the parent element if needed
            const parentSection = this.closest('.internship-content');
            console.log('Clicked Explore Courses inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'none';
            document.querySelector('.eiq-container-main').style.display = 'block';

            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });

    // For Professionals
    // Explore Courses
    document.querySelectorAll('.certification-content .explore-course-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
    
             debugger;
            setTimeout(() => {
                const scrollTarget = document.scrollingElement || document.documentElement || document.body;
                scrollTarget.scrollTop = 0;
            }, 50);
            
            // Optional: use the parent element if needed
            const parentSection = this.closest('.certification-content');
            console.log('Clicked Explore Courses inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'block';
            document.querySelector('.eiq-container-main').style.display = 'none';

            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });
    
    
  

    // Slide Course EXplore Button Start Point
    // Explore Courses
    document.querySelectorAll('.slide-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Optional: use the parent element if needed
            const parentSection = this.closest('.slide-button');
            console.log('Clicked Explore Courses inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'none';
            document.querySelector('.eiq-container-main').style.display = 'block';

            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });
    
     */

});



/* Toggle button........ */


function toggleLesson(element) {
    const expanded = element.nextElementSibling;
    const button = element.querySelector('.eiq-expand-btn');
    const label = button.querySelector('.btn-label');
    const icon = button.querySelector('.dropdown-icon');

    if (expanded.classList.contains('active')) {
        expanded.classList.remove('active');
        button.classList.remove('open');
        label.textContent = 'Expand';
        icon.style.transform = 'rotate(0deg)';
    } else {
        expanded.classList.add('active');
        button.classList.add('open');
        label.textContent = 'Collapse';
        icon.style.transform = 'rotate(180deg)';
    }
}

function toggleAllLessons() {
    const expandedSections = document.querySelectorAll('.eiq-lesson-expanded');
    const expandButtons = document.querySelectorAll('.eiq-expand-btn');
    const toggleButton = document.querySelector('.eiq-expand-all-btn');
    const toggleLabel = toggleButton.querySelector('.btn-label');
    const toggleIcon = toggleButton.querySelector('.dropdown-icon');

    const anyExpanded = Array.from(expandedSections).some(section =>
        section.classList.contains('active')
    );

    if (anyExpanded) {
        // Collapse all
        expandedSections.forEach(section => section.classList.remove('active'));
        expandButtons.forEach(btn => {
            btn.classList.remove('open');
            btn.querySelector('.btn-label').textContent = 'Expand';
            btn.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
        });
        toggleLabel.textContent = 'Expand All';
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        // Expand all
        expandedSections.forEach(section => section.classList.add('active'));
        expandButtons.forEach(btn => {
            btn.classList.add('open');
            btn.querySelector('.btn-label').textContent = 'Collapse';
            btn.querySelector('.dropdown-icon').style.transform = 'rotate(180deg)';
        });
        toggleLabel.textContent = 'Collapse All';
        toggleIcon.style.transform = 'rotate(180deg)';
    }
}



/* changing pagination dot */

let currentSlide = 0;
        const totalSlides = 8;
        
        // Initialize the carousel
        function initCarousel() {
            createPaginationDots();
            updateCarousel();
        }
        
        // Create pagination dots
        function createPaginationDots() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';
            
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'pagination-dot';
                dot.setAttribute('role', 'tab');
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                dot.onclick = () => goToSlide(i);
                pagination.appendChild(dot);
            }
        }
        
        // Update carousel position and active states
        function updateCarousel() {
            const wrapper = document.getElementById('testimonialWrapper');
            const translateX = -currentSlide * (100 / totalSlides);
            wrapper.style.transform = `translateX(${translateX}%)`;
            
            // Update pagination dots
            const dots = document.querySelectorAll('.pagination-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        // Previous slide function
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Auto-play functionality
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Initialize carousel when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initCarousel();
            
            // Start auto-play
            startAutoPlay();
            
            // Pause auto-play on hover
            const carousel = document.querySelector('.testimonial-carousel');
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        const carousel = document.querySelector('.testimonial-carousel');
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        }
        
        
        
        /* ================================================================================== */
        
       
       function initScrollAnimations() {
    var elements = document.querySelectorAll(".animate-on-scroll");

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("in-view");
          // observer.unobserve(entries[i].target); // Uncomment for one-time animation
        }
      }
    }, { threshold: 0.1 });

    for (var j = 0; j < elements.length; j++) {
      observer.observe(elements[j]);
    }
  }

  // Run immediately (if script is at bottom of HTML)
  initScrollAnimations();
  
