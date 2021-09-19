import dailyImage from '../images/projects/daily.gif'
import webScrapperImage from '../images/projects/webscrapper.gif'
import portfolioImage from '../images/projects/portfolio.gif'
import tetrisImage from '../images/projects/tetris.gif'
import blankImage from '../images/projects/blank.jpg'
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
    {
      title: 'React',
      img: reactImage,
    },
  ],
  skills: [{ title: 'Frontend' }, { title: 'Backend' }],
  projects: [
    {
      title: 'Daily App',
      imageSrc: dailyImage,
    },
    {
      title: 'Job Scrapper',
      imageSrc: webScrapperImage,
    },
    {
      title: 'Portfolio Website',
      imageSrc: portfolioImage,
    },
    {
      title: 'Tetris Console Game',
      imageSrc: tetrisImage,
    },
    {
      title: '--',
      imageSrc: blankImage,
    },
    {
      title: '--',
      imageSrc: blankImage,
    },
  ],
}

export default data
