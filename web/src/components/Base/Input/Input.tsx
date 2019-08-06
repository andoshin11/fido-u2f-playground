import * as tsx from 'vue-tsx-support'
import { InputHTMLAttributes, SyntheticEvent } from 'vue-tsx-support/types/dom';
import styles from './styles.css'

interface Events {
  onInput: InputHTMLAttributes['value']
}

export default tsx.componentFactoryOf<Events>().create({
  name: 'Input',
  props: {
    nativeType: {
      type: String as () => 'text' | 'email' | 'password' |'number',
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    errors: {
      type: Array as () => string[],
      default: () => []
    },
    outputType: {
      type: String as () => 'string' | 'number',
      default: 'string',
    },
  },
  methods: {
    numerify(val: string | null): number | null {
      return val === null ? null : parseInt(val, 10)
    },
    handleInput(event: SyntheticEvent<InputHTMLAttributes, Event>) {
      const value = event.target.value
      this.$emit('input', value)
    }
  },
  render() {
    return (
      <div>
        <input
          id={this.id}
          class={styles.input}
          type={this.nativeType}
          value={this.value}
          placeholder={this.placeholder}
          minlength={this.minlength}
          maxlength={this.maxlength}
          disabled={this.disabled}
          onInput={this.handleInput}
        />
      </div>
    )
  }
})