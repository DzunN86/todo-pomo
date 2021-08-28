<template>
    <div class="lg:block flex">
          <button
            class="flex items-center bg-white shadow-sm focus:ring focus:ring-primary-100 focus:border-primary-500 border rounded-lg px-2 py-1 lg:hidden focus:outline-none mb-2 mr-3"
            id="headlessui-disclosure-button-25"
            type="button"
            aria-expanded="false"
          >
            <i class="bi bi-list mr-1"></i> <span class="font-semibold uppercase text-xs text-gray-600">Menu</span>
          </button>
          <div class="hidden lg:block">
            <div id="headlessui-disclosure-panel-26">
              <ul class="absolute space-y-4 lg:relative bg-gray-800 p-4 sm:shadow-none shadow-lg rounded-md">
                <li>
                  <a class="focus:outline-none truncate text-sm text-white flex items-center w-full text-left font-semibold !text-black" href="/settings/profile">
                    <span class="mr-2 w-8 h-8 text-black rounded-lg flex items-center justify-center bg-gray-200 flex-shrink-0 !bg-sky-500 !text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
                        ></path>
                      </svg>
                    </span>
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    components: {
        MenuUser: () => import("@/components/MenuUser"),
    }
}
</script>