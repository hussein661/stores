<template>
  <div class="page-wrapper">
    <div class="logo-image-menasa">
      <a href="https://www.menasa.net/" target="_blank">
        <menasalogo />
      </a>
    </div>
    <div class="page-title-wrapper">
      <div class="page-title">
        <span class="hala">{{ hala }}</span> {{ by }} 
        <span class="logo-image"
          ><a href="https://www.menasa.net/" target="_blank">
            <!-- <img :src="require('~/static/menasa-logo.jpg')" /> -->
            {{ menasa }}
          </a>
        </span>
        👋
        <!-- <div class="hala-hand">
          <img
            src="https://i.pinimg.com/originals/85/7f/d7/857fd79dfd7bd025e4cbb2169cd46e03.png"
          />
        </div> -->
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
    <div class="store-array" v-if="stores && stores.length">
      <div v-for="store in filterStores(stores)" :key="store.id">
        <div class="store" @click="$router.push('/' + store.slug)">
          <Store :store="store" />
        </div>
      </div>
    </div>
    <div v-else class="store-array" >
            <div v-for="(load,i) in 10" :key="i">
      <loaders />
            </div>
    </div>
    <div class="ads">
      <div class="title">{{addstitle}}</div>
      <div class="desc">{{addsDesc}}</div>
      <div class="start-btn"><a href="https://www.menasa.net/" target="_blank">{{addsBtn}}</a></div>
    </div>

        <div class="footer-main-page">
      <div class="menasa-logo-footer"><img src="https://www.menasa.net/wp-content/themes/msan/images/footer-logo.svg" /></div>
      <div class="address-details">{{addressDetails}}</div>
      <div class="rights">{{rights}}</div>
    </div>
  </div>
</template>

<script>
import Store from "../components/Store";
import loaders from "../components/icons/loaders";

import axios from "axios";
import lang from "../mixins/language";
import menasalogo from "../components/icons/menasalogo";

const dateFormat = require("dateformat");

export default {
  head() {
    return {
      title: "Hala by Menasa",
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "http://localhost:9898/_nuxt/static/menasa-logo.jpg"
        },
        {
          hid: "description",
          name: "description",
          content: `Welcome to menasa stores`
        }
      ]
    };
  },
  mixins: [lang],
  components: {
    Store,
    loaders,
    menasalogo
    
  },
  mounted() {
    this.$nextTick(() => {
      this.getData();
    });
  },
  methods: {
    filterStores(stores) {
      return stores.filter(store => store.slug !== "menasa");
    },
    getData() {
      this.$nuxt.$loading.start();
      const date = dateFormat(new Date(), "yyyy/mm/dd HH:00:00");
      const ts = new Date().getTime() / 1000;
      const url = `https://api.storyblok.com/v1/cdn/stories/?starts_with=${this.$store.state.lang}stores%2F&version=published&cv=${ts}&token=YPJhIqzQepWQtUNNSVIPXAtt&per_page=100&sort_by=position:asc&clear=auto`;
      axios.get(url).then(res => {
        this.stores = res.data.stories;
        this.$nuxt.$loading.finish();
      });
    }
  },
  data() {
    return { stores: [] };
  },
  computed: {
    hala() {
      return !this.$store.state.lang ? "Hala" : "هلا";
    },
    by() {
      return !this.$store.state.lang ? "by" : "من";
    },
    menasa() {
      return !this.$store.state.lang ? "Menasa" : "منصة";
    },
    addstitle(){
      return !this.$store.state.lang ? 
      "Are you ready to start your ecommerce journey ?" :
      "مستعد لبدأ رحلتك التجارية ؟"
    },
        addsDesc(){
      return !this.$store.state.lang ? 
      "We are here to help you create your website and enter your content" :
      "نحن هنا لمساعدتك لانشاء متجرك الإلكتروني  وإدخال محتواك"
    },
    addsBtn(){
            return !this.$store.state.lang ? 
      "Start your jouneh now " :
      " إبدأ رحلتك الآن 🤝"
    },
        addressDetails(){
      return !this.$store.state.lang ? 
      "Kuwait, Omar abed Elaziz street, Loaloa Maseya building - 1st Floor" :
      " الكويت، شارع عمر بن عبد العزيز، عمارة اللؤلؤة الماسية - الطابق الاول"
    },
    rights(){
           return !this.$store.state.lang ? 
      "All rights © reserved Menasa 2020" :
      "جميع الحقوق محفوظة © منصة 2020 "
    },
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
  margin: 0 5px;
}
.page-wrapper {
  padding-top: 80px;
  position: relative;
  background-image: url('../assets/images/bg.png');
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size: cover;
      background-position: bottom;
}
.logo-image-menasa svg{
  position: absolute;
  top: 0px;
  right: 20px;
  width: 160px;
}
@media (max-width: 700px) {
.logo-image-menasa svg{
  top: 10px;

  width: 100px;
}}

.logo-image-menasa img {
  width: 150px;
  object-fit: contain;
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
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
@media (max-width: 700px) {
  .store-array {
    display: block
  };
}

.logo-image a {
  text-decoration: none;
  transition: 0.2s;
}
.logo-image a:hover {
  color: #2a81fb;
  text-decoration: underline;
}
.hala-hand img {
  width: 30px;
}

.page-title * {
  color: #2e3187;
}

.ads {
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);
  background: white;
  width: 90%;
  margin: 40px auto;
  padding:30px;
  border-radius: 15px;
  text-align: center;
      max-width: 700px;

}

.ads .title {
  color: #2a81fb;
  padding: 10px;
  font-size: 20px;
  font-weight: bolder;
}
.ads .desc {
  padding: 10px;
}
.ads a {
  padding: 14px 28px;
  margin: 0 auto;
  max-width: 200px;
  background: #2a81fb;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.1rem;
  text-decoration: none;
  width: auto;
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);
}
.ads button img{
  width:30px;
}
.footer-main-page {
  text-align: center;
  margin: 20px auto;
  padding-bottom: 20px;
  max-width: 310px;
}

.rights {
  margin: 20px 0;
}


</style>
