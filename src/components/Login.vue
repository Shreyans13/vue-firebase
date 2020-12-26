<template>
    <div class="columns is-centered is-variable is-1-mobile mt-6">
        <div class="column is-half">
            <div class="is-flex is-justify-content-center">
                <img class="" src=".././assets/vue.png" alt="Vue">
                <img src=".././assets/firebase.png" alt="Vue">
            </div>
            <h3 class="is-flex is-justify-content-center">Vue + Firebase</h3>
            <div class="mx-5">
                <input 
                    type="text"
                    v-model="email"
                    placeholder="Email address"
                    class="input my-3"
                    required>
                <br />
                <input 
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    class="input my-3"
                    required>
                <br />
                <button v-on:click="login" class="button">Login</button>
                <p>
                    <router-link to="/signup">
                        New Here? Create a new account
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                console.log(user)
                this.$router.replace('/comics')
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }
}
</script>
