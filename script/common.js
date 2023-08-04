//header, footer JS
//header 전체메뉴 스크립트 flow
//1. open-nav 초기 숨기기
//2. 햄버거메뉴(menu) 클릭 시 open-nav 출력
//3. open-nav 안 x버튼(nav_close) 클릭 시 open-nav 숨기기
const menu = document.querySelector('#menu')
const open_nav = document.querySelector('#open_nav')
const nav_close = document.querySelector('#nav_close')
console.log(open_nav,nav_close,menu)
//1. open-nav 초기 숨기기 #open_nav {transform:translateX(?)}
//css 값 상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transform='translateX(100%)';
open_nav.style.transition='transform 1s'
menu.addEventListener('click',function(){
    open_nav.style.transform='translateX(0)';
    //display:none으로 숨긴 대상을 다시 보이게 할 경우
    //기존 디자인 css에서 flex로 정렬한 대상이라면 display='flex'
    //기존 디자인 css에서 flex설정이 없었다면 display='block'
})
nav_close.addEventListener('click',function(){
    open_nav.style.transform='translateX(100%)';
})
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
})