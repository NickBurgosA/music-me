const msToMm = {}

function convertToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${sec}`
}
msToMm.install = (Vue) => {
  Vue.filter('ms-to-mm', (val) => {
    return convertToMm(val)
  })
}

export default msToMm
