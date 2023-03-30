let JUEGO = 0
input.onGesture(Gesture.Shake, function () {
    JUEGO = randint(0, 2)
    if (JUEGO == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (JUEGO == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
