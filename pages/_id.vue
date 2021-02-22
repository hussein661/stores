<template>
  <div class="details-page" v-if="true">
    <div class="img-main-details">
      <img :src="store.content.image" />
                <div class="profile-img">
            <img :src="store.content.logo || store.content.image" />
          </div>
           <div class="site-visit">
            <a :href="store.content.link" target="_blank">{{sitevisit}}</a>
          </div>
    </div>

    <div class="item-contents">
      <div class="details-texts">
        <h2 class="store-name">

          <div class="main-title">{{ store.content.title }}</div>
        </h2>
        <div class="sub_title">{{ store.content.sub_title }}</div>
        <div class="flex">
          <div class="store-description">{{ store.content.description }}</div>
          <div class="site-link">
            <!-- <a class="visit" :href="store.content.link" target="_blank">Visit now !</a> -->
          </div>
        </div>
                  <div
        class="socials"
        v-if="store.content.social_links && store.content.social_links.length"
      >
        <!-- <h3 class="">{{ findUs }}</h3> -->
        <div class="social-links">
          <div
            class="social-link"
            v-for="slink in store.content.social_links"
            :key="slink.provider"
            :class="slink.provider"
          >
            <div class="icon">
              <a :href="href(slink)" target="_blank"
                ><component :is="slink.provider"
              /></a>
            </div>
          </div>
        </div>
      </div>
        <div class="video" v-if="store.content.video_url">
          <div class="iframe-wrapper">
            <iframe
              :src="store.content.video_url"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>

      <div
        class="pro-discount"
        v-if="store.content.discount && store.content.discount.length"
      >
        <div class="discount">
          <div class="disc-wrapper">
            <div class="disc-img">
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2018/04/discount-stamp-2-1024x788.png"
              />
            </div>
            <div class="discount-texts">
              <div class="discount-text">
                {{ store.content.discount[0].discount_title }}
              </div>
              <div class="discount-desc">
                {{ store.content.discount[0].discount_description }}
              </div>
            </div>
            <div class="sendme" v-show="false">
              <button class="sendv-btn" @click="isVouncherOpen = true">
                Send me the voucher
              </button>
            </div>
          </div>
        </div>
        <div v-if="store.content.promotion && store.content.promotion.length">
          <a :href="store.content.promotion[0].link_to" target="_blank">
            <div class="discount promotion">
              <div class="disc-wrapper">
                <div class="disc-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOHpYWxoVA19lOVgfRCKhkgNu1Cml8ARydg&usqp=CAU"
                  />
                </div>
                <div class="discount-texts">
                  <div class="discount-text">
                    {{ store.content.promotion[0].promotion_title }}
                  </div>
                  <div class="discount-desc">
                    {{ store.content.promotion[0].promotion_description }}
                  </div>
                </div>
                <div class="sendme"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div v-if="store.content.products && store.content.products.length">
        <div class="Order-now">
          {{ store.content.products_title || discoverproducts}}
        </div>

        <div class="items">
          <div
            class="menu-item"
            v-for="product in store.content.products"
            :key="product._uid"
          >
            <div class="branch img">
                            <div class="order-link">
                <a class="link" :href="product.link" target="_blank">
                      <div class="order-icon">
                        <span>{{ordernow}}</span>
            <cartIcon />
          </div>
                </a>
              </div>
              <a class="link" :href="product.link" target="_blank"><img :src="product.image" /></a></div>
            <div class="flex">
              <div class="item-texts">
                <div class="item-title">{{ product.title }}</div>
                
              </div>

            </div>
            <div class="item-description">{{ product.description }}</div>
          </div>
        </div>
      </div>
            <div v-if="store.content.branches && store.content.branches.length">
        <div class="Order-now">
          {{ store.content.branches_title || getDirection }}!
        </div>

        <div class="items">
          <div
            class="menu-item"
            v-for="branch in store.content.branches"
            :key="branch._uid"
            
          >
          <div class="relative">
            <div class="closed" v-if="branch.closed">
              <div class="text-closed">{{closed}}</div>
            </div>
            <div class="branch img">
              <a class="link" :href="branch.link" target="_blank" 
                ><img :src="branch.image"
              /></a>
            </div>
            <div class="flex">
              <div class="item-texts">
                <div class="item-title">{{ branch.title }}</div>
              </div>
              <div class="direction-link">
                <a class="link" :href="branch.link" target="_blank">{{
                  branch.button_text || getDirection
                }}</a>
              </div>
            </div>
                <div class="item-description">{{ branch.description }}</div>
          </div>
          </div>
        </div>
      </div>
            <div
        class="sep-border"
        v-if="store.content.location && store.content.location.length"
      />
      <div class="additional-links" v-if="menasa">
        <div class="title">{{book}}</div>
        <a href="https://www.menasa.net/en/book-a-demo/" target="_blank">
        www.menasa.net/en/book-a-demo
        </a>
      </div>
      <h3
        class=""
        v-if="
          (store.content.location && store.content.location.length) ||
            store.content.link
        "
      >
        {{ store.content.locations_title || comedine }}
      </h3>
      <div
        class="location-wrapper-main"
        v-if="store.content.location && store.content.location.length"
      >
        <div
          class="location-wrapper"
          v-for="(loc, i) in store.content.location"
          :key="i"
        >
          <div class="location">
            <div class="icon-wrap">
              <a :href="loc.location_link" target="_blank">
                <locationPin />
              </a>
            </div>
            <div>
              <div class="location-title text-blue">{{ loc.location_title }}</div>
              <div class="location-description">
                {{ loc.location_description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="visit-wrapper-main"
        v-if="store.content.link && store.content.link.length"
      >
        <div class="location visit">
          <div class=" icon-wrap">
            <webIcon />
          </div>
          <div>
            <div class="location-title text-blue">{{ visit }}</div>
            <div class="location-description" v-if="store.content && store.content.link">
              <a :href="store.content.link" target="_blank">{{
                ((store.content.link).split('//')[1]).replace('/','')
              }}</a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="socials apps"
        v-if="store.content.apps && store.content.apps.length"
      >
        <div class="sep-border" />
        <h3 class="">Get our apps</h3>
        <div class="social-links">
          <div
            class="social-link"
            v-for="app in store.content.apps"
            :key="app.provider"
            :class="app.provider"
          >
            <div class="icon">
              <a :href="app.link" target="_blank"
                ><img
                  :src="app.os === 'googleplay' ? googlePlayLogo : appStoreLogo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="logo-svg-footer">
<img src="https://www.menasa.net/wp-content/themes/msan/images/footer-logo.svg" />
      </div>
      <div>
     <div class="text-blue"> {{ hala }} {{ by }} {{menasatext}}</div>
      <div class="rights">{{rights}}</div>

    </div>
    </div>
    <div v-if="isVouncherOpen">
      <div class="background-voucher" @click="isVouncherOpen = false" />
      <div class="container-voucher">
        <div class="content">
          <h3 class="text">
            Claim your voucher
          </h3>
          <p class="claim-text">
            Enter your phone number and receive your voucher via SMS and
            {{ store.content.discount[0].discount_title }}
          </p>
          <div class="input">
            <input placeholder="enter your number" />
          </div>
          <div class="button">
            <button class="send_me" >Send me the voucher</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "../components/icons/Facebook";
import instagram from "../components/icons/Instagram";
import linkedin from "../components/icons/Linkedin";
import whatsApp from "../components/icons/whatsApp";
import email from "../components/icons/email";
import phone from "../components/icons/phone";
import cartIcon from "../components/icons/cartIcon";
import webIcon from "../components/icons/webIcon";
import locationPin from "../components/icons/locationPin";


import twitter from "../components/icons/twitter";
import printest from "../components/icons/printest";
import snapchat from "../components/icons/snapchat";
import lang from "../mixins/language";
import Menasalogo from '../components/icons/menasalogo';
import axios from 'axios';
const dateFormat = require("dateformat");

export default {
  head() {
    return {
      title: `${this.store.content.title}`,
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: this.store.content.image
        },
        {
          hid: "description",
          name: "description",
          content: `Check now ${this.store.content.title} ${this.store.content.type} at Menasa`
        }
      ]
    };
  },
  mixins: [lang],
  components: {
    facebook,
    instagram,
    linkedin,
    whatsApp,
    snapchat,
    email,
    phone,
    twitter,
    printest,
    Menasalogo,
    cartIcon,
    webIcon,
    locationPin
  },
  data() {
    
    return {
      fetched:false,
      isVouncherOpen: false,
      store: { content: {} },
      googlePlayLogo:
        "https://stratushealthcare.ie/wp-content/uploads/2020/02/google-play-badge.png",
      appStoreLogo:
        "https://www.my-white.eu/wp-content/uploads/2017/04/app-store-logo.png"
    };
  },

  computed: {
        rights(){
           return true ? 
      "All rights © reserved Menasa 2020" :
      "جميع الحقوق محفوظة © منصة 2020 "
    },
    sitevisit(){
      return true
        ? "Visit site"
        : "زيارة الموقع";
    },
    findUs() {
      return true
        ? "Find us also on"
        : "تواصل معنا ايضا عبر";
    },
    comedine() {
      return true ? "Come dine-in!" : "يمكنك زيارتنا في";
    },
    hala() {
      return true ? "Hala" : "هلا";
    },
    by() {
      return true ? "by" : "من";
    },
    ordernow() {
      return true ? "Order now" : "اطلب الآن";
    },
    getDirection() {
      return true ? "Get direction" : "الاتجاه";
    },
    visit() {
      return true
        ? "Visit our Website"
        : "الموقع الإلكتروني ";
    },
        closed() {
      return true
        ? "closed"
        : "مغلق";
    },
    discoverproducts(){
            return true
        ? "Discover products"
        : "اكتشف المنتجات";
    },
    book(){
                  return true
        ? "Book a demo"
        : "استكشف منصة";
    },
    menasatext(){
                        return true
        ? "Menasa"
        : "منصة";
    },
    menasa(){
      return this.$route.params.id === 'menasa'
    }
  },
    async asyncData({params,store}) {
      const date = dateFormat(new Date(), "yyyy/mm/dd HH:00:00");
      const ts = new Date().getTime() / 1000;
      const url = `https://api.storyblok.com/v1/cdn/stories/stores/${params.id}?&cv=${ts}&token=YPJhIqzQepWQtUNNSVIPXAtt&clear=auto`;
      const storeData = await axios.get(
          `${url}`,
          {
            cv: ts
          }
        )
        // console.log(store)
        return {store:storeData.data.story}
      },

  methods: {
    // getData() {
    //   const date = dateFormat(new Date(), "yyyy/mm/dd HH:00:00");
    //   const ts = new Date().getTime() / 1000;
    //   this.$storyapi
    //     .get(
    //       `cdn/stories/${this.$store.state.lang}stores/` +
    //         this.$route.params.id,
    //       {
    //         cv: ts
    //       }
    //     )
    //     .then(res => {
    //       this.store = res.data.story;
    //       this.fetched = true
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    href(slink) {
      if (slink.provider === "email") {
        return "mailto:" + slink.link;
      }
      if (slink.provider === "phone") {
        return "tel:" + slink.link;
      }
      return slink.link;
    }
  }
};
</script>

