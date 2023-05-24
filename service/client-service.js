const crearNuevaLinea = (nombre, email, password) => { // esta funcion recibe dos argumentos nombre y email

    const linea = document.createElement('tr'); // Esto crear una etiqueta "tr" con create element
    
    // esto crea un contenido html, tambien se puede hacer de otra manera creadolos elementos con create element y anidandolos con append chield

    const hint = Array.from({ length: password.length }, () => "*").join(""); //Esta liena convierte el password en *** 



    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>${hint} </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");

const listaClientes = () => { //este es un callback que regresa una promesa 
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil") // Envia una solicitud para obtener datos de una base de darps
    
    http.send(); // Envia a la base de datos
    
    //onload se usa para recibir rerspuestas del servidor
    http.onload = () => {  //Esta funcion lo que hace es que con onload le dice que cuando termine de cargar la pagina por completo entonces con la variable data espera una respuesta del contenido de la base de datos.
        const response = JSON.parse(http.response); // se usa el JSON.PARSE para que convierta lo queue recibe de la base de datos ya que lo recibe como texto. y ahora con esto nos va a regresar un objeto
        console.log(response);
        if(http.status >= 400){
          reject(response)
        }else{
          resolve(response)
        }
    }

  })
  return promise
}

listaClientes().then((data) => {
    // const nuevoName = data.map((user) => {
    //   const nuevaLinea = crearNuevaLinea(user.nombre);
    //   table.appendChild(nuevaLinea)


    // })
  data.forEach(perfil => {
    console.log(perfil)
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email, perfil.password)
      table.appendChild(nuevaLinea)
  })
  }).catch((error) => alert("Ocurrio un error"))
// ABRIR http (metodo, url)
// CRUD --- Metodos
// Creat ----- Post
// Read ------ GET
// Update ---- PUT/PATCH
// Delete ---- DELETE








    // data.forEach(perfil => {
    //     const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
    //     table.appendChild(nuevaLinea)
    // });



