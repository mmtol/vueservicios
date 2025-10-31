import { createRouter, createWebHistory } from 'vue-router'
import CochesComponent from './components/CochesComponent.vue'
import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadosComponent from './components/EmpleadosComponent.vue'
import OficiosComponent from './components/OficiosComponent.vue'
import HomeComponent from './components/HomeComponent.vue'

//array con las rutas
const rutas=
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/coches",
        component:CochesComponent
    },
    {
        path:"/customers",
        component:CustomersComponent
    },
    {
        path:"/empleados",
        component:EmpleadosComponent
    },
    {
        path:"/oficiosComponent/:oficio",
        component:OficiosComponent
    }
]

//variable para el router indicando tipo de navegacion y rutas
const router=createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    })

//router es la que utiliza el fichero main.js, hay que exportarla
export default router;