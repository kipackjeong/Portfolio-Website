import React from 'react'

const Card = ({ styles, heading, imgUrl, techImage, projectLink }) => {
  return (
    <div
      className={styles.work__frame__card}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
          imgUrl +
          ')',
      }}
    >
      <div className={styles.work__frame__card__content}>
        <a
          href={projectLink ? projectLink : '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{heading}</h2>
          <div className={styles.tech_imgs}>
            {techImage.map((image, i) =>
              image !== '' ? (
                <div className={styles.tech_imgs__container}>
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
