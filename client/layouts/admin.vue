<template>
    <div>
        <ui-app>
            <template #content>
                <nuxt></nuxt>
            </template>

            <template #nav-header>
                <div class="py-5 text-center border-bottom">
                    Bem vindo {{ $auth.user.name }}
                </div>
            </template>

            <template #nav-body>
                <ui-nav :items="navItems"></ui-nav>
            </template>

            <template #header>
                <ui-autocomplete action="/api/app/search" :params="{q:'', limit:3}" style="max-width:250px;">
                    <template #response="{loading, response}">
                        <div class="bg-white shadow-sm">
                            <div v-for="r in response" v-if="r.items.length">
                                <div style="background:#ddd; padding:4px; font-size:14px;">{{ r.name }}</div>
                                <div v-for="i in r.items" style="overflow:hidden;">
                                    <nuxt-link :to="i.url" class="d-block p-1" style="color:#666; text-decoration:none;">
                                        {{ i.name }}
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </template>
                </ui-autocomplete>
            </template>
        </ui-app>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {label:"Dashboard", to:"/admin"},
                // {label:"Páginas", children:[
                //     {label:"Buscar", to:"/admin/pages", children:[]},
                //     {label:"Novo", to:"/admin/pages/new", children:[]},
                // ]},
                {label:"Usuários", children:[
                    {label:"Buscar", to:"/admin/user", children:[]},
                    {label:"Novo", to:"/admin/user/new", children:[]},
                ]},
                {label:"Configurações", to:"/admin/settings", children:[]},
                {label:"Arquivos", children:[
                    {label:"Buscar", to:"/admin/files", children:[]},
                    {label:"Novo", to:"/admin/files/new", children:[]},
                ]},
                {label:"Coleiras", children:[
                    {label:"Buscar", to:"/admin/petqr-collars", children:[]},
                    {label:"Novo", to:"/admin/petqr-collars/new", children:[]},
                ]},
                {label:"Meus dados", to:"/admin/user/me"},
            ],
        };
    },
}
</script>