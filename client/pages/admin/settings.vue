<template>
    <ui-form method="post" action="/api/settings" v-model="settings" #default="{loading, response}" success-text="Configurações salvas">
        <div class="row g-0 bg-white shadow-sm">
            <div class="col-12 col-md-2 bg-light">
                <ui-nav :items="navItems"></ui-nav>
            </div>
    
            <div class="col-12 col-md-10 p-3">
                <nuxt-child v-model="settings"></nuxt-child>
            </div>
                
            <div class="col-12 bg-light text-end p-2">
                <button type="submit" class="btn btn-primary" v-loading="loading">
                    Salvar
                </button>
            </div>
        </div>
    </ui-form>
</template>

<script>
export default {
    layout: "default/admin",
    middleware: 'auth',

    head() {
        return {
            title: "Configurações",
        };
    },

    data() {
        return {
            navItems: [
                {label:"Principal", to:"/admin/settings"},
                {label:"E-mail", to:"/admin/settings/email"},
                {label:"Arquivos", to:"/admin/settings/files"},
            ],
            settings: {},
        };
    },

    methods: {
        settingsGetAll() {
            this.$axios.get('/api/settings').then(resp => {
                this.settings = resp.data;
            });
        },
    },

    mounted() {
        this.settingsGetAll();
    },
}
</script>