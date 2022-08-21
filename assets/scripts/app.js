function changeSlider(sliderName, sliderLabel) {
  let imgSrc = `./assets/images/${sliderName}.jpg`;
  let imageLabel = document.querySelector(".image-label");
  let mainImage = document.querySelector(".slider__main-image img");
  let smallImage = document.querySelectorAll(`.slider__small-images img`);

  for (let i = 0; i < smallImage.length; i++) {
    if (smallImage[i].src.includes(sliderName)) {
      smallImage[i].style.opacity = "1";
    } else {
      smallImage[i].style.opacity = "0.5";
    }
  }

  mainImage.src = imgSrc;
  // smallImage.style.opacity = "1";
  imageLabel.textContent = sliderLabel;
}

function toggleSideBar(status) {
  let sideBar = document.querySelector(".side-bar");
  let overlay = document.querySelector(".overlay-side-bar");

  if (!status) {
    sideBar.style.transform = "translateX(-270px)";
    overlay.style.display = "none";
  } else {
    sideBar.style.transform = "translateX(0px)";
    overlay.style.display = "block";
  }
}

function toggleSubscribe(status) {
  let subscribeContainer = document.querySelector(".subscribe-container");
  let overlay = document.querySelector(".overlay-subscribe");
  if (!status) {
    subscribeContainer.style.display = "none";
    overlay.style.display = "none";
  } else {
    subscribeContainer.style.display = "flex";
    overlay.style.display = "block";
  }
}
