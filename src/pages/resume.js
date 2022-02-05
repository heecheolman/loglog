import React from 'react'
import ResumeLayout from '../layouts/ResumeLayout'
import Introduce from '../resume-components/Introduce'
import Career from '../resume-components/Career'
import Skills from '../resume-components/Skills'
import Experience from '../resume-components/Experience'
import Likes from '../resume-components/Likes'
import Education from '../resume-components/Education'
import Seo from '../components/Seo'
import useResume from '../hooks/useResume'

function Resume() {
  const resume = useResume()

  return (
    <ResumeLayout>
      <Seo title="이력서" description={resume.description} />
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
