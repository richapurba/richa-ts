export interface DataModel {
  id: number;
  name: string;
  category: string;
  url: string;
  desc: string;
  color?: string;
}
export const data: DataModel[] = [
  {
    id: 1,
    name: 'Richa Purba',
    category: 'Author',
    desc: 'A front end developer from Indonesia.',
    color: '#5f9199',
    url:
      'https://images.unsplash.com/photo-1583430999185-4c19b0c9636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 2,
    name: 'Skillsets',
    category: 'Author',
    desc: 'HTML, CSS, JavaScript, TypeScript, SASS/SCSS, Bootstrap, ReactJS, Redux, Firebase, React Native, Git, GitHub, Light Python3',
    color: '#426555',
    url:
      'https://images.unsplash.com/photo-1534320309096-17ce1f77021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80',
  },
  {
    id: 3,
    name: 'Netflix Clone',
    category: 'Project',
    desc: 'A clone of the original Netflix with its basic style and features. Built using Redux and Firebase cloud.',
    color: '#a2b3b0',
    url:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoiden.com%2Fcara-menonton-netflix-di-komputer-atau-pc%2F&psig=AOvVaw1YdmViyV6bkgzpvKUXpkNs&ust=1615373803178000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjb4eSGo-8CFQAAAAAdAAAAABAD',
  },
  {
    id: 4,
    name: 'Refrain',
    category: 'Project',
    desc: 'A social media app that has almost similar function with Instagram. Built using Expo, React Native, and Firebase.',
    color: '#0d3d45',
    url:
      'https://images.unsplash.com/photo-1596432150438-3ef028cca147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
  },
  {
    id: 5,
    name: 'Organizer 2.0',
    category: 'Project',
    desc: 'An admin platform for Volunteers Edinburgh to manage thousand of volunteers data. I act as the React Developer, which means I handle lots in the front end. Built using Redux.',
    color: '#807f7e',
    url:
      'https://images.unsplash.com/photo-1597176924237-b228b1153c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 6,
    name: 'Contact Me',
    category: 'Author',
    desc: 'Thank you for your interest, please contact me directly via drift chat in the right-down corner side.',
    color: '#8da2a9',
    url:
      'https://images.unsplash.com/photo-1596188773105-3bdfcf453495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80',
  },
  {
    id: 7,
    name: 'Thomas de LUZE',
    category: 'Architecture',
    desc: 'Slovénie, Slovénie',
    color: '#48737d',
    url:
      'https://images.unsplash.com/photo-1596208091591-fc5c2f4a1022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
];
