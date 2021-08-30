<template>
  <div>
    <Navbar></Navbar>
    <div class="-mt-5 md:-mt-10 z-20">
      <div class="max-w-screen-xl mx-auto px-4">
        <div
          class="py-4 sm:py-4 md:py-6 lg:py-28 flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
        >
          <div class="w-full lg:w-3/5">
            <div class="text-center text-gray-800">
              <h1 class="text-5xl font-bold mb-4">Ayo masuk!</h1>
              <span class="text-xl font-normal text-gray-700"
                >Kami sudah menantimu, John Doe</span
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
                    <span class="text-gray-400">Email</span>
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
                    <span class="text-gray-400">Password</span>
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

                  >
                    <div
                      class="absolute inset-x-0 h-full -bottom-2 bg-orange-700 rounded-lg"
                    ></div>
                    <div
                      class="relative bg-orange-500 rounded-lg py-3 px-10 font-bold transition transform hover:translate-y-1 focus:translate-y-2"
                    >
                      Login
                    </div>
                  </button>
                  <p class="mt-6 text-sm text-gray-800">
                    Belum punya akun?
                    <span class="underline cursor-pointer"> Register</span>
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
import axios from "axios";

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
      }

      this.$axios.post('/login', data)
      .then((res) => {
          console.log(res.data);
          const token = res.data.token

          if(token) {
            this.$axios.defaults.headers["Authorization"] = token;
            this.$store.commit("setToken", token);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.$axios.get('/category')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

    this.$topprogressbar.start();

    // Use setTimeout for demo
    setTimeout(() => {
      this.$topprogressbar.finish(), 1000;
    });
  },
};
</script>
