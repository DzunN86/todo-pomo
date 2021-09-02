export default [
  {
    label: "Dashboard",
    link: "/",
    icon: ["fas", "chart-bar"],
    isExactActive: true,
  },
  {
    label: "All Activities",
    link: "/allactivities",
    icon: ["fas", "tasks"],
  },
  {
    labelHeading: "Category Activities",
    children: [
      {
        label: "Work",
        link: "/activities/work",
        icon: ["fas", "briefcase"],
      },
      {
        label: "Learn",
        link: "/activities/learn",
        icon: ["fas", "book-open"],
      },
      {
        label: "Play",
        link: "/activities/play",
        icon: ["fas", "gamepad"],
      },
      {
        label: "Others",
        link: "/activities/others",
        icon: ["fas", "border-all"],
      },
    ],
  },
];
