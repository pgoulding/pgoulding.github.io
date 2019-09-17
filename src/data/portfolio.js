import career_img from '../images/resume-pic.png'
import portfolio_img from '../images/code.png'
import my_story_img from '../images/profile-pic.jpg'
import blog_img from '../images/blog.jpeg'
import recipe_img from '../images/giardanera.jpg'
import motorcycle_img from '../images/vtx1300.jpg'
import resume from '../data/PatrickGouldingResume.pdf'

export const homePageLinks = [
  {
    title:'Career',
    page_url:'/career',
    image_url: career_img,
    description: '',
    links: [
      { 
        title: 'Resume PDF ⬇️', 
        url:resume
      }
    ],
    id:1,
  },
  {
    title: 'Portfolio',
    page_url: '/portfolio',
    image_url: portfolio_img,
    description: 'I\'ve had the opportunity to work on many projects, htese are some of my favorites:',
    links: [
      // { 
      //   title: 'Cocktails and Dreams (React, Router, Redux, SCSS)', 
      //   url:'https://github.com/pgoulding/coctail-recipes-app'
      // },
      {
        title: 'Palette Picker Back End (NodeJS, ExpressJS, Knex, SuperTest)',
        url: 'https://github.com/pgoulding/palette-picker-be'
      },
      {
        title: 'Palette Picker Front End (React, Router, Redux, SCSS)',
        url: 'https://github.com/pgoulding/palette-picker-fe'
      },
      {
        title: 'Compass Jobs (React, Router, Redux, SCSS)',
        url: 'https://github.com/pgoulding/compass-deployment'
      },
      {
        title:'Netflix 2.Woah (React, Router, Redux, SCSS)',
        url:'https://github.com/pgoulding/Netflix-2.Woah'
      },
      {
        title: 'Light Side/Dark Side (React, Router, SCSS)',
        url: 'https://github.com/pgoulding/lightside'
      },
      {
        title: 'Turing Year Book (React, Router, SCSS)',
        url: 'https://github.com/pgoulding/turing-yearbook'
      },
      {
        title: 'Overlook Hotel (jQuery,SCSS)',
        url: 'https://github.com/pgoulding/overlook'
      },
      {
        title: 'Miami Feud (jQuery, SCSS)',
        url: 'https://github.com/pgoulding/Miami-Feud'
      },
      {
        title: 'Flash Cards: Javascript Edition (Javascript ES6+, Mocha/Chai)',
        url: 'https://github.com/pgoulding/javascript-flashcards'
      },
      {
        title: 'Check Yo Self (Javascript ES5/ES6)',
        url: 'https://github.com/pgoulding/check-yo-self'
      },
      {
        title:'IdeaBox (Javascript ES5)',
        url: 'https://github.com/pgoulding/idea-box'
      },
      {
        title:'Number Guesser (Javascript ES5)',
        url: 'https://github.com/pgoulding/Number-Guesser-Doubles'
      }
  ],
    id:2,
  },
  {
    title: 'My Story',
    page_url:'/my_story',
    image_url: my_story_img,
    description: '<p>When I was 16, I got my first job working at a computer repair shop. I thought it was strange that they did not have a website or any online presence, so I took the initiative to create one for them. From here, I began doing more researching and first started learning about HTML, CSS, PHP, and MySQL.</p>  <p>Building websites became a passion for me; I quickly became the go-to person for building websites. When I moved to England to reconnect with some family, I committed myself to web design. I started my own company developing and designing websites. However, like other people from low-income families, I could not afford the funds to pursue further training and education in web development. I enlisted in the US Air Force to invest in my future.</p> <p>After my years of service, I began again pursuing IT as my career. I finally had the foundation financially to enroll in the Front End Engineering program at Turing. I have since spent every waking moment of the past nine months studying and building projects. I started with creating simple sites in HTML, CSS, and ES5 javascript, then progressing to ES6, JQuery, React, React Native, Redux, and then even into the back end of Node, PostgreSQL, Express, Ruby, and Ruby on Rails.</p> <p>From being a small business owner, working in IT and my time in the military, becoming an independent problem- solver has become second - nature.I have learned that with any large project, you have to start with one issue at a time.It\'s like the old saying, "How do you eat an elephant?" "One bite at a time." My thought process is always to break a project into smaller pieces and tackling the problem bit by bit.  I\'ll do research, start asking questions, and trying different solutions until I get to the core issue.Working in IT it has brought me to starting every prospective bug with the most basic of questions. "Did you try turning it off and on again?", until I\'ve identified the first breaking point and I go from there.</p>',
    links: [
      {
        title: '', 
        url:''
      }
    ],
    id:3,
  },
  {
    title: 'Blog Posts',
    page_url:'/blog',
    image_url: blog_img,
    description: 'All my blog posts so far!',
    links: [
      {
        title: 'What the Scope - Medium', 
        url:'https://medium.com/@patrickgoulding/what-the-scope-7c6afba0f265'
      },
      {
        title:'JavaScript Map with examples',
        url:'https://medium.com/javascript-in-plain-english/javascript-map-with-examples-fd679d04a16d'
      }
    ],
    id:4,
  },
  {
    title: 'Recipes',
    page_url:'/recipes',
    image_url: recipe_img,
    description: 'I love to cook and trying out new recipes is my favorite way to relax and unwind. I do a lot of pickling/canning/preserving as well as making my own hot sauces, and infusions. I hope you\'ll try out a few!',
    links: [
      {
        title: 'Strawberry basil infused vodka with lemonade', 
        url:'#/recipes/strawberry-basil-lemonade'
      },
      {
        title: 'Spicy Pickled Eggs',
        url: '#/recipes/pickled-eggs'
      },
      {
        title: 'Hot Italian Giardinera',
        url: '#/recipes/giardinera'
      },
      {
        title: 'Dill Pickles',
        url: '#/recipes/dill-pickles'
      },
    ],
    id:5,
  },
  {
    title: 'Hobbies',
    page_url: '/hobbies',
    image_url: motorcycle_img,
    description: `I love to go camping, ride my motorcycle through the mountains, bike riding around town, creating new recipes, and snowboarding in the winter, checkout some of my photos!`,
    links: [
      {
        title: 'Camping outside of Meredith, CO', 
        url:'https://www.instagram.com/p/ByqWR4lgy75I0wBAtB5HQv5RxVETQCmqhEU2t00/'
      },
      {
        title: ' Jester King Brewery, Austin, TX',
        url:'https://www.instagram.com/p/BjLoqQnhXYX/?utm_source=ig_web_copy_link'
      }
    ],
    id: 6,
  }
]


