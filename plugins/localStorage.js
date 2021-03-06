import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "vuex",
      paths: [
        "favorite.items",
        "recent.histories",
        "center.mapHistory.center",
        "center.mapHistory.zoom",
      ]
    })(store);
  });
};
