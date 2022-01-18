input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
})
robotbit.StpCarMove(10, 48)
basic.forever(function () {
	
})
