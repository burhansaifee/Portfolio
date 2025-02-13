import React from 'react';
import '../App.css';

import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/burhanuddin-saifee-6aa15b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>Burhanuddin Saifee</a>, a 2022-2026 student🎓.I am a passionate and driven student of Computer Science with a strong interest in IoT, web development, and programming. My curiosity for technology has led me to explore various aspects of software and hardware, from building interactive websites and applications to developing smart IoT devices that enhance everyday life.
              <br />
              With a solid foundation in languages like HTML, CSS, JavaScript, and Python, I enjoy creating seamless digital experiences while also integrating them with IoT solutions. My enthusiasm for cybersecurity and blockchain further fuels my desire to build secure and efficient systems.
            </p>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Beyond technology, I have a deep love for playing football, cooking, trekking, and traveling. Exploring new places and experiencing different cultures inspires me, while football and trekking keep me active and motivated. Cooking is another passion of mine, allowing me to experiment and create something unique, much like in programming.

              I am always eager to learn new technologies, work on innovative projects, and contribute to the ever-evolving tech landscape.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1SoZ6gpurTBfWjrcbldhtrWeWXPt2Qc2y/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;