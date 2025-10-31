<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MENÚ</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/coches">Coches</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/customers">Customers</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/empleados">Empleados</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="oficio in oficios" :key="oficio">
                            <router-link class="dropdown-item" :to="'/oficioscomponent/'+oficio">
                                {{ oficio }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import ServiceEmpleados from './../services/ServiceEmpleados';

    const service = new ServiceEmpleados();

    export default 
    {
        name:"MenuComponent",
        data()
        {
            return{
                oficios:[]
            }
        },
        mounted()
        {
            this.sacarOficios();
        },
        methods:
        {
            sacarOficios()
            {
                service.sacarOficios().then(result =>
                {
                    this.oficios = result;
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>