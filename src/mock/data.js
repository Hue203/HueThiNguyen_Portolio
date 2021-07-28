import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hue | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Hue',
  subtitle: 'I am the Full Stack Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1XqMpV1tkJ5294pPOnNPqlywNCPPsXQIt/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Detox Box',
    info: 'Detox Box is designed to be your online source for the best fruits, vegetable juices and smoothies to help your body detox on a daily basis',
    info2: '',
    url: 'https://detoxbox.netlify.app',
    repo: 'https://github.com/Hue203/ecommerce-FE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.1.png',
    title: 'Movie Apps',
    info: 'The user can see the top 20 "Currently Playing" movies on a page, the user can see the Movie Title, Year, Rating, and Poster.',
    info2:
      'The user can see this information clearly on devices of various screen sizes, The user can see "more" movies by tapping a "See More" button at the bottom.',
    url: 'https://amazingprime.netlify.app/',
    repo: 'https://github.com/Hue203/group2-AmazingPrimeMovie', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email Address',
  btn: '',
  email: 'huenguyenmt.vn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hue-nguyen203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Hue203',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
