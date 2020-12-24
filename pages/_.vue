<template>
  <div>
    <div class="store-array">
      <div class="store" v-for="store in stores" :key="store.id" @click="$router.push('store/' + store.slug)">
        <Store :store="store" />
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../components/Store'

export default {

  head(){
    return {
      title:'Menasa stores',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          // content: imgURL || this.$env.NUXT_ENV_BASE_URL + '/logo.png'
        },
        {
          hid: 'description',
          name: 'description',
          content: `Welcome to menasa stores`
        }
      ]
    }
  },
  components:{
    Store
  },
    mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  data () {
    return { stores : [] } 
  },
  asyncData (context) {
    console.log('getting')
  return context.app.$storyapi.get(`cdn/stories/`,{
    starts_with:"stores/",
        clear: 'auto',
    type: 'memory',
    cache:false
  }).then((res) => {
    console.log(res.data.stories)
    return {stores:res.data.stories}
  })
  }
}
</script>
  cache: {

  }