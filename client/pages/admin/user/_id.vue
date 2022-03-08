<template>
    <ui-model-edit model-name="user" :model-id="_userId" singular="Usuário" plural="Usuários" #default="{value, errorFields}">
        <ui-field label="Nome" layout="horizontal" :error="errorFields.name">
            <input type="text" class="form-control" v-model="value.name">
        </ui-field>

        <ui-field label="E-mail" layout="horizontal" :error="errorFields.email">
            <input type="text" class="form-control" v-model="value.email">
        </ui-field>

        <ui-field label="Senha" layout="horizontal" :error="errorFields.password">
            <ui-password v-model="value.password"></ui-password>
        </ui-field>

        <ui-field label="Foto" layout="horizontal" :error="errorFields.photo_id">
            <ui-file-select v-model="value.photo_id"></ui-file-select>
        </ui-field>
    </ui-model-edit>
</template>

<script>
export default {
    layout: "default/admin",
    middleware: "auth",

    head() {
        return {
            title: "Editar usuário",
        };
    },

    computed: {
        _userId() {
            let userId = this.$route.params.id || false;
            return userId=="me"? this.$auth.user.id: userId;
        },
    },

    data() {
        return {
            baseUrl: ((new URL(location.href)).protocol+ '//'+ (new URL(location.href)).host +'/'),
        };
    },
}
</script>