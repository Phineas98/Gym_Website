export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':"d7c25f73abmsha9093a2a2643144p15d036jsnb7ded3e07247",
      'X-RapidAPI-Host':"exercisedb.p.rapidapi.com"
    }
  };


export const fetchData = async(url,options)=>{
 const response = await fetch(url,options);
 const data = await response.json();
 return data;
}