import React from 'react'

function AboutCard() {
  return (
    <div className="about-card card my-5">
      <div className="about-card-body card-body">
        <div className="about-card__article col-md-6"
          data-aos="fade-zoom-in">
          <p>
            <strong>General Cube</strong> has been started up in purpose of knowledge sharing, websites and web application development in early 2014.
            In case of freelance activity and membership of IT companies and software houses as Front-end or UI developer, there was, and fortunatelly still is, 
            an opportunity to cooperate with great experts and take part in outnumber projects in many categories, such as e-commerce webshops, personal websites,
            telecommunication industry app, education application, web chat application, insurence single-page application.
          </p>
          <p>
            Always choosing technology that solves a problem, not the <i>trendy</i> one. Always working smart not hard.
          </p>
        </div>
      </div>

      <div className="about__list list-group">
        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start active"
          data-aos="fade-left">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="about__list-title">Modern applications and websites</h5>
          </div>
          <p className="about__list-paragraph">
            Based on up-to-date technologies we could build the solution from scratch or develop existing one.
          </p>
        </div>

        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start"
            data-aos="fade-left"
            data-aos-delay={ 100 } >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">UI & UX implementation</h5>
          </div>
          <p className="mb-1">We focus on accessibility and useability of product during the whole development process.</p>
        </div>

        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start"
            data-aos="fade-left"
            data-aos-delay={ 200 } >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Single page applications</h5>
          </div>
          <p className="mb-1">Single paged application developed using React JS library or Backbone / Marionette framework are powerful tools for building great applications.</p>
        </div>

        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start"
            data-aos="fade-left"
            data-aos-delay={ 300 } >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Rest API integration</h5>
          </div>
          <p className="mb-1">Javascript based application could be easily integrated with any REST Api. Also Node JS and Express gives opportunity to build complex.</p>
        </div>

        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start"
            data-aos="fade-left"
            data-aos-delay={ 400 } >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Cross browser and device compatibility</h5>
          </div>
          <p className="mb-1">Support of all browser always challenge. Application should looks well and be compatible with every device whatever browser user choose.</p>
        </div>

        <div className="about__list-item list-group-item list-group-item-action flex-column align-items-start"
            data-aos="fade-left"
            data-aos-delay={ 500 } >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Responsive design</h5>
          </div>
          <p className="mb-1">
            In conjunction with outnumber amount of users browse web using smartphones, 
            it is a good habit to prepare application or website for those users who prefer searching web that way.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard;
