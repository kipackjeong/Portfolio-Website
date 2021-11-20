import React from 'react'
import LazyLoad from 'react-lazyload'

const Card = ({ styles, heading, imgUrl, techImage, projectLink }) => {
  return (
    <LazyLoad height={200}>
      <div
        className={styles.work__frame__card}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
            imgUrl +
            ')',
        }}
      >
        <img src={imgUrl} alt="1" />

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
                  <div key={i} className={styles.tech_imgs__container}>
                    <img src={image} alt={image.toString()} />
                  </div>
                ) : null,
              )}
            </div>
          </a>
        </div>
      </div>
    </LazyLoad>
  )
}

export default Card
