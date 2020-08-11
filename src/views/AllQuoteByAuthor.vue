<template>
  <div class="container">
    <div class="author">
      <div v-if="quotes[0]" class="author__name">
        {{this.quotes[0].quoteAuthor}}
      </div>
      <div class="author__quotes">
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
          let authorName = this.$route.params['author']
          await this.axios
                  .get(`https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=10`)
                  .then(response => this.quotes = response.data['quotes'])
        }
    },
    mounted() {
        this.get()
    }
  }
</script>

<style lang="scss" scoped>
  .author {
    &__name {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: #dcb600;
      background: #490000;
      text-shadow: 1px -1px 20px #ff0000;
      padding: 0.5rem;
      border-radius: 10px;
      border: 3px solid #a96a00;
    }
  }
  .author__quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
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