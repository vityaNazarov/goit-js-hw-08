import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  try {
    return localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
