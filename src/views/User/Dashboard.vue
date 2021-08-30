<template>
  <div>
    <!-- Dashboard Info cards -->
    <div class="row">
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-success">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'tasks']"
                    size="4x"
                    style="color: #2c632d;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">All Activities</h5>
                  <h3 class="text-bold-600">122</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #428e40;" to="surat-masuk">
                <span aria-disabled="true">Selengkapnya</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-primary">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'briefcase']"
                    size="4x"
                    style="color: #03448a;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Work</h5>
                  <h3 class="text-bold-600">34</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #3a6fe1;" to="surat-keluar">
                <span aria-disabled="true">Selengkapnya</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-danger">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'book-open']"
                    size="4x"
                    style="color: #8f212b;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Learn</h5>
                  <h3 class="text-bold-600">322</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #dc3545;" to="disposisi">
                <span aria-disabled="true">Selengkapnya</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-warning">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'gamepad']"
                    size="4x"
                    style="color: #8f4507;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Play</h5>
                  <h3 class="text-bold-600">179</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-right">
              <router-link style="color: #e97027;" to="users">
                <span aria-disabled="true">Selengkapnya</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted () {
    this.$topprogressbar.start();
 
    // Use setTimeout for demo
    setTimeout(() => {
      this.$topprogressbar.finish(), 1000
    })
  },
}
</script>
