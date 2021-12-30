import React, { ReactNode } from 'react'
import ResumeLayout from '../../layouts/ResumeLayout'

interface Props {
  children: ReactNode
}

function Resume({ children }: Props) {
  return <ResumeLayout>{children}</ResumeLayout>
}

export default Resume
