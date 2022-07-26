import './style/style.scss';
import './style/normalize.scss';

const button = document.querySelector('.button');
const animation = document.querySelector('#animation');

const animateItem = bodymovin?.loadAnimation({
  wrapper: animation,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets4.lottiefiles.com/packages/lf20_uhadmp8e.json',
});

button?.addEventListener('click', () => {
  animateItem.goToAndPlay(0, true);
});
