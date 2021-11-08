//#region Project Images
import foodAppImage from '../images/projects/foodApp.gif'
import dailyImage from '../images/projects/daily.gif'
import webScrapperImage from '../images/projects/webscrapper.gif'
import portfolioImage from '../images/projects/portfolio.gif'
import tetrisImage from '../images/projects/tetris.gif'
import blankImage from '../images/projects/blank.jpg'

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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      url: 'https://raphilo92.github.io/FoodReactApp/',
      techImage: [reactImage, jsImage],
      imageSrc: foodAppImage,
    },
    {
      title: 'Daily App',
      url: 'https://github.com/raphilo92/DailyWebApp',
      techImage: [blazorImage, netImage, csharpImage],
      imageSrc: dailyImage,
    },
    {
      title: 'Job Scrapper',
      url: 'https://github.com/raphilo92/Webscrapper_JobSearch',
      techImage: [flaskImage, pythonImage],
      imageSrc: webScrapperImage,
    },
    {
      title: 'Portfolio Website',
      url: 'https://github.com/raphilo92/Portfolio-Website',
      techImage: [reactImage, jsImage],
      imageSrc: portfolioImage,
    },
    {
      title: 'Tetris Console Game',
      url: 'https://github.com/raphilo92/Tetris',
      techImage: [csharpImage],
      imageSrc: tetrisImage,
    },
    {
      title: '--',
      techImage: [''],
      imageSrc: blankImage,
    },
  ],
}

export default data
