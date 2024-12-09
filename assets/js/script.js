const tareas = [
    { id: 1, descripcion: 'Estudiar JavaScript', realizada: false },
    { id: 2, descripcion: 'Hacer ejercicio', realizada: false },
    { id: 3, descripcion: 'Leer un libro', realizada: false }
];

const listaTareas = document.querySelector('#listaTareas');
const totalTareas = document.querySelector('#totalTareas');
const tareasCompletadas = document.querySelector('#tareasCompletadas');
const btnAgregar = document.querySelector('#btnAgregar');
const inputNuevaTarea = document.querySelector('#nuevaTarea');

const mostrarTareas = () => {
    listaTareas.innerHTML = ''; 

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.className = 'tarea-item';
        li.innerHTML = tarea.descripcion;

        if (tarea.realizada) {
            const textoRealizado = document.createElement('span');
            textoRealizado.innerHTML = ' (Realizado)';
            textoRealizado.className = 'realizado-texto';
            li.appendChild(textoRealizado);
            li.className += ' completed';
        }

        const botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = 'Eliminar';
        botonEliminar.className = 'eliminar';

        botonEliminar.addEventListener('click', (e) => {
            e.stopPropagation();
            eliminarTarea(index);
        });

        li.appendChild(botonEliminar);

        li.addEventListener('click', () => {
            tarea.realizada = !tarea.realizada;
            mostrarTareas();
        });
        listaTareas.appendChild(li);
    });

    totalTareas.innerHTML = tareas.length;
    tareasCompletadas.innerHTML = tareas.filter(t => t.realizada).length;
}

const eliminarTarea = (index) => {
    tareas.splice(index, 1);
    mostrarTareas();
}

const agregarTarea = () => {
    const nuevaTareaDescripcion = inputNuevaTarea.value;
    if (nuevaTareaDescripcion) {
        const nuevaTarea = {
            id: tareas.length + 1,
            descripcion: nuevaTareaDescripcion,
            realizada: false
        };
        tareas.push(nuevaTarea);
        inputNuevaTarea.value = '';
        mostrarTareas();
    }
}
btnAgregar.addEventListener('click', agregarTarea);
mostrarTareas();
