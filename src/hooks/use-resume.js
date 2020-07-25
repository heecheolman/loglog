import resume from '../../resume.json'
import { useState } from 'react'

function useResume() {
  const [introduce] = useState(resume.introduce)
  const [abilities] = useState(resume.abilities)
  const [career] = useState(resume.career)

  return {
    introduce,
    abilities,
    career,
  }
}

export default useResume
