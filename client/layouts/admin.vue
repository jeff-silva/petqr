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
            ],
        };
    },
}
</script>