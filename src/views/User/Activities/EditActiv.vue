<template>
  <div class="px-32">
    <div
      class="d-flex flex-wrap align-items-center pb-2 border-bottom mb-4"
      style="min-height: 50px;"
    >
      <h3 class="m-0 mr-4 mb-2">Detail Activities</h3>
    </div>

    <div>
      <div class="card mb-3">
        <div class="card-body">
          <form @submit.prevent>
            <div class="form-row">
              <div class="col-10">
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  placeholder="You Activitie"
                />
              </div>
              <div class="col">
                <div class="form-group">
                  <select
                    class="form-control"
                    id="category"
                    v-model="form.category_id"
                  >
                    <option :value="'3'">Work</option>
                    <option :value="'4'">Learn</option>
                    <option :value="'5'">Play</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="desc"
                rows="3"
                v-model="form.desc"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="form-row mb-3">
              <div class="col-3">
                <date-picker
                  valueType="format"
                  placeholder="Start"
                  v-model="form.start"
                ></date-picker>
              </div>
              <div class="col-3">
                <date-picker
                  valueType="format"
                  placeholder="finish"
                  v-model="form.finish"
                ></date-picker>
              </div>
            </div>
            <button class="btn btn-success btn-sm mr-2" @click="action">
              Update
            </button>
            <button class="btn btn-danger btn-sm mr-2" @click="deleteId()">
              Delete
            </button>
            <button
              class="btn btn-light btn-sm"
              @click="$router.push('/allactivities')"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      form: {},
    };
  },

  methods: {
    getActivity(id) {
      if (!this.$store.state.token) return;
      this.$topprogressbar.start();
      this.$store.commit("setLoading", true);

      // const params = this.getRequestParams(this.searchNama);

      this.$axios
        .get(`/activity/${id}`)
        .then((res) => {
          this.$store.commit("setLoading", false);
          this.form = res.data.data;
          this.$topprogressbar.finish(), 1000;
        })
        .catch((err) => {
          this.$store.commit("setLoading", false);
          console.log(err);
        });
    },

    action() {
      let doit = () => {
        var data = {
          name: this.form.name,
          desc: this.form.desc,
          start: this.form.start,
          end: this.form.finish,
          user_id: 3,
          category_id: this.form.category_id,
        };

        this.$store.commit("setLoading", true);
        this.$axios({
          method: "put",
          url: "/activity/" + this.form.id,
          data,
        })
          .then((res) => {
            this.$store.commit("setLoading", false);
            this.$router.push("/allactivities");
            this.$root.$emit("setNotif", {
              // title: res.data.status,
              message: res.data.message,
              type: "success",
            });
          })
          .catch((err) => {
            this.$store.commit("setLoading", false);
            console.log(err);
          });
      };
      doit();
    },

    deleteId() {
      this.$root.$emit("setNotif", {
        title: "Yakin Hapus ?",
        type: "warning",
        customConfirmBtnText: "Hapus",
        useConfirmBtn: true,
        customConfirmBtnClass: "btn btn-danger mr-2",
        customCloseBtnClass: "btn btn-primary",

        onConfirm: () => {
          this.$axios
            .delete(`/activity/${this.form.id}`)
            .then((res) => {
              this.$root.$emit("setNotif", {
                title: res.data.status,
                message: res.data.message,
                type: "success",
              });
              this.$router.push("/allactivities");
            })
            .catch(() => {});
        },
      });
    },
  },
  mounted() {
    this.getActivity(this.$route.params.id);
  },
};
</script>
