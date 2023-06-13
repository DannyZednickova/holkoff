<template>
  <div class="content-action">
    Ahoj
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const showContent1 = ref(false);

    const toggleContent1 = () => {
      showContent1.value = !showContent1.value;
    };

    return {
      showContent1,
      toggleContent1,
    };
  },
};
</script>
<style lang="scss">
$action-background : rgba(0, 0, 0, 0.637);



.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave,
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.button-action {
  display: flex;
  justify-content: center;
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