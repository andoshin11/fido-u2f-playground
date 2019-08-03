import * as tsx from 'vue-tsx-support'

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
      <button onClick={this.sayHi} >{ this.text }</button>
    )
  }
})
