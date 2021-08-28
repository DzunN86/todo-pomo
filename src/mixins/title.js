/***********************************************
 * Untuk membuat title dinamis pada header html
 * <title>{{ DYNAMIC_CONTENT }}</title>
 * <title>Users - Page 7</title>
 **********************************************/

function getTitle(vm) {
  const { title } = vm.$options;

  if (title) {
    return typeof title === "function" ? title.call(vm) : title;
  }

  return vm.$route && vm.$route.name ? vm.$route.name : "";
}

export default {
  created() {
    const title = getTitle(this);
    if (title) {
      document.title = title + " - Surat PP. Nurul Jadid";
    }
  },

  watch: {
    "$route.query": function () {
      // Dibutuhkan jika ada perubahan title saat ada perubahan query url
      const title = getTitle(this);
      if (title) {
        document.title = title + " - Surat Pesantren PP. Nurul Jadid";
      }
    },
  },
};
