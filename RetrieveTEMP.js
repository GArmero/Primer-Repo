function CelsiusToFharenheti(Temp){
let TempF=((Temp*(9/5))+32);
return TempF;
}

async function RecuperarTemperatura (City,Type){

    const apiKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYXJtZXJvMTk5N0BnbWFpbC5jb20iLCJqdGkiOiI4MzhlZWNhMC04YzEzLTRlODktOTA0Ny1kYjcyMGVkMzI1YmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTc2OTAwNDA2OCwidXNlcklkIjoiODM4ZWVjYTAtOGMxMy00ZTg5LTkwNDctZGI3MjBlZDMyNWJjIiwicm9sZSI6IiJ9.cMDDEJHTJw73QuFwUHpDC8EXdT2Tds-9Pri2l7HUCK4";
    let EstacionID="3195"
    //Aqui ira la llamada get a la API de la amemet.
    const FirstResponse = await fetch(`https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/${EstacionID}?api_key=${apiKey}`);
    const FirstData = await FirstResponse.json();


    const RealResponse = await fetch(FirstData.datos);
    const RealData = await RealResponse.json();
    const TiempoHoras =RealData.map(item =>new ObjTiempo(item));
    console.log(TiempoHoras[1]);
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




