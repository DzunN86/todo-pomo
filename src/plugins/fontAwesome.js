import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTachometerAlt,
  faCalendarCheck,
  faStethoscope,
  faHospitalUser,
  faBriefcase,
  faHome,
  faUsers,
  faUpload,
  faSearch,
  faQrcode,
  faEye,
  faEyeSlash,
  faArrowRight,
  faChevronLeft,
  faArrowCircleRight,
  faEnvelopeOpenText,
  faPlus,
  faSignOutAlt,
  faTrash,
  faEdit,
  faTimes,
  faFileMedicalAlt,
  faEnvelope,
  faEnvelopeOpen,
  faFileAlt,
  // faFilter,
  faBorderAll,
  faBookOpen,
  faGamepad,
  faFileExport,
  faChartBar,
  faTasks,
  faCaretRight,
  faCaretDown,
  faBug,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTachometerAlt,
  faCalendarCheck,
  faTasks,
  faBorderAll,
  faGamepad,
  faBookOpen,
  faStethoscope,
  faBriefcase,
  faHospitalUser,
  faHome,
  faUsers,
  faChevronLeft,
  faEnvelopeOpenText,
  faQrcode,
  faUpload,
  faSearch,
  faEye,
  faEyeSlash,
  faArrowRight,
  faArrowCircleRight,
  faPlus,
  faSignOutAlt,
  faTrash,
  faEdit,
  faTimes,
  faFileMedicalAlt,
  faEnvelope,
  faEnvelopeOpen,
  faFileAlt,
  // faFilter,
  faFileExport,
  faChartBar,
  faCaretRight,
  faCaretDown,
  faBug,
  faSync
);

Vue.component("fa-icon", FontAwesomeIcon);
