import * as tsx from 'vue-tsx-support'
import { isSupported, register } from 'u2f-api'
import styles from './styles.css'
import { APIClient } from '@/infra/network/APIClient'
import { RequestRegister, RegisterResponse } from '@/infra/network/requests'

export default tsx.component({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    nativeType: {
      type: String,
      default: null
    }
  },
  methods: {
    async sayHi() {
      try {
        console.log('Say hi!')
        const client = new APIClient()
        const { appId, registerRequests } = await client.request(new RequestRegister())
        const canUse = await isSupported()
        if (canUse) {
          const registerRequest = registerRequests[0]
          const { registrationData, version, clientData } = await register([{
            appId,
            challenge: registerRequest.challenge,
            version: registerRequest.version
          }], 10000)

          const status = await client.request(new RegisterResponse({
            registrationData,
            version,
            clientData
          }))

          console.log('status')
          console.log(status)

        }
      } catch (e) {
        console.log(e)
        console.log(e.metaData)
      }
    }
  },
  render() {
    return (
      <button onClick={() => this.$emit('click')} class={styles.button} type={this.nativeType} >{ this.text }</button>
    )
  }
})
