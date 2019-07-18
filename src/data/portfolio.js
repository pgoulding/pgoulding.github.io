import career_img from '../images/resume-pic.png'
import portfolio_img from '../images/code.png'
import my_story_img from '../images/profile-pic.jpg'
import blog_img from '../images/blog.jpeg'
import recipe_img from '../images/giardanera.jpg'
import motorcycle_img from '../images/vtx1300.jpg'

const portfolio = [
  {
    title:'Career',
    page_url:'/career',
    image_url: career_img,
    id:1
  },
  {
    title: 'Portfolio',
    page_url: '/portfolio',
    image_url: portfolio_img,
    id:2
  },
  {
    title: 'My Story',
    page_url:'/my_story',
    image_url: my_story_img,
    id:3
  },
  {
    title: 'Blog Posts',
    page_url:'/blog',
    image_url: blog_img,
    id:4
  },
  {
    title: 'Recipes',
    page_url:'/recipes',
    image_url: recipe_img,
    id:5
  },
  {
    title: 'Hobbies',
    page_url: '/hobbies',
    image_url: motorcycle_img,
    id: 6
  },

]

export default portfolio