import Nav from '../Nav/Nav'
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <main className="main"> {children}</main>
    </>
  )
}

export default Layout
