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
                                    <div class="mobile-menu-container">
                                        <ul id="ast-hf-menu-1"
                                            class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border astra-menu-animation-slide-up stack-on-mobile ast-mega-menu-enabled">

                                            <!-- Home -->
                                          <!-- Home -->
                                        <li id="menu-item-1510" class="menu-item">
                                            <a class="menu-link" id="homeLink" href="javascript:void(0)">
                                                <span class="menu-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home-icon h-4 w-4 stroke-1.5 text-ink-gray-8">
                                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                    </svg>
                                                </span>
                                                <span class="menu-text">Home</span>
                                            </a>
                                        </li>

                                            

                                   <!-- Course -->
                                    <li id="menu-item-course" class="menu-item">
                                          <a
                                            class="menu-link"
                                            id="courseLink"
                                            href="javascript:void(0)"
                                            onclick="goToCourse(this)"
                                            data-url="/lms/foundation-course"
                                          >
                                            <span class="menu-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                   class="lucide lucide-book-open-icon h-4 w-4 stroke-1.5 text-ink-gray-8">
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                              </svg>
                                            </span>
                                            <span class="menu-text">Courses</span>
                                          </a>
                                        </li>
                                        
                                                                            
                                                                            
                                                                          <!-- Certification -->
                                        <li id="menu-item-certification" class="menu-item">
                                          <a
                                            class="menu-link"
                                            id="certificationLink"
                                            href="javascript:void(0)"
                                            onclick="handleCertifcationlink(event, this)"
                                            data-url="/lms/take-certification"
                                          >
                                            <span class="menu-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                   class="lucide lucide-circle-check-big-icon h-4 w-4 stroke-1.5 text-ink-gray-8">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                              </svg>
                                            </span>
                                            <span class="menu-text">Certifications</span>
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
                                                <span class="menu-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon mr-2 h-4 w-4 flex-shrink-0 text-ink-gray-6">
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                        <polyline points="16 17 21 12 16 7"></polyline>
                                                        <line x1="21" x2="9" y1="12" y2="12"></line>
                                                    </svg>
                                                </span>
                                                <span class="menu-text">Login</span>
                                              </a>
                                            </li>

                                        </ul>
                                        </div>
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




<div class="section" id="learning-paths">
    <h1 class="section-title">Learning and Certification Paths</h1>
    <div class="learning-paths-grid">
        <div class="path-card animate-on-scroll in-view" id="learning-foundation">
            <div class="card-image learning-foundation-img"></div>
            <h3 class="card-title">Foundation Course</h3>
            <p class="card-description">Master the fundamentals of intelligent business automation with our Foundation
                Course. The EIQ Foundation equips you with essential platform skills.</p>
            <button class="card-button" id="learning-foundation-btn" onclick="goToCourse(this)"
                data-url="/lms/courses/eiq-agentic-automation-platform-foundation-certification">Start Course</button>
        </div>


        <div class="path-card animate-on-scroll in-view" id="cert-foundation">
            <div class="card-image cert-foundation-img"></div>
            <h3 class="card-title">Foundation Certification</h3>
            <p class="card-description">Master the fundamentals of intelligent business automation with our Foundation
                Certification. The EIQ Foundation equips you with essential platform skills.</p>
            <button class="card-button" id="foundation-btn" onclick="goToCertification(this)">
                Get Certified
            </button>

        </div>

        
        <div class="path-card animate-on-scroll in-view" id="cert-consultant">
            <div class="card-image leadership-program-img"></div>
            <h3 class="card-title">Developer Certification</h3>
            <p class="card-description">The EIQ Platform Developer Certification validates a professional’s expertise in
                designing, building, and managing intelligent automation solutions using the EIQ Platform</p>
            <button class="card-button" id="consultant-btn" onclick="goToCertification(this)">Get Certified</button>

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
 <div class="demo-modal">
   <h1>Oops, You Missed a Step!</h1>
    <p>You must finish the Foundation Course to access this certification.</p>
    <button class="go-to-course-btn" onclick="document.getElementById('foundation-warning-modal').style.display = 'none';">Close</button>
 </div>
</div>




<div id="passwordModal" class="password-modal" style="display:none;">
  <div class="modal-box">
    <h2>Set Your New Password</h2>
