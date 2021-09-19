import React from 'react'
import ReactJsTyping from 'reactjs-typing-effect'
import data from '../../data/data'
import './TypeWriter.css'

const TypeWriter = () => {
  return (
    <div className="typewriter-container">
      <div className="typewriter">
        <ReactJsTyping StringList={data.headerMessage} speed={500} />{' '}
      </div>
    </div>
  )
}

export default TypeWriter
