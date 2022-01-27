input.onButtonPressed(Button.A, function () {
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.StpCarMove(10, 48)
})
input.onButtonPressed(Button.B, function () {
    robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
})
robotbit.StpCarMove(10, 48)
basic.forever(function () {
	
})
