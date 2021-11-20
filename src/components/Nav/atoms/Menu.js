import React from 'react'
import MenuItem from './MenuItem'
const Menu = ({ items, styles, onClick, className }) => {
  return (
    <div className={`${styles.menu} ${className}`}>
      {items.map((item) => (
        <MenuItem item={item} styles={styles} onClick={onClick}></MenuItem>
      ))}
    </div>
  )
}

export default Menu
