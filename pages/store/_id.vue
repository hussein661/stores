<template>
  <div class="details-page">
    <div class="img-main-details">
      <img :src="store.content.image" />
    </div>
    <div class="item-contents">
      <div class="details-texts">
        <h2 class="store-name">{{ store.content.title }}</h2>
        <div class="store-description">{{ store.content.description }}</div>
      </div>

      <hr />
      <div class="pro-discount" v-if="store.content.discount">
        <div class="discount" >
          <div class="flex">
            <div>
              <div class="discount-text">Discount</div>
              <div class="discount-desc">{{ store.content.discount }}</div>
            </div>
            <div class="sendme">
              <button class="sendv-btn" @click="isVouncherOpen = true">Send me the voucher</button>
            </div>
          </div>
        </div>

        <h4 class="discount">{{ store.content.promotion }}</h4>
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
      <div class="location-wrapper" v-if="store.content.location">
        <hr />
        <div class="location">
          <location />
          <div class="text">{{ store.content.location }}</div>
        </div>
      </div>
    </div>
    <div class="socials" v-if="store.content.social_links && store.content.social_links.length">
      <hr />
      <h3 class="text-center">Contact us on :</h3>
      <div class="social-links">
        <div
          class="social-link"
          v-for="slink in store.content.social_links"
          :key="slink.provider"
        >
          <div class="icon">
            <a :href="slink.link" target="_blank"
              ><component :is="slink.provider"
            /></a>
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
          <p>
            Enter your phone number and recieve your voucher via SMS and {{store.content.discount}}
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
.item-contents {
  padding: 15px;
  max-width: 700px;
  margin: 0 auto;
}
.details-page {
  /* padding: 30px; */
}
.img-main-details {
  text-align: center;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  max-width: 1000px;
  margin: 0 auto;
}
.img-main-details img {
  width: 100%;
  max-height: 400px;
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
  font-style: italic;
  font-weight: 500;
  color: midnightblue;
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
.social-links {
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  margin: 20px auto;
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
  border: 1px solid lightslategray;
  padding: 10px;
  border-radius: 8px;
  margin: 20px auto;
}
.discount-text {
  font-weight: bold;
  font-size: 18px;
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

.container-voucher input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border-color: brown;
  outline: none;
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
</style>
