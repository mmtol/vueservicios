<template>
    <div>
        <h1>COCHES</h1>
        <div v-for="coche in coches" :key="coche">
            <h2>{{coche.marca}}</h2>
            <img :src="coche.imagen"/>
            <h3>Modelo: {{coche.modelo}}</h3>
            <h3>Conductor: {{coche.conductor}}</h3>
        </div>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';

    const service = new ServiceCoches();

    export default 
    {
        name:"CochesComponent",
        data()
        {
            return{
                coches:[]
            }
        },
        methods:
        {
            cargarCoches()
            {
                service.getCoches.then(result => 
                {
                    this.coches = result;
                })
            }
        },
        mounted()
        {
            this.cargarCoches();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>