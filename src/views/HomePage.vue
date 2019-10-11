<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      message: 'Vue App Template | HomePage'
    }
  },
  mounted () {
    alert('check')
  }
}
</script>

<style scoped>

</style>
