import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='info-container'> 
            <div className='info-title'> 
              <h1 className='about-title-text'>About Me</h1> 
            </div>
            <div className='about-summary'>
              <p>
                As a driven developer, I try to keep a calm, mature, and open-minded approach
                to the things I do, whether that be problem-solving within the code or simply 
                being in a social atmosphere. My background in information technology has 
                equipped me with the skills to think programmatically, to be aware of Human 
                Computer Interaction, to have a generally well-rounded tech and business mindset. 
                Combined with my software development skills, I plan to lead a successful career,
                looking to better our world and continuing to advance it,  I am ready and willing 
                to provide my best, with dedication, loyalty, and an inquisitive mind to developing 
                products and projects that will benefit all people. 
              </p> <br />
              <p>
                <b>Skills:</b> <br />
                <i>Programming Languages/Frameworks</i>: HTML, CSS, JavaScript, JQuery, ReactJS, React Native, Next.js, Node.js, SQL, Sequelize, Express, Ruby, Ruby on Rails, Java, PHP, Wordpress, Drupal, Bootstrap, Prismic<br />
                <i>Development Software</i>: Sublime, VSCode, Notepad++, Terminal, PostgresSQL, MySQL, Netbeans, Android Studio, MobaXTerm, AWS, Adobe Flash, Optimizely, Salesforce Marketing Cloud, KWI, Storied<br />
                <i>Software</i>: Adobe Photoshop, Adobe Fireworks, Minitab, Genymotion, XAMPP
              </p> <br />
              <p>
                <b>Contact Info:</b> <br />
                Phone #: (646) 201-6219 <br /> 
                Email: asheber_arlain@yahoo.com / asheberarlain@gmail.com
              </p> <br />
              <p>
                <b>Resume: </b> <br />
                <a 
                  href='https://drive.google.com/file/d/1PzhnkO4wGiRuMhQx6iza4oV1z_FIF5Zr/view?usp=sharing' 
                  className='resume-icon'>
                    <i className="far fa-file-alt fa-3x"></i>
                </a>
              </p>
            </div>
        </div> 
      </div>
    );
  }
}

export default About;
