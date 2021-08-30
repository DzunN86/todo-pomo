<template>
  <router-link
    :to="item.link"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :exact="item.isExactActive"
    custom
  >
    <li class="nav-item">
      <a
        :href="isActive ? '#' : href"
        :class="[
          'nav-link',
          isActive ? 'router-link-active' : null,
          isExactActive ? 'router-link-exact-active' : null,
          route.path === $route.path ? 'disabled' : null,
        ]"
        @click="navigate"
      >
        <fa-icon
          v-if="item.icon"
          :icon="item.icon"
          class="align-middle"
        ></fa-icon>
        <span class="align-middle">{{ item.label }}</span>
      </a>

      <!--   NESTED SUB-MENU   -->
      <ul
        v-if="item.children && item.children.length"
        class="nav flex-column ml-3"
      >
        <!--    RECURSIVE COMPONENT    -->
        <menu-item
          v-for="(child, id) in item.children"
          :key="id"
          :item="child"
        />
      </ul>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",

  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/main.scss";
</style>
