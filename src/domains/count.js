import {initializeCount, increment, decrement} from '../actions/count'

const Count = {
  getInitialState () {
    return 0
  },

  changeSum(count, value) {
    return count += value
  },

  register () {
    return {
      [increment]: this.changeSum,
      [initializeCount]: this.changeSum,
      [decrement]: this.changeSum
    }
  }
}

export default Count