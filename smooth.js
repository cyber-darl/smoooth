
  //sticky button
(function () {
  const column = document.getElementById("col-5yFSAX3k9T");
  const targetRow = document.getElementById("row-PVRnkO6zfi0");

  if (!column || !targetRow) {
    console.error("Required elements not found: Check the IDs for the column and row.");
    return;
  }

  const columnOffsetTop = column.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const targetRect = targetRow.getBoundingClientRect();
    const columnRect = column.getBoundingClientRect();

    // Fix the column when it reaches the top of the viewport

 if (columnRect.top === 0 && targetRect.top > 1770) {
  column.classList.remove("fixed");
  console.log(targetRect.top);
}
 else if (columnRect.top <= 0 && targetRect.top > 0) {
  column.classList.add("fixed");
  column.classList.remove("hidden");
}
    
 else if (targetRect.top <= 0) {
  column.classList.add("hidden");
} 
    else {
  column.classList.remove("fixed", "hidden");
}


  });
})();


  //Days section
  
let currentState = 1;

const morePhotosBtn = document.getElementById("morePhotosBtn");
const carousel = document.getElementById("carousel");
const carouselImage = document.getElementById("carouselImage");
const closeCarousel = document.getElementById("closeCarousel");
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const carouselItems = {
  1: document.querySelector('.day1') || null,
  2: document.querySelector('.day2') || null,
  3: document.querySelector('.day3') || null,
  4: document.querySelector('.day4') || null,
  5: document.querySelector('.day5') || null,
  6: document.querySelector('.day6') || null,
};

const textDisplays = document.querySelectorAll('.Days');

const setActiveClass = (state) => {
  for (let key in carouselItems) {
    if (carouselItems[key]) {
      
      carouselItems[key].classList.toggle('--active', parseInt(key) === state);   
      
    }
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
  const rdmbtn = document.querySelectorAll('.readmore') || [];
  const moreText = document.querySelectorAll('.more') || [];
  const clouds = document.querySelectorAll('.collapsed-text__text-overlapper') || [];

  rdmbtn.forEach(btn => btn.style.display = 'none');
  moreText.forEach(text => text.style.display = 'inline');
  clouds.forEach(cloud => cloud.style.display = 'none');
}

setActiveClass(currentState);

const mobileItems = document.querySelectorAll(".mobile-carousel-item");
const mobileTexts = document.querySelectorAll(".mobile-text-display");
  const expandbtn = document.querySelectorAll(".expand-btn");

if (mobileItems.length === mobileTexts.length) {
  mobileItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      mobileItems.forEach((otherItem, otherIndex) => {
        if (otherIndex !== index) {
          otherItem.classList.remove("--expanded");
          mobileTexts[otherIndex].classList.remove("--visible");
        }
      });

      item.classList.toggle("--expanded");
      mobileTexts[index].classList.toggle("--visible");
    });
  });
} else {
  console.error("Mismatch between mobile items and text displays.");
}



 
//gallery section

  const galleryImages = [
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6764337e7e62116b5eac071d.jpeg", //1
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6754273a29695a55016f0997.jpeg", //2
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/67643339cdd6a8f1ba44a017.jpeg",//3
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6753442ef875127503c36c1f.png", //4
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6741e6f17fc15ffd1f217d25.png",//5
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/676434f5fb63bc86e366dd1e.jpeg",//6
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6764337e7e62116b5eac071d.jpeg",//7
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/677312894071a96ebda02457.jpeg",//8
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/67643339cdd6a8f1ba44a017.jpeg",//9
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/6772f584397d9a6bfc388ab0.jpeg",//10
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/67732e334071a9e7a0a07adc.jpeg",//11
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/67732e753bec816cbac8a537.jpeg",//12
    "https://storage.googleapis.com/msgsndr/iA0Y7z8cuIcBz11O96F7/media/67732eb8f5b7294d1e5fd5e0.jpeg"//13
  ];

  let currentGalleryIndex = 0;

  const desktopGalleryButton = document.getElementById("morePhotosBtn");
  const mobileGalleryButton = document.getElementById("mobileMorePhotosBtn");
  const photoCarousel = document.getElementById("carousel");
  const photoCarouselImage = document.getElementById("carouselImage");
  const closeCarouselButton = document.getElementById("closeCarousel");
  const previousPhotoButton = document.getElementById("prev");
  const nextPhotoButton = document.getElementById("next");
  const imageCounter = document.getElementById("imageCounter");
  
  function updateCounter() {
  imageCounter.textContent = `${currentGalleryIndex + 1}/${galleryImages.length}`;
}

  function showCarousel() {
    
    photoCarousel.style.display = "flex";
    photoCarouselImage.src = galleryImages[currentGalleryIndex];
      updateCounter(); 
  }

  desktopGalleryButton.addEventListener("click", showCarousel);
  mobileGalleryButton.addEventListener("click", showCarousel);

  closeCarouselButton.addEventListener("click", () => {
    currentGalleryIndex = 0;
       photoCarouselImage.src = galleryImages[0];
    photoCarousel.style.display = "none";
 
  });

  previousPhotoButton.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    photoCarouselImage.src = galleryImages[currentGalleryIndex];
    updateCounter();
  });

  nextPhotoButton.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    photoCarouselImage.src = galleryImages[currentGalleryIndex];
    updateCounter();
  });


 


