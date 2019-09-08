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
    description: 'PlaceHolder for Career Description',
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
    description: 'Placeholder for Portfolio Descirption',
    links: [
      // { 
      //   title: 'Cocktails and Dreams (React, Router, Redux, SCSS)', 
      //   url:'https://github.com/pgoulding/coctail-recipes-app'
      // },
      {
        title:'Netflix 2.Woah(React, Router, Redux, SCSS)',
        url:'https://github.com/pgoulding/Netflix-2.Woah'
      },
      {
        title: 'Light Side : Dark Side (React, Router, SCSS)',
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
    description: 'Placeholder for My Story Description',
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
        url:'/recipes/strawberry-basil-lemonade'
      },
      {
        title: 'Spicy Pickled Eggs',
        url: '/recipes/pickled-eggs'
      },
      {
        title: 'Hot Italian Giardinera',
        url: '/recipes/giardinera'
      },
      {
        title: 'Dill Pickles',
        url: '/recipes/dill-pickles'
      },
    ],
    id:5,
  },
  {
    title: 'Hobbies',
    page_url: '/hobbies',
    image_url: motorcycle_img,
    description: 'I love to go camping, ride my motorcycle through the mountains, bike riding around town, creating new recipes, and snowboarding in the winter, checkout some of my photos!',
    links: [
      {
        title: 'Camping outside of Meredith, CO', 
        url:'https://www.instagram.com/p/ByqWR4lgy75I0wBAtB5HQv5RxVETQCmqhEU2t00/'
      }
    ],
    id: 6,
  }
]


export const recipes = [
  {
    title: 'Strawberry basil infused vodka with lemonade',
    page_url: '/recipes/strawberry-basil-lemonade',
    image_url:'',
    description:'Recipe Incoming'
  },
  {
    title: 'Spicy Pickled Eggs',
    page_url: '/recipes/pickled-eggs',
    image_url: '',
    description: 'Recipe incoming'
  },
  {
    title: 'Hot Italian Giardinera',
    page_url: '/recipes/giardinera',
    image_url: '',
    description: 'Recipe Incoming'
  },
  {
    title: 'Dill Pickles',
    page_url: '/recipes/dill-pickles',
    image_url: '',
    description: 'Recipe Incoming'
  },
]