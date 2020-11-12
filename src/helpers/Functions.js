const focusHelper = (workout) => {
  let focus = []
  let focusIcons = []
  if (workout.strength) {
    focus.push("Strength")
    focusIcons.push("weight")
  }
  if (workout.cardio) {
    focus.push("Cardio")
    focusIcons.push("shoe-print")
  }
  if (workout.flexibility) {
    focus.push("Flexibility")
    focusIcons.push("star-three-points")
  }
  return { focus: focus.join(", "), icons: focusIcons }

}

export { focusHelper }