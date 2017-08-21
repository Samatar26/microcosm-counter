import React from 'react'
import {initializeCount} from '../actions/count'
import Presenter from 'microcosm/addons/presenter'
import Counter from '../views/counter'

class Count extends Presenter {
  setup (repo) {
    repo.push(initializeCount)
  }

  getModel () {
    return {
      count: state => state.count
    }
  }

  render () {
    const {count} = this.model
    return <Counter count={count}/>
  }
}

export default Count