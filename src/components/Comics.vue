<template>
    <div>
        <button class="button logout" v-on:click="logout" >Logout</button>
        <article class="covers" v-for="(comic, idx) in comics" :key="idx">
            <div>
                <img style="margin: 10px" :src="comic.image" height="250px" width="250px" alt="Comic Image">
                <p> {{ comic.name }} </p>
                <hr>
                <button class="button" @click="deleteComic(comic.id)">Delete</button>
            </div>
        </article>
        
        <form @submit="addComic(name, image)">
            <h2>Add a new Comic Cover</h2>
            <input v-model="name" placeholder="Comic Name" class="input" required>
            <input v-model="image" placeholder="Comic Image" class="input" required>
            <button type="submit" class="button">Add a New Comic</button>
        </form>
    </div>
</template>

<script>
import firebase from '../firebase'

export default {
    name : 'Comics',
    data() {
        return {
            comics: [],
            name: '',
            image: ''
        }
    },
    methods: {
        addComic (name, image) {
            const createdAt = new Date();
            firebase.firestore().collection('comics').add({name, image, createdAt})
            this.name = ''
            this.image = ''
        },
        deleteComic(id) {
            firebase.firestore().collection('comics').doc(id).delete()
        },
        logout () {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })

            console.log("log out")
        }
    },
    mounted() {
        firebase.firestore().collection('comics').orderBy('createdAt').onSnapshot(snaps => {
            let array = []
            snaps.forEach((info) => {
                let d = info.data()
                d["id"] = info.id
                array.push(d)
            })
            this.comics = array
        })
    },
}
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: black;
    }
    input, button {
        margin-bottom: 10px;
    }
    button {
        background-color: #0476F2;
    }
    .logout {
        left: 50%;
        top: 100%;
    }
</style>