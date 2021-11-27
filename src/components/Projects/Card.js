import React, { useState } from 'react'

const Card = ({ styles, heading, imgUrl, gifUrl, techImage, projectLink }) => {
  const [isMouseOver, setIsMouseEnter] = useState(false)

  function onMouseEnterHandler() {
    setIsMouseEnter(true)
  }
  function onMouseLeaveHandler() {
    setIsMouseEnter(false)
  }

  return (
      <div
        className={styles.projects__frame__card}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
            imgUrl +
            ')',
        }}
      >
        {isMouseOver ? (
          <img src={gifUrl} alt={`${heading} img`} />
        ) : (
          <img src={imgUrl} alt={`${heading} img`} />
        )}

        <div
          className={styles.projects__frame__card__content}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <a
            href={projectLink ? projectLink : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{heading}</h2>
            <div className={styles.tech_imgs}>
              {techImage.map((image, i) =>
                image !== '' ? (
                  <div key={i} className={styles.tech_imgs__container}>
                    <img src={image} alt={image.toString()} />
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
