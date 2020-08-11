<template>
  <div class="container">
    <header>
      <Header @reset="getRandom"/>
    </header>
    <main>
      <div class="quote-container">
        <div class="quote">
          <div class="quote__text">
            {{quote.quoteText}}
          </div>
          <div class="quote__htamp">
            <router-link :to="`/author/${quote.quoteAuthor}`">
              <img src="../assets/htamp.png" alt="htamp">
              <span>
                {{quote.quoteAuthor}}
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>


  import Header from "../components/Header";

  export default {
    data: () => ({
      quote: {}
    }),
    components: {
      Header
    },
    methods: {
      async getRandom() {
        await this.axios
                .get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
                .then(response => this.quote = response.data.quote)
      }
    },
    mounted() {
      this.getRandom()
    }
  }
</script>

<style lang="scss">

</style>