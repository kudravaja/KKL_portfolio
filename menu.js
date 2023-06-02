// menu
let menuTog = document.querySelector('.menu-tog');
let menu = document.querySelector('.menu');
let menuWraps = [...document.querySelectorAll('.menu-wrap')];


window.addEventListener('resize', init);
menuTog.addEventListener('click', toggleMenu)


function toggleMenu(){
    if(menu.classList.contains('active')){
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)
    }else{
        menuTog.classList.add('active');
        setTimeout(() => {
            menu.classList.add('active')
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}

function toggleMenuWraps(active){
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleWrap(wrap, active){
    setTimeout(() => {
        if(active){
            wrap.classList.add('active');
        }else{
            wrap.classList.remove('active');
        }
    })
}

let contactTog = document.querySelector('.contacts-tog');
let contacts = document.querySelector('.contacts');
let contactscovers = [...document.querySelectorAll('.contacts-cover')];
let btn = [...document.querySelectorAll('.nav')];
// сюда в btn меню вписать
console.log(btn)

contactTog.addEventListener('click', togglecontacts)

function togglecontacts(){
    if(contacts.classList.contains('active')){
        contactTog.classList.remove('active');
        togglecontactscovers(false);
        setTimeout(() => {
            contacts.classList.remove('active')
        }, 300)
        setTimeout(() => {
            togglebtn(false);
        }, 300)
    }else{
        contactTog.classList.add('active');
        togglebtn(true);
        setTimeout(() => {
            contacts.classList.add('active')
        }, 300)
        setTimeout(() => {
            togglecontactscovers(true);
        }, 300)
    }
}

function togglecontactscovers(active){
    contactscovers.forEach(cover => {
        togglecover(cover, active);
    })
}

function togglebtn(active){
    btn.forEach(cover => {
        togglecover(cover, active);
    })
}

function togglecover(cover, active){
    setTimeout(() => {
        if(active){
            cover.classList.add('active');
        }else{
            cover.classList.remove('active');
        }
    })
}

let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

$('#exc').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorRed.svg)',
    'transform': 'scale(2.5)',
  })
})


$('#wrk').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorOrange.svg)',
    'transform': 'scale(2.5)',
  })
})


$('#evn').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorBlue.svg)',
    'transform': 'scale(2.5)',
  })
})


$('#shp').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorYellow.svg)',
    'transform': 'scale(2.5)',
  })
})
$('.title').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorBlack.svg)',
    'transform': 'scale(1)',
  })
})

$('.black').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorWhite.svg)',
    'transform': 'scale(1)',
  })
})

$('.white').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorBlack.svg)',
    'transform': 'scale(1)',
  })
})
