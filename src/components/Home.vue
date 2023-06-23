<template>

  <div class ="content">
    <img class="logo-img" src="/src/assets/img/holkoff-nobackgr.png" alt="logopng">
    <div class="alert-box">
        <div class="alert-one"> Stránky jsou momentálně ve výstavbě! 
        <br>
          Tak nám to odpusť, že to ještě nemáme, vneku je hezky :) <br>
          <br>
        Zatím se  můžeš podívat na <br>
        <a href ="https://facebook.com/holkoff" style="font-size: 2em;"> FB HOLKOFFu </a>
          <!--Další trénink za: <span id="demo">  </span> <br>
          Místo: Smrk-->
        </div>
    </div>
   

   
  </div> 




</template>

<script>
export default {
  name: "Home"
}

//ODPOČET MINUT DO ODJEZDU
// Set the date we're counting down to
var countDownDate = new Date("Aug 05, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "A JSME VZITÍ";
  }
}, 1000);


</script>

<style scoped lang="scss">
$action-background : rgba(0, 0, 0, 0.637);

.partners-cont {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.partners {
    width: 500px;
    margin: 0 auto;
}



a{
color: white !important;
}

.logo-img {
  margin-bottom: -40em;
  z-index: 100000;
  position: relative;
  max-width: 20em;
  max-height: 25em;
  transform: rotate(0deg) translate(267px, -46px) scale(1.1, 1) skew(4deg, 0deg);

}

.alert-one{
  text-align: center;
  font-weight: 900;
  margin-bottom: 2em;

}


.alert-box{
  flex-direction: column;
  background-color: $action-background;
  padding: 2em;
  color: white;
  display: flex;
  width: 20em;
  font-size: 1.5em;
  transform: rotate(0deg) translate(332px, 107px) scale(1.1, 1) skew(0deg, 0deg)
}

@media  (max-width: 600px) {
  .content {
    position: inherit;
    /* top: 10em; */
    /* font-size: 1em; */
    /* z-index: 100; */
    /* margin: 0 30%; */
    /* width: 70%; */
    /* display: flex; */
}

  .logo-img {
    /* margin-bottom: -40em; */
    /* z-index: 100000; */
    /* position: relative; */
    max-width: 20em;
    /* max-height: 25em; */
    transform: rotate(0deg) translate(0px, 380px) scale(1.1, 1) skew(4deg, 0deg);

}
.alert-box {
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.637);
    padding: 2em;
    color: white;
    display: flex;
    max-width: 100%;
    /* font-size: 1.5em; */
    transform: rotate(0deg) translate(0px, 107px) scale(1.1, 1) skew(0deg, 0deg);
}

}
</style>