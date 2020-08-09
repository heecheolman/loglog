import React from 'react'

import ResumeLayout from '../layouts/ResumeLayout'
import Introduce from '../resume-components/Introduce'
import Career from '../resume-components/Career'
import Skills from '../resume-components/Skills'
import Experience from '../resume-components/Experience'
import Likes from '../resume-components/Likes'
import Education from '../resume-components/Education'
import DarkMode from '../components/DarkMode'
import Seo from '../components/Seo'

const Resume = () => {
  return (
    <ResumeLayout>
      <Seo title="이력서" />
      <DarkMode />
      <Introduce />
      <Career />
      <Skills />
      <Experience />
      <Likes />
      <Education />
    </ResumeLayout>
  )
}

export default Resume
