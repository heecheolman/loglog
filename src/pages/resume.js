import React from 'react'
import ResumeLayout from '../layouts/ResumeLayout'
import Introduce from '../resume-components/Introduce'
import Career from '../resume-components/Career'
import Skills from '../resume-components/Skills'
import Experience from '../resume-components/Experience'
import Likes from '../resume-components/Likes'
import Education from '../resume-components/Education'
import Seo from '../components/Seo'

function Resume() {
  return (
    <ResumeLayout>
      <Seo title="이력서" />
      <article>
        <Introduce />
        <Career />
        <Skills />
        <Experience />
        <Likes />
        <Education />
      </article>
    </ResumeLayout>
  )
}

export default Resume
