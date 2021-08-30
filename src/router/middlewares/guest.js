import Store from "../../store";

export default (to, from, next) => {
  let auth = Store.state.token;
  if (auth) {
    next({ name: "Dashboard" });
    return false;
  }
};