<h6>For security reasons, you need to set a new password to proceed.</h6>
    <div class="form-group">
      <label for="password1">New Password:</label>
      <input type="password" id="password1" class="input-password">
    </div>
    <div class="form-group">
      <label for="password2">Confirm New Password:</label>
      <input type="password" id="password2" class="input-password">
    </div>
    <div id="errorMsg" style="color: red; margin-top: 8px; min-height: 20px;"></div>
    <button id="submitPasswordBtn" class="submit-password-btn">Confirm</button>
  </div>
</div>

<button class="chat-toggle" id="chatToggle" onclick="toggleChat()" style="display:none;"></button>


    <div class="chatbot-container">
        <div class="chatbot-header">
            <div class="header-left">
                <div class="bot-avatar">
                </div>
                <div class="bot-name">LMS Assistant</div>
            </div>
            <div class="header-controls">
                <button class="control-btn minimize-btn" onclick="minimizeChat()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path v-if="!isMinimized"
                            d="M408 64L552 64C565.3 64 576 74.7 576 88L576 232C576 241.7 570.2 250.5 561.2 254.2C552.2 257.9 541.9 255.9 535 249L496 210L409 297C399.6 306.4 384.4 306.4 375.1 297L343.1 265C333.7 255.6 333.7 240.4 343.1 231.1L430.1 144.1L391.1 105.1C384.2 98.2 382.2 87.9 385.9 78.9C389.6 69.9 398.3 64 408 64zM232 576L88 576C74.7 576 64 565.3 64 552L64 408C64 398.3 69.8 389.5 78.8 385.8C87.8 382.1 98.1 384.2 105 391L144 430L231 343C240.4 333.6 255.6 333.6 264.9 343L296.9 375C306.3 384.4 306.3 399.6 296.9 408.9L209.9 495.9L248.9 534.9C255.8 541.8 257.8 552.1 254.1 561.1C250.4 570.1 241.7 576 232 576z" />
                        <path v-else
                            d="M503.5 71C512.9 61.6 528.1 61.6 537.4 71L569.4 103C578.8 112.4 578.8 127.6 569.4 136.9L482.4 223.9L521.4 262.9C528.3 269.8 530.3 280.1 526.6 289.1C522.9 298.1 514.2 304 504.5 304L360.5 304C347.2 304 336.5 293.3 336.5 280L336.5 136C336.5 126.3 342.3 117.5 351.3 113.8C360.3 110.1 370.6 112.1 377.5 119L416.5 158L503.5 71zM136.5 336L280.5 336C293.8 336 304.5 346.7 304.5 360L304.5 504C304.5 513.7 298.7 522.5 289.7 526.2C280.7 529.9 270.4 527.9 263.5 521L224.5 482L137.5 569C128.1 578.4 112.9 578.4 103.6 569L71.6 537C62.2 527.6 62.2 512.4 71.6 503.1L158.6 416.1L119.6 377.1C112.7 370.2 110.7 359.9 114.4 350.9C118.1 341.9 126.8 336 136.5 336z" />
                    </svg>
                </button>

                <button class="control-btn close-btn" onclick="closeChat()">
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
                
            <!-- ➤ Send Button -->
            <button class="send-btn" onclick="sendMessage()" title="Send Message">
                ➤
            </button>
        </div>
    </div>

    <footer class="footer-section">
        <div class="container-line">
        
            <!-- Logo Section -->
            <div class="footer-logo"><div class="logo"></div> <!-- Logo container --></div>
            <h2 class="main-heading">Enhance your automation knowledge to the next level</h2>

            <h5 class="sub-heading">EIQ Platform - Intelligent Business Automation and beyond</h5>

            <a href="#" 
            class="cta-button open-login-modal"
            onclick="handleStartLearning(event)"
            >
                Start Learning
            </a>


            <!-- Copyright with Social Icons -->
        <p class="footer-bottom">
            <span class="copyright">Copyright © 2025 | EvoluteIQ LMS</span>
            <span class="social-icons">
                <a href="https://www.facebook.com/EvoluteIQ" target="_blank"><img src="/files/facebook.png" alt="Facebook"></a>
                <a href="https://www.youtube.com/@EvoluteIQ" target="_blank"><img src="/files/youtube.png" alt="YouTube"></a>
                <a href="https://www.linkedin.com/company/evoluteiq/posts/?feedView=all" target="_blank"><img src="/files/linkedin.png" alt="LinkedIn"></a>
                <a href="https://www.instagram.com/evoluteiq/" target="_blank"><img src="/files/instagram.png" alt="Instagram"></a>
            </span>
        </p>
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

