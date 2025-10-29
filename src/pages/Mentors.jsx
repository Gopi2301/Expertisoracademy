import React from 'react'
import Hero from '../components/MentorsComponents/Hero'
import OurMentors from '../components/MentorsComponents/OurMentors'
import PaginatedGrid from '../components/MentorsComponents/PaginatedGrid'
import Creator from '../components/MentorsComponents/Creator'

const Mentors = () => {
  return (
    <>
    <div className='text-white'>
     <Hero/>
     <OurMentors/>
     <PaginatedGrid />
     <Creator/>
    </div>
    </>
  )
}

export default Mentors