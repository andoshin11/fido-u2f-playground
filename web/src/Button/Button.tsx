import * as tsx from 'vue-tsx-support'
import { isSupported } from 'u2f-api'
import styles from './styles.css'
import { APIClient } from '@/infra/network/APIClient'
import { RequestRegister } from '@/infra/network/requests'

export default tsx.component({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    async sayHi() {
      console.log('Say hi!')
      const client = new APIClient()
      const result = await client.request(new RequestRegister())
      console.log(result)
      const canUse = await isSupported()
      console.log(canUse)
    }
  },
  render() {
    return (
      <button onClick={this.sayHi} class={styles.button} >{ this.text }</button>
    )
  }
})
