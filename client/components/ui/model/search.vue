<template>
    <ui-form ref="search" method="get"
        :action="`/api/${modelName}/search`"
        v-model="searchParams"
        #default="{loading, response}"
        :mounted-submit="true"
        @response="searchParamsUrl()"
        class="ui-model-search"
    >
        <div class="row g-0">
            <div class="col-12 pb-3 px-2">
                <div class="d-flex align-items-center">
                    <div class="flex-grow-1 d-md-none pe-2">
                        <button type="button" class="btn btn-light w-100" @click="$refs.searchForm.show()">
                            Filtro
                        </button>
                    </div>

                    <div class="flex-grow-1 d-none d-md-block">
                        &nbsp;
                    </div>
                    
                    <ui-mobile-action>
                        <slot name="header-actions"></slot>
        
                        <transition name="el-fade-in-linear">
                            <a href="javascript:;" class="btn btn-danger" v-if="selecteds.length && !searchParams.deleted" @click="modelDelete(selecteds)">
                                <i class="fas fa-times me-1"></i> Deletar {{ selecteds.length }}
                            </a>
                        </transition>
        
                        <transition name="el-fade-in-linear">
                            <a href="javascript:;" class="btn btn-success" v-if="selecteds.length && searchParams.deleted" @click="modelRestore(selecteds)">
                                <i class="fas fa-times me-1"></i> Restaurar {{ selecteds.length }}
                            </a>
                        </transition>
        
                        <el-dropdown trigger="click">
                            <a href="javascript:;" class="btn btn-success">
                                <i class="fas fa-download me-1"></i> Exportar
                            </a>
        
                            <el-dropdown-menu>
                                <div style="width:150px;">
                                    <a href="javascript:;" class="d-block p-2" @click="downloadExport('csv')">CSV</a>
                                    <a href="javascript:;" class="d-block p-2" @click="downloadExport('json')">JSON</a>
                                    <a href="javascript:;" class="d-block p-2" @click="downloadExport('html')">HTML</a>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
        
                        <nuxt-link :to="`/admin/${modelName}/new`" class="btn btn-primary" v-if="actionsDefault">
                            <i class="fas fa-fw fa-plus me-1"></i> Novo
                        </nuxt-link>
                    </ui-mobile-action>
                </div>

            </div>
    
            <div class="col-12 col-md-3">
                <ui-mobile-action :slot-button="false" ref="searchForm">
                    
                    <div class="ui-model-search-search-fields mb-4">
                        <div class="input-group form-control p-0">
                            <input type="text" class="form-control border-0 bg-transparent" :placeholder="`Buscar ${plural}`" v-model="searchParams.q">
                            <div class="input-group-btn">
                                <button type="submit" class="btn border-0 bg-transparent shadow-none" v-loading="loading">
                                    <i class="fas fa-fw fa-search"></i>
                                </button>
                            </div>
                        </div>
    
                        <select class="form-control" v-model="searchParams.deleted" @change="submit()">
                            <option value="">Ativos</option>
                            <option value="1">Deletados</option>
                        </select>
    
                        <slot name="search-fields"></slot>
                    </div>
        
                    <button type="submit" class="btn btn-primary shadow-none w-100" v-loading="loading">
                        <i class="fas fa-fw fa-search"></i> Buscar
                    </button>
    
                    <button type="button" class="btn shadow-none w-100 mt-2" @click="searchParams=searchParamsDefault(); submit().then(resp => searchParamsUrl())">
                        <i class="fas fa-fw fa-times"></i> Limpar
                    </button>
    
                    <slot name="search-actions"></slot>
                </ui-mobile-action>
            </div>
    
            <div class="col-12 col-md-9 pt-3 pt-md-0 ps-md-3">
                <div class="bg-white shadow-sm">
                    <table class="table table-striped table-hover table-borderless m-0" style="box-shadow:none;">
                        <thead>
                            <tr>
                                <th width="30px">
                                    <input type="checkbox" @click="selecteds=$event.target.checked? response.data.map(item => item.id): [];">
                                </th>
                                <slot name="table-header">
                                    <th>-</th>
                                </slot>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
        
                            <!-- Empty -->
                            <tr v-if="response && response.data && response.data.length==0">
                                <slot name="table-empty">
                                    <td class="text-center py-3" colspan="10">
                                        Nenhum item encontrado
                                    </td>
                                </slot>
                            </tr>
        
                            <tr v-for="i in response.data">
                                <td>
                                    <input type="checkbox" :value="i.id" v-model="selecteds">
                                </td>
                                
                                <slot name="table-row" :item="i">
                                    <td>{{ i }}</td>
                                </slot>
    
                                <td class="text-end">
                                    <ui-mobile-action>
                                        <div class="ui-model-search-table-actions">
                                            <div class="ui-model-search-table-actions-content">
                                                <slot name="table-actions" :item="i"></slot>
                                                
                                                <slot name="table-actions-default" :item="i">
                                                    <nuxt-link :to="`/admin/${modelName}/${i.id}`" class="btn btn-primary" v-if="actionsDefault">
                                                        <i class="fas fa-fw fa-pen"></i>
                                                    </nuxt-link>
        
                                                    <button type="button" class="btn btn-success" @click="modelRestore(i.id)" v-if="actionsDefault && i.deleted_at">
                                                        <i class="fas fa-fw fa-undo"></i>
                                                    </button>
                    
                                                    <button type="button" class="btn btn-danger" @click="modelDelete(i.id)" v-if="actionsDefault && !i.deleted_at">
                                                        <i class="fas fa-fw fa-times"></i>
                                                    </button>
                                                </slot>
                                            </div>
                                        </div>
                                    </ui-mobile-action>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="p-2">
                        <el-pagination
                            background
                            layout="prev, pager, next, sizes"
                            :current-page.sync="searchParams.page"
                            :page-size.sync="searchParams.per_page"
                            :pager-count="11"
                            :total="(response? response.total: 0)"
                            :page-sizes="[5, 10, 25, 50, 100]"
                            @size-change="submit()"
                            @current-change="submit()"
                            @prev-click="submit()"
                            @next-click="submit()"
                        ></el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </ui-form>
