import React, { useState,useEffect } from 'react';
import './App.css';
import couple from "./assets/images/couple.png"
import Time from "./components/Time"
import SaveToCalendarButton from './components/Save-to-calendar';
import cowo from "./assets/images/cowo.png"
import cewe from "./assets/images/cewe.png"
import { CiDesktopMouse2 } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [state, setState] = useState(true);

  


  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 300,
    })
  }, [state])

  
  const handleMoveTop = () => {
    setState(false);
  };

  return (
    <>
      <div>

        <div className={state ? 'model-container' : "model-container-move"} style={{
          position: 'absolute',
          top: state ? '0px' : '-100vh',
          opacity: state ? 1 : 0,
          transition: 'top 2s ease, opacity 2s ease',
        }} >
          <div className='mode-data'>
            <p>The Wedding Of</p>
            <img src={couple} />
            <p>Shoab and Shiba</p>
            <p>To the Honorable Sir/Madam/Brother/Sister</p>
            <p>All friends</p>
            <button onClick={() => handleMoveTop()} >Open Invitation</button>
          </div>


        </div>





        <div className={state ? 'main-container' : "main-container-move"}
          style={{
            position: 'absolute',
            top: state ? '-100vh' : '0vh',
            opacity: state ? 0 : 1,
            transition: 'top 2s 1s ease, opacity 2s 1s ease',
          }}
        >
          <div className='main-continer-box'>
          <p>Wedding Invitation</p>
          <img src={couple} />
          <p>Shoaib & Shiba</p>
          <p>Thursday, 1 December 2024</p>
          <Time />
          <SaveToCalendarButton />

          <div>
          <CiDesktopMouse2 className='icon' />
          <p>scroll down</p>
          </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
              <path fill="#f8f9fa" fill-opacity="1"
                d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,122.7C672,117,768,171,864,160C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
              </path>
            </svg>
        </div>


      </div>
      <div className='scroll-section'  style={{display:state ? "none" :"block" }}>
        <div className='section-one'>


          <p data-aos="zoom-in">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <p data-aos="zoom-in">Assalamualaikum Warahmatullahi Wabarakatuh</p>
          <p data-aos="zoom-in">Without diminishing respect, we invite you, along with your family and close relatives, to attend our wedding ceremony.</p>

      

          <div >
            <img src={cowo} data-aos="fade-up"
     data-aos-duration="3000" />
            <p data-aos="fade-up"
     data-aos-duration="3000">Shoaib</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">from</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">Mandi Bahauddin</p>
            <img src={cewe} data-aos="fade-up"
     data-aos-duration="3000" />
            <p data-aos="fade-up"
     data-aos-duration="3000">Shiba</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">from</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">Gujran wala</p>
          </div>
        </div>



        <div className='surah'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" aria-hidden="true">
              <path fill="#f8f9fa" fill-opacity="1"
                d="M0,0L48,32C96,64,192,128,288,138.7C384,149,480,107,576,106.7C672,107,768,149,864,144C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          
          <div>
            <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Allah Subhanahu Wa Ta'ala Said</p>
            <p data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Aur uski (Allah ki) azmat ke nishanoun mein se ek yeh hai ke usne tumhare liye tumhari hi jins se joore banaye, taake tum unki taraf mael ho aur usmein sukoon pao, aur usne tumhare beech mein muhabbat aur rahmati daal di. Be-shak, is mein sochne walon ke liye Allah ki azmat ke nishanay hain.</p>
            <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Surah Ar-Rum Ayat 21</p>
          </div>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
              <path fill="#f8f9fa" fill-opacity="1"
                d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,122.7C672,117,768,171,864,160C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
              </path>
            </svg>
        </div>




        <div className='invite'>
          <p data-aos="fade-down">Time & Place</p>
          <p data-aos="fade-down">With the hope for Allah Subhanahu Wa Ta'ala's mercy and blessings, InshaAllah we will be holding the event:</p>
         
         
          <div data-aos="fade-up-left">
            <h3>Mehandi</h3>
            <p>Thursday, 14th November 2024</p>
            <p>At 08:00 AM WIB until completion</p>
          </div>

          <div data-aos="fade-down-right">
            <h3>Barat</h3>
            <p>Thursday, 14th November 2024</p>
            <p>At 11:00 AM WIB until completion</p>
          </div>

          <div data-aos="fade-down-left">
            <h3>Walima</h3>
            <p>Thursday, 14th November 2024</p>
            <p>At 11:00 AM WIB until completion</p>
          </div>

          <button data-aos="flip-left" >View on Google Maps</button>
        </div>





        <div className='love-git' data-aos="flip-up">
          <p>Love Gift</p>
          <p>Without diminishing respect, for those of you who wish to show your love and affection for us, you may do so through:</p>
         
          <div data-aos="flip-up">
            <div>Easypaisa</div>
            <div>Jazzcash</div>
          </div>

        </div>

        <div className='happiness'>
          <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">It is a happiness and honor for us if you, Sir/Madam, would be willing to attend and give your blessings and prayers to the newlyweds.</p>
          <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
          <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">اَلْحَمْدُ للَّهِ رَبِّ الْعالَمِينَ          </p>
        </div>
      </div>

    </>
  );
};

export default App;
