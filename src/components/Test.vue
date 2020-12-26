<template>
    <div>
        <Navbar />
        <div class="columns m-6 is-multiline">
            <div class="column is-one-fifth" v-for="i in 7" :key="i">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://cdn.vox-cdn.com/thumbor/2hcZHf3IO6IRSi9iyqctVhmBT8g=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19736955/GettyImages_1202254631.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">John Smith</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
        <div class="notification is-primary mx-5 ">
            <div class="buttons is-justify-content-center">
                <b-button type="is-primary" inverted>Add a Comic</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './subComponents/navbar'
export default {
    name: 'Test',
    components : {
        'Navbar' : Navbar
    }
}
</script>

