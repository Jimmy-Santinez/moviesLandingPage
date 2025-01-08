const API = 'https://api.themoviedb.org/3';

// Función para construir las opciones de solicitud
function getData(urlApi) {
    return {
        method: 'GET',
        url: urlApi,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTAxNWJlMTgwMWFkN2JhYjY2Yzk2YTBjMTFmMjhmZiIsIm5iZiI6MTczNjMwMDI4Ni4xMzc5OTk4LCJzdWIiOiI2NzdkZDZmZTQ0ZDY0OWZmYWU3YWY1ZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ydFZ2MOSCZLTh3Mkj4vRigGLVBrYOQxW1fVbPeG38hQ` 
        }
    };
}

// Función para realizar la solicitud
const axiosFn = async (urlApi) => {
    try {
        const options = getData(urlApi);
        const response = await axios.request(options); // Realizamos la solicitud usando las opciones
        console.log(response.data); // Mostramos los datos obtenidos
        let view = ''; // Inicializa la variable 'view' como una cadena vacía

for (let i = 0; i <= 3; i++) {
    view += `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="https://image.tmdb.org/t/p/original/${response.data.results[i].poster_path}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${response.data.results[i].title} <!-- Aquí podrías mostrar el título o lo que necesites -->
                </h3>
            </div>
        </div>
    `;
}

document.querySelector('#content').innerHTML = view;
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
};

// Consultamos la cartelera actual de películas
axiosFn(`${API}/movie/now_playing?language=es-MX&page=1`);
