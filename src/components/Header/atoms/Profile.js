import React from 'react'
import profilePic from '../../../images/profile.png'

const Profile = ({ styles }) => {
  return (
    <div className={styles.header__frame__profile}>
      <img src={profilePic} alt="Kipack Jeong" />
    </div>
  )
}

export default Profile
