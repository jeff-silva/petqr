<template>
    <div>
        <ui-model-search model-name="files" singular="Arquivo" plural="Arquivos" ref="modelSearch">
            <template #table-header="">
                <th width="50px">Thumb</th>
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

            <template #header-actions>
                <ui-file-upload @success="$refs.modelSearch.submit()"></ui-file-upload>
            </template>
        </ui-model-search>
    </div>
</template>

<script>
export default {
    layout: "admin",
    middleware: "auth",

    head() {
        return {
            title: "Buscar usuários",
        };
    },
}
</script>