<template>
  <div>
    <!-- Dashboard Info cards -->
    <div class="row">
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-primary">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'tasks']"
                    size="4x"
                    style="color: #03448a;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">All Activities</h5>
                  <h3 class="text-bold-600">2323</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #3a6fe1;" to="/allactivities">
                <span aria-disabled="true">See more</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-danger">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'briefcase']"
                    size="4x"
                    style="color: #8f212b;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Work</h5>
                  <h3 class="text-bold-600">21</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #dc3545;" to="/activities/work">
                <span aria-disabled="true">See more</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-warning">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'book-open']"
                    size="4x"
                    style="color: #8f212b;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Learn</h5>
                  <h3 class="text-bold-600">2323</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted text-right">
              <router-link style="color: #dc3545;" to="/activities/learn">
                <span aria-disabled="true">See more</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 mb-4">
        <div class="card card-dash border-left-success">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <fa-icon
                    :icon="['fas', 'gamepad']"
                    size="4x"
                    style="color: #2c632d;"
                  />
                </div>
                <div class="media-body text-right">
                  <h5 class="text-light text-bold-500">Play</h5>
                  <h3 class="text-bold-600">22</h3>
                </div>
              </div>
            </div>
            <div class="card-footer text-right">
              <router-link style="color: #428e40;" to="/activities/play">
                <span aria-disabled="true">See more</span>
                <fa-icon
                  :icon="['fas', 'arrow-circle-right']"
                  class="ml-2"
                ></fa-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <vue-chart
          v-if="timeframe.rows.length > 0"
          :columns="timeframe.columns"
          :rows="timeframe.rows"
          :options="timeframe.options"
          chart-type="ComboChart"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      statistik: {},
      timeframe: {
        rows: [],
        columns: [],
        options: {
          height: 400,
          // title: "Statistik Harian Pendaftaran",
          seriesType: "bars",
          chartArea: {
            left: 50,
            top: 50,
            right: 100,
            buttom: 0,
            height: "80%",
          },
          animation: {
          startup: true,
          duration: 1000,
          easing: 'in',
        },
          backgroundColor: { fill: "transparent" },
        },
      },
    };
  },

  methods: {
    fetchData(data) {
      if (data.total) this.statistik = data.total;

      if (data.timeframe) {
        try {
          this.timeframe.rows = [];
          this.timeframe.columns = [
            { type: "string", label: "Timeframe" },
            { type: "number", label: "Work" },
            { type: "number", role: "annotation" },
            { type: "number", label: "Learn" },
            { type: "number", role: "annotation" },
            { type: "number", label: "Play" },
            { type: "number", role: "annotation" },
            { type: "number", label: "Total" },
            { type: "number", role: "annotation" },
          ];
          for (var key in data.timeframe) {
            this.timeframe.rows.push([
              data.timeframe[key].tanggal,
              data.timeframe[key].category.work,
              data.timeframe[key].category.work,
              data.timeframe[key].category.learn,
              data.timeframe[key].category.learn,
              data.timeframe[key].category.play,
              data.timeframe[key].category.play,
              data.timeframe[key].total,
              data.timeframe[key].total,
            ]);
          }
        } catch (error) {
          throw Error(error);
        }
      }
    },
  },
  mounted() {
    this.$topprogressbar.start();
    this.$axios
      .get("/stats")
      .then((res) => {
        this.fetchData(res.data);
        setTimeout(() => this.$topprogressbar.finish(), 500);
      })
      .catch(() => {
        this.$topprogressbar.fail();
      });
  },
};
</script>
