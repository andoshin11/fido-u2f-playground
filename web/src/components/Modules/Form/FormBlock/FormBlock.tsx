import * as tsx from 'vue-tsx-support'
import styles from './styles.css'

export default tsx.component({
  name: 'FormBlock',
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return (
      <div class={styles.FormBlock}>
        { !this.label ? null : (
          <span class={styles.label}>
            { this.required ? (
              <span class={styles.labelTag}>必須</span>
            ) : null }
            <span class={styles.labelText}>{ this.label }</span>
          </span>
        ) }
        <div>
          { this.$slots['default'] }
        </div>
      </div>
    )
  }
})