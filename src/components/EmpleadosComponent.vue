<template>
    <div>
        <h1>EMPLEADOS</h1>
        <hr/>
        <form v-on:submit.prevent="mostrarEmpleado()">
            <h2>Elige el empleado</h2>
            <select class="form-control" v-model="id">
            <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">
                {{empleado.apellido}}
            </option>
            </select>
            <button>Mostrar detalles</button>
            <hr/>
            <div v-if="empleado">
                <h3>APELLIDO: {{empleado.apellido}}</h3>
                <h3>OFICIO: {{empleado.oficio}}</h3>
                <h3>SALARIO: {{empleado.salario}} €</h3>
            </div>
        </form>
    </div>
</template>

<script>
    import ServiceEmpleados from './../services/ServiceEmpleados';

    const service = new ServiceEmpleados();

    export default 
    {
        name:"EmpleadosComponent",
        data()
        {
            return{
                empleados:[],
                empleado:null,
                id:0
            }
        },
        methods:
        {
            sacarEmpleados()
            {
                service.sacarEmpleados().then(result =>
                {
                    this.empleados = result;
                })
            },
            mostrarEmpleado()
            {
                service.mostrarEmpleado(this.id).then(result =>
                {
                    this.empleado = result;
                })
            }
        },
        mounted()
        {
            this.sacarEmpleados();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>