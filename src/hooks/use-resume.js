import resume from '../../resume.json'
import { useState } from 'react'

function useResume() {
  const [introduce] = useState(resume.introduce)
  const [abilities] = useState(resume.abilities)
  const [career] = useState(resume.career)
  const [skills] = useState(resume.skills)
  const [contact] = useState(resume.contact)

  return {
    introduce,
    abilities,
    career,
    skills,
    contact,
  }
}

export default useResume
