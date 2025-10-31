import axios from "axios";
import Global from "./../Global";

export default class ServiceCoches
{
    getCoches = new Promise(function(resolve)
    {
        var coches = [];

        var url = Global.apiCoches;
        var endPoint = "webresources/coches";

        axios.get(url+endPoint).then(response =>
        {
            coches = response.data;
            resolve(coches);
        })
    })
}