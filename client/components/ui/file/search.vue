<template>
    <div>
        <!-- <ui-file-upload></ui-file-upload> -->

        <ui-model-search model-name="files" ref="filesSearch" :change-url="false" :actions-default="false" singular="Arquivo" plural="Arquivos">
            <template #table-header>
                <th>Thumb</th>
                <th data-orderby="name">Nome</th>
            </template>

            <template #table-row="{item}">
                <td>
                    <img :src="item.url" alt="" v-if="item.type=='image'" style="width:50px; height:50px; object-fit:cover;">
                    <div v-else style="width:50px; height:50px; background:#eee; display:flex; align-items:center; justify-content:center;">{{ item.ext }}</div>
                </td>
                <td>
                    <div class="fw-bold">{{ item.name }}</div>
                    <div v-if="item.folder"><small>/{{ item.folder }}</small></div>
                    <div><small>{{ item.size|strFileSize }}</small></div>
                </td>
            </template>

            <template #table-actions="{item}">
                <a href="javascript:;" class="btn btn-success" @click="itemEdit=item">
                    <i class="fas fa-fw fa-pen"></i>
                </a>
                <a href="item.url" :download="item.slug" class="btn btn-primary">
                    <i class="fas fa-fw fa-download"></i>
                </a>
            </template>

            <template #header-actions>
                <ui-file-upload :dropdown-left="false" @success="submit()"></ui-file-upload>
            </template>
        </ui-model-search>

        <ui-model-edit model-name="files" v-model="itemEdit" @success="$refs.filesSearch.submit().then(resp => itemEdit=false)" :show-actions="false">
            <ui-modal v-model="itemEdit">
                <template #header>Editar {{ itemEdit.name || "Novo" }}</template>
                <template #body>
                    <ui-field label="Nome">
                        <input type="text" class="form-control" v-model="itemEdit.name">
                    </ui-field>
    
                    <ui-field label="Pasta">
                        <input type="text" class="form-control" v-model="itemEdit.folder">
                    </ui-field>
                </template>
    
                <template #footer>
                    <button type="submit" class="btn btn-primary">
                        Salvar
                    </button>
                </template>
            </ui-modal>
        </ui-model-edit>

    </div>
</template>

<script>
export default {
    data() {
        return {
            files: {},
            itemEdit: false,
        };
    },

    methods: {
        submit() {
            return this.$refs.filesSearch.submit();
        },
    },

    mounted() {
        this.submit();
    },
}
</script>