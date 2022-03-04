<template>
    <div>
        <ui-model-search model-name="user" singular="Usuário" plural="Usuários">
            <template #table-header="">
                <td data-orderby="name">Nome</td>
            </template>

            <template #table-row="{item}">
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
    layout: "admin",
    middleware: "auth",

    head() {
        return {
            title: "Buscar usuários",
        };
    },
}
</script>