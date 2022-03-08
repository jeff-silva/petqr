<template>
    <div class="d-inline-block">
        <div class="d-md-none" @click="drawer=true">
            <slot name="button">
                <button type="button" class="btn bg-white shadow-sm" style="padding:5px 7px; border-radius:50%;">
                    <i class="fas fa-fw fa-ellipsis-v"></i>
                </button>
            </slot>
        </div>

        <ui-modal v-model="drawer">
            <template #header>
                Ações
            </template>

            <template #body>
                <slot></slot>
            </template>

            <template #footer>
                <button type="button" class="btn bg-white shadow-sm" @click="drawer=false">
                    Fechar
                </button>
            </template>
        </ui-modal>

        <div class="d-none d-md-block">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        };
    },
}
</script>