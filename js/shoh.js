
const KEY = 'ce762116'



const getData = async (kino)=>{
    const base = 'https://www.omdbapi.com'
    const query = `/?s=${kino}&apikey=${KEY}`
   
    const req = await fetch(base + query)
    const data = await req.json()


    return data

}
const res = getData('betman').then((data)=>console.log(data))
