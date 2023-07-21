// ===== SECTION 1 =====
var index = 0;
var sliderIndex = 0;
var sliderArray = [];

function Slider(background, titleOne, titleTwo, word, button) {
  this.background = background;
  this.titleOne = titleOne;
  this.titleTwo = titleTwo;
  this.word = word;
  this.button = button;
  this.id = "slider" + index;
  index++;
  sliderArray.push(this);
}

// Create Slider
var sliderOne = new Slider( 
  "https://res.cloudinary.com/daualnmlq/image/upload/v1689558777/bg1_foxe4d.webp",
  "Perfect",
  "Lingerie Outfit",
  "Introducing the Umino Women's swimwear.",
  "EXPLORE NOW"
);
var sliderTwo = new Slider(
  "https://res.cloudinary.com/daualnmlq/image/upload/v1689558777/bg2_lnduh4.webp",
  "Stylish",
  "Spring Outfit",
  "Introducing the Umino Women's Autumm/Winter.",
  "SHOP NOW"
);
var sliderThree = new Slider(
  "https://res.cloudinary.com/daualnmlq/image/upload/v1689558777/bg3_sqhp3g.webp",
  "Mission",
  "Modern Style",
  "Introducing the Umino Women's Autumm/Winter.",
  "EXPLORE NOW"
);

// Function inner HTML
function buildSlider() {
  var content = "";
  for (let i = 0; i < sliderArray.length; i++) {
    content +=
      "<div id ='" + sliderArray[i].id + "' class='slider-carousel-img' data-slide= '" + i + "' style='background-image:url(" + sliderArray[i].background + ");'>" +
      "<div class= 'text-carousel'>" +
      "<h2 class='title'>" + sliderArray[i].titleOne + "<br>" + sliderArray[i].titleTwo + "</h2>" +
      "<p class='word'>" + sliderArray[i].word + "</p>" +
      "<div class='carousel-btn'>" +
      "<button class ='btn btn-light' type='button'>" + sliderArray[i].button + "</button>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
  document.getElementById("mySlider").innerHTML = content;
  document.getElementById("slider" + sliderIndex).classList.add("actives");
}

buildSlider();

// attach animation
var animationSlider = document.getElementById(sliderArray[1].id);
animationSlider.querySelector('.title').style.animationName = "left-to-right";
animationSlider.querySelector('.word').style.animationName = "left-to-right";
animationSlider.querySelector('.btn.btn-light').style.animationName = "left-to-right";

function changeSlider() {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  var sliderItems = document.querySelectorAll(".slider-carousel-img");
  var changeIndex = 0;
  var isTransitioning = false;

  //handl change slider
  function handleChangeSlider(direction) {
    if (!isTransitioning) {
      isTransitioning = true;
      document.getElementById("slider" + changeIndex).classList.remove("actives");

      changeIndex += direction;
      if (changeIndex < 0) {
        changeIndex = sliderArray.length - 1;
      } else if (changeIndex >= sliderArray.length) {
        changeIndex = 0;
      }
      document.getElementById("slider" + changeIndex).classList.add("actives");
      [...dotItems].forEach((el) => el.classList.remove("actives"));
      dotItems[changeIndex].classList.add("actives");

      setTimeout(function () {
        isTransitioning = false;
      }, 1200);
    }
  }

  function autoChangeSlide() {
    handleChangeSlider(1);
  }

  var autoSlideInterval = setInterval(autoChangeSlide, 5000);
  //next and prev
  prev.addEventListener("click", function (event) {
    event.preventDefault();
    handleChangeSlider(-1);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoChangeSlide, 5000);
  });

  next.addEventListener("click", function (event) {
    event.preventDefault();
    handleChangeSlider(1);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoChangeSlide, 5000);
  });

  // dotItems click
  dotItems.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      sliderItems.forEach((slide) => {
        slide.classList.remove("actives");
        if (slide.dataset.slide == index) {
          changeIndex = index;
          document.getElementById("slider" + changeIndex).classList.add("actives");
          [...dotItems].forEach((el) => el.classList.remove("actives"));
          dotItems[changeIndex].classList.add("actives");
        }
      });
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoChangeSlide, 5000);
    });
  });
}
changeSlider();

// ========= END SECTION 1=======

// ========= SECTION 2 =========
var contentScroll = document.querySelectorAll('.content-scroll');
var scrolling = document.querySelector('.scrolling')

contentScroll.forEach(item => {
  scrolling.addEventListener('mouseover', function () {
    item.style.animationPlayState = 'paused';
  })
})
contentScroll.forEach(item => {
  scrolling.addEventListener('mouseout', function () {
    item.style.animationPlayState = 'running';
  })
})

// ========= END SECTION 2=======

// ========= SECTION 3 =========
var choseColorImg = document.querySelectorAll('.chose-color-img');
var imgProduct = document.querySelectorAll('.img-product');
var imgProductArray = [];

function imgProducts(link1, link2) {
  this.link1 = link1;
  this.link2 = link2
  imgProductArray.push(this);
}
var product1 = new imgProducts(
  "./img/img1.png",
  './img/img1_click.png'
)
var product2 = new imgProducts(
  "./img/img2.png",
  './img/img2_click.png'
)
var product1 = new imgProducts(
  "./img/img3.png",
  './img/img3_click.png'
)
var product2 = new imgProducts(
  "./img/img4.png",
  './img/img4_click.png'
)

choseColorImg.forEach((item, x) => {
  const optionColor = item.querySelectorAll('.option-color');
  optionColor[0].style.backgroundColor = "#000";
  optionColor.forEach((element, index) => {
    element.addEventListener('click', function () {

      optionColor.forEach(e => {
        e.style.backgroundColor = "#ccc";
      })
      element.style.backgroundColor = "#000";
      if (index == 0) {
        imgProduct[x].src = imgProductArray[x].link1;
      } else if (index == 1) {
        imgProduct[x].src = imgProductArray[x].link2;
      }
    })
  })
})

// ========= END SECTION 3=======

// ========= SECTION 4 =========
var addClick = document.querySelectorAll('.click');
var labelDepend = document.querySelectorAll('label-depend');
var addClick = document.querySelectorAll('.click');

//show and hide label-depend
function handleClick(event) {
  var clickedElement = event.target;
  addClick.forEach(function (element) {
    if (clickedElement.tagName === 'I') {
      clickedElement = clickedElement.parentElement;
    }
    if (element === clickedElement) {
      element.closest('.add-icon').classList.toggle('show');
    } else {
      element.closest('.add-icon').classList.remove('show');
    }
  });
}

addClick.forEach(function (element) {
  element.addEventListener('click', handleClick);
});

//remove label 
document.body.addEventListener('click', evt => {
  const target = evt.target;
  const add_icon = document.querySelectorAll('.add-icon');
  add_icon.forEach(e => {
    if (e.classList.contains('show')) {
      var checkShow = e;
      if (!target.closest('.add-icon') && target != document.querySelector('.add-icon.show')) {
        checkShow.classList.remove('show');
      }
    }
  })
});


// // scroll screen
function toggleElement(element) {
  var dependItem = element.closest('.add-icon').querySelector('.label-depend');
  let rect = element.getClientRects()[0];
  var heightSceen = (this.window.innerHeight) / 2;

  if (((rect.top + rect.bottom) / 2) <= heightSceen) {
    dependItem.classList.add('depend-translateY');
  } else {
    dependItem.classList.remove('depend-translateY');
  }
}

function checkAnimation() {
  addClick.forEach(e => {
    toggleElement(e)

  })
};
window.addEventListener('click', checkAnimation);