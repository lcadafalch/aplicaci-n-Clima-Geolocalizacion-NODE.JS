
axios = require("axios");

const argv = require("yargs").options = ({
    direccion :{
        alias:"d",
        desc:"descripcion de la ciudad para obtener el clima",
        demand: true,
    }

});

let encodedURL = encodeURI(argv.direccion);
console.log(encodedURL)

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,

    headers: { 'x-rapidapi-key': '364bc3d6afmshfdc0e9c319c976ep17db26jsnbdb7186bd8db' }
});

instance.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Barcelona')
  .then( resp=>  {
    // handle success
    console.log(resp.data.Results[0]);
  })
  .catch(err => {
    // handle error
    console.log("error");
  })