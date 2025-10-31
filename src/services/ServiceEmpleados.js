import axios from "axios";
import Global from "./../Global";

export default class ServiceEmpleados
{
    sacarEmpleados()
    {
        return new Promise(function(resolve)
        {
            var empleados = [];

            var url = Global.apiEmpleados;
            var endPoint="api/Empleados";

            axios.get(url+endPoint).then(response =>
            {
                empleados = response.data;
                resolve(empleados);
            })
        })
    }

    mostrarEmpleado(id)
    {
        return new Promise(function(resolve)
        {
            var empleado = [];

            var url = Global.apiEmpleados;
            var endPoint = "api/Empleados/"+id;

            axios.get(url+endPoint).then(response =>
            {
                empleado = response.data;
                resolve(empleado);
            })
        })
    }

    sacarOficios()
    {
        return new Promise(function(resolve)
        {
            var oficios = [];

            var url = Global.apiEmpleados;
            var endPoint = "api/Empleados/Oficios";

            axios.get(url+endPoint).then(response =>
            {
                oficios = response.data;
                resolve(oficios);
            })
        })
    }

    loadEmpleadosPorOficio(oficio)
    {
        return new Promise(function(resolve)
        {
            var empleados = [];

            var url = Global.apiEmpleados;
            var endPoint = "api/Empleados/EmpleadosOficio/"+oficio;

            axios.get(url+endPoint).then(response =>
            {
                empleados = response.data;
                resolve(empleados);
            })
        })
    }
}