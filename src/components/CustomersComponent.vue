<template>
    <div>
        <h1>Customers</h1>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>COMPAÑIA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer">
                    <td>{{customer.CustomerID}}</td>
                    <td>{{customer.ContactName}}</td>
                    <td>{{customer.CompanyName}}</td>
                </tr>
            </tbody>
        </table>
        <hr/>
        <form v-on:submit.prevent="sacarCustomer()">
            <h2>Busca tu costumer</h2>
            <label>Introduce el ID del customer</label>
            <input type="text" v-model="id"/>
            <button>Buscar</button>
        </form>
        <hr/>
        <div v-if="encontrado">
            <h2>Customer: {{customer.CustomerID}}</h2>
            <h3>Name: {{customer.ContactName}}</h3>
            <h3>Company: {{customer.CompanyName}}</h3>
            <h3>Phone: {{customer.Phone}}</h3>
            <h3>Fax: {{customer.Fax}}</h3>
        </div>
    </div>
    <hr/>
</template>

<script>
    import axios from 'axios'
    import Global from './../Global'

    let url = Global.apiCustomers;

    export default 
    {
        name:"CustomersComponent",
        data()
        {
            return{
                customers:[],
                customer:[],
                id:"",
                encontrado:false
            }
        },
        methods:
        {
            cargarCustomers()
            {
                var endPoint = "customers";
                axios.get(url+endPoint).then(response =>
                    {
                        this.customers = response.data.value;
                    })
            },
            sacarCustomer()
            {
                for (var customer of this.customers)
                {
                    if (customer.CustomerID == this.id)
                    {
                        this.customer = customer;
                        this.encontrado = true;
                    }
                }
            }
        },
        mounted()
        {
            this.cargarCustomers();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>