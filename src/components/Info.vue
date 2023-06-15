<template>
  <div class="content-action">
    <div class="aboutus-action">
      <div class="box box-action">
        <div class="aboutus">
              <h1>About us</h1>
              <div class="box">
                <ol>
                  <ul>
                    <b> # Podporujeme holky v offu </b>
                  </ul>
                  <ul>
                   <p>Vítejte v naší skvělé skupině žen, které spojuje vášeň pro motokros, enduro a cestování na motorkách.
                    </p>
                    Jsme silnou komunitou holek, které společně čelý výzvá.
                    <br> Organizujeme akce,
                    podporujeme se a sdílíme nezapomenutelné zážitky.
                    <p>
                    Jsme jedinečná a srdcem vložená komunita, která to dělá s
                    vášní a odhodláním.
                    </p>
                    <p>
                      Připoj se k nám a objev sílu společenství, které spojuje ženy s láskou k
                      adrenalinovým dobrodružstvím na dvou kolech v terénu .
                    </p>

                    <p>
                      <b>Team Holkoff.cz </b>
                    </p>
                  </ul>

                </ol>

                  <img  class="info-img" src="/src/assets/img/extreme.jpg" alt="infojpg">



              </div>


            </div>

      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue';

export default {

}
</script>

<style lang="scss">
$action-background : rgba(0, 0, 0, 0.637);
.aboutus {
  background-color: $action-background;
  padding: 2em;
  height: 20em;
  display: flex;
  flex-wrap: inherit;
  flex-direction: column;
  flex: 1;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 2em;
}

.info-img{
  max-width: 20em;
  z-index: 100000;
  position: relative;
  transform: rotate(8deg) translate(630px, -76px) scale(1.1, 1) skew(0deg, 0deg);
}

.box {
  display: flex;
  flex-direction: column;
}

.box-act {
  padding: 2em;
}

.aboutus-action h1 {
  padding-top: 2EM;
  padding-bottom: 2em;
  padding-left: 2em;
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


</style>