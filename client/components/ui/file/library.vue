<template>
    <div>
        
        <!-- Search -->
        <div class="input-group form-control p-0">
            <input type="text" class="form-control border-0 shadow-none" placeholder="Buscar arquivo" v-model="search.params.q" @keyup="filesSearch()">
            
            <div class="input-group-btn">
                <button type="button" class="btn btn-primary border-0 shadow-none rounded-0" v-loading="search.loading">
                    <i class="fas fa-fw fa-search"></i>
                </button>
            </div>
        </div>

        <div class="list-inline p-2 border border-light shadow-sm mt-2" v-if="search.response">
            <div class="list-inline-item" style="cursor:pointer;" v-if="search.response.data.length==0">
                <div style="padding:12px 0; width:100%; text-align:center;">Nenhum arquivo encontrado</div>
            </div>

            <div class="list-inline-item" style="cursor:pointer;" v-for="f in search.response.data" @click="filesSelect(f)">
                <img :src="f.url" alt="" v-if="f.type=='image'" style="width:50px; height:50px; object-fit:cover;" :key="f.id">
                <div v-else style="padding:12px 0; width:50px; text-align:center;">{{ f.ext }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {default:""},
        returnField: {default:false, type:[Boolean, String]},
    },

    watch: {
        $props: {deep:true, handler(value) {
            if (this.__preventRecursive) return;
            this.props = JSON.parse(JSON.stringify(value));
        }},

        props: {deep:true, handler(value) {
            this.__preventRecursive = true;
            this.$emit('input', value.value||false);
            for(let i in value) { this.$emit(`update:${i}`, value[i]); }
            setTimeout(() => { this.__preventRecursive = false; }, 10);
        }},
    },

    data() {
        return {
            search: {
                params: {
                    q: '',
                },
                loading: false,
                response: false,
            },
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },

    methods: {
        filesSearch() {
            this.search.loading = true;
            if (this.__fileSearchTimeout) clearTimeout(this.__fileSearchTimeout);
            this.__fileSearchTimeout = setTimeout(() => {
                this.$axios.get('/api/files/search', {params:this.search.params}).then(resp => {
                    this.search.loading = false;
                    this.search.response = resp.data;
                });
            }, 1000);
        },

        filesSelect(file) {
            file = JSON.parse(JSON.stringify(file));
            if (this.returnField) { file = file[this.returnField] || false; }
            this.props.value = file;
        },
    },
}
</script>