<template>
  <div>
    <div class="-mt-5 md:-mt-10 z-20">
      <div class="max-w-screen-xl mx-auto px-4">
          <div class="py-4 sm:py-4 md:py-6 lg:py-28 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <div class="w-full lg:w-3/5">
                  <div class="text-center text-white">
                    <h1 class="text-5xl font-bold mb-4">Ayo masuk!</h1>
                    <span class="text-xl font-normal text-gray-400">Kami sudah menantimu, John Doe</span>
                  </div>
                  <div class="relative py-3 sm:max-w-xl sm:mx-auto hidden lg:block">
                    <img src="@/assets/img-login.png" alt="Nekoding" class="w-auto" />
                  </div>
              </div>
              <div class="w-full lg:w-2/6 mt-16">
                  <div class="py-6 px-6 bg-gray-800 rounded-md shadow-xl z-20">
                  <div class="space-y-4">
                    <label class="block">
                      <span class="text-gray-400">Email</span>
                      <input type="text" class="mt-1 bg-white text-white bg-opacity-10 px-4 py-3 rounded-md w-full" placeholder="e.g., johndoe, johndoe@gmail.com" />
                    </label>
                    <label class="block">
                      <span class="text-gray-400">Password</span>
                      <input type="password" class="mt-1 bg-white text-white bg-opacity-10 px-4 py-3 rounded-md w-full" placeholder="e.g., 4Kbuknjhnd3" />
                    </label>
                  </div>
                  <div class="text-center mt-6">
                    <button class="relative w-full text-xl text-white">
                    <div class="absolute inset-x-0 h-full -bottom-2 bg-orange-700 rounded-lg"></div>
                    <div class="relative bg-orange-500 rounded-lg py-3 px-10 font-bold transition transform hover:translate-y-1 focus:translate-y-2">Login</div>
                  </button>
                    <p class="mt-6 text-sm text-white">Sudah punya akun? <span class="underline cursor-pointer"> Login</span></p>
                  </div>
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
