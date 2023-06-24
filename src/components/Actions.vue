<template>
  <div class="content-action">
    <div class="action">
      <div class="actionbox">
        <div class="action-box">
          <div class="action-box-container">
            <div class="box-act number-circle">
              <div class="circle">
                1
              </div>
            </div>
            <div class="box-act image-action">
              <img src="/src/assets/img/dirtbike.jpg" alt="" class="action-photo">
            </div>
            <div class="box-act text-action row">
              <H2>SMRK 5. - 6. srpen 2023 </H2>
              <div class="progress-action row">
                <div class="title-progress col-2 col-sm-4">
                  Dny
                </div>
                <div class="progress col-10 row col-sm-8">
                  <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0"
                       aria-valuemax="100">3 dny
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2 col-sm-4">
                  Enduro
                </div>
                <div class="progress col-10 col-sm-8">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                       aria-valuemax="100">25%
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2 col-sm-4">
                  Motokross
                </div>
                <div class="progress col-10 col-sm-8">
                  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0"
                       aria-valuemax="100">50%
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2">
                  Obtížnost
                </div>
                <div class="progress col-10 row">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                       aria-valuemax="100">25%
                  </div>
                </div>
              </div>
            </div>
            <div class="button-action row toggle-button">
              <div class="col-12">
                <button @click="toggleContent1" type="button" class="btn btn-primary btn-cus-action">Více info</button>
              </div>
            </div>
          </div>
          <transition>
            <div v-if="showContent1" class="row col-12 action-text">

            <p>Sweet roll danish icing pie donut cupcake muffin fruitcake. Brownie cookie bonbon gummies croissant pie.
             Biscuit tootsie roll jujubes bonbon cake candy canes.
            </p>
              <p>
              Icing cake apple pie apple pie marzipan bonbon macaroon jujubes brownie.Brownie cookie bonbon gummies croissant pie.
                Biscuit tootsie roll jujubes bonbon cake candy canes.Brownie cookie bonbon gummies croissant pie.
                Biscuit tootsie roll jujubes bonbon cake candy canes.Brownie cookie bonbon gummies croissant pie.
                Biscuit tootsie roll jujubes bonbon cake candy canes.
              </p>
            </div>
      </transition>

         </div>
         <div class="action-box">
          <div class="action-box-container">
            <div class="box-act number-circle">
              <div class="circle">
                1
              </div>
            </div>
            <div class="box-act image-action">
              <img src="/src/assets/img/dirtbike.jpg" alt="" class="action-photo">
            </div>
            <div class="box-act text-action row">
              <H2>SMRK 5-6.8 2023 </H2>
              <div class="progress-action row">
                <div class="title-progress col-2 col-sm-3">
                  Dny
                </div>
                <div class="progress col-10 col-sm-9">
                  <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0"
                       aria-valuemax="100">3 dny
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2">
                  Enduro
                </div>
                <div class="progress col-10 ">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                       aria-valuemax="100">25%
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2">
                  Trať
                </div>
                <div class="progress col-10">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                       aria-valuemax="100">25%
                  </div>
                </div>
              </div>
              <div class="progress-action row">
                <div class="title-progress col-2">
                  Obtížnost
                </div>
                <div class="progress col-10">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                       aria-valuemax="100">25%
                  </div>
                </div>
              </div>
            </div>
            <div class="button-action row toggle-button">
              <div class="col-12">
                <button @click="toggleContent2" type="button" class="btn btn-primary btn-cus-action">Více info</button>
              </div>
            </div>
          </div>
          <transition>
            <div v-if="showContent2" class="row col-12 action-text">

            Sweet roll danish icing pie donut cupcake muffin fruitcake. Brownie cookie bonbon gummies croissant pie.
             Biscuit tootsie roll jujubes bonbon cake candy canes. Icing cake apple pie apple pie marzipan bonbon macaroon jujubes brownie.
            </div>
          </transition>

         </div>
        </div>
      </div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showContent1 = ref(false);
    const showContent2 = ref(false);

    const toggleContent1 = () => {
      showContent1.value = !showContent1.value;
    };

    const toggleContent2 = () => {
      showContent2.value = !showContent2.value;
    };
  
  

    return {
      showContent1,
      showContent2,
      toggleContent1,
      toggleContent2,

    };
  }
}
</script>

<style lang="scss">
$action-background : rgba(0, 0, 0, 0.637);

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.action-text {
 
  padding: 8em;
  
}

.row {
  margin-left: 0!important;
}


.action-text{
  background-color: $action-background;
}
.progress, .col-10 {

  padding: 0 !important;
}

.btn-cus-action {
  margin: 1em 2em 1em 1em!important;
  font-size: 2em !important;
}

.progress-action {
  /* display: flex; */
  justify-content: space-around;
  width: 40em;
  height: 2em;
}

.button-action {
  display: flex;
  justify-content: center;

}

.action-photo {
  max-width: 20em;
}

.flex-reverse {
  flex-direction: row-reverse !important;
  background: white;
  color: black;
}

.action{
  margin-bottom: 10em;

  height: 100%;
  display: flex;
  flex-wrap: inherit;
  flex-direction: column;
  flex: 1;
  align-content: center;
  justify-content: center;
  color: white;
}

.action h1 {
  padding-top: 2em;
  padding-left: 2em;
}

.actionbox {
  display: flex;
  flex-direction: column;
}

.box-act {
  padding: 2em;
}

.circle {
  border-radius: 50%;
  width: 86px;
  height: 86px;
  padding: 26px;
  margin-left: 1em;
  /* background: #fff; */
  border: 3px solid #fff;
  color: #fff;
  text-align: center;
  font: 32px Arial, sans-serif;
}

.action-box-container {
  padding-top: 4em;
  background-color: $action-background;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}


.content-action {
  position: relative;
  top: 10em;
  font-size: 1em;
  z-index: 100;
  /*margin: 0 auto;*/
  width: 100%;
  display: flex;
}

@media only screen and (max-width: 600px) {
  .col-2 {
    flex: 0 0 auto;
    width: 6em!important;
  }

  .title-progress{
    text-align: center;

  }


.action-box-container {
  padding-top: 4em;
  background-color: rgba(0, 0, 0, 0.637);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;

}
  .circle{
    display: none;
  }

  .progress-action{
    margin-bottom: 1em;
  }
}
</style>