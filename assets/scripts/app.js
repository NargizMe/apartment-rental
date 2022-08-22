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

async function subscribeToSite() {
  let subscribeLabel = document.querySelector(".subscribe-label");
  let email = document.querySelector("#subscribe-email");

  const payload = {
    email: email.value,
  };

  try {
    const response = await fetch("/subscribe", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (Object.keys(data.errorObject).length) {
      if (data.errorObject.email) {
        subscribeLabel.textContent = data.errorObject.email;
      } else {
        subscribeLabel.textContent = "";
        toggleSubscribe(false);
      }
    } else {
      subscribeLabel.textContent = "";
    }
  } catch (err) {
    console.log("err", err);
  }
}

//sideBar form
async function sideBarForm() {
  let checkIn = document.querySelector("#checkIn");
  let checkOut = document.querySelector("#checkOut");
  let checkInLabel = document.querySelector(".checkIn-label");
  let checkOutLabel = document.querySelector(".checkOut-label");

  const payload = {
    checkIn: checkIn.value,
    checkOut: checkOut.value,
  };

  try {
    const response = await fetch("/search-apartments", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (Object.keys(data.errorObject).length) {
      if (data.errorObject.checkIn) {
        checkInLabel.textContent = data.errorObject.checkIn;
      } else {
        checkInLabel.textContent = "";
      }
      if (data.errorObject.checkOut) {
        console.log("if");
        checkOutLabel.textContent = data.errorObject.checkOut;
      } else {
        console.log("else");
        checkOutLabel.textContent = "";
      }
    } else {
      checkInLabel.textContent = "";
      checkOutLabel.textContent = "";
    }
  } catch (err) {
    console.log("err", err);
  }
}

//contact form
async function contactForm() {
  let contactMessageLabel = document.querySelector(".contact-message-label");
  let contactEmailLabel = document.querySelector(".contact-email-label");
  let name = document.querySelector("#contact-name");
  let email = document.querySelector("#contact-email");
  let message = document.querySelector("#contact-message");

  const payload = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  try {
    const response = await fetch("/send-message", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (Object.keys(data.errorObject).length) {
      if (data.errorObject.email) {
        contactEmailLabel.textContent = data.errorObject.email;
      } else {
        contactEmailLabel.textContent = "";
      }
      if (data.errorObject.message) {
        contactMessageLabel.textContent = data.errorObject.message;
      } else {
        contactMessageLabel.textContent = "";
      }
    } else {
      contactMessageLabel.textContent = "";
      contactEmailLabel.textContent = "";
    }
  } catch (err) {
    console.log("err", err);
  }
}
