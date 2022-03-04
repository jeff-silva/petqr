<template>
    <div class="container">
        Aa
    </div>
</template>

<script>
export default {
    methods: {
        petqrCollarsFind() {
            if (!this.$route.params.slug) return;
            this.$axios.get(`/api/petqr-collars/find/${this.$route.params.slug}`).then(resp => {
                console.log(resp.data);
            });
        },
    },

    mounted() {
        this.petqrCollarsFind();
    },
}
</script>