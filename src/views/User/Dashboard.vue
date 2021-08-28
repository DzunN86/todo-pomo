<template>
  <div>
    <NavTop />
    <div class="container-fluid">
      <div class="row navbar-expand-lg">
        <NavLeft />

        <div role="main" class="col-lg-10 p-0" :class="isOverflowHidden ? 'overflow-hidden' : ''">
          <transition name="view" mode="out-in" v-bind:css="true" @before-enter="unsetOverflow" @before-leave="hideOverflow">
            <main :key="$route.path">
              <Breadcrumb />
              <div class="px-4">
                <!-- TITLE MAIN CONTENT -->
                <div class="row m-0 mb-4 pb-2 border-bottom">
                  <h2 class="mr-4">Dashboard</h2>
                </div>
                <!-- Dashboard Info cards -->
                <div class="row">
                  <div class="col-sm-6 col-lg-3 mb-4 mb-3">
                    <div class="card card-dash border-left-success">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <fa-icon :icon="['fas', 'envelope']" size="4x" style="color: #2c632d;" />
                            </div>
                            <div class="media-body text-right">
                              <h5 class="text-light text-bold-500">Surat Masuk</h5>
                              <h3 class="text-bold-600">122</h3>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted text-right">
                          <router-link style="color: #428e40;" to="surat-masuk">
                            <span aria-disabled="true">Selengkapnya</span>
                            <fa-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"></fa-icon>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 mb-4 mb-3">
                    <div class="card card-dash border-left-primary">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <fa-icon :icon="['fas', 'envelope-open']" size="4x" style="color: #03448a;" />
                            </div>
                            <div class="media-body text-right">
                              <h5 class="text-light text-bold-500">Surat Keluar</h5>
                              <h3 class="text-bold-600">34</h3>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted text-right">
                          <router-link style="color: #3a6fe1;" to="surat-keluar">
                            <span aria-disabled="true">Selengkapnya</span>
                            <fa-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"></fa-icon>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 mb-4 mb-3">
                    <div class="card card-dash border-left-danger">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <fa-icon :icon="['fas', 'file-alt']" size="4x" style="color: #8f212b;" />
                            </div>
                            <div class="media-body text-right">
                              <h5 class="text-light text-bold-500">Disposisi</h5>
                              <h3 class="text-bold-600">322</h3>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted text-right">
                          <router-link style="color: #dc3545;" to="disposisi">
                            <span aria-disabled="true">Selengkapnya</span>
                            <fa-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"></fa-icon>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 mb-4 mb-3">
                    <div class="card card-dash border-left-warning">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <fa-icon :icon="['fas', 'users']" size="4x" style="color: #8f4507;" />
                            </div>
                            <div class="media-body text-right">
                              <h5 class="text-light text-bold-500">User Operators</h5>
                              <h3 class="text-bold-600">179</h3>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-right">
                          <router-link style="color: #e97027;" to="users">
                            <span aria-disabled="true">Selengkapnya</span>
                            <fa-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"></fa-icon>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  // Animation
  body {
    // font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
  }

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
