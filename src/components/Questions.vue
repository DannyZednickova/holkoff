<template>
  <div class="content-info">
    <div class="questions">
      <div class="questions-box">
        <div class="quest-text-box-inner">
          <h1>Q&A</h1>
          <div class="box-inner">
            <div class="text-area-info">
              <h3> #Co pro tebe můžeme udělat?</h3>
              <p>
                Na měsíční bázi pořádáme po republice různá amatérská tréninková soustředění, kde si zajezdíme,
                vzájemně poradíme, pokecáme, a něco si k tomu třeba i ugrilujeme. Dále spolupracujeme s trenéry,
                kteří mají letité zkušenosti nebo působí pod záštitou renomované trenérské školy, ke kterým se na naše
                doporučení můžeš objednat na kurz. Doporučíme ti i vhodné vybavení a stroj, a díky partnerství s KTM Vlašim můžeš využít
                i placenou službu zapůjčení motorky.
              </p>
              <h3> #Pro koho tu jsme?</h3>
              <p>
                Novicky, začátečnice, pokročilé, trenérky, cestovatelky, motokrosařky, endurářky, závodnice…
                prostě jsme tu pro každou holku, která kdy sjela z asfaltu a chce se k nám přidat a pomoct komunitě se i nadále kvapem rozrůstat.
              </p>
              <h3> #A co motorka?</h3>
              <p>
                Ať už máš dvouválcového cesťáka, nebo dvoutaktní dvácu, zvládneme se ti přizpůsobit.
                Jezdíme na tratích, jezdíme v lese a jezdíme i do zahraničí. Jen mysli na to, že když vyrazíš na naši akci,
                tvoje motorka by měla být do terénu co nejvhodnější a dobře obutá a připravená. Co to znamená s tebou pak rádi
                probereme osobně. Jestli motorku do terénu ještě nemáš, dej nám vědět a my ti můžeme pomoci si nějakou půjčit,
                případně dáme nějaký tip na půjčovnu.
              </p>
              <h3> #Nic neumím. Vy mě to naučíte?</h3>
              <p>
                Nejspíš ne. Ani jedna z nás zatím nemá dostatek zkušeností, nebo trenérské zkoušky. Ale nezoufej.
                Spolupracujeme s renomovanými enduro školami a rádi ti doporučíme koho navštívit, abys získala základy a mohla
                se pak s námi bavit na trati, v lese, nebo třeba v Maroku.
              </p>
            </div>
          </div>
        </div>
        <div class="info-text-box">
          <div class="box-inner">
            <div class="text-area-info">
              <h3> #Chci být součástí HolkOFFu!</h3>
              <p>
                Tak to je skvělé. V první řadě si najdi facebookovou stránku HolkOFF odkaz zde, která je uzavřená a
                nejsou v ní žádní samci. Zodpověz pár otázek, a je to! Převážná většina konverzací pak probíhá v
                chatu “Zeptej se na cokoliv”. Skupinu HolkOFF a chat vede a moderuje Eliška KEliška jako zakladatelka a s
                moderací pomáhá taky Petra Veselá nebo Daniela Zedníčková.
                To jsou holky na které se samozřejmě můžeš obrátit i osobně, pokud ti nevyhovuje hromadné
                klábosení, nebo máš jakékoliv jiné důvody.
              </p>
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
$action-background: rgba(0, 0, 0, 0.737);


ol, ul {
  padding-left: 0em !important;
}


.questions {
  height: 100%;
  display: flex;
  flex-wrap: inherit;
  flex-direction: column;
  flex: 1;
  align-content: center;
  justify-content: center;
  color: white;
}

.questions h1 {
  padding-top: 2em;
  padding-left: 2em;
}

.questions-box{

  display: flex;
  flex-direction: column;

}
.quest-text-box-inner {
  margin-bottom: 6em;
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

.quest-text-box {
  margin-bottom: 10em;
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

.text-area-info {
  color: white;
  font-size: 1.5em;
  max-width: 50em;
  margin: 0 auto;
}

.img1 {
  max-width: 20em;
  z-index: 100000;
  position: relative;
  /*transform: rotate(8deg) translate(630px, -76px) scale(1.1, 1) skew(0deg, 0deg);*/
}

.img2 {
  max-width: 20em;
  z-index: 100000;
  position: relative;
  transform: rotate(8deg) translate(630px, -76px) scale(1.1, 1) skew(0deg, 0deg);
}

.box-inner {
  display: flex;
  flex-direction: column;
}



.content-info {
  position: relative;
  top: 10em;
  font-size: 1em;
  z-index: 100;
  /*margin: 0 auto;*/
  width: 100%;
  display: flex;
}


@media only screen and (max-width: 600px) {
  .text-area-info {
    color: white;
    font-size: 1em;
    max-width: 50em;
    margin: 0 auto;
  }


  .img2{
    display: none;
  }
  .img1{
    display: none;
  }
}
</style>