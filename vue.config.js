module.exports = {
  pwa: {
    name: "vue-pwa",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
