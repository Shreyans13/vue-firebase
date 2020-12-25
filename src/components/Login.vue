<template>
    <div class="login">
        <img src="../assets/dc_logo.jpg" alt="Dc Logo" width="300px">
        <h3>DC Comics Rebirth - Covers</h3>
        <input 
            type="text"
            v-model="email"
            placeholder="Email address"
            class="input"
            required>
        <br />
        <input 
            type="password"
            v-model="password"
            placeholder="Password"
            class="input"
            required>
        <br />
        <button v-on:click="login" class="button">Enter</button>
        <p>
            <router-link to="/signup">
                New Here? Create a new account
            </router-link>
        </p>
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

<style scoped>
    .login {
        /* align-self: center; */
        /* margin-top: 40px; */
        margin: auto;
        width: 50%;
        padding: 10px;
    }
    input {
        /* align-self: center; */
        margin: 10px 0;
        /* width: auto; */
        padding: 15px;
    }
    button {
        margin: 10px 0;
        background-color: #0476F2;
        /* color: whitesmoke; */
    }
    a {
        /* color: black; */
        /* text-decoration: underline; */
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
</style>