const modal = document.getElementById('passwordModal');
const submitBtn = document.getElementById('submitPasswordBtn');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const errorMsg = document.getElementById('errorMsg');

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('key')) {

        modal.style.display = 'flex';  // Show modal
    }
});

submitBtn.addEventListener('click', () => {
    debugger;
    errorMsg.textContent = ''; // Clear previous errors

    const pass1 = password1.value.trim();
    const pass2 = password2.value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    if (!pass1 || !pass2) {
        errorMsg.textContent = 'Please enter new password and confirm password.';
        return;
    }

    if (pass1 !== pass2) {
        errorMsg.textContent = 'Passwords do not match. Please check both fields.';
        return;
    }

    // Make the fetch call
    fetch('/api/method/frappe.core.doctype.user.user.update_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: key,
            new_password: pass1,
            confirm_password: pass2
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log('Password Reset Response:', data);

            // Success check updated
            if (data.message && data.home_page) {
                alert('Password updated successfully!');
                modal.style.display = 'none';
                password1.value = '';
                password2.value = '';
                window.location.href = '/login#login';
            } else {
                try {
                    if (data._server_messages) {
                        const serverMessages = JSON.parse(data._server_messages); // Parses array of JSON strings
                        const messageObj = JSON.parse(serverMessages[0]); // Parses the first string into an object
                        errorMsg.textContent = messageObj.message.trim();
                    } else if (data.message) {
                        errorMsg.textContent = data.message.trim();
                    } else {
                        errorMsg.textContent = 'Failed to update password.';
                    }
                } catch (e) {
                    console.error('Failed to parse server message:', e);
                    errorMsg.textContent = 'Something went wrong.';
                }
            }


        })
        .catch(err => {
            console.error('Error:', err);
            errorMsg.textContent = 'An error occurred while updating password.';
        });
});





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
            window.history.pushState({}, '', ' /lms/foundation-course');
            loginModal.style.display = 'flex';
            if (typeof showSection === 'function') showSection('login');
        }
    }
}


function handleCertifcationlink(event, el) {
    event.preventDefault();

    const targetURL = el.getAttribute('data-url') || '/lms/take-certification';
    const redirectURL = `/login?redirect-to=/lms/take-certification`;

    if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
        // User is logged in, go to the actual certification page
        window.location.href = targetURL;
    } else {
        // User is not logged in, redirect to login with redirect-to param
        const loginModal = document.getElementById('login-modal');
        if (loginModal) {
            loginModal.style.display = 'flex';
            if (typeof showSection === 'function') {
                showSection('login');
            }
        }
        window.history.pushState({}, '', redirectURL);
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
        const buttonText = button.innerText.trim(); // Get the button text
        let url = button.getAttribute('data-url'); // Get the URL from data-url attribute

        // If the button text is "Get Certified", redirect to certification page
        if (buttonText === 'Get Certified') {
            url = '/lms/take-certification';
        }

        if (url) {
            window.location.href = url;
        } else {
            console.error('No data-url provided on element');
        }
    } else {
        const loginModal = document.getElementById('login-modal');
        if (loginModal) {
            window.history.pushState({}, '', ' /lms/foundation-course');
            loginModal.style.display = 'flex';
            if (typeof showSection === 'function') showSection('login');
        }
    }
}





function isUserLoggedIn() {
    return document.cookie.includes('system_user=yes');
}



// Function to check Foundation Course Progress and act accordingly

let foundationCourseProgress = 0;
let foundationFirstLesson = '';
let developerCertificateProgress = 0;

