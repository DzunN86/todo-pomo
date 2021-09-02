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
                  <h3 class="text-bold-600">{{dashboard.total.learn}}</h3>
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
                  <h3 class="text-bold-600">{{dashboard.total.work}}</h3>
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
                  <h3 class="text-bold-600">{{dashboard.total.learn}}</h3>
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
                  <h3 class="text-bold-600">{{dashboard.total.play}}</h3>
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
        <GChart
      type="ColumnChart"
      :data="chartData"
      :options="$App.config.chartOptions.line"
      style="height: 500px;"
    />
      </div>
    </div>
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart
  },
  data() {
    return{
      dashboard:{},
      chartData: [
        ["Year", "total", "Work", "Learn", "Play"],
        ["2014", 100, 400, 200, 800],
        ["2014", 100, 400, 200, 800],
        ["2014", 100, 400, 200, 800],
        ["2014", 100, 400, 200, 2000],
        ["2014", 100, 400, 200, 800],
        ["2014", 100, 400, 200, 500],
        ["2014", 100, 400, 200, 700],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    }
  },
  mounted () {
    this.$topprogressbar.start();
 
    // Use setTimeout for demo
    setTimeout(() => {
      this.$topprogressbar.finish(), 1000
    })
  },

  computed : {

  },

  methods: {
    getDashboard() {
      this.$topprogressbar.start();
      this.$axios
        .get("/stats")
        .then((res) => {
          this.dashboard = res.data;
          console.log(this.dashboard)
          this.$topprogressbar.finish(), 1000;
        })
        .catch(() => {
          this.$topprogressbar.fail();
        });
    },
  },
  created() {
    this.getDashboard();
  },
}
</script>
