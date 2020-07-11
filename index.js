// VAR/SELECTOR
const btnSaved = document.getElementById('btnSaved');
const txtNombre = document.getElementById('txtNombre');
const txtDescripcion = document.getElementById('txtDescripcion');
const lblNoty = document.getElementById('lblNoty');
const divContentTask = document.getElementById('divContentTask');

// EVENTS LISTENER
btnSaved.addEventListener('click', function (event) {
    event.preventDefault();
    if (txtNombre.value && txtDescripcion.value) {
        lblNoty.classList.remove('lblNotyShow');
        console.log(txtNombre.value && txtDescripcion.value);
        let div = document.createElement('div');
        let idTask = new Date().getTime();
        div.classList.add("divTask");
        div.setAttribute('id', `${idTask}r`);
        let html = '';
        html += `<div>`;
        html += `${txtNombre.value}`;
        html += `</div>`;
        html += `<div id="${idTask}" class="divDelete" onclick="deleteElement(this)">`;
        html += `<i class="fa fa-trash" style="font-size:30px;color:red;"></i>`;
        html += `</div>`;
        div.innerHTML = html;
        divContentTask.appendChild(div);
        txtNombre.value = '';
        txtDescripcion.value = '';
    } else {
        lblNoty.innerHTML = 'Nombre y Descripcion son Obligatorio';
        lblNoty.classList.add('lblNotyShow');
    }
    console.log(txtNombre.value, txtDescripcion.value);
});

// FUNCTIONS

function deleteElement(element) {
    console.log(element.getAttribute('id'));
    document.getElementById(`${element.getAttribute('id')}r`).remove();
    // console.log(new Date().getTime());
}