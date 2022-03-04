<template>
    <div>
        <ui-field label="Nome da aplicação" layout="horizontal">
            <input type="text" class="form-control" v-model="value['app.name']">
        </ui-field>
        
        <ui-field label="Timezone" layout="horizontal">
            <input type="text" class="form-control" v-model="value['app.timezone']">
        </ui-field>
        
        <ui-field label="Locale" layout="horizontal">
            <input type="text" class="form-control" v-model="value['app.locale']">
        </ui-field>
        
        <ui-field label="Tempo de autenticação" layout="horizontal">
            <select class="form-control" v-model="value['jwt.ttl']">
                <option :value="60">1 hora</option>
                <option :value="60*4">4 horas</option>
                <option :value="60*8">8 horas</option>
                <option :value="60*12">12 horas</option>
                <option :value="60*24">24 horas</option>
                <option :value="60*24*15">15 dias</option>
                <option :value="60*24*30">30 dias</option>
                <option :value="60*24*30*6">6 meses</option>
                <option :value="60*24*30*12">1 ano</option>
            </select>
        </ui-field>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Configurações principais",
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