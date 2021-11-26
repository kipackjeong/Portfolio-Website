//#region Project Images
import foodAppGif from '../images/projects/foodapp-gif.gif'
import dailyGif from '../images/projects/daily-gif.gif'
import webScrapperGif from '../images/projects/webscrapper-gif.gif'
import portfolioGif from '../images/projects/portfolio-gif.gif'
import tetrisGif from '../images/projects/tetris-gif.gif'
import transwordGif from '../images/projects/transword-gif.gif'

import foodAppImage from '../images/projects/foodapp-img.png'
import dailyImage from '../images/projects/daily-img.png'
import webScrapperImage from '../images/projects/webscrapper-img.png'
import portfolioImage from '../images/projects/portfolio-img.png'
import tetrisImage from '../images/projects/tetris-img.png'
import transwordImage from '../images/projects/transword-img.png'
//#endregion

import csharpImage from '../images/skills/csharp.png'
import cssImage from '../images/skills/css.png'
import htmlImage from '../images/skills/html.png'
import jsImage from '../images/skills/js.png'
import mongoImage from '../images/skills/mongodb.png'
import mongooseImage from '../images/skills/mongoose.png'
import mssqlImage from '../images/skills/mssql.png'
import nodejsImage from '../images/skills/nodejs.png'
import pythonImage from '../images/skills/python.png'
import reactImage from '../images/skills/react.png'
import netImage from '../images/skills/net.png'
import blazorImage from '../images/skills/blazor.png'
import flaskImage from '../images/skills/flask.png'

const data = {
  name: 'Kipack Jeong',
  aboutSummary:
    "A U.S Army service member transitioning career as a Software Developer. Passionate problem solver with work ethics and motivation. Fast learner and enjoy programming with the purpose of developing the quality of peoples' lives.",
  headerMessage: ["I'm Kipack Jeong", 'Software Developer'],
  contactEmail: 'kipack.jeong@outlook.com',
  languages: [
    {
      title: 'JavaScript',
      img: jsImage,
    },
    {
      title: 'Html',
      img: htmlImage,
    },
    {
      title: 'CSS',
      img: cssImage,
    },
    {
      title: 'MongoDB',
      img: mongoImage,
    },
    {
      title: 'Mongoose',
      img: mongooseImage,
    },
    {
      title: 'MSSQL',
      img: mssqlImage,
    },
    {
      title: 'NodeJS',
      img: nodejsImage,
    },
    {
      title: 'Python',
      img: pythonImage,
    },
    { title: 'C#', img: csharpImage },
    {
      title: 'React',
      img: reactImage,
    },
  ],
  skills: [{ title: 'Frontend' }, { title: 'Backend' }],
  projects: [
    {
      title: 'Trans Word',
      url: 'https://kipackjeong.github.io/translator-web/',
      techImage: [reactImage, jsImage, cssImage, htmlImage],
      imageSrc: transwordImage,
      gifSrc: transwordGif,
    },
    {
      title: 'Food Order App',
      url: 'https://kipackjeong.github.io/FoodReactApp/',
      techImage: [reactImage, jsImage, cssImage, htmlImage],
      imageSrc: foodAppImage,
      gifSrc: foodAppGif,
    },
    {
      title: 'Daily App',
      url: 'https://github.com/kipackjeong/DailyWebApp',
      techImage: [blazorImage, netImage, csharpImage],
      imageSrc: dailyImage,
      gifSrc: dailyGif,
    },
    {
      title: 'Job Scrapper',
      url: 'https://github.com/kipackjeong/Webscrapper_JobSearch',
      techImage: [flaskImage, pythonImage],
      imageSrc: webScrapperImage,
      gifSrc: webScrapperGif,
    },
    {
      title: 'Portfolio Website',
      url: 'https://github.com/kipackjeong/Portfolio-Website',
      techImage: [reactImage, jsImage],
      imageSrc: portfolioImage,
      gifSrc: portfolioGif,
    },
    {
      title: 'Tetris Console Game',
      url: 'https://github.com/kipackjeong/Tetris',
      techImage: [csharpImage],
      imageSrc: tetrisImage,
      gifSrc: tetrisGif,
    },
  ],
}

export default data
