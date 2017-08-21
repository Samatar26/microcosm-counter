import Microcosm from 'microcosm'
import Count from './domains/count'

class Repo extends Microcosm {
  setup () {
    this.addDomain('count', Count)
  }
}

export default Repo