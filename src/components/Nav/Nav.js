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

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggleClicked && ref.current && !ref.current.contains(e.target)) {
        setToggleClicked(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [toggleClicked])

  const onToggleClickHandler = () => {
    setToggleClicked((prev) => !prev)
  }

  // changes the items selected prop.
  const onClickHandler = (item) => {
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

  return (
    <nav id={styles.nav} ref={ref}>
      <Logo styles={styles} />
      {windowWidth < 729 ? (
        <>
          <Toggle styles={styles} onClick={onToggleClickHandler} />
          {toggleClicked ? (
            <Menu items={items} styles={styles} onClick={onClickHandler}></Menu>
          ) : null}
        </>
      ) : (
        <Menu items={items} styles={styles} onClick={onClickHandler} />
      )}
    </nav>
  )
}

export default Nav
