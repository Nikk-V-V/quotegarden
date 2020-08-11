<template>
  <div class="container">
    <div class="genre__quotes">
      <div v-for="quote of quotes" class="quote">
        <div class="quote__text">
          {{quote.quoteText}}
        </div>
        <div class="quote__genre">
          Genre:
          <router-link class="genre__link" :to="`/genre/${quote.quoteGenre}`">
            {{quote.quoteGenre}}
          </router-link>
        </div>
      </div>
    </div>
    <router-link to="/"  class="goHome">
      Home
    </router-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
      quotes: []
    }),
    methods: {
      async get() {
        let genre = this.$route.params['genre']
        console.log(this.$route)
        await this.axios
          .get(`https://quote-garden.herokuapp.com/api/v2/genre/${genre}?page=1&limit=10`)
          .then(response => this.quotes = response.data['quotes'])
        console.log(this.quotes)
      }
    },
    mounted() {
      this.get()
    }
  }
</script>

<style scoped lang="scss">
  .genre__quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .quote {
    background: #d1ba93;
    width: 250px;
    margin: 1rem 0;
    border-radius: 15px;
    border: 1px solid;
    box-shadow: -5px 3px 9px 2px #000000b0;
    &__text {
       font-weight: 600;
       text-align: center;
       padding: 1.5rem;
     }
    &__genre {
       font-weight: 600;
       text-align: center;
       padding: 0.5rem;
     }
    .genre__link {
      color: #490000;
    }
  }
</style>