import React from 'react'

import ResumeLayout from '../layouts/ResumeLayout'
import Introduce from '../resume-components/Introduce'
import Ability from '../resume-components/Ability'
import Career from '../resume-components/Career'

const Resume = () => {
  return (
    <ResumeLayout>
      <Introduce />
      <Ability />
      <Career />
    </ResumeLayout>
  )
}

export default Resume
