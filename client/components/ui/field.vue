<template>
    <div class="ui-field mb-3" :class="{'d-flex':widthBig}">
        <div :class="{'py-2':widthBig, 'pb-1':!widthBig}" :style="`min-width:${widthBig? null: labelWidth}; max-width:${widthBig? null: labelWidth};`">
            <slot name="label">{{ label }}</slot>
        </div>

        <div :class="{'flex-grow-1':widthBig}">
            <slot></slot>
            <small class="d-block text-danger" v-if="_compError" v-html="_compError"></small>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {default:''},
        labelWidth: {default:'200px'},
        error: [Boolean, Number, String, Array, Object],
    },

    computed: {
        _compError() {
            let error = [];

            if (typeof this.error=='string') {
                error = [this.error];
            }
            else if (Array.isArray(this.error)) {
                error = this.error;
            }
            else if (typeof this.error=='object') {
                error = Object.values(this.error);
            }

            return error.join('<br>');
        },
    },

    data() {
        return {
            width: 0,
            widthBig: false,
        };
    },

    methods: {
        registerResizeHandler() {
            this.width = this.$el.offsetWidth;
            this.widthBig = this.$el.offsetWidth>=700;
        },
    },

    mounted() {
        this.registerResizeHandler();
        window.addEventListener('resize', ev => {
            this.registerResizeHandler();
        });
    },
}
</script>

<style>
.ui-field-info * {font-size:12px; color:var(--bs-gray) !important;}
</style>