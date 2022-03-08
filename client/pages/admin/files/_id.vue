<template>
    <ui-model-edit
        model-name="files"
        :model-id="$route.params.id"
        singular="Arquivo"
        plural="Arquivos"
        #default="{value, errorFields}"
    >    
        <template v-if="value.id">
            <ui-field label="Nome" layout="horizontal" :error="errorFields.name">
                <input type="text" class="form-control" v-model="value.name">
            </ui-field>
    
            <ui-field label="Pasta" layout="horizontal" :error="errorFields.folder">
                <input type="text" class="form-control" v-model="value.folder">
            </ui-field>
            
            <ui-field label="Arquivo" layout="horizontal">
                <a :href="value.url" :download="value.slug" class="btn btn-light">
                    Download <i class="fas fa-fw fa-download"></i>
                </a>
    
                <div class="bg-light text-center py-3 mt-3" v-if="value.type=='image'">
                    <img :src="value.url" alt="" style="max-width:400px; max-height:50vh; object-fit:cover;">
                </div>

                <div class="mb-3"></div>
                <ui-code v-model="value.content" :language="value.ext" style="height:400px;" v-if="value.is_text"></ui-code>
            </ui-field>
        </template>

        <template v-else>
            <ui-field label="Upload de arquivo" layout="horizontal">
                <ui-file-upload @success="$router.push(`/admin/files/${$event.id}`);"></ui-file-upload>
            </ui-field>
        </template>

    </ui-model-edit>
</template>

<script>
export default {
    layout: "default/admin",
    middleware: "auth",

    head() {
        return {
            title: "Editar arquivo",
        };
    },
}
</script>