</template>

<script>
export default {
    props: {
        modelName: {default:""},
        singular: {default:"Item"},
        plural: {default:"Itens"},
        changeUrl: {default:true},
        actionsDefault: {default:true},
    },

    data() {
        return {
            searchParams: this.searchParamsDefault(this.$route.query),
            selecteds: [],
            mobileSearchParamsModal: false,
        };
    },

    methods: {
        submit() {
            return new Promise((resolve, reject) => {
                this.mobileSearchParamsModal = false;
                setTimeout(() => {
                    this.selecteds = [];
                    this.$refs.search.submit().then(resp => {
                        resolve();
                    }).catch(reject);
                }, 10);
            });
        },

        searchParamsDefault(merge={}) {
            merge = {
                q: '',
                page: 1,
                per_page: 10,
                orderby: "updated_at",
                order: "desc",
                deleted: "",
                ...merge
            };
            ['page', 'per_page'].forEach(attr => { merge[attr] = parseInt(merge[attr]); });
            return merge;
        },

        searchParamsUrl() {
            if (!this.changeUrl) return;
            this.$router.push({
                query: this.searchParams,
            });
        },

        orderByArrow() {
            this.$el.querySelectorAll('[data-orderby]').forEach(elem => {
                let orderby = elem.getAttribute("data-orderby");
                if (this.searchParams.orderby==orderby) { elem.setAttribute("data-order", this.searchParams.order); }
                else { elem.removeAttribute("data-order"); }
            });
        },

        orderbyHandleClick() {
            this.$el.addEventListener('click', ev => {
                let target = ev.target;
                let orderby = target.getAttribute("data-orderby");
                if (!orderby) return;

                if (orderby==this.searchParams.orderby) {
                    this.searchParams.order = this.searchParams.order=="asc"? "desc": "asc";
                }

                this.searchParams.orderby = orderby;
                this.orderByArrow();
                this.searchParamsUrl();
                this.submit();
            });
            this.orderByArrow();
        },

        downloadExport(format) {
            let u = new URLSearchParams();
            for(let i in this.searchParams) { u.append(i, this.searchParams[i] || ''); }
            u.append('format', format);
            
            this.$axios({
                url: `/api/${this.modelName}/export?${u.toString()}`,
                method: "get",
                responseType: 'blob',
            }).then(resp => {
                Object.assign(document.createElement('a'), {
                    href: URL.createObjectURL(resp.data),
                    download: `data-export.${format}`,
                }).click();
            });
        },

        modelDelete(id) {
            let forced = !!this.searchParams.deleted;
            let confirmText = forced? `Deseja deletar estes itens permanentemente?\nEsta ação não pode ser desfeita.`: 'Deseja deletar estes itens?';
            let deleted = forced;
            this.$confirm(confirmText).then(resp => {
                this.$axios.post(`/api/${this.modelName}/delete`, {id, deleted, forced}).then(resp => {
                    this.selecteds = [];
                    this.submit();
                });
            });
        },

        modelRestore(id) {
            this.$confirm('Deseja restaurar este item?').then(resp => {
                this.$axios.post(`/api/${this.modelName}/restore`, {id, deleted:1}).then(resp => {
                    this.submit();
                });
            });
        },
    },

    mounted() {
        this.orderbyHandleClick();
    },
}
</script>

<style>
/* Mobile actions */
@media (min-width: 0) and (max-width: 768px) {
    .ui-model-search-table-actions-content .btn {
        width: 100%;
        margin-bottom: 10px;
    }
}

/* Desktop actions */
@media (min-width: 768px) {
    .ui-model-search-table-actions {
        position: relative;
        transition: all 300ms ease;
        visibility: hidden;
        opacity: 0;
    }
    
    .ui-model-search tr:hover .ui-model-search-table-actions {
        visibility: visible;
        opacity: 1;
    }
    
    .ui-model-search-table-actions-content {
        position: absolute;
        top: -22px;
        right: 0;
        white-space: nowrap;
    }

    .ui-model-search-table-actions-content .btn {
        padding: 6px 8px;
        border-radius: 50%;
        margin-left: 5px;
    }
}


.ui-model-search-search-fields > * {
    margin-bottom: 15px;
}

.ui-model-search [data-orderby] {cursor:pointer;}
.ui-model-search [data-order="asc"]:after {content: "↓"; float: right;}
.ui-model-search [data-order="desc"]:after {content: "↑"; float: right;}
</style>