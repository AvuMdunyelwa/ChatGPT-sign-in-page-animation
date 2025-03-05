const text = document.querySelector('h1');
const circle = document.querySelector('.circle-container');
const html = document.querySelector('html');
let chatTopics = [
    "What's Up",
    "Let's chat",
    "ChatGPT",
    "Let's explore",
    "Let's design",
    "ChatGPT",
];

html.addEventListener('click', () => {
    console.log("click fired!")
    if(text.classList != '.animate-text' ) {
        text.classList.add('animate-text')
    }

    if(circle.classList != '.animate-circle' ) {
        circle.classList.add('animate-circle')
    }
   
    setTimeout(function() {
        text.classList.remove('.animate-text')
        circle.classList.remove('.animate-circle')
    },100)
})

