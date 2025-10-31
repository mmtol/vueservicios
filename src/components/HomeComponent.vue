<template>
    <div>
        <h1>HOME</h1>
        <h2>{{ mensaje }}</h2>
    </div>
</template>

<script>
    import ServiceEjemplo from './../services/ServiceEjemplo';
    //para poder utilizar el servicio necesitamos una instancia de la clase servicio
    const service = new ServiceEjemplo();

    export default 
    {
        name:"HomeComponent",
        data()
        {
            return{
                mensaje:""
            }
        },
        mounted()
        {
            this.mensaje = service.getSaludo("criaturita");
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>