export const recipes = [
  {
    title: 'Strawberry basil infused vodka with lemonade',
    page_url: '#/recipes/strawberry-basil-lemonade',
    image_url:'',
    description:'Please be Patient, this page is still under construction<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/7JI7fr97FqqNvysHhD" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/roverdotcom-rover-gifofdogs-construction-dog-7JI7fr97FqqNvysHhD">via GIPHY</a></p>'
  },
  {
    title: 'Spicy Pickled Eggs',
    page_url: '#/recipes/pickled-eggs',
    image_url: '',
    description: 'Please be Patient, this page is still under construction<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/7JI7fr97FqqNvysHhD" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/roverdotcom-rover-gifofdogs-construction-dog-7JI7fr97FqqNvysHhD">via GIPHY</a></p>'
  },
  {
    title: 'Hot Italian Giardinera',
    page_url: '#/recipes/giardinera',
    image_url: '',
    description: 'Please be Patient, this page is still under construction<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/7JI7fr97FqqNvysHhD" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/roverdotcom-rover-gifofdogs-construction-dog-7JI7fr97FqqNvysHhD">via GIPHY</a></p>'
  },
  {
    title: 'Dill Pickles',
    page_url: '#/recipes/dill-pickles',
    image_url: '',
    description: 'Please be Patient, this page is still under construction<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/7JI7fr97FqqNvysHhD" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/roverdotcom-rover-gifofdogs-construction-dog-7JI7fr97FqqNvysHhD">via GIPHY</a></p>'
  },
]