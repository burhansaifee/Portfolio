
import React from "react";
import Pomodoro from '../assets/Circuit diagram.jpeg'
import Parking from '../assets/Smart Parking.jpeg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title == 'Pomodoro Timer' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Pomodoro} alt="" />
            </a>}
            {title == 'Smart Parking' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Parking} alt="" />
            </a>}
            
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}


export const project = [
    {
        title: 'Pomodoro Timer',
        description: 'This Arduino-based Pomodoro Timer is designed to enhance focus and productivity using the Pomodoro technique. It features a digital display to show the countdown timer, buttons for user interaction, a buzzer for audio alerts, and an LED bulb to indicate session status. The timer operates in 25-minute work intervals, followed by short breaks, helping users manage time efficiently.',
        image: { Pomodoro },
        git: 'https://github.com/burhansaifee/Iot-Projects/tree/main/Pomodoro',
        technologies: ['Embedded C', 'Iot Devices',]
    },
    {
        title: 'Smart Parking',
        description: 'This Smart Parking System is an IoT-based automated solution designed to efficiently manage vehicle parking using Arduino Nano, IR sensors, an ultrasonic sensor, a servo motor, and an ESP8266 Wi-Fi module. The system detects available parking slots using IR sensors, controls entry through an automated gate, and provides online booking functionality via a Flask web server.🚀 This project demonstrates expertise in IoT, embedded systems, and web development.',
        image: { Parking },
        git: "https://github.com/burhansaifee/Iot-Projects/tree/main/Smart%20Parking",
        technologies: ['Embedded C', 'Arduino Nano', 'IR Sensore', 'Python', 'HTML']
    },
    
]

export default Projects