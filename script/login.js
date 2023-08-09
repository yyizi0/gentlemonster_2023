const loginTitle = document.querySelectorAll('.login_wrap .login_title button')
const loginContents = document.querySelectorAll('.login_wrap .login_contents > div')
const show_pw = document.querySelectorAll('.login_contents .show_pw')
const pw = document.querySelectorAll('.login_contents .pw')
console.log(loginTitle,loginContents,show_pw,pw)
for(let i of loginContents){i.style.display = 'none'}
loginContents[0].style.display = 'block'
loginTitle.forEach(function(target,index,array){
    target.addEventListener('click',function(){
        for(let i of loginTitle){i.classList.remove('active')}
        target.classList.add('active')
        for(let i of loginContents){i.style.display = 'none'}
        loginContents[index].style.display = 'block'
    })
})