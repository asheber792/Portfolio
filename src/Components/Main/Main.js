import React, { Component } from 'react';
import './Main.css';
import displayPic from '../../assets/images/aa_pic.jpg'

class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='img-container'>
          <img className='display-pic' src={displayPic} alt='site owner: Asheber Arlain' />
        </div>
        <div className='info-container'> 
            <div className='info-title'> 
              <h1 className='title-one'>Asheber Arlain</h1> 
              <h2 className='title-two'>Full Stack Web Developer</h2> 
            </div>
            <p className='info-summary'>
              A diligent and professional web developer looking to further improve his abilities and 
              contribute to an organization's web presence as well as assist at any level of the 
              development life cycle if need be. Well versed in customer-oriented work and dealing 
              with all types of people. Ready and willing to face any challenge with integrity and 
              with certainty to persevere.
            </p>
        </div> 
      </div>
    );
  }
}

export default Main;