// 🔹 Run on page load
document.addEventListener('DOMContentLoaded', () => {

    // Fetch Developer Certification Progress
    fetch('/api/method/lms.lms.utils.get_lesson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            course: 'eiq-platform-developer-certification',
            chapter: '1',
            lesson: '1',
        }),
    })
        .then(res => res.json())
        .then(data => {
            const progress = data?.message?.membership?.progress;
            const developerCertificateProgress = isNaN(progress) ? 0 : progress;
            console.log('📡 API Progress:', developerCertificateProgress);

            const consultantBtn = document.getElementById('consultant-btn');
            if (!consultantBtn) return;

            // Step 2: If API progress is 100 → show "View Certificate"
            if (developerCertificateProgress === 100) {
                consultantBtn.innerText = 'View Certificate';
                document.getElementById('chatToggle').style.display = 'block';

                return;
            }

            // Case 2: Not 100% → Check localStorage activeQuestion progress
            const quizTitle = 'Developer Certification Test';
            const totalQuestions = 50;

            // Get user email from cookies
            const cookies = Object.fromEntries(
                document.cookie.split('; ').map(c => c.split('='))
            );
            const email = decodeURIComponent(cookies.user_id || '');

            // Build localStorage keys
            const quizKey = `${quizTitle}_${email}`;
            const activeQuestionKey = `${quizKey}-active-question`;

            // Get current question index (0-based)
            const activeQuestion = parseInt(localStorage.getItem(activeQuestionKey), 10) || 0;

            // Calculate progress percentage
            const progressPercentage = totalQuestions > 0
                ? Math.round((activeQuestion / totalQuestions) * 100)
                : 0;

            console.log(`📊 Progress for "${quizTitle}" (User: ${email}): ${progressPercentage}%`);

            // Step 3: Decide Button Text
            consultantBtn.innerText = progressPercentage === 0 ? 'Get Certified' : 'Resume Test';
        })
        .catch(err => console.error('❌ API Error:', err));

    // Foundation Course CSRF & Progress
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

                    for (const section of message) {
                        if (section.lessons && section.lessons.length > 0) {
                            foundationFirstLesson = section.lessons[0].name;
                            break;
                        }
                    }

                    if (!foundationFirstLesson) return;

                    return fetch('/api/method/lms.lms.doctype.course_lesson.course_lesson.save_progress', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Frappe-CSRF-Token': csrfToken
                        },
                        body: JSON.stringify({
                            course: 'eiq-agentic-automation-platform-foundation-certification',
                            lesson: foundationFirstLesson
                        })
                    })
                        .then(res => res.json())
                        .then(progressRes => {
                            foundationCourseProgress = Math.round(progressRes.message);
                            console.log(`Preloaded progress: ${isNaN(foundationCourseProgress) ? 0 : foundationCourseProgress}%`);

                            const courseBtn = document.getElementById('learning-foundation-btn');

                            // 🔹 Safe cookie parse (fix)
                            const cookieSystemUser = document.cookie.split(';').find(row => row.trim().startsWith('system_user='));
                            const systemUser = cookieSystemUser ? cookieSystemUser.split('=')[1] : null;

                            if (courseBtn) {
                                if (systemUser === 'no' || foundationCourseProgress === 0) {
                                    courseBtn.innerText = 'Start Course';
                                } else if (foundationCourseProgress === 100) {
                                    courseBtn.innerText = 'Get Certified';
                                } else {
                                    courseBtn.innerText = 'Continue';
                                }
                            }
                        });
                });
        })
        .catch(err => console.error('Progress preload error:', err));
});



// 🔹 Button click handler
function goToCertification(button = null) {
    const isFoundation = button && button.id === 'foundation-btn';
    const isConsultant = button && button.id === 'consultant-btn';

    if (!isUserLoggedIn()) {
        //const redirectURL = 'http://216.48.181.71/login?redirect-to=/lms/take-certification';
        window.history.pushState({}, '', ' /lms/take-certification');

        const loginModal = document.getElementById('login-modal');
        if (loginModal) {
            loginModal.style.display = 'flex';
            if (typeof showSection === 'function') showSection('login');
        }
        return;
    }

    if (isConsultant) {
        window.location.href = '/lms/take-certification';
        return;
    }

    // 🔹 Use preloaded progress
    const progress = foundationCourseProgress;

    if (button && button.id === 'foundation-btn') {
        button.innerText = progress >= 100 ? 'Continue' : 'Get Certified';
    }

    if (progress >= 100) {
        window.location.href = '/lms/take-certification';
    } else if (isFoundation) {
        const modal = document.querySelector('.modal-overlay');
        if (modal) modal.style.display = 'flex';
    }
}








