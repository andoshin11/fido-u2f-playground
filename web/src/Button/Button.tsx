import * as tsx from 'vue-tsx-support'
import styles from './styles.css'

export default tsx.component({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    sayHi() {
      console.log('Say hi!')
    }
  },
  render() {
    return (
      <button onClick={this.sayHi} class={styles.button} >{ this.text }</button>
    )
  }
})
