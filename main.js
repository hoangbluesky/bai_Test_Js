// ===== SECTION 1 =====

var index = 0;
var sliderIndex =0;
var sliderArray = []


function Slider(background,titleOne,titleTwo,word,button){
    this.background =background;
    this.titleOne =titleOne;
    this.titleTwo = titleTwo;
    this.word = word;
    this.button = button;
    this.id = "slider"+ index;
    index ++;
    sliderArray.push(this);
    
}
// create Slider
var sliderOne = new Slider(
    "./img/bg1.webp",
    "Perfect",
    "Lingerie Outfit",
    "Introducing the Umino Women's swimwear.",
    "EXPLORE NOW",
);
var sliderTwo = new Slider(
    "./img/bg2.webp",
    "Stylish",
    "Spring Outfit",
    "Introducing the Umino Women's Autumm/Winter.",
    "SHOP NOW"
);
var sliderThree = new Slider(
    "./img/bg3.webp",
    "Mission",
    "Modern Style",
    "Introducing the Umino Women's Autumm/Winter.",
    "EXPLORE NOW"
);

//push up interface
function buildSlider(){
     var content ="";
     for(let i = 0; i< sliderArray.length;i++){
        content += 
        "<div id ='" +sliderArray[i].id+ "' class='slider-carousel-img' data-slide= '"+i+"' style='background-image:url(" +sliderArray[i].background +");'>"+
            "<div class= 'text-carousel'>" +
                "<h2 class='title'>" +sliderArray[i].titleOne+ "<br>"+ sliderArray[i].titleTwo+ "</h2>"+
                "<p class='word'>"+ sliderArray[i].word+ "</p>"+
                "<div class='carousel-btn'>"+
                    "<button class ='btn btn-light' type='button'>"+sliderArray[i].button+ "</button>"+
                "</div>"+
            "</div>"+
        "</div>";
    }
    document.getElementById("mySlider").innerHTML = content;
    document.getElementById("slider" + sliderIndex).classList.add('actives');
    
}
buildSlider();
// attach animation

    var animationSlider = document.getElementById(sliderArray[1].id);
    animationSlider.querySelector('.title').style.animationName = "left-to-right";
    animationSlider.querySelector('.word').style.animationName = "left-to-right";
    animationSlider.querySelector('.btn.btn-light').style.animationName = "left-to-right";


    function changeSlider(){
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const dotItems = document.querySelectorAll(".slider-dot-item");
    var sliderItems = document.querySelectorAll('.slider-carousel-img');
    var changeIndex = 0;
    var isTransitioning = false;
    // next and prev
    function handleChangeSlider(direction){
        if(direction == -1){
            isTransitioning = true;
            document.getElementById("slider" + changeIndex).classList.remove('actives');
            if(changeIndex <= 0){
                changeIndex = sliderArray.length-1;
            }else {
                --changeIndex;
            }
            document.getElementById("slider" + changeIndex).classList.add('actives');
            [...dotItems].forEach(el => el.classList.remove("actives"));
            dotItems[changeIndex].classList.add("actives");
            setTimeout(function() {
                isTransitioning = false;
            }, 1200);
        }else if(direction ==1){
            isTransitioning = true;
            document.getElementById("slider" + changeIndex).classList.remove('actives');
            if(changeIndex >= sliderArray.length -1){
                changeIndex =0;
            }else {
                changeIndex++;
            }
            document.getElementById("slider" + changeIndex).classList.add('actives');
            [...dotItems].forEach(el => el.classList.remove("actives"));
            dotItems[changeIndex].classList.add("actives");
            setTimeout(function() {
                isTransitioning = false;
              }, 1200);
        }
    }
    setInterval(function() {
        next.click();
      }, 7000);
    prev.addEventListener('click',function (event){
        event.preventDefault();
        if (!isTransitioning) {
            handleChangeSlider(-1);
        }
    })
    next.addEventListener('click',function(event){
        event.preventDefault();
        if (!isTransitioning) {
            handleChangeSlider(1);
        }
    })
    //dotItems click
    dotItems.forEach((item,index) =>{
        item.addEventListener('click',function(e){
            sliderItems.forEach(slide =>{
                slide.classList.remove("actives");
                if(slide.dataset.slide == index){
                    changeIndex = index
                    document.getElementById("slider" + changeIndex).classList.add('actives');
                    [...dotItems].forEach(el => el.classList.remove("actives"));
                    dotItems[changeIndex].classList.add("actives");
                }
            })
        })
    })
}
changeSlider();
// ========= END SECTION 1=======

// ========= SECTION 2 =========
var contentScroll = document.querySelectorAll('.content-scroll');
var scrolling = document.querySelector('.scrolling')

contentScroll.forEach(item =>{
    scrolling.addEventListener('mouseover',function(){
        item.style.animationPlayState = 'paused';
    })
})
contentScroll.forEach(item =>{
    scrolling.addEventListener('mouseout',function(){
        item.style.animationPlayState = 'running';
    })
})

// ========= END SECTION 2=======

// ========= SECTION 3 =========
var choseColorImg = document.querySelectorAll('.chose-color-img');
var imgProduct = document.querySelectorAll('.img-product');
var imgProductArray = [];

function imgProducts(link1,link2){
    this.link1 = link1;
    this.link2 = link2
    imgProductArray.push(this);
}
var product1 = new imgProducts (
    "./img/img1.png",
    './img/img1_click.png'
)
var product2 = new imgProducts (
    "./img/img2.png",
    './img/img2_click.png'
)
var product1 = new imgProducts (
    "./img/img3.png",
    './img/img3_click.png'
)
var product2 = new imgProducts (
    "./img/img4.png",
    './img/img4_click.png'
)

choseColorImg.forEach((item,x) => {
    const optionColor = item.querySelectorAll('.option-color');
    optionColor[0].style.backgroundColor = "#000";
    optionColor.forEach((element, index) =>{
        element.addEventListener('click', function(){
        
            optionColor.forEach(e =>{
                e.style.backgroundColor = "#ccc";
            })
            element.style.backgroundColor = "#000";
            if(index ==0){
                imgProduct[x].src = imgProductArray[x].link1;
            }else if(index ==1){
                imgProduct[x].src = imgProductArray[x].link2;
            }
        })
    })
})

// ========= END SECTION 3=======

// ========= SECTION 4 =========

var add = document.querySelectorAll('.click');
var label1 = document.querySelector('#add1 .label-depend');
var label2 = document.querySelector('#add2 .label-depend');
var label3 = document.querySelector('#add3 .label-depend');

// scroll screen
function toggleElement(element){
    let rect = element.getClientRects()[0];
    if(rect.bottom > (window.innerHeight)){
        label1.classList.add('depend1');
        label2.classList.add('depend2');
        label3.classList.add('depend3');
    }else {
        label1.classList.remove('depend1');
        label2.classList.remove('depend2');
        label3.classList.remove('depend3');
    }
}
function checkAnimation(){
    add.forEach(e => {
        toggleElement(e)
    })
};
window.addEventListener('scroll',checkAnimation);
// show labelDepend
var labelDepend = document.querySelectorAll('.label-depend');
add.forEach((e,index)=>{
    e.addEventListener('click',function(el){
        e.closest('.add-icon').classList.toggle('show');
    });
})
document.body.addEventListener('click',evt =>{
    const target = evt.target;
    const add_icon = document.querySelectorAll('.add-icon');
    add_icon.forEach(e=>{
        if(e.classList.contains('show')){
            var checkShow =e;
            if (!target.closest('.add-icon') && target != document.querySelector('.add-icon.show')) {
                checkShow.classList.remove('show');
            }
        }
    })
});
