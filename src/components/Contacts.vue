<template>
  <div className="content-action">
    <div className="aboutus-action">
      <div className="box box-action">
        <div className="aboutus">
          <h1>About us</h1>
          <div className="box">
            <ol>
              <ul>
                <b> # Podporujeme holky v offu </b>
              </ul>
              <ul>

                  <b>Team Holkoff.cz </b>

              </ul>

            </ol>

            <img className="info-img" src="/src/assets/img/extreme.jpg" alt="infojpg">


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

.info-img {
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
  margin: 0 auto;
  width: 80%;
  display: flex;
}


</style>