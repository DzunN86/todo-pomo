import Vue from "vue";
import Axios from "axios";
import Store from "../store";
import Config from "../config";

const token = Store.state.token ? Store.state.token : undefined;

const AxiosInstance = Axios.create({
  baseURL: "https://salty-anchorage-33077.herokuapp.com/api",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Accept": "application/json",
    "Authorization": "Bearer " + token
  },
});

const buildInterceptors = (vm) => {
  const messageNetworkError = vm.$createElement("p", {
    domProps: {
      innerHTML:
        "Terjadi kegagalan mengakses server, bisa jadi karena:<br>- Tidak ada koneksi pada perangkat anda. <br>\n- Koneksi perangkat anda terlalu lemot sehingga terjadi timeout. <br>\n- Server pusat sedang down.",
    },
  });

  const onRequest = (config) => {
    // Do something before request is sent
    config.disableErrNotif = config.disableErrNotif || false;
    config.disableExptimestamp = config.disableExptimestamp || false;
    config.loading = config.loading || false;

    if (config.loading) {
      Store.commit("setLoading", true);
    }

    return config;
  };
  const onRequestError = (error) => {
    // Do something with request error
    return Promise.reject(error);
  };
  const onResponse = (response) => {
    if (response.config.loading && Store.state.loading === true) {
      Store.commit("setLoading", false);
    }

    if (!response.config.disableExptimestamp) {
      Store.commit("setExptimestamp", Date.now() + 1 * 60 * 59 * 1000);
    }

    return response;
  };
  const onResponseError = (error) => {
    /********************************
     * - config
     * - request
     * - response
     * - isAxiosError
     * - toJSON
     *******************************/

    if (error.config.loading && Store.state.loading === true) {
      Store.commit("setLoading", false);
    }

    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */

      switch (error.response.status) {
        case 401:
          Store.commit("setExptimestamp", 0);
          Store.commit("setToken", "");
          break;
        case 503:
          vm.$root.$emit("setNotif", {
            statusCode: "Service Unavailable",
            message: messageNetworkError,
          });
          break;

        default:
          if (!error.config.disableErrNotif && error.response.data.message) {
            vm.$root.$emit("setNotif", {
              statusCode: error.response.status,
              message: error.response.data.message,
            });
          }
          if (!error.config.disableExptimestamp) {
            Store.commit("setExptimestamp", Date.now() + 1 * 60 * 59 * 1000);
          }

          break;
      }

      if (error.response.data) {
        /******************
         * error.config.responseType =>
         * 'arraybuffer', 'document', 'json', 'text', 'stream'
         * browser only: 'blob'
         */

        //  dibawah ini +19kb
        if (error.config.responseType === "arraybuffer") {
          try {
            let decodedString = String.fromCharCode.apply(
              null,
              new Uint8Array(error.response.data)
            );
            error.response.data = JSON.parse(decodedString);
          } catch (e) {
            // empty
          }
        }
      }

      return Promise.reject(error);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */

      // bisa jadi karena Network problems atau OPTIONS request is failed
      // https://stackoverflow.com/questions/52353631/in-what-cases-an-http-request-is-made-but-no-response-is-received
      // net::ERR_CONNECTION_REFUSED / api gak aktif & webserver bales refused

      if (error.message == "Network Error") {
        if (!error.config.disableErrNotif) {
          vm.$root.$emit("setNotif", {
            statusCode: "Error Network",
            message: messageNetworkError,
          });
        }
      } else {
        if (!error.config.disableErrNotif) {
          vm.$root.$emit("setNotif", {
            statusCode: "Unknown ERROR",
            message: error.message,
          });
        }
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      // if (process.env.NODE_ENV !== 'production') {
      //   console.warn('Unknown ERROR => ', error);
      // }
      // contoh seperti kirim auth bearer dengan text arab
    }

    return Promise.reject(error);
  };

  /* Add a REQUEST INTERCEPTOR */
  AxiosInstance.interceptors.request.use(onRequest, onRequestError);
  /* Add a RESPONSE INTERCEPTOR */
  AxiosInstance.interceptors.response.use(onResponse, onResponseError);
};

export let _Vue;
function install(vue) {
  if (install.installed && _Vue === vue) {
    return;
  }

  install.installed = true;

  _Vue = vue;

  vue.mixin({
    beforeCreate() {
      if (this.$options.axios) {
        this.__axios = this.$options.axios;
        buildInterceptors(this);
      } else {
        this.__axios = (this.$parent && this.$parent.__axios) || this;
      }
    },
  });

  Object.defineProperty(vue.prototype, "$axios", {
    get() {
      return this.__axios;
    },
  });
}

Vue.use(install);

export default AxiosInstance;
