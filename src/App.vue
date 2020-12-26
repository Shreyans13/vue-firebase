<template>
    <div id="app" class="content">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        created() {
            if (this.$workbox) {
                    this.$workbox.addEventListener("waiting", () => {
                    this.showUpdateUI = true;
                });
            }
        },
        async accept() {
            this.showUpdateUI = false;
            await this.$workbox.messageSW({ type: "SKIP_WAITING" });
        }
    }
</script>