<style scoped>
.sub_title {
  font-size: 1.125rem;
  color: #595959;
}

h2 {
  font-size: 2rem;
}
.item-contents {
  max-width: 700px;
  margin: 0 auto;
  padding-top: 50px;
}
@media (max-width: 700px) {
  .item-contents {
    padding: 15px;
  }
}
.details-page {
  /* padding: 30px; */
}
.img-main-details {
  text-align: center;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}
.img-main-details img {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 15px;
}
.menu-item {
      margin: 35px 0;
      position: relative;
    box-shadow: 0 10px 15px rgb(221 234 246 / 50%);
    border-radius: 10px;
    padding: 10px;

}
.branch {
  width: 100%;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
}
.branch.img {
  border: 1px solid #eaeaea;
}

.branch img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 10px;
}
.branch .order-link {
     width: 60px;
    height: 47px;
    position: absolute;
    margin: auto;
    right: auto;
    top: auto;
    left: 20px;
    right: auto;
    z-index: 12;
    top: 184px;
    text-align: center;
    border-radius: 20%;
    padding: 4px;
    background: white;
    box-shadow: 0 10px 15px rgb(221 234 246 / 50%);
    transition: .1s;
}
.branch .order-link .order-icon span {
  display: none;
}
.branch .order-link .order-icon {
    border-radius: 20%;
    background: #5A5B88;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.branch .order-link .order-icon svg {
  width: 60%;
  /* height: 30px; */
}
.branch .order-link img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.branch .order-link:hover {
  width: 140px;
}
.branch .order-link:hover .order-icon { 
  background: blue;
    border-radius: 10px;
    justify-content: flex-end;
    padding: 1px 10px;
}
.branch .order-link:hover span {
  display: block;
  color: white;
  font-size: 14px;
}
.branch .order-link:hover .order-icon svg {
  width: 30px  !important; 
}
.item-title {
  font-size: 20px;
  color: black;
  margin: 4px 0;
}

