<template>
  <div>
    <div class="-mt-5 md:-mt-10 z-20">
    <div class="max-w-screen-xl mx-auto px-4">
        <div class="py-4 sm:py-4 md:py-6 lg:py-28 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div class="w-full lg:w-3/5">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto hidden lg:block">
                  <img src="@/assets/img-login.png" alt="Nekoding" class="w-auto" />
                </div>
            </div>
            <div class="w-full lg:w-3/5 mt-16">
                <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
								<div>
									<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
								</div>
								<div class="space-y-4">
									<input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
									<input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
								</div>
								<div class="text-center mt-6">
									<button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
									<p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign In</span></p>
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
  name: 'Login'
}
</script>
