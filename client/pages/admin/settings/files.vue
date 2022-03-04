<template>
    <div>
        <ui-field label="Salvar uploads em:" layout="horizontal">
            <select class="form-control" v-model="value['app_model_files.storage_type']">
                <option value="database">Banco de dados</option>
                <option value="file">Pasta de uploads</option>
            </select>
        </ui-field>

        <ui-field label="Gerenciar arquivos" layout="horizontal">
            <nuxt-link to="/admin/files" class="btn btn-light">Arquivos</nuxt-link>
        </ui-field>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Configurações de arquivos",
        };
    },

    props: {
        value: {default:()=>({})},
    },

    watch: {
        props: {deep:true, handler(value) {
            for(let i in value) this.$emit(i, value[i]);
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },
}
</script>