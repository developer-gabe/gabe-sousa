// Step 1: Import React
import * as React from 'react'
import ResumeTimeline from './components/timeline/timeline.component'
import AboutMe from './components/about-me/about-me.component'



// Step 2: Define your component
const HireMe = () => {
  return (
    <main>
		<AboutMe />
     <ResumeTimeline />
    </main>
  )
}

// Step 3: Export your component
export default HireMe