<template>
  <div>
    <NavTop />
    <div class="container-fluid">
      <div class="row navbar-expand-lg">
        <NavLeft />

        <div role="main" class="col-lg-10 p-0" :class="isOverflowHidden ? 'overflow-hidden' : ''">
          <transition name="view" mode="out-in" v-bind:css="true" @before-enter="unsetOverflow" @before-leave="hideOverflow">
            <main :key="$route.path">
              <!-- <Breadcrumb /> -->
              <div class="px-5 mt-20">
                <router-view></router-view>
              </div>
              <!--end footer-->
            </main>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      NavTop: () => import("@/components/NavTop.vue"),
      NavLeft: () => import("@/components/NavLeft.vue"),
      Breadcrumb: () => import("@/components/Breadcrumb.vue"),
    },
    data() {
      return {
        isOverflowHidden: false,
      };
    },

    methods: {
      unsetOverflow() {
        this.isOverflowHidden = false;
      },

      hideOverflow() {
        this.isOverflowHidden = true;
      },
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style lang="scss">
@import "../assets/css/main.scss";
  
  // Animation

  .view-enter-active,
  .view-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease;
  }

  .view-enter-active {
    transition-delay: 0.3s;
  }

  .view-enter {
    opacity: 0;
    transform: translateX(-100px);
  }

  .view-enter-to {
    opacity: 1;
    transform: translateX(0px);
  }

  .view-leave {
    opacity: 1;
    transform: translateX(0px);
  }

  .view-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
</style>
