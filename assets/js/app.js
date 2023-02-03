const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
// faltaba un punto para seleccionar clase
const $n = document.querySelector(".name");
// se estaba usando el numeral en lugar de punto
const $b = document.querySelector(".blog");
const $l = document.querySelector(".location");

// Para usar await hay que hacer la función asíncrona
async function displayUser(username) {
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Se hace llamada al método json para extraer datos
  const data = await response.json();
  console.log(data);
  // En las template strings se usó apostrofe en lugar de acento grave
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  // Le faltaba el $ a la variable n
  $n.innerHTML = `Algo salió mal: ${err}`;
}


displayUser('stolinski').catch(handleError);
displayUser("defunkt").catch(handleError);
