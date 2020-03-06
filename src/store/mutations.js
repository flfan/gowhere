export default {
  mChangeCity (state, name) {
    state.city = name
    try {
      localStorage.city = name
    } catch (error) {
      console.log(error)
    }
  }
}
