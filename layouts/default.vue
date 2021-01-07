<template>
  <div>
    <nuxt/>
     <div class="langChange" @click="changeLang">{{lang ? 'EN' : 'AR'}}</div>
  </div>
</template>
<script>
export default {
  beforeMount(){
    const lang = localStorage.getItem('lang')
    if(lang === 'ar/'){
      this.$store.commit('setLang',lang)
    }else {
      return
    }
  },
  methods:{
    changeLang(){
      const langp = 'ar/'
      if(this.$store.state.lang === langp){
        this.$store.commit('setLang','')
        localStorage.removeItem('lang')
      }else {
        this.$store.commit('setLang',langp)
        localStorage.setItem('lang',langp)
      }
      window.location.reload()
    }
  },
  computed:{
    lang(){
      return this.$store.state.lang
    }
  }
}
</script>
<style>
.langChange {
  position: fixed;
  background: #1574F6;
  top: 20px;
  right: 20px;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
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
html {
font-family: 'GothamRounded';
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
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
span.hala {
  color: #1574F6;
}
</style>

