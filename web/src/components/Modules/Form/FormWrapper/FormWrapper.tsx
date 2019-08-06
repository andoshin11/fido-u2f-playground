import * as tsx from 'vue-tsx-support'
import Button from '@/components/Base/Button'
import styles from './styles.css'

interface Events {
  onSubmit: void
}

export default tsx.componentFactoryOf<Events>().create({
  name: 'FormWrapper',
  props: {
    title: {
      type: String,
      default: ''
    },
    canSubmit: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '送信'
    },
  },
  render() {
    return (
      <div class={styles.FormWrapper}>
        { this.title && (<h1 class={styles.title}>{ this.title }</h1>) }
        <form onSubmit={ tsx.modifiers.prevent(() => this.$emit('submit')) }>
          { this.$slots['default'] }
          <div class={styles.submit}>
            <Button text={this.submitText} nativeType="submit" />
          </div>
        </form>
      </div>
    )
  }
})