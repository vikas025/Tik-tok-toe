let boxes = document.querySelectorAll(".box")
const winnerdisplay = document.querySelector(".winnerdisplay")
const resetbtn = document.querySelector(".resetbtn")
const newgame = document.querySelector(".newgame")

let turnO = true
let count = 1

const resetgame = () => {
  turnO = true
  count = 1
  for (let value of boxes) {
    value.innerText = ""
  }
  enable()
  winnerdisplay.innerText=''
}

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"
      box.style.color = "Red"
      turnO = false
    } else {
      box.innerText = "X"
      box.style.color = "Black"
      turnO = true
    }
    box.disabled = true
    let iswin = showwinner()
    console.log(count)
    if (count === 9 && iswin) {
      winnerdisplay.innerText = `Game is Draw Between You`
      disable()
    }
    count++
  })
})

const enable = () => {
  for (let box of boxes) {
    box.disabled = false
  }
}
const disable = () => {
  for (let box of boxes) {
    box.disabled = true
  }
}

const winneris = (winner) => {
  winnerdisplay.innerText = `I am the winner ${winner}`
  disable()
}
const showwinner = () => {
  for (let winner of winPatterns) {
    let value1 = boxes[winner[0]].innerText
    let value2 = boxes[winner[1]].innerText
    let value3 = boxes[winner[2]].innerText

    if (value1 !== "" && value2 !== "" && value3 !== "") {
      if (value1 === value2 && value2 === value3) {
        // console.log(value1);
        winneris(value1)
        return true
      }
    }
  }

}

resetbtn.addEventListener("click", resetgame)
newgame.addEventListener("click", resetgame)
