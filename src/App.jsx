import React, { useState,useEffect,useRef  } from 'react';
import './App.css';
import couple from "./assets/images/couple.png"
import Time from "./components/Time"
import SaveToCalendarButton from './components/Save-to-calendar';
import cowo from "./assets/images/cowo.png"
import cewe from "./assets/images/cewe.png"
import { CiDesktopMouse2 } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';
import auto from "./assets/WhatsApp Audio 2024-11-14 at 17.44.05.mpeg"
import { useParams } from 'react-router-dom';
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";



const App = () => {
  const [state, setState] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const { id } = useParams(); // Access the `id` parameter from the URL
  const [name, setName] = useState(''); // State to store the name

  const users = [
    { name: "Usama Liaqat", id: 1121 },
    { name: "Musawwar Riaz", id: 1122 },
    { name: "Jameel Ahmad", id: 1123 },
    { name: "Muhammad Bilawal", id: 1124 },
    { name: "Muhammad Faizan", id: 1125 },
    { name: "Hassan Hashmi", id: 1126 },
    { name: "Muhammad Zahid", id: 1127 },
    { name: "Arslan Bin Farooq", id: 1128 },
    { name: "Sameer Mukhtar", id: 1129 },
    { name: "Danish Raza", id: 1130 },
    { name: "Sir Haleem", id: 1131 },
    { name: "Sir Rizwan", id: 1132 },
    { name: "Rizwana Gulam M", id: 1133 },
    { name: "Amina Ehsan", id: 1134 },
    { name: "Naima Kainat", id: 1135 },
    { name: "Asifa Ch.", id: 1136 },
    { name: "Mr & Mrs. Waqas", id: 1137 },
    { name: "Mr & Mrs. Awais", id: 1138 },
    { name: "Bhai Haseeb", id: 1139 },
    { name: "Khateeb Talib", id: 1140 },
    { name: "Zia Talib", id: 1141 },
    { name: "Khubaib Talib", id: 1142 },
    { name: "Hasfa Talib", id: 1143 },
    { name: "Ayesha Talib", id: 1144 },
    { name: "Farman Elahi", id: 1145 },
    { name: "Ustad Luqman", id: 1146 },
    { name: "Zubair Zafar", id: 1147 },
    { name: "Saqib Ch.", id: 1148 },
    { name: "Salman Ch.", id: 1149 },
    { name: "Muavia Tahir", id: 1150 },
    { name: "Muhammad Usman", id: 1160 },
    { name: "Muhammad Luqman", id: 1161 },
    { name: "Safia Luqman", id: 1162 },
    { name: "Moin Uddin", id: 1163 },
    { name: "Sir Moeen", id: 1164 },
    { name: "Farah Ashiq(Bridal)", id: 1165 },
    { name: "M.Shoaib(Groom)", id: 1166 },
    { name: "Solar Health Team", id: 1167 },
    { name: "Abu Bakar", id: 1168 },
    { name: "Abu Sufyan", id: 1169 },
    { name: "Muhammad Zeeshan", id: 1170 },
    { name: "Akhtar Ali", id: 1171 },
    { name: "Muhammad Kashif", id: 1172 },
    { name: "Waseem Waraich ", id: 1173 },
  ];
  
  
  useEffect(() => {
    // Match the `id` from URL with the users array
    const matchedUser = users.find(user => user.id === parseInt(id));
    
    // If a match is found, set the name in the state
    if (matchedUser) {
      setName(matchedUser.name);
    } else {
      setName('User not found'); // Handle case when no user is found
    }
  }, [id]); 

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 300,
    })
  }, [state])

  useEffect(() => {
    if (!state && audioRef.current) {
      audioRef.current.play();
    }
  }, [state]);
  const handleMoveTop = () => {
    setState(false);
  };
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  }


  const openLocation = () => {
    window.open(
      'https://maps.app.goo.gl/SmkJMLePSG1he5fKA',
      
      '_blank'
    );
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
            <p>Dear <span>{name}</span></p>
            <p> I am cordially invites you to join us for our wedding ceremony.
            Let's create unforgettable memories together! </p>

            <p>The Wedding Of</p>
            <img src={couple} />
            <p>M.Shoaib with Farah Ashiq</p>
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
          <p>M.Shoaib with Farah Ashiq</p>
          <p>Saturday, 30 November 2024</p>
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
     data-aos-duration="3000">Muhammad Shoaib</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">from</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">Mandi Bahauddin</p>
            <img src={cewe} data-aos="fade-up"
     data-aos-duration="3000" />
            <p data-aos="fade-up"
     data-aos-duration="3000">Farah Ashiq</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">from</p>
            <p data-aos="fade-up"
     data-aos-duration="3000">GujranWala</p>
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
     data-aos-easing="ease-in-sine">Aur uski (Allah ki) azmat ke Nishaniyon mein se ek yeh hai ke usne tumhare liye tumhari hi jins se joore banaye, taake tum unki taraf mael ho aur usmein sukoon pao, aur usne tumhare beech mein muhabbat aur rahmati daal di. Be-shak, is mein sochne walon ke liye Allah ki azmat ke Nishaniyan hain.</p>
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
            <p>FRIDAY, 29th November 2024</p>
            <p>Starting at 8:00 PM WIB and continuing until completion.</p>
          </div>

          <div data-aos="fade-down-right">
            <h3>Barat</h3>
            <p>SATURDAY, 30th November 2024</p>
            <p>Departure at 11AM and continuing untill completion.</p>
          </div>

          <div data-aos="fade-down-left">
            <h3>Walima</h3>
            <p>SUNDAY, 1th December 2024</p>
            <p>Starting at 1 PM and continuing untill completion.</p>
          </div>

          <button data-aos="flip-left" onClick={openLocation} >View on Google Maps</button>

      
        </div>





        {/* <div className='love-git' data-aos="flip-up">
          <p>Love Gift</p>
          <p>Without diminishing respect, for those of you who wish to show your love and affection for us, you may do so through:</p>
         
          <div data-aos="flip-up">
            <div>Easypaisa</div>
            <div>Jazzcash</div>
          </div>

        </div> */}

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




      <audio ref={audioRef} src={auto} loop muted={isMuted} />
      <button className="mute-button" onClick={toggleMute} style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        padding: '10px',
        fontSize: '16px',
        background: '#fff',
        border: 'none',
        outline:"none",
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor:"transparent",
      }}>
        {isMuted ? <VscUnmute /> : <VscMute />}
      </button>
    </>
  );
};

export default App;
