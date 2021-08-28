<template>
<main class="pt-5 md:pt-10">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
      <div class="lg:col-span-2">
        <MenuUser></MenuUser>
      </div>
      <div class="lg:col-span-10 text-white">
        <div class="shadow bg-gray-800 rounded-lg overflow-hidden">
          <!-- <div class="px-6 py-4 bg-gray-700 border-b border-gray-600 flex items-center justify-between">
            <span class="font-semibold tracking-tighter block">
              <h1 class="text-white">Update Profile Information</h1>
              <div class="text-sm font-normal leading-relaxed text-gray-400 dark:text-gray-400">The information you enter will appear on the profile page, so make sure to make it nice so the others can get to know you better.</div>
            </span>
          </div> -->
          <div class="undefined px-6 py-5">
						<CardDash/>
						
						<div class="">
              <GChart
								type="ColumnChart"
								:data="chartData"
								:options="chartOptions"
							/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

</template>

<script>
import { GChart } from "vue-google-charts";
export default {
    components: {
        MenuUser: () => import("@/components/MenuUser"),
        CardDash: () => import("@/components/CardDash"),
				GChart
    },
		data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Work", "Pribadi", "Kebutuhan"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2018", 1030, 540, 350],
        ["2019", 1030, 540, 350],
        ["2020", 1030, 540, 350],
        ["2021", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
}
</script>