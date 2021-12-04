export { default as Home } from '../../components/home/index.vue'
export { default as User } from '../../components/user/index.vue'
export { default as AuthLogin } from '../../components/auth/login/index.vue'
export { default as AuthSignin } from '../../components/auth/signin/index.vue'
export { default as LayoutsColorModePicker } from '../../components/layouts/colorMode/ColorModePicker.vue'
export { default as LayoutsHeader } from '../../components/layouts/header/Header.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
