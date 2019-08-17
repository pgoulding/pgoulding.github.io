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
      { 
        title: 'Cocktails and Dreams', 
        url:'https://github.com/pgoulding/coctail-recipes-app'
      },
      {
        title:'Netflix 2.Woah',
        url:'https://github.com/pgoulding/Netflix-2.Woah'
      },
      {
        title: 'Light Side : Dark Side',
        url: 'https://github.com/pgoulding/lightside'
      },
      {
        title: 'Turing Year Book',
        url: 'https://github.com/pgoulding/turing-yearbook'
      },
      {
        title: 'Overlook Hotel',
        url: 'https://github.com/pgoulding/overlook'
      },
      {
        title: 'Miami Feud',
        url: 'https://github.com/pgoulding/Miami-Feud'
      },
      {
        title: 'Flash Cards: Javascript Edition',
        url: 'https://github.com/pgoulding/javascript-flashcards'
      },
      {
        title: 'Check Yo Self',
        url: 'https://github.com/pgoulding/check-yo-self'
      },
      {
        title:'IdeaBox',
        url: 'https://github.com/pgoulding/idea-box'
      },
      {
        title:'Number Guesser',
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
    description: '',
    links: [
      {
        title: '', 
        url:''
      }
    ],
    id:4,
  },
  {
    title: 'Recipes',
    page_url:'/recipes',
    image_url: recipe_img,
    description: '',
    links: [
      {
        title: '', 
        url:''
      }
    ],
    id:5,
  },
  {
    title: 'Hobbies',
    page_url: '/hobbies',
    image_url: motorcycle_img,
    description: '',
    links: [
      {title: '', 
      url:''}
    ],
    id: 6,
  }
]