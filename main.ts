robotbit.MotorRunDual(
robotbit.Motors.M1A,
200,
robotbit.Motors.M2A,
255
)
robotbit.StpCarMove(475, 60)
robotbit.StpCarTurn(-90, 60, 90)
robotbit.StpCarMove(300, 60)
music.playMelody("F G F G F G F G ", 500)
music.playMelody("F G F G F G F G ", 500)
music.playMelody("F G F G F G F G ", 500)
basic.forever(function () {
    robotbit.StpCarTurn(360, 60, 90)
    robotbit.StpCarTurn(-360, 60, 90)
})
