<template>
    <div>
        <h1>EMPLEADOS QUE SEAN {{ oficio }}</h1>
        <table class="table table-warning">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>APELLIDO</th>
                    <th>SALARIO</th>
                    <th>DEPARTAMENTO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{empleado.idEmpleado}}</td>
                    <td>{{empleado.apellido}}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import Global from './../Global';

    let url = Global.apiEmpleados;

    export default 
    {
        name:"OficiosComponent",
        data()
        {
            return{
                empleados:[],
                oficio:""
            }
        },
        methods:
        {
            loadEmpleados()
            {
                var oficio = this.$route.params.oficio;
                this.oficio = oficio;
                var endPoint = "api/Empleados/EmpleadosOficio/"+oficio;

                axios.get(url+endPoint).then(response =>
                {
                    this.empleados = response.data;
                })
            }
        },
        mounted()
        {
            this.loadEmpleados();
        },
        watch:
        {
            '$route.params.oficio' (nextVal, oldVal)
            {
                if (nextVal != oldVal)
                {
                    this.loadEmpleados();
                }
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>