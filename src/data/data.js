//#region Project Images
import foodAppImage from '../images/projects/foodApp.gif'
import dailyImage from '../images/projects/daily.gif'
import webScrapperImage from '../images/projects/webscrapper.gif'
import portfolioImage from '../images/projects/portfolio.gif'
import tetrisImage from '../images/projects/tetris.gif'
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
      title: 'Food Order App',
      url: 'https://kipackjeong.github.io/FoodReactApp/',
      techImage: [reactImage, jsImage],
      imageSrc: foodAppImage,
    },
    {
      title: 'Daily App',
      url: 'https://github.com/kipackjeong/DailyWebApp',
      techImage: [blazorImage, netImage, csharpImage],
      imageSrc: dailyImage,
    },
    {
      title: 'Job Scrapper',
      url: 'https://github.com/kipackjeong/Webscrapper_JobSearch',
      techImage: [flaskImage, pythonImage],
      imageSrc: webScrapperImage,
    },
    {
      title: 'Portfolio Website',
      url: 'https://github.com/kipackjeong/Portfolio-Website',
      techImage: [reactImage, jsImage],
      imageSrc: portfolioImage,
    },
    {
      title: 'Tetris Console Game',
      url: 'https://github.com/kipackjeong/Tetris',
      techImage: [csharpImage],
      imageSrc: tetrisImage,
    },
  ],
}

export default data
