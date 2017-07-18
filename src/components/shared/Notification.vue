<template lang="pug">
    .container
      .columns
        .column.is-5.is-offset-4
          .notification.is-danger(:class='{ "is-success": isResult}')
            slot(name='body') Algo Anduvo mal
</template>
<script>
  export default {
    props: {
      isResult: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
  .is-success {
    background-color: #3273dc;
  }
</style>
