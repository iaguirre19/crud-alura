// fetch API

const crearNuevaLinea = (nombre, email, password) => { 

    const linea = document.createElement('tr'); 
    

    const hint = Array.from({ length: password.length }, () => "*").join("");



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

const url = "http://localhost:3000/perfil"
const listaClientes = () => fetch(url).then((respuesta) => respuesta.json());

listaClientes().then((data) => {
  data.forEach(perfil => {
    console.log(perfil)
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email, perfil.password)
      table.appendChild(nuevaLinea)
  })
  }).catch((error) => alert("Ocurrio un error"))