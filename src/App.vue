<template>
  <div class="bg-container">
    <div class="navigation">
      <div class="nav">
        <ul class="navi">
          <li>
            <router-link to="/"> Home</router-link>
          </li>
          <li>
            <router-link to="/info"> Info</router-link>
          </li>
          <li>
            <router-link to="/actions"> Akce</router-link>

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

</template>

<script>

export default {
  name: "Navigation",
  

}
</script>

<style lang="scss">


#app {
  height: 100%;
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



a {
  color: white !important;
  text-decoration: none !important;

  &:hover {
    color: white;
    text-decoration: none;
    border-bottom: pink 3px solid;
    margin-bottom: -3px;
  }

}

a.router-link-active {
  border-bottom: pink 4px solid;
}

ul.navi {
  margin-right: 6em;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

ul.navi li {
  font-family: "Anton", sans-serif;
  color: white;
  margin-top: 1em;
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;
  width: 5em;
  height: 3em;
  text-align: center;
  font-weight: 300;
  font-size: 2em;
}


.navigation {
  position: fixed;
  z-index: 1000;
  display: flex;
  height: 8em;
  justify-content: end;
  width: 100%;

}

.bg-container:before {
  z-index: -100;
  background: url(src/assets/img/wp.jpg);
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

</style>