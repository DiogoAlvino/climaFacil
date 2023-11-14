export default async function searchWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`;
    const options = {
        method: 'GET',
    }

    try{
        const response = await fetch(url, options);

        if(!response.ok){
            throw new Error("Erro na API de clima "+response.status);
        }

        const data = await response.json();

        console.log(data);
    }catch(err){
        console.log(err);
    }
}