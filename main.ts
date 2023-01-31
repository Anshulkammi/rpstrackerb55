input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PlayerA += 1
    Rounds += 1
    updateScoreBoard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    updateScoreBoard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PlayerB += 1
    Rounds += 1
    updateScoreBoard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Hey shall we play Rock,Paper,Scissors")
    PlayerA = 0
    PlayerB = 0
    Ties = 0
    Rounds = 0
    basic.pause(2000)
    updateScoreBoard()
}
function updateScoreBoard () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Player A:" + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
let PlayerB = 0
let Ties = 0
let Rounds = 0
let PlayerA = 0
reset()
