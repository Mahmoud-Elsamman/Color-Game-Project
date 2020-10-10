let colors = []
let noSquares = 6 
let pickedColor

let myH1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message")
let squares = document.querySelectorAll(".square")


let randomColor = () => {

    let red = Math.floor( Math.random() * 256 )
    let green = Math.floor( Math.random() * 256 )
    let blue = Math.floor( Math.random() * 256 )

    return `rgb(${red}, ${green}, ${blue})`
}


resetButton.addEventListener("click", () => {
    reset()
 })


let pickColor = () => {

    let randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber]

}

let changeColors = (color) => {

    for(let i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color
    }
}


let generateRandomColors = (num) => {

    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr 
}


let setupModeButtons = () => {

    for( let i = 0 ; i < modeButtons.length ; i++){
        modeButtons[i].addEventListener("click", () => {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            modeButtons[i].classList.add("selected")
    
            modeButtons[i].textContent === "Easy" ? noSquares = 3 : noSquares = 6 
        
            reset()
        })
    }
}


let setupSquares = () => {

    for(let i = 0 ; i < squares.length ; i++){
    
        squares[i].addEventListener("click", function() {
    
            let clickedColor = squares[i].style.backgroundColor 
            
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor)
                myH1.style.background = clickedColor
            }
            else{
                squares[i].style.backgroundColor = "#232323" 
                messageDisplay.textContent = "Try Again"
            }
        })
    }

}

let reset = () => {

    colors = generateRandomColors(noSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = ''
    for(let i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i]
        }
        else {
            squares[i].style.display = "none"
        }
    }
    myH1.style.background = 'steelblue'
}

let init = () => {

    setupModeButtons()
    setupSquares()
    reset()
}


init()








