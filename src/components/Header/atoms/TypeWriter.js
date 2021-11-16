import React from 'react'
import ReactJsTyping from 'reactjs-typing-effect'

const TypeWriter = ({ message, styles }) => {
  return (
    <div className={styles.header__frame__typewriter}>
      <ReactJsTyping StringList={message} speed={500} />{' '}
    </div>
  )
}

export default TypeWriter
