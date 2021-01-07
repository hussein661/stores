<template>
  <div class="page-wrapper">
    <div class="page-title-wrapper">
      <div class="page-title">
        <div class="hala-hand"><img src="https://i.pinimg.com/originals/85/7f/d7/857fd79dfd7bd025e4cbb2169cd46e03.png" /></div>
        <span class="hala">Hala</span> by
        <span class="logo-image"
          ><a href="https://www.menasa.net/" target="_blank">
           <!-- <img :src="require('~/static/menasa-logo.jpg')" /> -->
           Menasa
           </a>
       </span>
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
        @click="$router.push('/' + store.slug)"
      >
        <Store :store="store" v-if="store.slug !== 'menasa'" />
      </div>
    </div>
  </div>
</template>

<script>
import Store from "../components/Store";
import axios from "axios";
const dateFormat = require("dateformat");

export default {
  head() {
    return {
      title: "Hala by Menasa",
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: 'http://localhost:9898/_nuxt/static/menasa-logo.jpg'
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
    const date = dateFormat(new Date(), "yyyy/mm/dd HH:00:00");
    const ts = new Date().getTime() / 1000;
    const url = `https://api.storyblok.com/v1/cdn/stories/?starts_with=stores%2F&version=published&cv=${ts}&token=YPJhIqzQepWQtUNNSVIPXAtt&per_page=100&sort_by=position:asc&clear=auto`;
    axios.get(url).then(res => {
      this.stores = res.data.stories;
    });
    // this.$storybridge.on(["input", "published", "change"], event => {
    //   if (event.action == "input") {
    //     if (event.story.id === this.story.id) {
    //       this.story.content = event.story.content;
    //     }
    //   } else if (!event.slugChanged) {
    //     window.location.reload();
    //   }
    // });
    // if (window) {
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag() {
    //     dataLayer.push(arguments);
    //   }
    //   gtag("js", new Date());

    //   gtag("config", "G-EEQL8PR4B3");
    // }
  },
  data() {
    return { stores: []};
  }
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get(`cdn/stories/`, {
  //     })
  //     .then(res => {
  //       console.log(res.data.stories);
  //       return { stores: res.data.stories };
  //     });
  // }
};
</script>

<style scoped>
.page-title-wrapper {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
}
span {
  color: #1574F6;
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
  margin: 10px auto;
  font-size: 24px;
}

.logo-image img {
  width: 75px;
  height: 100%;
  object-fit: contain;
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

.logo-image a {
  color: black;
  text-decoration: none;
  transition: .2s;
}
.logo-image a:hover {
  color: #2A81FB;
  text-decoration: underline;
}
.hala-hand img {
  width: 30px;
}
</style>
