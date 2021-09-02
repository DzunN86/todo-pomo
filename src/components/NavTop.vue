<template>
  <div>
    <nav
      class="
      bg-gradient-to-r from-blue-500 to-blue-800
        navbar navbar-dark
        fixed-top
        flex-md-nowrap
        p-0
      "
    >
      <div class="navbar-brand col-lg-2 mr-0 text-white">
        <span class="toggler">
          <button
            class="navbar-toggler d-lg-none mr-2"
            @click.stop.prevent="isVisibleSidebar = !isVisibleSidebar"
            v-click-elsewhere="isVisibleSidebar && closeSideBar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </span>
        <!--        <div class="contain" @click="$router.push({ path: '/' })"></div>-->
        <router-link
          to="/"
          class="mx-auto text-white text-center text-decoration-none"
        >
          <span class="title font-semibold text-md">📅 Wanna Be</span>
        </router-link>
      </div>
      <div style="position: absolute; right: 5px; top: 4px; display: flex">
        <ul class="navbar-nav main mr-4" style="flex-direction: row">
          <li class="nav-item dropdown" :class="isVisibleDropdown && 'show'">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              @click.stop.prevent="isVisibleDropdown = !isVisibleDropdown"
              v-click-elsewhere="isVisibleDropdown && closeDropdown"
              role="button"
              aria-haspopup="true"
              :aria-expanded="isVisibleDropdown ? 'true' : 'false'"
            >
              <img
                src="@/assets/default-avatar.png"
                class="user-image"
                alt="user image"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-right"
              :class="isVisibleDropdown && 'show'"
            >
              <!-- <li role="presentation">
                <a class="dropdown-item">
                  <h6>Si Admin</h6>
                  <p style="font-size: 12px">@admin123</p>
                </a>
              </li> -->
              <!-- <hr style="margin-top: 0" /> -->
              <li role="presentation">
                <router-link to="/profile" class="dropdown-item" role="menuitem"
                  >Profile</router-link
                >
              </li>
              <hr style="margin-top: 0" />
              <li role="presentation">
                <router-link to="/logout" class="dropdown-item" role="menuitem"
                  >Logout</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavTop",

  data() {
    return {
      isVisibleSidebar: false,
      isVisibleDropdown: false,
    };
  },

  watch: {
    isVisibleSidebar() {
      this.$root.$emit("toggle-sidebar", this.isVisibleSidebar);
    },
  },

  methods: {
    closeSideBar() {
      this.isVisibleSidebar = false;
    },
    closeDropdown() {
      this.isVisibleDropdown = false;
    },
  },
};
</script>