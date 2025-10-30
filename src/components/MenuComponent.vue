<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/coches">Coches</router-link>
            </li>
            <li>
                <router-link to="/customers">Customers</router-link>
            </li>
            <li>
                <router-link to="/empleados">Empleados</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default 
{
    name:"MenuComponent"
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>