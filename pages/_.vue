<template>
  <div class="page-wrapper">
    <div class="page-title-wrapper">
      <div class="page-title">
        <span>Hala</span> by
        <span class="logo-image"
          ><img :src="require('~/static/menasa-logo.jpg')"
        /></span>
      </div>
      <!-- <div class="page-title socials">
        <span class="logo-image"
          ><a href="https://www.facebook.com/menasanet" target="_blank"
            ><img :src="require('~/static/social/fb.png')"/></a></span
        ><a href="https://www.instagram.com/menasanet/?hl=en" target="_blank"
          ><span class="logo-image"
            ><img :src="require('~/static/social/ig.png')"/></span></a
        ><a href="https://www.linkedin.com/company/menasanet/" target="_blank"
          ><span class="logo-image"
            ><img :src="require('~/static/social/in.png')"/></span
        ></a>
      </div> -->
    </div>
    <div class="store-array">
      <div
        class="store"
        v-for="store in stores"
        :key="store.id"
        @click="$router.push('store/' + store.slug)"
      >
        <Store :store="store" />
      </div>
    </div>
  </div>
</template>

<script>
import Store from "../components/Store";

export default {
  head() {
    return {
      title: "Hala Menasa",
      meta: [
        {
          hid: "og:image",
          property: "og:image"
          // content: imgURL || this.$env.NUXT_ENV_BASE_URL + '/logo.png'
        },
        {
          hid: "description",
          name: "description",
          content: `Welcome to menasa stores`
        }
      ]
    };
  },
  components: {
    Store
  },
  mounted() {
    this.$storybridge.on(["input", "published", "change"], event => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else if (!event.slugChanged) {
        window.location.reload();
      }
    });
  },
  data() {
    return { stores: [] };
  },
  asyncData(context) {
    console.log("getting");
    return context.app.$storyapi
      .get(`cdn/stories/`, {
        starts_with: "stores/",
        clear: "auto",
        type: "memory",
        cache: false
      })
      .then(res => {
        console.log(res.data.stories);
        return { stores: res.data.stories };
      });
  }
};
</script>

<style scoped>

.page-title-wrapper {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
}
span {
  color: crimson;
  margin: 0 5px;
}
.page-wrapper {
  padding-top: 20px;
}
.page-title {
  justify-content: center;
  align-content: center;
  display: flex;
  text-align: center;
  margin: 20px auto;
  font-size: 26px;
}

.logo-image img {
  width: 90px;
}

.socials span {
  margin: 0 2px;
}
.socials img {
  cursor: pointer;
  width: 30px;
}

.store-array {
  max-width: 800px;
    margin: 0 auto;
}
</style>
