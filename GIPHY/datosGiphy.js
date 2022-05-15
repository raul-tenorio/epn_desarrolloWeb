let busqueda = 'random';
let url = `https://api.giphy.com/v1/gifs/random?api_key=vOIiZLQuMVrcpOxwmuLlCsexPo4nRAma&tag=${busqueda}`;

const obtenerGif = async () => {

  let fieldBusqueda = document.getElementById('add_input');

  if (fieldBusqueda.value != ''){
    url = `https://api.giphy.com/v1/gifs/random?api_key=vOIiZLQuMVrcpOxwmuLlCsexPo4nRAma&tag=${fieldBusqueda.value}`;
  }

  try {
    let response = await fetch(url);

    if(!response.ok)
    {
        throw new Error("Ocurrió un error al realizar la petición...")
    }

    let data = await response.json();

    //console.log(data);
    pintarGif(data);
    pintarUsuario(data);
    
  } catch (error) 
  {
    console.log(error);
  }
};

obtenerGif();

const pintarGif = (data) => 
{
  document.getElementsByTagName("img")[0].setAttribute("src", data.data.images.preview_gif.url);
};

const pintarUsuario = (data) => 
{
  let body = `<tr><td>${data.data.user.display_name}</td><td><a href=\"${data.data.user.profile_url}\" target="_blank">@${data.data.user.username}</a></td></tr>`;
  document.getElementById("data").innerHTML = body;
};