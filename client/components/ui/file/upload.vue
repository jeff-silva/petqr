<template>
    <div style="position:relative;">

        <div @click="props.modalOpen=true">
            <slot name="button">
                <button type="button" class="btn btn-outline-light w-100">
                    Upload <i class="fas fa-fw fa-upload"></i>
                </button>
            </slot>
        </div>

        <ui-modal v-model="props.modalOpen" style="text-align:left!important;">
            <template #header>Upload</template>

            <template #body>
                <ui-field label="Descrição do arquivo">
                    <input type="text" class="form-control" v-model="save.name">
                </ui-field>

                <ui-field label="Pasta">
                    <input type="text" class="form-control" v-model="save.folder">
                </ui-field>

                <el-tabs value="upload">
                    <el-tab-pane label="Upload" name="upload">
                        <ui-field label="Faça upload">
                            <button type="button" class="btn btn-outline-light w-100" @click="openFileBrowser()">
                                <span>{{ file? file.name: "Upload" }}</span> <i class="fas fa-fw fa-upload"></i>
                            </button>
                        </ui-field>
                    </el-tab-pane>

                    <el-tab-pane label="URL" name="url">
                        <ui-field label="Informe a URL externa da imagem">
                            <input type="text" class="form-control" v-model="save.url">
                        </ui-field>
                    </el-tab-pane>

                    <el-tab-pane label="Biblioteca" name="library">
                        <ui-field label="Selecione da biblioteca">
                            <ui-file-library v-model="save.url" return-field="url"></ui-file-library>
                        </ui-field>
                    </el-tab-pane>
                </el-tabs>
            </template>

            <template #footer>
                <button type="button" class="btn btn-light" @click="props.modalOpen=false">
                    <i class="fas fa-fw fa-times"></i> Cancelar
                </button>

                <button type="button" class="btn btn-primary" @click="fileSave()" v-loading="uploading">
                    <i class="fas fa-fw fa-save"></i> Salvar
                </button>
            </template>
        </ui-modal>
    </div>
</template>

<script>
export default {
    props: {
        type: {default:"base64"}, // base64, base64-json, url, file-json
        folder: {default:""}, // pasta de upload
        multiple: {default:true},
        dropArea: {default:true},
        uploadOnSelect: {default:true}, // false = necessita clicar no arquivo listado para iniciar o upload
        dropdownLeft: {default:true}, // dropdown alinhado à esquerda?
        modalOpen: {default:false}, // Exibir modal para upload?
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
            success: false,
            error: false,
            uploadPercent: 0,
            uploading: false,
            file: false,
            save: {
                folder: this.$props.folder,
            },
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },

    methods: {
        openFileBrowser() {
            Object.assign(document.createElement('input'), {
                type: "file",
                onchange: (ev) => {
                    this.file = ev.target.files[0];
                },
            }).click();
        },

        fileSave() {
            let data = new FormData();
            for(let i in this.save) data.append(i, this.save[i]);
            if (this.file) data.append("file", this.file, this.file.name);

            this.success = false;
            this.error = false;
            this.uploadPercent = 0;

            this.uploading = true;
            this.$axios.post('/api/files/upload', data, {
                onUploadProgress: (ev) => {
                    file.uploadPercent = Math.round((ev.loaded * 100) / ev.total);
                },
            }).then(resp => {
                this.uploading = false;
                this.success = true;
                this.file = false;
                this.save = {};
                this.props.modalOpen = false;
                this.$emit('success', resp.data);
            }).catch(err => {
                this.uploading = false;
                this.error = err.response.data.message || "Erro desconhecido";
                this.$emit('error', err.response.data);
            });
        },
    },
}
</script>

<style>
.ui-file-upload-droparea {
    border: dashed 3px var(--bs-gray-300);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
}
</style>