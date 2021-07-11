let numero_aleatorio = 0
input.onGesture(Gesture.Shake, function () {
    numero_aleatorio = randint(0, 10)
    basic.showNumber(numero_aleatorio)
    basic.pause(1000)
    if (numero_aleatorio <= 18) {
        basic.showIcon(IconNames.Target)
        basic.clearScreen()
    } else if (numero_aleatorio > 18 && numero_aleatorio <= 40) {
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
    } else if (numero_aleatorio > 41 && numero_aleatorio <= 73) {
        basic.showIcon(IconNames.Snake)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.EigthNote)
        basic.clearScreen()
    }
})
