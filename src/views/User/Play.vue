<template>
  <div class="px-32">
    <div
      class="d-flex flex-wrap align-items-center pb-2 border-bottom mb-4"
      style="min-height: 50px;"
    >
      <h3 class="m-0 mr-4 mb-2">Play</h3>
      <div class="flex-grow-1">
        <button
          class="btn btn-primary btn-sm mb-2 btn-circle"
          @click="$router.push('/addactivity')"
        >
          <fa-icon :icon="['fas', 'plus']" />
          <!-- <span class="ml-1">Add</span> -->
        </button>
      </div>
      <div class="d-block">
        <button @click="$router.push('/')" class="btn btn-outline-success mb-2">
          <fa-icon :icon="['fas', 'chart-bar']" />

        <span class="ml-1">Statistik</span>
        </button>
      </div>
    </div>
    <div class="list-group mb-4">
      <div v-for="(activity, index) in activities" :key="index">
        <button
          @click="$router.push('viewactivity/' + activity.id)"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ activity.name }}</h5>
            <div>
              <small class="">{{ formatDate(activity.start) }}</small> -
              <small>{{ formatDate(activity.finish) }}</small>
            </div>
          </div>
          <p class="mb-1">{{ activity.desc }}</p>
          <small class="badge badge-success" v-if="activity.category_id == 1">Work</small>
          <small class="badge badge-danger" v-if="activity.category_id == 2">Learn</small>
          <small class="badge badge-primary" v-if="activity.category_id == 3">Play</small>
        </button>
      </div>
    </div>

    <div class="my-auto" v-if="activities.length == 0">
      <div v-if="!$store.state.loading">
        <img
          src="@/assets/empty-todo.svg"
          class="mx-auto p-10 w-96"
          alt="empty-todo"
        />
        <div class="text-center">
          <h4>All Clear</h4>
          <p class="text-muted">
            Looks like everything's organized in the right place.
          </p>
          <button class="btn btn-primary btn-sm">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MixinMoment from "@/mixins/moment";
export default {
  data() {
    return {
      activities: [],
    };
  },

  mixins: [MixinMoment],

  methods: {
    getActivities() {
      if (!this.$store.state.token) return;
      this.$topprogressbar.start();
      this.$store.commit("setLoading", true);

      this.$axios
        .get("/activbycat/3")
        .then((res) => {
          this.$store.commit("setLoading", false);
          this.activities = res.data.data;
          this.$topprogressbar.finish(), 1000;
        })
        .catch((err) => {
          this.$store.commit("setLoading", false);
          console.log(err);
          this.$root.$emit("setNotif", {
            title: "Opps",
            message: "Data Tidak Ditemukan",
            type: "warning",
          });
        });
    },
  },

  mounted() {
    this.getActivities();
  },
};
</script>