/* NEW FUNCTION: Change button text on load if user is logged in */
function updateCourseButtonsForLoggedInUser() {
    if (isUserLoggedIn()) {



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
                debugger;
                e.preventDefault();
                window.history.pushState({}, '', '/login');

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

    homeLink.classList.add('active-link');

    function removeActiveClasses() {
        const allLinks = [homeLink, docLink, coursesLink];
        allLinks.forEach(link => link.classList.remove('active-link'));
    }

    // Docs link click handler
    docLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all content sections
        docContainer.style.display = 'block';
        mainContent.style.display = 'none';
        certContainer.style.display = 'none';
        eiqContainer.style.display = 'none';

        // Apply active class to the clicked link
        removeActiveClasses();
        docLink.classList.add('active-link');
    });

    // Home
    // Home
    [homeLink, homeLinkLogo].forEach(element => {
        if (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();

                // Hide all content sections
                docContainer.style.display = 'none';
                mainContent.style.display = 'block';
                certContainer.style.display = 'none';
                eiqContainer.style.display = 'none';

                // Apply active class to the clicked link
                removeActiveClasses();
                homeLink.classList.add('active-link');
            });
        }
    });

    // Courses link click handler
    coursesLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all content sections
        docContainer.style.display = 'none';
        mainContent.style.display = 'none';
        certContainer.style.display = 'block';
        eiqContainer.style.display = 'none';

        // Apply active class to the clicked link
        removeActiveClasses();
        coursesLink.classList.add('active-link');
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
document.addEventListener('DOMContentLoaded', function () {
    initCarousel();

    // Start auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const carousel = document.querySelector('.testimonial-carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
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

carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', function (e) {
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




function toggleChat() {
    const container = document.querySelector('.chatbot-container');
    const toggleBtn = document.getElementById('chatToggle');

    if (this.isChatOpen) {
        container.style.display = 'none';
        toggleBtn.classList.remove('active');
        this.isChatOpen = false;
        document.getElementById('chatToggle').style.display = 'block';
    } else {
        container.style.display = 'flex';
        toggleBtn.classList.add('active');
        this.isChatOpen = true;
        setTimeout(() => document.getElementById('messageInput').focus(), 100);
        document.getElementById('chatToggle').style.display = 'none';
    }
}
function minimizeChat() {
    const container = document.querySelector('.chatbot-container');
    container.classList.toggle('fullscreen');
    this.isMinimized = !this.isMinimized;
}

function closeChat() {
    toggleChat();
}

async function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (!message) return;
    if (!window.hasStartedChat) {
        document.querySelector('.welcome-message')?.remove();
        window.hasStartedChat = true;
    }
    addMessage(message, 'user');
    input.value = '';
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
        const csrfRes = await fetch('/api/method/lms.lms.utils.get_csrf_token');
        const csrfData = await csrfRes.json();
        const csrfToken = csrfData.message;
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
        addMessage(answer, 'bot'); // Left side
        if (payload?.data?.[0]?.conversational_id) {
            localStorage.setItem('conv_id', payload.data[0].conversational_id);
        }
    } catch (err) {
        console.error("❌ Error:", err);
        document.getElementById('typingIndicatorMessage')?.remove(); // remove loader
        addMessage("Sorry, something went wrong talking to the AI.", 'bot');
    }
}
function formatResponse(message) {
    message = message.replace(/\*+/g, '');
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
            continue;
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
}

function addMessage(text, sender) {
    const welcomeMsg = document.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }
    const chatArea = document.getElementById('chatArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    const botSVG = `
        <div class="bot-icon"></div>
    `;
    const userSVG = `
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
        </svg>
    `;
    avatarDiv.innerHTML = sender === 'user' ? userSVG : botSVG;
    const formattedText = formatResponse(text);
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = `message-bubble ${sender}`;
    bubbleDiv.innerHTML = formattedText;
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(bubbleDiv);
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}
document.getElementById('messageInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

function createToggleButton() {
    var menuContainer = document.querySelector('.mobile-menu-container');
    var menuList = document.getElementById('ast-hf-menu-1');

    // Create toggle button
    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'menuToggleBtn';
    toggleBtn.innerHTML = '☰'; // Only the icon
    toggleBtn.style.fontSize = '24px';
    toggleBtn.style.padding = '4px 10px';
    toggleBtn.style.background = 'transparent';
    toggleBtn.style.border = 'none';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.display = 'none';
    toggleBtn.style.marginBottom = '10px';
    toggleBtn.style.textAlign = 'right';
    toggleBtn.style.width = '100%';


    // Insert the toggle button before the menu
    menuContainer.insertBefore(toggleBtn, menuList);

    // Toggle menu on click
    toggleBtn.onclick = function () {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    };
}

function handleResponsiveMenu() {
    var toggleBtn = document.getElementById('menuToggleBtn');
    var menuList = document.getElementById('ast-hf-menu-1');

    if (window.innerWidth <= 459) {
        if (toggleBtn) {
            toggleBtn.style.display = 'block';
            menuList.style.display = 'none';
        }
    } else {
        if (toggleBtn) {
            toggleBtn.style.display = 'none';
            menuList.style.display = 'flex';
        }
    }
}

window.onload = function () {
    createToggleButton();
    handleResponsiveMenu();
};

window.onresize = function () {
    handleResponsiveMenu();
};
