let a = confirm("Variable A. \r\n Presiona Aceptar para asignarle valor true. \r\n Presiona Cancelar para asignarle valor false.")

let myTableBody = document.querySelector("#tableBody");
myTableBody.insertAdjacentHTML("beforeend", `<tr id="trDynamic">
                                <td>${a}</td>
                                <td>${!a}</td>
                                </tr>
                                `);