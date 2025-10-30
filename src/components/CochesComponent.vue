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
    import axios from 'axios';

    //las variables pra que sean accesibles desde cualquier forma se declaran aqui
    let url = "https://apicochespaco.azurewebsites.net/";

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
                var endPoint = "webresources/coches";
                axios.get(url+endPoint).then(response =>
                    {
                        this.coches = response.data;
                    }
                )
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