.item-description {
  font-size: 14px;
  padding-top: 6px;
  color: lightslategray;
}

.Order-now {
  margin-top: 20px;
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
}
.flex {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
a.visit {
  transition: 0.2s;
  color: #f76f87 !important;
}
a.visit:hover {
  color: #b12262 !important;
}
.item-texts {
  width: 65%;
}
.order-link {
  /* width: 35%; */
}

.direction-link .link {
  color: #f76f87;
  font-size: 16px;
  border: 1px solid #f76f87;
  padding: 4px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
}
@media (max-width: 780px) {
  .direction-link .link {
    /* font-size: 2.1vmin; */
  }
}
@media (max-width: 380px) {
  .direction-link .link {
    font-size: 4.1vmin;
  }
}
.direction-link .link:hover {
  color: white;
  background: #f76f87;
  transition: 0.2s;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .items {
    display: block;
  }
}

svg {
  width: 42px;
  height: 42px;
}

.icon a {
  color: black;
}
.socials {
  max-width: 700px;
  margin: 0 auto;
}
h3 {
  padding-top: 20px;
}
.social-links {
  display: flex;
  margin: 10px auto;
  margin-bottom: 25px;
  flex-wrap: wrap;
}
.social-links > div {
  margin: 0 0 0 15px;
}
.social-link {
  margin-right: 20px;
  background: #F5FAFF;
  border-radius: 50%;
  padding:10px;
}

.facebook svg {
  color: #4267b2;
}
.instagram svg {
  color: #f76f87;
}
.social-link svg {
  width: 30px;
  height: 30px;
}
.text-center {
  text-align: center;
}

.location {
  margin: 18px 0;
  font-size: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: lightslategray;
}

.location-title {
  color: black;
  font-size: 18px;
  font-weight: 500;
}
.location svg {
  width: 30px;
  color: black;
}
.sendv-btn {
  background: #f76f87;
  padding: 7px 15px;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transform: 0.1s;
}
.discount {
  border: 1px solid #cbd5e0;
  padding: 10px;
  border-radius: 4px;
  margin: 20px auto;
}
.discount-text {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}
.sendv-btn:hover {
  background: rgb(106, 28, 28);
  transform: 0.1s;
}

.background-voucher {
  background: rgba(0, 0, 0, 0.333);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.container-voucher {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-voucher .content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  position: fixed;
  top: 30%;
}
@media (max-width: 700px) {
  .container-voucher .content {
    width: 94%;
  }
}
.container-voucher input {
  width: 90%;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  border: 1px solid #f76f87;
  margin: 4px;
}
.container-voucher button {
  background: white;
  border: 1px solid #f76f87;
  padding: 7px 15px;
  border-radius: 5px;
  color: #f76f87;
  outline: none;
  cursor: pointer;
  transform: 0.1s;
  margin: 10px 0;
  transition: 0.3s;
}
.container-voucher button:hover {
  background: #f76f87;
  border: 1px solid white;
  color: white;
  transition: 0.3s;
}
.disc-img {
  width: 25%;
}
.disc-img img {
  width: 100px;
}
.promotion .disc-img img {
  width: 80px;
  margin-left: 10px;
}

.disc-wrapper {
  display: flex;
  align-items: center;
}

.discount-texts {
  max-width: 300px;
  width: 50%;
}
.sendme {
  margin-left: 25px;
}

@media (max-width: 700px) {
  .disc-wrapper {
    display: block;
  }
  .disc-wrapper > div {
    width: 100%;
    text-align: center;
    margin: 10px auto;
  }
}

a,
a:hover,
a:visited {
  text-decoration: none;
  color: inherit;
}

.claim-text {
  margin: 10px auto;
  font-size: 14px;
}

.location-wrapper-main {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
@media (max-width: 700px) {
  .location-wrapper-main {
    display: block;
  }
}
.location-wrapper img {
  width: 50px;
  margin: 8px;
}

.store-name {
  font-size: 30px;
  display: flex;
  align-items: center;
}

.site-visit {
  width: 150px;
  height: 50px;
  position: absolute;
  margin: auto;
  right:auto;
  left: 40px;
  top: auto;
  bottom: -26px;
  text-align: center;
  border-radius: 26px;
  padding: 8px;
  color: white;
  background: #1574f6;
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);
      display: flex;
    justify-content: center;
    align-items: center;


}
@media (max-width: 700px){
  .site-visit {
    font-size: 13px;
    width: 28vw;
    height: auto;
    position: absolute;
    margin: auto;
    right: auto;
    left: 4vw;
    top: auto;
    bottom: -16px;
    text-align: center;
    border-radius: 25px;
    padding: 6px;
    color: white;
    background: #1574f6;
    box-shadow: 0 10px 15px rgb(221 234 246 / 50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.profile-img {
  width: 70px;
  height: 70px;
  position: absolute;
  margin: auto;
  left:auto;
  right: 40px;
  top: auto;
  bottom: -33px;
  text-align: center;
  border-radius: 10%;
  padding: 6px;
  background: white;
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);
  
}
@media (max-width: 700px){
.profile-img {

width: 60px;
    height: 60px;
    position: absolute;
    margin: auto;
    left: auto;
    right: 7vw;
    top: auto;
    bottom: -29px;
    text-align: center;
    border-radius: 10%;
    padding: 6px;
    background: white;
    box-shadow: 0 10px 15px rgb(221 234 246 / 50%);
}
}

.main-title {
  margin: 10px;
  margin-right: 0;
}
.profile-img img {
  width: 100%;
  height: 100%;
  border-radius: 10%;

  object-fit: contain;
  /* background: rgb(225, 225, 225); */
}

.footer-wrapper {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
}
span {
  color: #1574f6;
  margin: 0 5px;
}
.page-wrapper {
  padding-top: 20px;
}
.footer {
  /* justify-content: center; */
  display: flex;
  margin: 10px;
  padding-bottom: 20px;
  font-size: 16px;
      margin: 0px  auto;
    max-width: 700px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    position: relative;
    bottom: 0;
    padding:15px 10px;
    box-shadow:.2px 1px 15px 5px rgb(221 234 246 / 50%);
        align-items: center;

}
.logo-svg-footer img {
  
  margin-left: 10px;
}
.logo-image {
  margin-left: -2px;
}
.logo-image img {
  width: 50px;
  height: 100%;
  object-fit: contain;
}

.logo-image svg{
  width: 85px;
  height: 85px;
}
.location-description a {
  transition: 0.2s;
}
.location-description a:hover {
  color: skyblue;
}
.visit {
}
.visit img {
  width: 50px;
  margin: 8px;
}
.apps img {
  width: 100px;
}
.sep-border {
  border-top: 1px solid #eaeaea;
}
.video video {
  width: 100%;
  margin: 30px auto;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}
@media (max-width: 500px) {
  .iframe-wrapper {
    height: 50vh;
  }
}
.relative {
  position: relative;
  padding: 3px;
}
.closed {
  background: rgba(167, 167, 167,.4);
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.text-closed {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: #f32013;
  padding: 4px;
  font-size: 17px;
  color: white;
  font-weight: bold;
  transform: translateY(100px) skewY(-15deg)
}
.additional-links {
  margin: 25px 0;
}
.additional-links * {
  margin: 5px 0;
}
.additional-links .title {
  font-size: 20px;
}
.additional-links a {
  color: #1574f6;
}

.icon-wrap {
  background:rgb(56, 201, 253,.1);
  border-radius: 20px;
  padding: 20px;
  margin-left: 15px;

}
.icon-wrap svg{
  width: 27px;
  height: 27px;
}

.text-blue {
  color: #1574f6;
}
</style>

