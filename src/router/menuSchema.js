export default [
  {
    label: "Dashboard",
    link: "/",
    icon: ["fas", "chart-bar"],
    isExactActive: true,
  },
  {
    label: "Scan QRCode",
    link: "qrcode",
    icon: ["fas", "qrcode"],
  },
  {
    label: "Buat Surat",
    link: "/create-surat",
    icon: ["fas", "envelope-open-text"],
    meta: {
      layout: "full-layout",
    },
  },
  {
    labelHeading: "Manajemen Surat",
    children: [
      {
        label: "Surat Keluar",
        link: "/surat-keluar",
        icon: ["fas", "envelope-open"],
      },
      {
        label: "Surat Masuk",
        link: "/surat-masuk",
        icon: ["fas", "envelope"],
      },
      {
        label: "Disposisi",
        link: "/disposisi",
        icon: ["fas", "file-alt"],
      },
    ],
  },
];
