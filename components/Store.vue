<template>
<div class="container">
  <div class="store-wrapper">
    <div class="img home-image">
      <img :src="store.content.image" />
    </div>
    <div class="typo">
      <div>
      <div class="store-name">{{ store.content.title }}</div>
      <div class="store-description">{{ store.content.description }}</div>
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
  padding: 15px;
}
.store-name {
  font-size: 24px;
  color: black;
}
@media (max-width:700px){
  .store-name {
    font-size:18px;
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
  margin: 20px auto;
  max-width: 700px;
  width: 90%;
  max-height: 140px;
  display: flex;
      box-shadow: 0 10px 15px rgba(221,234,246,.5);

  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;


}
@media (max-width: 700px){
.store-wrapper {
  height: 120px;
  margin: 20px auto;

}
}
.img {
  overflow: hidden;
  width: 40%;
}

.typo {
    width: 60%;

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
