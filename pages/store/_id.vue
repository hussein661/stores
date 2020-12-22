<template>
  <div class="details-page">
    <div class="img-main-details">
      <img :src="store.content.image" />
    </div>
    <div class="item-contents">
      <div class="details-texts">
        <h2 class="store-name">{{ store.content.title }}</h2>
        <div class="sub_title">{{ store.content.sub_title }}</div>
        <div class="store-description">{{ store.content.description }}</div>
      </div>

      <div class="pro-discount" v-if="store.content.discount && store.content.discount.length">
        <div class="discount" >
          <div class="disc-wrapper">
              <div class="disc-img"><img src="https://www.onlygfx.com/wp-content/uploads/2018/04/discount-stamp-2-1024x788.png" /></div>
            <div class="discount-texts">
              <div class="discount-text">{{ store.content.discount[0].discount_title }}</div>
              <div class="discount-desc">{{ store.content.discount[0].discount_description }}</div>
            </div>
            <div class="sendme">
              <button class="sendv-btn" @click="isVouncherOpen = true">Send me the voucher</button>
            </div>
          </div>
        </div>
        <div v-if="store.content.promotion && store.content.promotion.length">
         <a :href="store.content.promotion[0].link_to" target="_blank">
               <div class="discount promotion" >
          <div class="disc-wrapper">
              <div class="disc-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOHpYWxoVA19lOVgfRCKhkgNu1Cml8ARydg&usqp=CAU" /></div>
            <div class="discount-texts">
              <div class="discount-text">{{ store.content.promotion[0].promotion_title }}</div>
              <div class="discount-desc">{{ store.content.promotion[0].promotion_description }}</div>
            </div>
                        <div class="sendme">
            </div>
          </div>
        </div>
        </a>
        </div>
      </div>
      <div class="Order-now">
        ORDER NOW!
      </div>

      <div class="items">
        <div
          class="menu-item"
          v-for="branch in store.content.branches"
          :key="branch._uid"
        >
          <div class="branch img"><img :src="branch.image" /></div>
          <div class="flex">
            <div class="item-texts">
              <div class="item-title">{{ branch.title }}</div>
              <div class="item-description">{{ branch.description }}</div>
            </div>
            <div class="order-link">
              <a class="link" :href="branch.link" target="_blank">Order now</a>
            </div>
          </div>
        </div>
      </div>
        <hr v-if="store.content.location && store.content.location.length" />
      <div class="location-wrapper-main" v-if="store.content.location && store.content.location.length">
      <div class="location-wrapper" v-for="(loc,i) in  store.content.location" :key="i">
        <div class="location">
          <div>
          <img src="https://img2.storyblok.com/350x350/f/92215/1400x788/ce176a3ebb/googlemaps.jfif" />
          </div>
          <div>
          <div class="location-title">{{ loc.location_title }}</div>
          <div class="location-description">{{ loc.location_description }}</div>
          </div>
        </div>
      </div>
      </div>
    <div class="socials" v-if="store.content.social_links && store.content.social_links.length">
      <hr />
      <h3 class="">Find us also on</h3>
      <div class="social-links">
        <div
          class="social-link"
          v-for="slink in store.content.social_links"
          :key="slink.provider"
          :class="slink.provider"
        >
          <div class="icon">
            <a :href="slink.link" target="_blank"
              ><component :is="slink.provider"
            /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-if="isVouncherOpen">
      <div class="background-voucher" @click="isVouncherOpen = false"/>
      <div class="container-voucher">
        <div class="content">
          <h3 class="text">
            Claim your voucher
          </h3>
          <p class="claim-text">
            Enter your phone number and recieve your voucher via SMS and {{store.content.discount[0].discount_title}}
          </p>
      <div class="input">
        <input placeholder="enter your number" />
      </div>
      <div class="button">
        <button class="send_me">Send me the voucher</button>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "../../components/icons/Facebook";
import instagram from "../../components/icons/Instagram";
import linkedin from "../../components/icons/Linkedin";
import location from "../../components/icons/Location";

export default {
  components: {
    facebook,
    instagram,
    linkedin,
    location
  },
  data(){
    return {
    isVouncherOpen:false

    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/stores/" + context.params.id, {         clear: 'auto',
    type: 'memory',
    cache:false })
      .then(res => {
        return { store: res.data.story };
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.sub_title{font-size:1.125rem;
color:#595959;
}

h2 {
    font-size: 2rem;}
.item-contents {
  max-width: 700px;
  margin: 0 auto;
}
@media (max-width: 700px){
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
}
.img-main-details img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 15px;
}
.menu-item {
  margin: 20px 0;
}
.branch {
  width: 100%;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;

}
.branch img {
  height: 100%;
  width: 100%;
  object-fit: cover;
      margin: 0;
}
.item-title {
  font-size: 20px;
  color: black;
}

.item-description {
  font-size: 16px;
  color: lightslategray;
}

.Order-now {
  margin-top: 20px;
  font-size: 25px;
  font-weight: 500;
  text-transform: capitalize;
}
.flex {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.item-texts {
  width: 70%;
}


.order-link .link {
  color: rgb(233, 83, 83);
  border: 1px solid rgb(233, 83, 83);
  padding: 5px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
}
@media (max-width:380px){
  .order-link .link {
font-size: 4.5vmin;  }
}
.order-link .link:hover {
  color: white;
  background: rgb(233, 83, 83);
  transition: 0.2s;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .items {
    display: block;
  }
}

svg {
  width: 50px;
  height: 50px;
}

.icon a {
  color: black;
}
.socials {
  max-width: 700px;
  margin: 0 auto;
}
.socials h3 {
  padding-top: 20px;
}
.social-links {
  display: flex;
  margin: 20px auto;
}
.social-link {
  margin-right: 20px;
}
.facebook svg{
    color: #4267B2;
}
.instagram svg {
  color: #DD2A7B;
}
.text-center {
  text-align: center;
}

.location {
  margin: 18px 0;
  font-size: 18px;
  display: flex;
  justify-content: start;
  color: lightslategray;
}
.location-title {
  margin-bottom:7px ;
  color: black;
  font-size: 22px;
  font-weight: 500;

}
.location svg {
  width: 30px;
  color: black;
}
.sendv-btn {
  background: brown;
  padding: 7px 15px;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transform: .1s;

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
  transform: .1s;
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
  border: 1px solid brown;
  margin: 4px;
}
.container-voucher button {
  background: white;
  border: 1px solid brown;
  padding: 7px 15px;
  border-radius: 5px;
  color: brown;
  outline: none;
  cursor: pointer;
  transform: .1s;
  margin: 10px 0;
  transition: .3s;
}
.container-voucher button:hover {
  background: brown;
  border: 1px solid white;
  color: white;
  transition: .3s;

}
.disc-img {
  width: 25%;
}
.disc-img img {
  width: 100px;
}
.promotion .disc-img  img{
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

@media (max-width:700px){
.disc-wrapper {
  display: block;
}
.disc-wrapper > div {
  width: 100%;
  text-align: center;
  margin: 10px auto;
}
}

a,a:hover,a:visited {
  text-decoration: none;
  color: inherit;
}

.claim-text {
  margin: 10px auto;
  font-size: 14px;
}

.location-wrapper-main  {
  display: grid;
  grid-template-columns: repeat(2,50%);
}
@media (max-width: 700px){
.location-wrapper-main  {
  display: block;
}
}
.location-wrapper img {
 width: 80px;
}
</style>
