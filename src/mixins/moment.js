import Moment from "moment";
import "moment/locale/id";
Moment.defaultFormat = "DD MMM YYYY";

export default {
  methods: {
    // for common use
    formatDate(val, formatStr = Moment.defaultFormat) {
      if (!val) {
        return "-";
      }

      return Moment(val).format(formatStr);
    },
    moment: Moment,
  },
};
