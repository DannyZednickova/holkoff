<template>
  <div class="bg-container">
    <div class="navigation">
      <div class="nav">
        <ul class="navi">
        
             <img class="top-logo" src="/src/assets/img/holkoff-nobackgr.png" alt="logopng">
        
         
          <li>
            <router-link to="/"> Home</router-link>
          </li>
          <li>
            <router-link to="/info"> O nás</router-link>
          </li>
          <li>
            <router-link to="/actions"> Akce</router-link>
          </li>
          <li>
            <router-link to="/questions"> Q&A</router-link>
          </li>
          <li>
            <router-link to="/contacts"> Kontakt</router-link>
          </li>

        </ul>
      </div>

    </div>

    <router-view v-slot="{ Component } ">
      <transition name="fade" mode="out-in" appear >
        <component  :is="Component"></component>
      </transition>
    </router-view>

  </div>
  <div class="partners-box">
    <div class="partners">
      <div class="motosvet-img-cont">
        <img src="/src/assets/img/logos/motosvet_logo.png" alt="" class="img_motosvet">
      </div>
      <div class="aci_logo-img-cont">
      <img src="/src/assets/img/logos/aci_logo.png" alt="">
        </div>
      <div class="lr_logo-img-cont">
      <img src="/src/assets/img/logos/lr_logo.png" alt="" class="img_lr">
        </div>
    </div>
  </div>



</template>

<script>

export default {
  name: "Navigation",


}
</script>

<style lang="scss" >

.partners-box{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.partners
{
  display: flex;
  justify-content: space-around;
}
.img_motosvet{
  width: 10em;
}

.img_lr{
  width: 10em;
}


.fade-enter-from{
  opacity:0
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to{
opacity: 1;
}


.top-logo{
    /* margin-bottom: -40em; */
    z-index: 100000;
    position: relative;
    width: 10em;
    transform: rotate(0deg) translate(-10px, -7px) scale(1.1, 1) skew(4deg, 0deg);
}

.motosvetlogo{
  width: 20em;
}

a {
  font-family: 'Karla', sans-serif !important;
  color:black !important;
  text-decoration: none !important;

  &:hover {
    font-family: 'Karla', sans-serif !important;
    color:black;
    text-decoration: none;
    margin-bottom: -3px;
  }

}

a.router-link-active {
  color:coral;
}

ul.navi {
  margin-top: 0.5em;
  margin-right: 3em;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

ul.navi li {
  margin-top: 0.3em;
  color: white;
  /*margin-top: em;*/
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;
  width: 5em;
  height: 3em;
  text-align: center;
  font-size: 1.5em;
}


.navigation {
  background-color: white;
  position: fixed;
  z-index: 1000;
  display: flex;
  height: 6em;
  justify-content: center;
  width: 100%;

}

.bg-container:before {
  z-index: -100;
  background: url(./src/assets/img/wp.jpg);
  content: "";
  background-size: cover;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
  min-height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  box-shadow: inset 20px 2px 20px 10px #5e3e5ab0;

}

.logo-img {
  margin-bottom: -40em;
  z-index: 100000;
  position: relative;
  width: 29em;

  transform: rotate(0deg) translate(378px, -7px) scale(1.1, 1) skew(4deg, 0deg);
}



@media  (max-width: 600px) {

.top-logo{
  
    z-index: 100000;
    position: relative;
    max-width: 5em;
    transform: rotate(0deg) translate(-18px, -7px) scale(1.1, 1) skew(4deg, 0deg);
}
ul.navi li {
    margin-top: 0.3em;
    color: white;
    margin-top: em;
    justify-content: center;
    display: flex;
    align-items: center;
    align-content: center;
    width: 4em;
    height: 3em;
    text-align: center;
    font-size: 1em;
   
}


}

</style>