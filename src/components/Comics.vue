<template>
  <div>
    <Navbar />
    <div class="columns m-6 is-multiline">
      <div
        class="column is-one-fifth"
        v-for="(comic, idx) in comics"
        :key="idx"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="comic.image" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ comic.name }}</p>
              </div>
            </div>
            <div class="content">
              {{ comic.description }}
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item" @click="deleteComic(comic.id)"
              >Delete</a
            >
          </footer>
        </div>
      </div>
      <div class="column is-one-fifth">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://media4.giphy.com/media/14czrmo1yML85y/giphy.gif"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <form @submit="addComic(name, image, description)">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Add a new Comic</p>
                  <input
                    v-model="name"
                    placeholder="Comic Name"
                    class="input"
                    required
                  />
                  <input
                    v-model="image"
                    placeholder="Comic Image"
                    class="input"
                    required
                  />
                  <input
                    v-model="description"
                    placeholder="Comic Description"
                    class="input"
                    required
                  />
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a
                v-on:click="addComic(name, image, description)"
                class="card-footer-item"
                >Add a New Comic</a
              >
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
// import Navbar from '../components/subComponents/navbar'
import Navbar from "./subComponents/navbar.vue";
export default {
  name: "Comics",
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      comics: [],
      name: "",
      image: ""
    };
  },
  methods: {
    addComic(name, image, description) {
      const createdAt = new Date();
      firebase
        .firestore()
        .collection("comics")
        .add({ name, image, description, createdAt });
      this.name = "";
      this.image = "";
      this.description = "";
    },
    deleteComic(id) {
      firebase
        .firestore()
        .collection("comics")
        .doc(id)
        .delete();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });

      console.log("log out");
    }
  },
  mounted() {
    firebase
      .firestore()
      .collection("comics")
      .orderBy("createdAt")
      .onSnapshot(snaps => {
        let array = [];
        snaps.forEach(info => {
          let d = info.data();
          d["id"] = info.id;
          array.push(d);
        });
        this.comics = array;
      });
  }
};
</script>
