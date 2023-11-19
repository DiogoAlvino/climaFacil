export async function searchWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`;
    const options = {
        method: 'GET'
    }

    try{
        const response = await fetch(url, options);

        if(!response.ok){
            throw new Error("Erro na API de clima "+response.status);
        }

        const data = await response.json();

        return data;
    }catch(err){
        throw err;
    }
}

export async function searchHour(city){

    const url = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            "X-Api-Key": "6Jp5C63i0YloufC4swco9w==SBGJGyAi7QO0wzJ6"
        }
    }

    try{
        const response = await fetch(url, options);

        if(!response.ok){
            throw new Error("Erro na API de horas "+response.status);
        }

        const data = await response.json();

        return data;
    }catch(err){
        throw err;
    }

}