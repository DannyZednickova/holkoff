<template>
  <div class="content-action">
    <div class="info">
      <div class="info-box">
        <div class="aboutus">
          <h1>About us</h1>
          <div class="box-inner">
            <div class="text-area">
              <ol>
                <ul>
                  <b> # Podporujeme holky v offu </b>
                </ul>
                <ul>
                  <p>HolkOFF je komunita holek, které offroad jezdí, nebo ho jezdit chtějí, a hledají kámošky s tímhle ne až tak tradičním koníčkem. </p>

                  <p>Společně pořádáme nízkonákladové akce, které mají za cíl posilovat, motivovat a přivádět k tomuto sportu co nejvíce holek. </p>
                  <p> Díky projektu HolkOFF je nás také víc vidět a slyšet, a tak se nám hlásí nové dívky, ženy, mámy. Je nám ale jasné, že ne se vším si zvládneme poradit jen v holčičí partě, a tak jsme rády, že nám pomáhají naši kluci a kamarádi. </p>
                  Přítomnost mužů je ale dána podmínkou 1+1, takže každá holka si smí vzít jen jednoho svého ochránce s sebou na akci, ne víc. Sám chlap se na naší akci, pokud se nejedná o trenéra, nebo sponzora, určitě nedostane. Naším cílem je podpořit růst počtu holčičích jezdkyň v České republice a pomáhat jim se zlepšovat."

                  <p>Vítejte v naší skvělé skupině žen, které spojuje vášeň pro motokros, enduro a cestování na motorkách. </p>
                  Jsme silnou komunitou holek, které společně čelý výzvá.
                  <br> Organizujeme akce, podporujeme se a sdílíme nezapomenutelné zážitky.
                  <p>
                    Jsme jedinečná a srdcem vložená komunita, která to dělá s vášní a odhodláním. </p>
                  <p>
                    Připoj se k nám a objev sílu společenství, které spojuje ženy s láskou k adrenalinovým dobrodružstvím na dvou kolech v terénu . </p>

                  <p>
                    <b>Team Holkoff.cz </b>
                  </p>
                </ul>

              </ol>

              <img class="info-img" src="/src/assets/img/extreme.jpg" alt="infojpg">

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script>
import {ref} from 'vue';

export default {}
</script>

<style lang="scss">
$action-background: rgba(0, 0, 0, 0.637);

.info {
  height: 100%;
  display: flex;
  flex-wrap: inherit;
  flex-direction: column;
  flex: 1;
  align-content: center;
  justify-content: center;
  color: white;
}

.info h1 {
  padding-top: 2em;
  padding-left: 2em;
}

.info-box{

  display: flex;
  flex-direction: column;

}
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

}

.text-area {
  color: white;
  font-size: 1.5em;
  max-width: 50em;
  margin: 0 auto;
}

.info-img {
  max-width: 20em;
  z-index: 100000;
  position: relative;
  transform: rotate(8deg) translate(630px, -76px) scale(1.1, 1) skew(0deg, 0deg);
}

.box-inner {
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