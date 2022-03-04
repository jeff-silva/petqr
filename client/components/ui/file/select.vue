<template>
    <div class="shadow-sm bg-light p-1" style="display:flex; flex-direction:column; position:relative; height:300px;">
        <div style="display:flex; flex-direction:column; justify-content: center;">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <ui-file-upload @success="props.value=$event.id;">
                        <template #button>
                            <button type="button" class="btn btn-success rounded-0 w-100">
                                <i class="fas fa-fw fa-upload"></i> Upload
                            </button>
                        </template>
                    </ui-file-upload>
                </div>

                <a :href="file.url" :download="file.slug" v-if="file" class="btn btn-outline-primary rounded-0 ms-1">
                    <i class="fas fa-fw fa-download"></i>
                </a>

                <button type="button" class="btn btn-outline-danger rounded-0 ms-1" @click="photoRemove()">
                    <i class="fas fa-fw fa-times"></i>
                </button>
            </div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; flex:1; position:relative;" class="p-3">

            <!-- No file -->
            <div v-if="!file">Selecione um arquivo</div>
            
            <!-- Preview image -->
            <img :src="file.url" alt="" style="position:absolute; max-width:400px; height:calc(100% - 30px); object-fit:cover;" v-if="file && file.type=='image'">
        
            <!-- <pre>{{ file }}</pre> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {default:""},
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
            this.photoFind();
        }},
    },

    data() {
        return {
            file: false,
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },

    methods: {
        photoFind() {
            if (!this.props.value) return;
            this.$axios.get(`/api/files/find/${this.props.value}`).then(resp => {
                this.file = resp.data;
            });
        },

        photoRemove() {
            this.$confirm('Deseja remover arquivo?').then(resp => {
                this.props.value = '';
                this.file = false;
            });
        },
    },

    mounted() {
        this.photoFind();
    },
}
</script>