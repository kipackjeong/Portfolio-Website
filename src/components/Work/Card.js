import React from 'react'
import './Card.css'
const Card = ({ heading, imgUrl, techImage, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
          imgUrl +
          ')',
      }}
    >
      <div className="content">
        <a
          href={projectLink ? projectLink : '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="header">{heading}</h4>
          <div className="tech-images">
            {techImage.map((image, i) =>
              image !== '' ? (
                <div className="tech-images_container">
                  <img key={i} src={image} alt={image.toString()} />
                </div>
              ) : null,
            )}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card
