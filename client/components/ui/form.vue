<template>
    <form action="" @submit.prevent="submit()">
        <slot :loading="loading" :response="response" :error="error" :error-fields="errorFields"></slot>
    </form>
</template>

<script>
export default {
    props: {
        value: [Boolean, Object],
        method: {default:"get"},
        action: {default:""},
        mountedSubmit: {default:false, type:Boolean},
        successText: {default:""},
    },

    data() {
        return {
            loading: false,
            response: false,
            error: false,
            errorFields: {},
        };
    },

    methods: {
        submit() {
            this.loading = true;
            this.error = false;
            this.errorFields = {};
            
            let axios = this.$axios({
                method: this.method,
                url: this.action,
                data: (this.method!='get'? this.value: null),
                params: (this.method=='get'? this.value: null),
            }).then(resp => {
                let respData = this.parseResponseData(resp.data);
                this.loading = false;
                this.response = respData;
                this.$emit('success', respData);
                this.$emit('response', respData);
                if (this.successText) {
                    this.$swal.fire(this.successText);
                }
            }).catch(err => {
                let respData = this.parseResponseData(err.response.data);
                this.loading = false;
                this.error = respData.message;
                this.errorFields = respData.fields;
                this.$emit('error', respData);
                this.$emit('response', respData);
            });

            return axios;
        },

        parseResponseData(respData) {
            ['per_page', 'page'].forEach(attr => {
                if (typeof respData[attr]=="string") {
                    respData[attr] = parseInt(respData[attr]);
                }
            });

            return respData;
        },
    },

    mounted() {
        if (this.mountedSubmit) {
            this.submit();
        }
    }
}
</script>