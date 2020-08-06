import resume from '../../resume.json'
import { useState } from 'react'

function useResume() {
  const [introduce] = useState(resume.introduce)
  const [career] = useState(resume.career)
  const [skills] = useState(resume.skills)
  const [experience] = useState(resume.experience)
  const [likes] = useState(resume.likes)
  const [education] = useState(resume.education)

  return {
    introduce,
    career,
    skills,
    experience,
    likes,
    education,
  }
}

export default useResume
