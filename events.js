let scrollable = document.querySelector('.scrollable');
let content = document.querySelector('.content');
let imgSections = [...document.querySelectorAll('.img-section')];

let target = 1;
let reverse = false;

let clonesWidth;
let contentWidth;
let clones = [];
let scrollPos = 1;

let contentHover = false;
let req;
let images = [...document.querySelectorAll('.imgdiv')];

imgSections.forEach(item => {
  let clone = item.cloneNode(true);
  clone.classList.add('clone');
  content.appendChild(clone);
  clones.push(clone);
})

function init(){
    document.body.style.height = `${content.getBoundingClientRect().width}px`;
}
window.addEventListener('resize', init);


function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
      width += clone.offsetWidth;
    })
    return width;
}

function scroll(){
    target = window.scrollY;

    if(!contentHover){
        if(target <= 0){
            target = (content.offsetWidth / 2) - 1;
            window.scrollTo(0, target);
        }else if( target >= content.offsetWidth / 2){
            target = 1;
            window.scrollTo(0, target);
        }
    }

    if(reverse){
        target --
    }else{
        target++
    }
    window.scrollTo(0, target)
    scrollable.style.transform = `translateX(-${target}px)`;
    requestAnimationFrame(scroll)
}

function onLoad(){
    cancelAnimationFrame(req);
    calaculateDimensions()
    scrollPos = 1;
    scroll();
}

function calaculateDimensions(){
    contentWidth = content.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 200)
    scroll()
})

onLoad()
