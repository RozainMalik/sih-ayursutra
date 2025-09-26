import React from 'react'
import ayurvedaImg from '../assets/ayurveda.png'
import schedule from '../assets/smartschedule.png'
import notification from '../assets/notifications.png'
import integrated from '../assets/Integrated.png'


import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className='relative w-full '>
        {/* heading  */}
        <header className='relative w-full h-[500px] flex items-center justify-center'
        style={{ backgroundImage: `url(${ayurvedaImg})`, backgroundSize: 'cover', backgroundPosition: 'center',boxShadow:'10px  10px 10px rgba(0, 0, 0, 0.2)' }}>
          <div className='absolute inset-0 bg-black/20'></div>

            <div className='text-xl relative text-centerpx-6'>
               <h1 className='font-bold text-5xl mb-4 drop-shadow-lg '>
                    Welcome to Ayursutra!
                </h1>
                <p className='text-2xl drop-shadow-md'>
                    AYURSUTRA is your digital Ayurvedic companion.
                </p>
                <div className="space-y-4 mt-4">
                 <div className="flex items-start gap-3 justify-center">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p>Book Therapies.</p>
                 </div>
                
                 <div className="flex items-start gap-3 justify-center">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p>Manage schedules.</p>
                 </div>
                
                 <div className="flex items-start gap-3 justify-center">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p>Connect with practitioners.</p>
                 </div>
                </div>
            </div>
        </header>

        {/* main body login selects */}
        <main>
            <section className='h-1/2 w-full '>
                <h2 className='pt-10 pb-5 text-4xl font-bold font-stretch-120% font-mono '>Key Features</h2>
                <div className=' bg-white w-full rounded-2xl flex flex-col md:flex-row justify-between items-center gap-12  p-2 h-[300px] mx-auto mb-8'>
                     <p className='flex-1 text-lg md:text-xl px-8 md:px-10 text-center md:text-center font-sans'>
                        <b>Smart Scheduling Engine</b> - Automatically plans therapy sessions using real-time data. It respects Ayurvedic timing principles, practitioner expertise, and equipment availability, while handling scheduling conflicts and rescheduling efficiently.
                    </p>
                    <div className='flex-1 flex justify-center '>
                        <div className='relative w-2/3 h-[200px] flex items-center justify-center '
                         style={{ backgroundImage: `url(${schedule})`, backgroundSize: 'cover', backgroundPosition: 'center',boxShadow:'10px 10px 10px rgba(0, 0, 0, 0.2)' }}></div>
                    </div>
                </div>

                <div className=' bg-white w-full  flex flex-col md:flex-row justify-betweem items-center gap-12  p-2 h-[300px] mx-auto mb-8'>
                    <div className='flex-1 flex justify-center '>
                        <div className='relative w-2/3 h-[200px] flex items-center justify-center'
                         style={{ backgroundImage: `url(${notification})`, backgroundSize: 'cover', backgroundPosition: 'center',boxShadow:'10px 10px 10px rgba(0, 0, 0, 0.2)' }}></div>
                    </div>
                     <p className='flex-1 text-lg md:text-xl px-6 md:px-10 text-center md:text-center font-sans'>
                      <b> Multi-Channel Notification System</b> - Sends personalized instructions through:
                        • App<br></br>
                        • SMS<br></br>
                        • Email<br></br>
                        • WhatsApp<br></br>
                        Optimized timing ensures clear communication in regional languages.
                    </p>
                </div>
               
               <div className=' bg-white w-full rounded-2xl flex flex-col md:flex-row justify-between items-center gap-12  p-2 h-[300px] mx-auto mb-8'>
                     <p className='flex-1 text-lg md:text-xl px-8 md:px-10 text-center md:text-center font-sans'>
                        <b>Integrated Patient Management</b> - Combines traditional Ayurvedic
                        assessment methods (Prakriti/Vikriti) with modern digital health records, real-
                        time therapy tracking, symptom reporting, and data-driven analytics for
                        personalized treatment outcomes.
                    </p>
                    <div className='flex-1 flex justify-center '>
                        <div className='relative w-2/3 h-[200px] flex items-center justify-center'
                         style={{ backgroundImage: `url(${integrated})`, backgroundSize: 'cover', backgroundPosition: 'center',boxShadow:'10px 10px 10px rgba(0, 0, 0, 0.4)' }}></div>
                    </div>
                </div>
                {/* want to add little details about it */}
            </section>

            <section className='w-full py-16 px-6 flex flex-col justify-center items-center'>
                <h2 className='text-4xl font-bold text-center '>Choose Your Login</h2>
                <div className='  max-w-4xl rounded-2xl flex flex-col md:flex-row justify-center items-center gap-8  p-2 h-[400px]'>
                <Link to="/signup" className='flex-1 bg-white rounded-xl p-5 text-center shadow-lg hover:scale-110 transition-transform h-[250px]'>
                    <div className='text-6xl mb-4 mt-5'>👤</div>
                    <h3 className='text-2xl font-semibold mb-2'>Patient SignUp</h3>
                    <p className="text-gray-500">
                    Access your therapy schedules and book sessions easily.
                    </p>
                </Link>

                <Link to="/signup" className='flex-1 bg-white rounded-xl p-8 text-center shadow-lg hover:scale-110 transition-transform h-[250px]'>
                    <div className='text-6xl mb-4'>🧑🏻‍⚕️</div>
                    <h3 className='text-2xl font-semibold'>Doctor SignUp</h3>
                    <p className="text-gray-500">
                    Manage your appointments and patients efficiently.
                    </p>
                </Link>
                </div>
                <div className="text-center mt-6 space-y-0.5">
                    <p className="text-m text-gray-900">
                        Already have an account?{' '} 
                        <Link
                        to="/login"
                        className="text-green-700 hover:text-green-400 font-medium text-m"
                        >
                        Login
                        </Link>
                    </p>
                </div>
            </section>
        </main>

    </div>
  );
};

export default Home