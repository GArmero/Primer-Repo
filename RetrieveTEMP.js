function CelsiusToFharenheti(Temp){
let TempF=((Temp*(9/5))+32);
return TempF;
}

async function RecuperarTemperatura (City,Type){

    //Aqui ira la llamada get a la API de la amemet.
    const response = await fetch("https://opendata.aemet.es/opendata/sh/31f48227");
    const data = await response.json();
    const TiempoHoras =data.map(item =>new ObjTiempo(item));
    console.log(TiempoHoras);
    //Convertimos a Celsius y Fharenheit segun nos mande el parametro
};

class ObjTiempo {
    constructor(Json){
        this.Altitud=Json.alt;
        this.LLuvia=Json.prec;
        this.Temperatura=Json.ta;
        this.Hora= Json.fint;
    }

}

RecuperarTemperatura("TEST","TEST");




