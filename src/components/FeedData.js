import { isDOMComponent } from 'react-dom/test-utils';
import jarek from './img/feed-avatars/jarek.jpg';
import shakiraFeed from './img/feed-posts/shakira.png';
import kaczor from './img/feed-avatars/kaczor.jpg'

const data = [
  {
    username: "Damian",
    avatarSrc: jarek,
    postImageSrc: shakiraFeed,
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Jarek",
    avatarSrc: kaczor,
    postImageSrc: shakiraFeed,
    postText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    username: "Jarek",
    avatarSrc: kaczor,
    postImageSrc: shakiraFeed,
    postText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];

export default data;