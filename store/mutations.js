import Cookie from "js-cookie";
export default {
  search(state, payload) {
    state.search = payload;
  },
  authkey(state, payload) {
    state.key = payload;
  },
  clearAuthkey(state) {
    Cookie.remove("key");
    localStorage.removeItem("key");
    state.key = null;
  },
  fullImageShow(state, payload) {
    state.imageFullShow = payload;
  },

  uid(state, payload) {
    state.uid = payload;
  },
  speak(state, payload) {
    state.txtSpeakResulat = payload;
  },
  menuShows(state, payload) {
    state.menuShow = payload;
  },
  helpShows(state, payload) {
    state.helpShow = payload;
  },
};
