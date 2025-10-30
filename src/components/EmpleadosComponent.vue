<template>
    <div>
        <h1>Empleados</h1>
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
                <h3>Apellido: {{empleado.apellido}}</h3>
                <h3>Oficio: {{empleado.oficio}}</h3>
                <h3>Salario: {{empleado.salario}} euros</h3>
            </div>
        </form>
    </div>
</template>

<script>
    import Global from './../Global';
    import axios from 'axios';

    let url = Global.apiEmpleados;

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
                var endPoint="api/Empleados";
                axios.get(url+endPoint).then(response =>
                    {
                        this.empleados = response.data;
                    })
            },
            mostrarEmpleado()
            {
                var endPoint = "api/Empleados/"+this.id;
                axios.get(url+endPoint).then(response =>
                    {
                        this.empleado = response.data;
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