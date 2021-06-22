import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"



import Layout from "../components/layout"





const IndexPage = () => (
  <Layout>
    <Helmet>
    <script src={withPrefix('main.js')} type="text/javascript" />
    </Helmet>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="assets/css/styles.css" /> 
        {/*==================== UNICONS ===================*/}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        {/*==================== SWIPPER CSS ===================*/}
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <title>Joshua Leyva Portfolio</title>
      </div>

       {/*==================== HEADER ===================*/}
       <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">Joshua</a>
          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="uil uil-estate nav_icon" /> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link active-link">
                  <i className="uil uil-user nav_icon" /> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon" /> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase nav_icon" /> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon" /> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon" /> Contact me
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav_close" id="nav-close" />
          </div>
          <div className="nav_btns">
            {/*---Theme change button--*/}
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav_toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>
      {/*==================== HOME ===================*/}
      <main className="main">
        {/*==================== HOME ===================*/}
        <section className="home section" id="home">
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
                <a href="https://www.linkedin.com/in/joshua-leyva-0b9942b6/" target="_blank" className="home_social-icon">
                  <i className="uil uil-linkedin-alt" />
                </a>
                <a href="https://github.com" target="_blank" className="home_social-icon">
                  <i className="uil uil-github-alt" />                            
                </a>
              </div>
              <div className="home_img">
                <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                    <image className="home_blob-img" x={-145} y={-60} xlinkHref={'/img/picture.jpg'} />
                  </g>
                </svg>
              </div>
              <div className="home_data">
                <h1 className="home_title">Hi, I am Joshua</h1>
                <h3 className="home_subtitle">Full Stack Developer</h3>
                <p className="home_description">Producing high quality work, 
                  and willing to learn something new everyday!</p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button_icon" />
                </a>
              </div>
            </div>
            <div className="home_scroll">
              <a href="#about" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse" />
                <span className="home_scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home_scroll-arrow" />
              </a>
            </div>
          </div>
        </section>
        {/*==================== ABOUT ===================*/}
        <section className="about section" id="about">
          <h2 className="section_title">About Me</h2>
          <span className="section_subtitle">My Introduction</span>
          <div className="about_container container grid">
            <img src="/img/about.jpg" alt="" className="about_img" />
            <div className="about_data">
              <p className="about_description">
                Full Stack Developer, with extensive knowledge of OOP, 
                Databse, UI/UX, and Data Structures. Delivering quality work.</p>
              <div className="about_info">
                <div>
                  <span className="about_info-title">01+</span>
                  <span className="about_info-name">Years <br /> experience</span>
                </div>
                <div>
                  <span className="about_info-title">5</span>
                  <span className="about_info-name">Completed <br /> Projects</span>
                </div>
                <div>
                  <span className="about_info-title">0</span>
                  <span className="about_info-name">Comapnies <br /> worked</span>
                </div>
              </div>
              <div className="about_buttons">
                <a download href="assets/pdf/josh_leyva_resume_2021 (3).pdf" className="button button--flex">
                  Download Resume<i className="uil uil-download-alt button_icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*==================== SKILLS ===================*/}
        <section className="skills sectioin" id="skills">
          <h2 className="section_title">Skills</h2>
          <span className="section_subtitle">My technical level</span>
          <div className="skills_container container grid">
            <div>
              {/*==================== SKILLS 1 ===================*/}
              <div className="skills_content skills_open">
                <div className="skills_header">
                  <i className="uil uil-servers skills_icon"> </i>
                  <div>
                    <h1 className="skills_titles">Backend Developer</h1>
                    <span className="skills_subtitle">Less than 4 year </span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" />
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">C++</h3>
                      <span className="skills_number">90%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_cpp" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">Java</h3>
                      <span className="skills_number">80%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_java" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">Python</h3>
                      <span className="skills_number">65%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_python" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">SQL</h3>
                      <span className="skills_number">60%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_sql" />
                    </div>
                  </div>
                </div>
              </div>
              {/*==================== SKILLS 2 ===================*/}
              <div className="skills_content skills_close">
                <div className="skills_header">
                  <i className="uil uil-brackets-curly skills_icon" />
                  <div>
                    <h1 className="skills_titles">Frontend Developer</h1>
                    <span className="skills_subtitle">Less than 4 year </span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" />
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">HTML</h3>
                      <span className="skills_number">65% </span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_html" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">CSS</h3>
                      <span className="skills_number">60%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_css" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">Javascript</h3>
                      <span className="skills_number">45%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_js" />
                    </div>
                  </div>
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">React</h3>
                      <span className="skills_number">15%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills_percentage skills_react" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== QUALIFICATION ===================*/}
        <section className="qualification section">
          <h2 className="section_title">Qualification</h2>
          <span className="section_subtitle">My personal journey</span>
          <div className="qualification_container container">
            <div className="qualification_tabs">
              <div className="qualification_button button--flex qualification_active" data-target="#education">
                <i className="uil uil-graduation-cap qualification_icon" />
                Education
              </div>
              <div className="qualification_button button--flex " data-target="#work">
                <i className="uil uil-briefcase-alt qualification_icon" />
                Work
              </div>
            </div>
            <div className="qualification_sections">
              {/*==================== QUALIFICATION CONTENT 1===================*/}
              <div className="qualification_content qualification_active" data-content id="education">
                {/*==================== QUALIFICATION 1===================*/}
                <div className="qualification_data">
                  <div>
                    <h3 className="qualification_title">Computer Science</h3>
                    <span className="qualification_subtitle">Florida Polytechnic University</span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt" />
                      2020 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification_rounder" />
                    <span className="qualification_line" />
                  </div>
                </div>
                {/*==================== QUALIFICATION 2===================*/}
                <div className="qualification_data">
                  <div />
                  <div>
                    <span className="qualification_rounder" />
                    <span className="qualification_line" />
                  </div>
                  <div>
                    <h3 className="qualification_title">Web Design</h3>
                    <span className="qualification_subtitle">Florida Polytechnic University</span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt" />
                      2020 - Present
                    </div>
                  </div>
                </div>
              </div>
              {/*==================== QUALIFICATION CONTENT 2===================*/}
              <div className="qualification_content" data-content id="work">
                {/*==================== QUALIFICATION 1===================*/}
                <div className="qualification_data">
                  <div>
                    <h3 className="qualification_title">Software Engineer</h3>
                    <span className="qualification_subtitle">placeholder</span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt" />
                      placeholder
                    </div>
                  </div>
                  <div>
                    <span className="qualification_rounder" />
                    <span className="qualification_line" />
                  </div>
                </div>
                {/*==================== QUALIFICATION 2===================*/}
                <div className="qualification_data">
                  <div />
                  <div>
                    <span className="qualification_rounder" />
                    <span className="qualification_line" />
                  </div>
                  <div>
                    <h3 className="qualification_title">IT Specialist</h3>
                    <span className="qualification_subtitle">Placeholder</span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt" />
                      placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== SERVICES ===================*/}
        <section className="services section" id="services">
          <h2 className="section_title">Services</h2>
          <span className="section_subtitle">What I offer</span>
          <div className="services_container container grid">
            {/*==================== SERVICES 1 ===================*/}
            <div className="services_content">
              <div>
                <i className="uil uil-web-grid services_icon" />
                <h3 className="services_title">Ui/Ux <br /> Designer</h3>
              </div>
              <span className="button button--flex button--small button--link services_button">
                View more
                <i className="uil uil-arrow-right button_icon" />
              </span>
              <div className="services_model">
                <div className="services_model-content">
                  <h4 className="services_model-title"> UI/UX <br /> Designer</h4>
                  <i className="uil uil-times services_model-close" />
                  <ul className="services_model-services grid">
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>I devloped this user interface for this website.</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>Webpage development.</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>I creat UX element interactions.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 2 ===================*/}
            <div className="services_content">
              <div>
                <i className="uil uil-arrow services_icon" />
                <h3 className="services_title">Frontend <br /> Developer</h3>
              </div>
              <span className="button button--flex button--small button--link services_button">
                View more
                <i className="uil uil-arrow-right button_icon" />
              </span>
              <div className="services_model">
                <div className="services_model-content">
                  <h4 className="services_model-title"> Frontend <br /> Developer</h4>
                  <i className="uil uil-times services_model-close" />
                  <ul className="services_model-services grid">
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>I devloped using HTML, CSS, and JS.</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p> GUI's developed in Python</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>Develop interactive Applications.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 3 ===================*/}
            <div className="services_content">
              <div>
                <i className="uil uil-pen services_icon" />
                <h3 className="services_title">Backend <br /> Developer</h3>
              </div>
              <span className="button button--flex button--small button--link services_button">
                View more
                <i className="uil uil-arrow-right button_icon" />
              </span>
              <div className="services_model">
                <div className="services_model-content">
                  <h4 className="services_model-title"> Backend <br /> Developer</h4>
                  <i className="uil uil-times services_model-close" />
                  <ul className="services_model-services grid">
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>Backend programming in C, C++, Python and Java.</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p> Data Sturctures</p>
                    </li>
                    <li className="services_model-service">
                      <i className="uil uil-check-circle services_model-icon" />
                      <p>Databse Management/ Database Modeling.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== PORTFOLIO ===================*/}
        <section className="portfolio section" id="portfolio">
          <h2 className="section_title">Portfolio</h2>
          <span className="section_subtitle">My work</span>
          <div className="portfolio_container container swiper-container">
            <div className="swiper-wrapper">
              {/*==================== PORTFOLIO 1 ===================*/}
              <div className="portfolio_content grid swiper-slide">
                <img src="/img/portfolio1.jpg" alt="" className="portfolio_img" />
                <div className="porfolio_data">
                  <h3 className="portfolio_title">Modern Website</h3>
                  <p className="portfolio_description">Website adabtable to all devices, with UI components
                    and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio_button">
                    Demo
                    <i className="uil uil-arrow-right button_icon" />
                  </a>
                </div>
              </div>
              {/*==================== PORTFOLIO 2 ===================*/}
              <div className="portfolio_content grid swiper-slide">
                <img src="/img/portfolio2.jpg" alt="" className="portfolio_img" />
                <div className="porfolio_data">
                  <h3 className="portfolio_title">Modern Website</h3>
                  <p className="portfolio_description">Website adabtable to all devices, with UI components
                    and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio_button">
                    Demo
                    <i className="uil uil-arrow-right button_icon" />
                  </a>
                </div>
              </div>
              {/*==================== PORTFOLIO 3 ===================*/}
              <div className="portfolio_content grid swiper-slide">
                <img src="/img/portfolio3.jpg" alt="" className="portfolio_img" />
                <div className="porfolio_data">
                  <h3 className="portfolio_title">Modern Website</h3>
                  <p className="portfolio_description">Website adabtable to all devices, with UI components
                    and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio_button">
                    Demo
                    <i className="uil uil-arrow-right button_icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* ADD ARROWS*/}
            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon" />
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon" />
            </div>
            {/* ADD Pagination*/}
            <div className="swiper-pagination" />
          </div>
        </section>
        {/*==================== PROJECT IN MIND ===================*/}
        <section className="project section">
          <div className="project_bg">
            <div className="project_container container grid">
              <div className="project_data">
                <h2 className="project_title">You have a new project</h2>
                <p className="project_description">Contact me now to start your project!</p>
                <a href="#contact" className="button button--flex button--white">
                  Contact Me
                  <i className="uil uil-message project_icon button_icon" />
                </a>
              </div>
              <img src="/img/PikPng.com_bulldog-png_838548.png" alt="" className="project_img" />
            </div>
          </div>
        </section>
        {/*==================== TESTIMONIAL ===================*/}
        <section className="testimonial section">
          <h2 className="section_title">Testimonial</h2>
          <span className="section_subtitle">What my clients have said about me</span>
          <div className="testimonial_container container swiper-container">
            <div className="swiper-wrapper">
              {/*==================== TESTIMONIAL 1 ===================*/}
              <div className="testimonial_content swiper-slide">
                <div className="testimonial_data">
                  <div className="testimonial_header">
                    <img src="/img/testimonial1.jpg" alt="" className="testimonial_img" />
                    <div>
                      <h3 className="testimonial_name">Sarah Smith</h3>
                      <span className="testimonial_client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                  </div>
                </div>
                <p className="testimonial_description">Quality Work! Really had a good understanding of 
                  what was going on throught the project!</p>
              </div>
              {/*==================== TESTIMONIAL 2 ===================*/}
              <div className="testimonial_content swiper-slide">
                <div className="testimonial_data">
                  <div className="testimonial_header">
                    <img src="/img/testimonial2.jpg" alt="" className="testimonial_img" />
                    <div>
                      <h3 className="testimonial_name">Matt Davidson</h3>
                      <span className="testimonial_client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                  </div>
                </div>
                <p className="testimonial_description">Quality Work! Really had a good understanding of 
                  what was going on throught the project!</p>
              </div>
              {/*==================== TESTIMONIAL 3 ===================*/}
              <div className="testimonial_content swiper-slide">
                <div className="testimonial_data">
                  <div className="testimonial_header">
                    <img src="testimonial3.jpg" alt="" className="testimonial_img" />
                    <div>
                      <h3 className="testimonial_name">John Doe</h3>
                      <span className="testimonial_client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                    <i className="uil uil-star testimonial_icon-star" />
                  </div>
                </div>
                <p className="testimonial_description">Quality Work! Really had a good understanding of 
                  what was going on throught the project!</p>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-testimonial" />
          </div>
        </section>
        {/*==================== CONTACT ME ===================*/}
        <section className="contact section" id="contact">
          <h2 className="section_title">Contact Me</h2>
          <span className="section_subtitle">Get in touch</span>
          <div className="contact_container container grid">
            <div>
              <div className="contact_information">
                <i className="uil uil-phone contact_icon" />
                <div>
                  <h3 className="contact_title">Call Me</h3>
                  <span className="contact_subtitle">(813)403-7056</span>
                </div>
              </div>
              <div className="contact_information">
                <i className="uil uil-envelope contact_icon" />
                <div>
                  <h3 className="contact_title">Email</h3>
                  <span className="contact_subtitle">jleyva6439@floridapoly.edu</span>
                </div>
              </div>
              <div className="contact_information">
                <i className="uil uil-map-marker contact_icon" />
                <div>
                  <h3 className="contact_title">Location</h3>
                  <span className="contact_subtitle">Tampa,Fl</span>
                </div>
              </div>
            </div>
            <form action className="contact_form grid">
              <div className="contact_inputs grid">
                <div className="contact_content">
                  <label htmlFor className="contact_label">Name</label>
                  <input type="text" className="contact_input" />
                </div>
                <div className="contact_content">
                  <label htmlFor className="contact_label">Email</label>
                  <input type="email" className="contact_input" />
                </div>
              </div>
              <div className="contact_content">
                <label htmlFor className="contact_label">Project Idea</label>
                <input type="text" className="contact_input" />
              </div>
              <div className="contact_content">
                <label htmlFor className="contact_label">Message</label>
                <textarea name id cols={0} rows={7} className="contact_input" defaultValue={""} />
              </div>
              <div>
                <a href="#" className="button button--flex">
                  Send Message
                  <i className="uil uil-message button_icon" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/*==================== FOOTER ===================*/}
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Joshua</h1>
              <span className="footer_subtitle">Full Stack Developer</span>
            </div>
            <ul className="footer_links">
              <li>
                <a href="#services" className="footer_link">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="footer_link">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="footer_link">Contact</a>
              </li>
            </ul>
            <div className="footer_socials">
              <a href="https://www.facebook.com/josh.leyva.16/" target="_blank" className="footer_social">
                <i className="uil uil-facebook-f" />
              </a>
              <a href="https://www.instagram.com/imjoshleyva/" target="_blank" className="footer_social">
                <i className="uil uil-instagram" />
              </a>
              <a href="https://twitter.com/" target="_blank" className="footer_social">
                <i className="uil uil-twitter-alt" />
              </a>
            </div>
          </div>
          <p className="footer_copy">© Copyright. All right reserved</p>
        </div>
      </footer>
    
      {/*==================== SCROLL TOP ===================*/}
       <a href="#" className="scrollup" id="scroll-up">
      <i className="uil uil-arrow-up scrollup_icon" />
      </a>
       
      <script src={'swiper-bundle.min.js'}></script>
      <script src={'main.js'}></script>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    
  </Layout>
)

export default IndexPage
