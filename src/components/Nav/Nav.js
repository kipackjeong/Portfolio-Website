import React, { useCallback, useEffect, useState, useRef } from 'react'
import Logo from './atoms/Logo'
import Menu from './atoms/Menu'
import Toggle from './atoms/Toggle'
import styles from './Nav.module.css'

const Nav = () => {
  const [items, setItems] = useState([
    { title: 'Home', link: 'header', selected: false },
    { title: 'About', link: 'about', selected: false },
    { title: 'Work', link: 'work', selected: false },
    { title: 'Contact', link: 'contact', selected: false },
  ])
  const windowWidth = window.innerWidth

  const ref = useRef()
  const [toggleClicked, setToggleClicked] = useState(false)

  const onClickedOutside = useCallback(
    (e) => {
      if (toggleClicked && ref.current && !ref.current.contains(e.target)) {
        setToggleClicked(false)
        document.removeEventListener('mousedown', onClickedOutside)
      }
    },
    [toggleClicked],
  )

  const onScroll = useCallback(
    (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop
      console.log(scrollTop)
      setToggleClicked(false)

      document.removeEventListener('scroll', onScroll)
    },
    [toggleClicked],
  )

  const onToggleClickHandler = () => {
    setToggleClicked((prev) => !prev)
    document.addEventListener('scroll', onScroll)
    document.addEventListener('mousedown', onClickedOutside)
  }
  // changes the items selected prop.
  const onMenuItemClickHandler = (item) => {
    setItems((prev) => {
      const newState = [...prev]
      newState.map((pItem) => {
        if (pItem.title === item.title) {
          pItem.selected = !pItem.selected
        } else {
          pItem.selected = false
        }
        return pItem
      })
      return newState
    })
  }

  const selectMenuType = () => {
    const toggleClass = toggleClicked ? styles.show : ''
    const toggleMenu = (
      <>
        <Toggle styles={styles} onClick={onToggleClickHandler} />
        <Menu
          className={toggleClass}
          items={items}
          styles={styles}
          onClick={onMenuItemClickHandler}
        ></Menu>
      </>
    )
    const menu =
      windowWidth < 729 ? (
        toggleMenu
      ) : (
        <Menu items={items} styles={styles} onClick={onMenuItemClickHandler} />
      )
    return menu
  }

  return (
    <nav id={styles.nav} ref={ref}>
      <Logo styles={styles} />
      {selectMenuType()}
    </nav>
  )
}

export default Nav
