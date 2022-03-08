<template>
    <div>
        <ui-model-search model-name="petqr-collars" singular="Coleira" plural="Coleiras">
            <template #table-header="">
                <th width="50px" data-orderby="name">Nome</th>
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
    layout: "default/admin",
    middleware: "auth",

    head() {
        return {
            title: "Buscar coleiras",
        };
    },
}
</script>