<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../.././assets/vue.png" alt="Vue" /> +
        <img src="../.././assets/firebase.png" alt="Vue" /> =
        <img src="../.././assets/vue.png" alt="Vue" />
        <img src="../.././assets/firebase.png" alt="Vue" />
      </b-navbar-item>
    </template>
    <!-- <template slot="start">
            <b-navbar-item href="#">
                Vue + Firebase
            </b-navbar-item>
        </template> -->

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" v-on:click="logout">
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from "../.././firebase";

export default {
  name: "Navbar",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });

      console.log("log out");
    }
  }
};
</script>
