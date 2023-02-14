let a = confirm("Variable A. \r\n Presiona Aceptar para asignarle valor true. \r\n Presiona Cancelar para asignarle valor false.")
let b = confirm("Variable B. \r\n Presiona Aceptar para asignarle valor true. \r\n Presiona Cancelar para asignarle valor false.")

let myTableBody = document.querySelector("#tableBody");
myTableBody.insertAdjacentHTML("beforeend", `<tr id="trDynamic">
                                <td>${a}</td>
                                <td>${b}</td>
                                <td>${a || b}</td>
                                </tr>
                                `);