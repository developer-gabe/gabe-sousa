// Step 1: Import React
import * as React from 'react'
import AboutMe from './components/about-me/about-me.component'
import ImageGrid from './components/image-grid/image-grid.component'



// Step 2: Define your component
const Photographer = () => {
  return (
    <main>
		<AboutMe />
		<ImageGrid />
    </main>
  )
}

// Step 3: Export your component
export default Photographer