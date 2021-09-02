<template>
  <div>
    <div
      class="d-flex flex-wrap align-items-center pb-2 border-bottom mb-4"
      style="min-height: 50px;"
    >
      <h3 class="m-0 mr-4 mb-2">Profile</h3>
    </div>
    <div>
      <form>
        <div class="form-group">
          <label for="nama">Nama</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="profile.name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="profile.email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">Update Profile</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {}
    }
  },

  methods: {
    getProfile() {
      this.$topprogressbar.start();
      this.$store.commit("setLoading", true);

      this.$axios.get('/showuser/1')
      .then((res) => {
        this.$store.commit("setLoading", false);
        this.profile = res.data.data;
        this.$topprogressbar.finish(), 1000;
      })
      .catch((err) => {
          this.$store.commit("setLoading", false);
        });
    }
  },
  mounted() {
    this.getProfile()
  }
};
</script>
