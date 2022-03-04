<template>
    <ui-model-edit model-name="petqr-collars" :model-id="$route.params.id" singular="Coleira" plural="Coleiras" #default="{value, errorFields}">
        <ui-field label="Nome do pet" layout="horizontal" :error="errorFields.name">
            <input type="text" class="form-control" v-model="value.name">
        </ui-field>

        <ui-field label="Proprietário" layout="horizontal" :error="errorFields.owner_id">
            <ui-model-select model-name="user" v-model="value.owner_id"></ui-model-select>
        </ui-field>

        <ui-field label="Foto do pet" layout="horizontal" :error="errorFields.pet_photo_id">
            <ui-file-select v-model="value.pet_photo_id"></ui-file-select>
        </ui-field>

        <ui-field label="Descrição" layout="horizontal" :error="errorFields.description">
            <ui-html v-model="value.description"></ui-html>
        </ui-field>
        
        <ui-field label="QR code" layout="horizontal" v-if="value.links && value.links.qrcode">
            <div class="text-center">
                <img :src="value.links.qrcode" alt=""><br>
                <a :href="value.links.page" target="_blank">Acessar</a>
            </div>
        </ui-field>
    </ui-model-edit>
</template>

<script>
export default {
    layout: "admin",
    middleware: "auth",

    head() {
        return {
            title: "Editar coleira",
        };
    },

    data() {
        return {
            baseUrl: ((new URL(location.href)).protocol+ '//'+ (new URL(location.href)).host +'/'),
        };
    },
}
</script>