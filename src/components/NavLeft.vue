<template>
  <div class="navbar-collapse" :class="isVisibleSidebar && 'show'">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block  sidebar">
      <div class="pt-2">
        <ul class="nav flex-column">
          <template v-for="(node, indexRoot) in MenuSchema">
            <template v-if="node.labelHeading">
              <!--MENU HEADING-->
              <li
                :key="indexRoot"
                class="
                  h6
                  sidebar-heading
                  d-flex
                  justify-content-between
                  align-items-center
                  px-3
                  mt-4
                  mb-3
                  text-muted
                "
                aria-invalid="true"
              >
                <span>{{ node.labelHeading }}</span>
              </li>
              <template v-if="node.children">
                <!--MENU ITEM support nested (recursive)-->
                <menu-item
                  v-for="(child, index) in node.children"
                  :key="index"
                  :item="child"
                />
              </template>
            </template>

            <!--MENU ITEM support nested (recursive)-->
            <menu-item
              v-else
              :item="node"
              :key="`${indexRoot}-${node.label}`"
            />
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import MenuSchema from "../router/menuSchema";

export default {
  name: "NavLeft",

  components: {
    MenuItem,
  },

  data() {
    return {
      isVisibleSidebar: false,
    };
  },

  created() {
    // non-reactive
    this.MenuSchema = MenuSchema;

    this.$root.$on("toggle-sidebar", (val) => {
      this.isVisibleSidebar = val;
    });
  },
};
</script>
