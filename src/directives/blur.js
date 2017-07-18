const blur = {}

function setBlur (el, binding) {
  if (!binding.value) {
    el.style.filter = 'blur(3px)'
    el.style.cursor = 'not-allowed'

    el.querySelectorAll('button').foreach(button => {
      button.setAtributte('disabled', true)
    })
  }
}
blur.install = (Vue) => {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}
export default blur
