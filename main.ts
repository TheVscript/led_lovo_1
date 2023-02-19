function ellenfelKihelyezés () {
    elozo_LED_x = random_LED_X_Index
    random_LED_X_Index = randint(0, 4)
    if (elozo_LED_x != random_LED_X_Index) {
        led.unplot(elozo_LED_x, 0)
        led.plot(random_LED_X_Index, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(jatekos_X, 4)
    if (jatekos_X > 0) {
        jatekos_X += -1
    } else {
        jatekos_X = 4
    }
    led.plot(jatekos_X, 4)
})
input.onButtonPressed(Button.AB, function () {
    loves_Y = 4
    for (let index = 0; index < 4; index++) {
        loves_Y = loves_Y - 1
        led.plot(jatekos_X, loves_Y)
        basic.pause(100)
        led.unplot(jatekos_X, loves_Y)
    }
    if (jatekos_X == random_LED_X_Index) {
        music.setVolume(64)
        music.playTone(784, music.beat(BeatFraction.Half))
        ellenfelKihelyezés()
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(jatekos_X, 4)
    if (jatekos_X < 4) {
        jatekos_X += 1
    } else {
        jatekos_X = 0
    }
    led.plot(jatekos_X, 4)
})
let loves_Y = 0
let elozo_LED_x = 0
let random_LED_X_Index = 0
let jatekos_X = 0
led.plot(jatekos_X, 4)
led.plot(random_LED_X_Index, 0)
loops.everyInterval(2000, function () {
    ellenfelKihelyezés()
})
basic.forever(function () {
	
})
