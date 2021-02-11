<template>
  <div :class="{fontar:lang === 'ar/',en:lang !== 'ar/'}">
    <nuxt />
    <div class="langChange" @click="changeLang">{{ lang ? "En" : "Ar" }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  mounted() {
    const lang = localStorage.getItem("lang");
    if (lang === "ar/") {
      this.$store.commit("setLang", lang);
    } else {
      return;
    }

  },
  methods: {
    changeLang() {
      const langp = "ar/";
      if (this.$store.state.lang === langp) {
        this.$store.commit("setLang", "");
        localStorage.removeItem("lang");
      } else {
        this.$store.commit("setLang", langp);
        localStorage.setItem("lang", langp);
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  computed: mapState(["lang"]),
  watch: {
    lang(lng) {
      const body = document.getElementsByTagName("BODY")[0];

      if (lng === "ar/") {
        body.style.direction = "rtl";
      } else {
        body.style.direction = "ltr";
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap');

.langChange {
  position: absolute;
  background: #DDEAF6;
  top: 20px;
  left: 20px;
  padding: 9px 15px 10px 14px;
  border-radius: 12px;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  width: 45px;
  border-color: transparent;
  height: 38px;
  font-weight: bold;
      display: flex;
    justify-content: center;
    align-items: center;
}
.en .branch .order-link {
  right: 20px !important;
    left: auto !important;
}
.en .icon-wrap {
  margin-left: 0  !important;
  margin-right: 15px  !important;
}

.en .logo-svg-footer img{
  margin-right: 10px !important;
  margin-left: 0 !important;
}

.en .profile-img {
      left: 40px  !important;
    right: auto !important;
}
.en .site-visit {
      left: auto  !important;
    right: 40px !important;
}

.en .main-title {
    /* margin: 10px; */
    margin-left: 0  !important;
}
.en .social-links > div {
  margin: 0 10px 0 0 !important;
}

.en .details-texts {
  margin-left: 40px;
  margin-bottom: 80px;
}
.details-texts {
  margin-right: 40px;
  margin-bottom: 80px;
}
@media (max-width: 700px){
  .details-texts {
    margin: 8vw;
  margin-right: 4vw;

  }
}


@font-face {
  font-family: "GothamRounded";
  src: local("GothamRounded"),
    url(~assets/fonts/GothamRounded-Medium.otf) format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "GothamRounded";
  src: local("GothamRounded"),
    url(~assets/fonts/GothamRounded-Book.otf) format("truetype");
  font-weight: normal;
}

@font-face {
  font-family: "FFShamelFamily";
  src: local("FFShamelFamily"),
    url(~assets/fonts/FFShamelFamily-SemiRoundBook.ttf) format("truetype");
  font-weight: normal;
}
.fontar {
font-family: 'FFShamelFamily', sans-serif !important;

}


html {
  font-family: "GothamRounded";
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.teaser,
.column {
  font-size: 2rem;
  text-align: center;
  line-height: 3;
  background: #ebeff2;
  border-radius: 10px;
  margin: 10px 5px;
}

.grid {
  display: flex;
}

.column {
  flex: 1;
}

</style>
