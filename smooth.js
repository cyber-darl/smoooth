
  
  let currentState = 1;

const carouselItems = {
  1: document.querySelector('.day1'),
  2: document.querySelector('.day2'),
  3: document.querySelector('.day3')
};

const textDisplays = document.querySelectorAll('.Days');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const setActiveClass = (state) => {
  for (let key in carouselItems) {
    carouselItems[key].classList.toggle('--active', parseInt(key) === state);
  }

  textDisplays.forEach((text, index) => {
    text.classList.toggle('--active', index === state - 1);
  });

  prevBtn.style.visibility = state === 1 ? 'hidden' : 'visible';
  nextBtn.style.visibility = state === Object.keys(carouselItems).length ? 'hidden' : 'visible';
};

const goToState = (state) => {
  if (state === currentState) return;
  currentState = state;
  setActiveClass(state);
};

function previous() {
  if (currentState > 1) {
    currentState--;
    setActiveClass(currentState);
  }
}

function next() {
  if (currentState < Object.keys(carouselItems).length) {
    currentState++;
    setActiveClass(currentState);
  }
}

function readmore() {
  var rdmbtn = document.querySelectorAll ('.readmore');
  var moreText = document.querySelectorAll ('.more');
  var clouds = document.querySelectorAll ('.collapsed-text__text-overlapper');
  
  rdmbtn.forEach(
    btns => {
    btns.style.display = 'none';
    }
  );
  
  moreText.forEach (
  mtext => {
  mtext.style.display = 'inline';
  }
  );
  
  clouds.forEach (
  cloud => {
  cloud.style.display = 'none';
  }
  )



  
  
   
  
}

setActiveClass(currentState);
  
  