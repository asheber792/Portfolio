import React, { Component } from 'react';
import './Projects.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import conDivPic from '../../assets/images/con_div_pic.jpg'
import gobPic from '../../assets/images/gob_pic.png'
import hcPic from '../../assets/images/huxley_collection_pic.png'



class Projects extends Component {
  constructor() {
    super()
    this.state = {
      title: "Consciousness Diversified",
      description: 
        `A mobile app displaying information / instructions / techniques
        of consciousness exploration in some of it's many capacites with methods such as
        lucid dreaming, meditation, binaural beats, etc. You will be able to create and maintain
        your own Experience/Dream Journal on you're profile, viewable only by you upon registration, 
        to aid in your journey. (Built in: Client-side - <strong>React Native</strong> / Server-Side: <strong>Ruby on Rails</strong>)`
    }
  }

  onSlideChanged = async (e) => {

      if(e.slide === 1){
        await this.setState({
          title: "Garden of Battle",
          description: 
            `Grid based figher game where the player can 
            move his character around the grid where enemies will be placed and can be 
            defeated through quick time event -esque (https://en.wikipedia.org/wiki/Quick_time_event) 
            key press actions. (Built in <strong>HTML/CSS/Javascript</strong>)`
        })
      }
      else if(e.slide === 2){
        await this.setState({
          title: "Huxley Collection App",
          description: `A Web App displaying the works of Aldous Huxley, providing quotes, book covers, titles, descriptions, etc.
          (Built in <strong>React</strong> and pulling data from <strong>external API's</strong>)`
        })
      }
      else{
        await this.setState({
          title: "Consciousness Diversified",
          description: 
            `A mobile app displaying information / instructions / techniques
            of consciousness exploration in some of it's many capacites with methods such as
            lucid dreaming, meditation, binaural beats, etc. You will be able to create and maintain
            your own Experience/Dream Journal on you're profile, viewable only by you upon registration, 
            to aid in your journey. (Built in: Client-side - <strong>React Native</strong> / Server-Side: <strong>Ruby on Rails</strong>)`
        })
      } 
  }

  render() {
    return (
      <div className='projects-container'>
        <div className='info-container'> 
            <div className='info-title'> 
              <h1 className='projects-title-text'>Projects</h1> 
            </div>
            <div className='gallery-container'>
            <div className='project-gallery'>
              <div className='slider-container'>
              <AliceCarousel 
                  duration={1500}
                  onSlideChanged={this.onSlideChanged}
                  disableAutoPlayOnAction={true}
                  mouseDragEnabled >
                    <a href='https://expo.io/@asheber792/client'><img src={conDivPic} alt='project cover 1' className='project-image' /></a>
                    <a href='https://pages.git.generalassemb.ly/asheber792/project-1/garden-of-battle/'><img src={gobPic} alt='project cover 2' className='project-image' /></a>
                    <a href='http://huxley-collection.surge.sh/'><img src={hcPic} alt='project cover 3' className='project-image' /></a>
                </AliceCarousel>
              </div>
              
            </div>
            <div className='project-info'>
                <h3 className='project-title'>{this.state.title}</h3>
                <p className='project-descrip' dangerouslySetInnerHTML={{__html: this.state.description}}></p>
            </div>
            </div>
        </div> 
      </div>
    );
  }
}

export default Projects;
