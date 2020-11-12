const workoutFocus = workout => {
    if (workout.strength && workout.cardio) {
        return "Strength and Cardio Mix"
    } else if (workout.strength) {
        return "Strength"
    }
    return "Cardio"
}

export { workoutFocus }