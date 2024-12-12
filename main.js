// Typing Animation
let words = document.querySelectorAll(".word")
words.forEach((word) => {
    let letters = word.textContent.split("")
    word.textContent = ""
    letters.forEach((letter) => {
        let span = document.createElement("span")
        span.textContent = letter
        span.className = "letter"
        word.append(span)
    })
})
let currentWordsIndex = 0
let maxWordsIndex = words.length - 1
words[currentWordsIndex].style.opacity = "1"



let changeText = () => {
    let currentWord = words[currentWordsIndex]
    let nextWord = currentWordsIndex === maxWordsIndex ? words[0] : words[currentWordsIndex + 1]

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out"
        }, i * 80)
    })
    nextWord.style.opacity = "1"
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"
        setTimeout(() => {
            letter.className = "letter in"
        }, 300 + i * 80)
    })
    currentWordsIndex = currentWordsIndex === maxWordsIndex ? 0 : currentWordsIndex + 1
}
changeText()
setInterval(changeText, 3000)





// circle skills
const circles = document.querySelectorAll('.circle')
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots")
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots * marked / 100)
    var points = ""
    var rotate = 360 / dots

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`

    }
    elem.innerHTML = points
    const pointsMarked = elem.querySelectorAll('.points')
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')

    }
})

// for mix it up in portfolio
var mixer = mixitup('.port-gallery');




// menu icon

let menuIcon = document.querySelector(".menu-icon")
let navList = document.querySelector(".navList")

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open")
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x")
    navList.classList.remove("open")
}








