<template>
  <div class="columns is-centered is-variable is-1-mobile mt-6">
    <div class="column is-half">
      <div class="is-flex is-justify-content-center">
        <img class="" src=".././assets/vue.png" alt="Vue" />
        <img src=".././assets/firebase.png" alt="Vue" />
      </div>
      <h3 class="is-flex is-justify-content-center">Vue + Firebase</h3>
      <div class="mx-5">
        <input
          type="text"
          v-model="email"
          placeholder="Email address"
          class="input my-3"
          required
        />
        <br />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="input my-3"
          required
        />
        <br />
        <button v-on:click="signUp" class="button">Sign Up!</button>
        <button class="button">
          <router-link to="/login">
            Back
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.$router.replace("/login");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>
