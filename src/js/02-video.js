import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(defineCurrentTime, 1000));

function defineCurrentTime(data) {
  const currentTime = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
}
