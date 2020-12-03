import './styles/reset.css'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import Markdown from './markdown'
import Welcome from './welcome.mdx'

const App = () => {
  return (
    <Markdown>
      <Welcome />
    </Markdown>
  )
}

export default App
