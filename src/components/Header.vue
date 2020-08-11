<template>
  <div class="container">
    <div class="header-container">
      <div class="logo">
        <div class="img">
          <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="text">
          Quote
        </div>
      </div>
      <div @click="getRandom" class="random">
        <img src="../assets/logo2.jpeg" alt="bnt-random">
        <span>Random</span>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'Header',
    methods: {
      getRandom() {
        this.$emit('reset')
      }
    }
  }
</script>

<style lang="scss">
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .random {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70px;
    height: 40px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: -1px 0px 5px 2px #023c6e;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      font-size: 1rem;
      color: #fbfbfb;
      font-weight: 600;
      text-shadow: 0px 0px 20px #000000;
    }
  }
  .logo {
    width: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 60px; 
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .text {
      position: absolute;
      font-size: 1.2rem;
      font-weight: 600;
      right: 3px;
      text-shadow: 0px 0px 20px white;
    }
  }
</style>