<template>
  <div>
    <!-- <div class="-mt-5 md:-mt-10 z-20"> -->
    <div class="mt-10 z-20">
      <div class="max-w-screen-xl mx-auto px-4">
        <div
          class="py-4 sm:py-4 md:py-6 lg:py-28 flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
        >
          <div class="w-full lg:w-3/5">
            <div class="text-center text-white">
              <h1 class="text-5xl font-bold mb-4">Login!</h1>
              <span class="text-xl font-normal text-gray-200"
                >Login to your account below.</span
              >
            </div>
            <div class="relative py-3 sm:max-w-xl sm:mx-auto hidden lg:block">
              <img src="@/assets/img-login.png" alt="Nekoding" class="w-auto" />
            </div>
          </div>
          <div class="w-full lg:w-2/6 mt-16">
            <form @submit.stop.prevent autocomplete="off">
              <div class="py-6 px-6 bg-gray-100 rounded-md">
                <div class="space-y-4">
                  <label class="block">
                    <span class="text-gray-500">Email</span>
                    <input
                      type="email"
                      v-model.trim="masuk.email"
                      id="email"
                      required
                      autofocus
                      class="mt-1 bg-white text-gray-800 border-2 border-gray-300 focus:border-gray-300 px-4 py-3 rounded-md w-full"
                      placeholder="e.g., johndoe, johndoe@gmail.com"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-500">Password</span>
                    <input
                      type="password"
                      v-model.trim="masuk.password"
                      id="password"
                      required
                      class="mt-1 bg-white text-gray-800 border-2 border-gray-300 focus:border-gray-300 px-4 py-3 rounded-md w-full"
                      placeholder="e.g., 4Kbuknjhnd3"
                    />
                  </label>
                </div>
                <div class="text-center mt-6">
                  <button
                    type="submit"
                    class="relative w-full text-xl text-white"
                    @click.stop.prevent="goLogin"
                    :disabled="$store.state.loading"
                  >
                    <div
                      class="absolute inset-x-0 h-full -bottom-2 bg-orange-700 rounded-lg"
                    ></div>
                    <div
                      class="relative w-full justify-center inline-flex items-center bg-orange-500 rounded-lg py-3 px-10 font-bold transition transform hover:translate-y-1 focus:translate-y-2"
                    >
                    <template v-if="$store.state.loading">
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading
                    </template>
                      <span v-else>Login</span>
                    </div>
                  </button>
                  <p class="mt-6 text-sm text-gray-800">
                    Belum punya akun?
                    <router-link class="underline cursor-pointer" to="/register"> Register</router-link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar"),
  },
  data() {
    return {
      masuk: { email: "", password: "" },
    };
  },
  methods: {
    goLogin() {
      let data = {
        email: this.masuk.email,
        password: this.masuk.password,
      };
      this.$axios
        .post("/login", data, this.$store.commit("setLoading", true))
        .then((res) => {
          this.$store.commit("setLoading", false);
          const token = res.data.token;
          if (res.data.token) {
            this.$axios.defaults.headers["Authorization"] = token;
            this.$store.commit("setToken", token);
            // this.$router.push('/addactivity');
          }
        })
        .catch((err) => {
          this.$store.commit("setLoading", false);
          console.log(err);
        });
    },
  },
  mounted() {
    this.$topprogressbar.start();

    // Use setTimeout for demo
    setTimeout(() => {
      this.$topprogressbar.finish(), 1000;
    });
  },
};
</script>
