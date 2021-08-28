<template>
  <div>
    <div class="-mt-5 md:-mt-10 z-20">
    <div class="max-w-screen-xl mx-auto px-4">
        <div class="py-4 sm:py-4 md:py-6 lg:py-28 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div class="w-full lg:w-3/5 mt-16">
                <h1 class="font-light mb-2 lg:leading-10 md:mb-5">
                    <div class="text-4xl md:text-6xl mb-1 capitalize">
                        <div class="text-white inline-block bg-clip-text text-transparent font-bold tracking-tight leading-snug">
                            Manage Your Task Organizer All Your to do List an Project
                        </div>
                    </div>
                </h1>
                <div class="leading-relaxed text-sm md:text-lg font-light">
                    <div class="prose md:prose-xl prose-dark mt-2 lg:mt-10 text-gray-200">
                        <p>
                            Manage Your Task Organizer All Your to do List an Project
                        </p>
                    </div>
                </div>
                <div class="prose md:prose-xl prose-dark mt-2 lg:mt-10">
                  <button class="relative text-xl text-white">
                    <div class="absolute inset-x-0 h-full -bottom-2 bg-orange-700 rounded-lg"></div>
                    <div class="relative bg-orange-500 rounded-lg py-4 px-10 font-bold transition transform hover:translate-y-1 focus:translate-y-2">Let's Go!</div>
                  </button>
                </div>
            </div>
            <div class="w-full lg:w-3/5 lg:-mr-24">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto hidden lg:block">
                  <img src="@/assets/img-hero.png" alt="Nekoding" class="w-full" />
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
