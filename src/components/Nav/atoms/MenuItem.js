import React from 'react'
import { Link } from 'react-scroll'

const MenuItem = ({ item, styles, onClick }) => {
  const onClickHandler = (event) => {
    onClick(item)
  }
  const selectedStyle = item.selected
    ? {
        transform: 'scale(1.2)',
        borderBottom: '1px solid white',
      }
    : null

  return (
    <Link
      className={`${styles.menu__item} ${item.selected ? 'selected' : ''}`}
      style={selectedStyle}
      to={item.link}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={onClickHandler}
    >
      {item.title}
    </Link>
  )
}

export default MenuItem
