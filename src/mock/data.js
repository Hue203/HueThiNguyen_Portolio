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
  paragraphOne:
    'I am a person who’s always loved technology and have always enjoyed being creative and competitive. I possess a strong desire to learn new things and I belive a coding oulet allows me to flex my creativity, while being able to overcome challenges in a problem solving manner.',
  paragraphTwo:
    'From zero code, I have made many projects that filled with codes and features. As my bootcamp end, I am advancing my web developing journey by actively looking for an opportunity to work as a Junior Frontend/ Full-stack Web Developer.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1XqMpV1tkJ5294pPOnNPqlywNCPPsXQIt/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projectSOS.png',
    title: 'COVID19’S CHARITY HACKATHON',
    info: 'Worked within a large group to build a website where people can ask for help with the Covid19 situation in Vietnam',
    info2: 'React, Redux-Thunk, MongoDB, NodeJs, ExpressJs,Google Maps APIs',
    url: 'https://codevid-relief.netlify.app',
    repo: 'https://github.com/PrimeTimeTran/Hackathon-fe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Detox Box',
    info: 'Detox Box is designed to be your online source for the best fruits, vegetable juices and smoothies to help your body detox on a daily basis',
    info2: 'React, Redux-Thunk, MongoDB, NodeJs, ExpressJs',
    url: 'https://detoxbox.netlify.app',
    repo: 'https://github.com/Hue203/ecommerce-FE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.1.png',
    title: 'Amazing Prime Movie Apps',
    info: 'A website that can display the most trending movies and TV shows with different categories ',
    info2: 'The layout is similar to Amazon prime official website.',
    url: 'https://amazingprime.netlify.app/',
    repo: 'https://github.com/Hue203/group2-AmazingPrimeMovie', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to know more about me? Awesome!.',
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
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/Anna2033/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
