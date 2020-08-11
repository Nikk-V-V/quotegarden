<template>
  <div>
    <header>
      <Header/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

  import Header from '../components/Header'

  export default {
    name:'main-layout',
    components: {
      Header
    }
  }
</script>


<style lang="scss">
  $header-height: 100px;



</style>