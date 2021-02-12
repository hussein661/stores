<template>
  <div class="container">
    <div class="store-wrapper">
      <div class="img home-image">
        <img :src="store.content.image" />
      </div>
      <div class="logo-centered">
        <img :src="store.content.logo" />
      </div>
      <div class="typo">
        <div>
          <div class="store-name">{{ store.content.title }}</div>
          <div class="store-description">{{ store.content.description || '...' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    store: {}
  }
};
</script>

<style>
.typo {
  text-align: center;
  padding: 15px;
  height: 50%;
  padding-top: 14%;
  background: white;
}
.store-name {
  font-size: 24px;
  color: black;
}
@media (max-width: 700px) {
  .typo {
    height: 50vw;
  }
  .store-name {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  .store-description {
    font-size: 14px;
  }
}

.store-description {
  margin: 6px 0;
  font-size: 14px;
  color: #acacac;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.store-wrapper {
  position: relative;
  margin: 20px auto;
  max-width: 700px;
  width: 85%;
  max-height: 354px;
  /* min-height: 120px; */
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);

  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  line-height: 1.4;
}

.store-wrapper .logo-centered {
  width: 70px;
  height: 70px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 0;
  text-align: center;
  border-radius: 10%;
  padding: 6px;
  background: white;
  box-shadow: 0 10px 15px rgba(221, 234, 246, 0.5);
}
.store-wrapper .logo-centered img {
  background: #eaeaea;
  border-radius: 10%;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media (max-width: 700px) {
  .store-wrapper .logo-centered {
  top: 4px;

  }
  .store-wrapper {
    margin: 20px auto;
    display: block;
    width: 84%;
    height: auto;
    max-height: none;
    max-height: initial;
    margin: 38px auto;
  }
  .store-wrapper .typo {
    width: 100%;
  }
  .store-wrapper .img {
    overflow: hidden;
    width: 100%;
    border-radius: 0;
    margin: 0 auto;
    height: 50vw;
    object-fit: cover;
  }
}
.img {
  overflow: hidden;
  height: 50%;
  border-radius: 15px;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
}
.img img:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>
