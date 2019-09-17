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
    description: '<p>When I was 16, I got my first job working at a computer repair shop. I thought it was strange that they did not have a website or any online presence, so I took the initiative to create one for them. From here, I began doing more researching and first started learning about HTML, CSS, PHP, and MySQL.  Building websites became a passion for me; I quickly became the go-to person for building websites. When I moved to England to reconnect with some family, I committed myself to web design. I started my own company developing and designing websites. However, like other people from low-income families, I could not afford the funds to pursue further training and education in web development. I enlisted in the US Air Force to invest in my future. After my years of service, I began again pursuing IT as my career. I finally had the foundation financially to enroll in the Front End Engineering program at Turing. I have since spent every waking moment of the past nine months studying and building projects. I started with creating simple sites in HTML, CSS, and ES5 javascript, then progressing to ES6, JQuery, React, React Native, Redux, and then even into the back end of Node, PostgreSQL, Express, Ruby, and Ruby on Rails.</p> <p>From being a small business owner, working in IT and my time in the military, becoming an independent problem- solver has become second - nature.I have learned that with any large project, you have to start with one issue at a time.It\'s like the old saying, "How do you eat an elephant?" "One bite at a time." My thought process is always to break a project into smaller pieces and tackling the problem bit by bit.  I\'ll do research, start asking questions, and trying different solutions until I get to the core issue.Working in IT it has brought me to starting every prospective bug with the most basic of questions. "Did you try turning it off and on again?", until I\'ve identified the first breaking point and I go from there.</p>',
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
    description: 'I love to go camping, ride my motorcycle through the mountains, bike riding around town, creating new recipes, and snowboarding in the winter, checkout some of my photos!\r <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/ByqWR4lgy75/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/ByqWR4lgy75/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/ByqWR4lgy75/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Got to spend a few days outside in this beautiful scenery without a computer and it was fantastic.</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/pat.s.g/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Patrick</a> (@pat.s.g) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-06-13T19:28:44+00:00">Jun 13, 2019 at 12:28pm PDT</time></p></div></blockquote>',
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