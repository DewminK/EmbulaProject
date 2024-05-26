let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let img = document.querySelectorAll('.img')
    document.querySelector('.slide').appendChild(img[0])
})

prev.addEventListener('click', function(){
    let img = document.querySelectorAll('.img')
    document.querySelector('.slide').prepend(img[img.length - 1]) // here the length of items = 6
})

function ToSignIn(){
    window.location.href="SignIn.html"

}
function ToContactUs(){
    window.location.href="ContactUs.html"
}
