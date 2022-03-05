<template>
    <div class="ui-field mb-3" :class="{'d-flex':widthBig, 'ui-field-error':_compError}">
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
            this.widthBig = this.$el.offsetWidth>=600;
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
.ui-field > * {transition: all 300ms ease;}
.ui-field-error .form-control,
.ui-field-error .el-input__inner {
    border-color: var(--bs-danger);
    box-shadow: none !important;
    outline: 0 !important;
}
</style>