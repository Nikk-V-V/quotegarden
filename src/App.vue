<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    components: {
     
    }
  }
</script>

<style lang="scss">
  $header-height: 100px;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  
  #app {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 100%;
    padding: 1rem 5%;
    height: 100%;
    max-width: 1124px;
    position: relative;
  }

  header {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1000;
    top: 0;
    box-shadow: 2px 1px 20px 0 #505c5c78;
    height: 100px;
    background-color: #ffffff45;
    display: flex;
    justify-content: center;
  }

  main {
    position: relative;
    top: $header-height;
  }

  .quote-container {
    display: flex;
    justify-content: center;
    height: 100vh;
    .quote {
      background-image: url(./assets/img.png);
      background-repeat: no-repeat;
      background-position-x: center;
      width: 400px;
      background-size: 320px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .quote__text {
        width: 50%;
        font-size: 1rem;
        text-align: center;
        font-weight: bold;
      }
      &__htamp {
         width: 150px;
         height: 150px;
         bottom: -79px;
         position: absolute;
         display: flex;
         justify-content: center;
         text-align: center;
         cursor: pointer;
         img {
           width: 100%;
           height: 100%;
         }
         span {
           position: absolute;
           top: 32px;
           font-size: 0.7rem;
           color: white;
           font-weight: 600;
           width: 130px;
           text-align: center;
           right: 18px;
         }
      }
    }
  }
  .goHome {
    z-index: 1000;
    background: #490000;
    width: 64px;
    top: 80vh;
    color: #dcb600;
    padding: 0.5rem;
    text-align: center;
    right: 7%;
    border-radius: 30px;
    position: fixed;
    cursor: pointer;
    border: 2px solid #3d3200;
    font-weight: 600;
    box-shadow: 0 0 13px 2px #715d00;
  }
</style>
