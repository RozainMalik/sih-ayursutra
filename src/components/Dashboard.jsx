import { ArrowBigDown, ArrowBigDownDash, ArrowBigDownDashIcon, DropletIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import {doctors} from '../data/drData'   

const Dashboard = () => {

    const[success,setSuccess] = useState('')
      const handleBookAppointment = (doctor) => {
        setSuccess(`Your appointment with ${doctor.name} has been successfully booked!`)
        //  alert(`Your appointment with ${doctor.name} has been successfully booked!`);
    
      };


    const therapies = [
    { name: 'Snehapana', description: 'Snehapana involves internal oleation using medicated ghee to prepare the body for detoxification.It is one of the preparatory procedures (Purvakarma) of Panchakarma. Its primary purpose is to lubricate body tissues, mobilize toxins (Ama), and prepare the body for elimination therapies like Virechana (purgation) or Basti (medicated enema).' },
    { name: 'Vamana', description: 'Vamana is therapeutic emesis used to remove toxins from the stomach and respiratory tract. In this treatment, a patient is given inside and outside oleation and fomentation treatments for few days which includes therapies and some ayurvedic medicines. Once the toxins get melted and accumulate in upper cavities of body, the patient is given emetic medicines and decoction. This enables vomiting and helps in disposing of the poisons from the body tissues. Vaman treatment is particularly suggested basically for kapha-dominated conditions, such as weight gain, asthma and hyperacidity.' },
    { name: 'Virechana', description: 'Virechana is therapeutic purgation to cleanse the liver and intestines.In virechan, purgation or disposal of toxins happens through the clearing of the bowels. In this treatment too, the patient is given inside and outside oleation and fomentation treatments. From that point onward, the patient is given a natural purgative to encourage clearing of the guts that aides in purifying the body of toxins. Virechan treatment is prescribed fundamentally for pitta -dominated conditions, such as herpes zoster, jaundice , colitis, celiac infection etc.' },
    { name: 'Basti', description: 'Basti is medicated enema therapy to detoxify and balance Vata dosha.Managing medicated substances through enema is Ayurvedas exceptional commitment to the therapeutic world. The treatment has huge advantages, particularly in convoluted and chronic diseases. According to the nature of disease, home grown decoctions, oils, ghee or milk are managed into the rectum and this has incredible positive effects. This treatment is to a great degree powerful against vata-dominated conditions, such as arthritis, piles and constipation.' },
    { name: 'Nasya', description: 'Nasya involves nasal administration of herbal oils for head, neck, and respiratory wellness.This treatment is extremely effective in clearing and purging the head area. At the beginning of the treatment, the head and shoulder areas are given a delicate massage and fomentation. After that, nasal drops are regulated in both the nostrils. This achieves the cleaning of the whole head area and diminishes different sorts of cerebral pain, headache, hair issues, sleep disorder, neurological disorders, sinusitis, chronic rhinitis and respiratory ailments.' },
  ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
   <div className='w-full h-screen bg-white flex items-center justify-end'>
    {/* left side */}
   <div className='w-full h-screen bg-white flex flex-col items-center'>
    <div className='text-black text-2xl font-bold text-center max-w-md font-sans m-5'>
        <h1 className='font-serif font-bold'>Available Therapists</h1>
    </div>
    {success && <p style={{padding:"10px",background:"#4CAF50", display:"inline-block", borderRadius:"20px"}}>{success}</p>}
          <div className="flex flex-wrap gap-5 w-11/12 md:w-4/5 justify-center">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "15px",
                  borderRadius: "10px",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <h3 className="mt-2 font-semibold">{doctor.name}</h3>
                <p className='text-sm text-gray-700'>{doctor.specialization}</p>
                <p className='text-sm text-gray-500'>{doctor.experience}</p>
                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="mt-3 bg-green-900 text-white px-3 py-1 rounded-lg hover:bg-[#457a00] text-sm mb-5">
                  Book Appointment.
                </button>
              </div>
            ))}
          </div>
        </div>

    {/* right side */}
    <div className='flex flex-col items-center mr-20 space-y-6'>
        <div className='p-10 flex flex-col items-center justify-center w-[500px] h-auto bg-white rounded-[50px]  text-center space-y-4'>
             <div className='text-black text-2xl font-bold text-center max-w-md font-sans'>
                <p>What is PanchaKarma?</p>
                <p className='text-gray-900 font-light text-lg'>Panchakarma treatment is an Ayurvedic detox therapy that restores balance through five cleansing procedures is a Sanskrit word that means “five treatments”.This is a process used to clean the body of toxic materials left by disease and poor nutrition.</p>
            </div>
          {therapies.map((therapy, index) => (
            <div key={index} className='w-full'>
              <button
                onClick={() => toggleDropdown(index)}
                className='w-full text-left px-4 py-3 bg-green-900 hover:bg-[#457a00]  font-semibold text-white flex justify-between'
              >
                {therapy.name}
                <ArrowBigDownDash></ArrowBigDownDash>
              </button>
              {openIndex === index && (
                <div className='mt-2 px-4 py-2 text-gray-900 bg-white rounded-lg '>
                  {therapy.description}
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
</div>

  )
}

export default Dashboard

