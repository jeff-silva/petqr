<template>
    <div>
        <ui-model-search model-name="user" singular="Usuário" plural="Usuários">
            <template #table-header="">
                <td width="50px"></td>
                <td data-orderby="name">Nome</td>
            </template>

            <template #table-row="{item}">
                <td>
                    <el-image :src="item.photo? item.photo.url: ''" fit="cover" lazy style="width:50px; height:50px; border-radius:50%;">
                        <div slot="error" style="background:#ddd; height:50px;"></div>
                    </el-image>
                </td>
                <td>
                    <div class="fw-bold">{{ item.name }}</div>
                    <div class="text-muted">{{ item.email }}</div>
                </td>
            </template>
        </ui-model-search>
    </div>
</template>

<script>
export default {
    layout: "default/admin",
    middleware: "auth",

    head() {
        return {
            title: "Buscar usuários",
        };
    },
}
</script>