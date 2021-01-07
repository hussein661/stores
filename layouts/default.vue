<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
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

