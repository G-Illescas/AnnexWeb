import React from 'react';
import './Home.css'; 
import LandingImage from './Landing.jpg'; 
import Rick from './rr.jpg'; 

function Home() {

  
  return (
    <div>
    
      <div className="home-content">
        <div className="cover">
          <img src={LandingImage} alt="Cover" />
          <div className="dark-overlay"></div>

          <div className="overlay">
            <div className="overlay-content">
              <h1>Welcome to Annex, a Multimedia Digital Library</h1>
              <p>Organize, manage, and explore your collections like never before with Annex. Whether you're a digital enthusiast, a board game aficionado, or a collector of pop culture treasures, our platform is your central hub for cataloging your passions.</p>
              <p>Discover new favorites, track your progress, and connect with fellow enthusiasts in our vibrant community. With Annex, the world of collecting is at your fingertips.</p>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">

<br></br><br></br>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Featured Creator: <br /><span className="text-body-secondary">Rick Riordan</span></h2>
                <p className="lead">Join us in celebrating the extraordinary imagination and storytelling prowess of Rick Riordan, the acclaimed author behind the beloved Percy Jackson series. With his unique blend of mythology, humor, and adventure, Riordan has captured the hearts of readers young and old around the globe.

                Through the pages of his books, Riordan has transported us to mythical realms where gods, demigods, and heroes clash in epic battles against forces both ancient and modern. From Camp Half-Blood to the streets of Manhattan, his richly imagined worlds are filled with unforgettable characters and thrilling quests.

                Beyond Percy Jackson, Riordan has continued to enchant readers with other series such as The Heroes of Olympus, The Kane Chronicles, and Magnus Chase and the Gods of Asgard, each exploring different mythologies and introducing readers to new and diverse heroes.

                Riordan's impact extends far beyond the pages of his books, inspiring a generation of young readers to explore the wonders of mythology and the power of storytelling. His dedication to diversity and inclusivity has earned him widespread acclaim and a devoted fanbase.

                Join us in honoring Rick Riordan, a master storyteller whose tales of gods and monsters have ignited the imaginations of millions.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img src={Rick} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Rick Riordan"  />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
