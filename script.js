const myButton = document.getElementById("mybutton")

myButton.addEventListener('click', function(){
    alert("Button clicked")
})


const toggleColor = function (){
    document.body.classList.toggle("red-background")
}

const backgroundBtn = document.getElementById("background-btn")

backgroundBtn.addEventListener("click", toggleColor)