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
    import ServiceEmpleados from './../services/ServiceEmpleados';

    const service = new ServiceEmpleados();

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
            loadEmpleadosPorOficio()
            {
                var oficio = this.$route.params.oficio;
                this.oficio = oficio;

                service.loadEmpleadosPorOficio(oficio).then(result =>
                {
                    this.empleados = result;
                })
            }
        },
        mounted()
        {
            this.loadEmpleadosPorOficio();
        },
        watch:
        {
            '$route.params.oficio' (nextVal, oldVal)
            {
                if (nextVal != oldVal)
                {
                    this.loadEmpleadosPorOficio();
                }
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>