<template>
    <div class="container" v-if="pet">
        <div class="row">
            <div class="col-6">
                <h1>{{ pet.name }}</h1>
                <div v-html="pet.description"></div>
            </div>

            <div class="col-6">
                <img :src="pet.pet_photo.url" alt="" v-if="pet.pet_photo" width="100%">
            </div>
        </div>
        <!-- <pre>{{ $data }}</pre> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            pet: false,
        };
    },

    methods: {
        petqrCollarsFind() {
            if (!this.$route.params.slug) return;
            this.$axios.get(`/api/petqr-collars/find/${this.$route.params.slug}`).then(resp => {
                this.pet = resp.data;
            });
        },
    },

    mounted() {
        this.petqrCollarsFind();
    },
}
</script>