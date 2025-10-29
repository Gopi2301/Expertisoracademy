import React from 'react'
import Hero from '../components/TestimonialsComponents/Hero'
import Achieve from '../components/TestimonialsComponents/Achieve'
import StudentsSay from '../components/HomeComponents/StudentsSay'
import { assets } from '../assets/assets'
import Success from '../components/TestimonialsComponents/Success'
import { pages } from '../constants/pages'


const Testimonials = () => {
  return (
    <>
      <div className='bg-black'>
        <Hero />
        <Achieve />
        <StudentsSay students_say={pages.testimonial_page.students_say_video} />
        <Success />
      </div>
    </>
  )
}

export default Testimonials