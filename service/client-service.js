const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
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



const http = new XMLHttpRequest();

// ABRIR http (metodo, url)
// CRUD --- Metodos
// Creat ----- Post
// Read ------ GET
// Update ---- PUT/PATCH
// Delete ---- DELETE




http.open("GET", "http://localhost:3000/perfil") // Obtener la informacion de la base de datos  o el enlace con la base de datos

http.send(); // Envia a la base de datos

http.onload = () => {  //Esta funcion lo que hace es que con onload le dice que cuando termine de cargar la pagina por completo entonces con la variable data espera una respuesta del contenido de la base de datos.
    const data = JSON.parse(http.response); // se usa el JSON.PARSE para que convierta lo queue recibe de la base de datos ya que lo recibe como texto. y ahora con esto nos va a regresar un arreglo


    console.log(typeof(data))

    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
        table.appendChild(nuevaLinea)
    });
};


