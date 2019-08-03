import * as tsx from 'vue-tsx-support'
import Button from '@/Button'

interface IData {
  msg: string
}

export default tsx.componentFactory.create({
  name: 'App',
  data(): IData {
    return {
      msg: 'Hello, world!'
    }
  },
  render() {
    return (
      <div>{ this.msg } <Button  text="Sample" /></div>
    )
  },
  mounted() {
    console.log('instance mounted')
  }
})