<template>
    <div>
        <div class="d-flex" v-if="$auth.user">
            <div class="bg-dark" style="height:100vh; width:200px;">
                <ui-nav :items="navItems" text-color="#fff"></ui-nav>
            </div>
    
            <div class="flex-grow-1 p-3" style="height:100vh; overflow:auto;">
                <nuxt-child></nuxt-child>
            </div>
        </div>

        <div class="mx-auto mt-5" style="max-width:400px;" v-else>
            <div class="mb-3">É necessário estar logado para visualizar este conteúdo.</div>
            <ui-auth-login :redirect="$route.path"></ui-auth-login>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {label:"Home", to:"/dev/", children:[]},
                {label:"Endpoints", to:"/dev/endpoints/", children:[]},
            ],
        };
    },
}
</script>