export default {
  humanSum (state) {
    state.human = state.man + state.woman
    console.log(state.human)
    return state.human
  }
}
