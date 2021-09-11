//EJERCICIO OBJETOS ESTATICOS
const Cursos = {
    DesarrolloWeb: [{
            nombre: 'Juan',
            nota: 10
        },
        {
            nombre: 'Maria',
            nota: 30
        },
        {
            nombre: 'Carlos',
            nota: 20
        },
        {
            nombre: 'Karla',
            nota: 40
        }
    ],
    Programacion2: [{
            nombre: 'Lili',
            nota: 30
        },
        {
            nombre: 'Cleo',
            nota: 40
        },
        {
            nombre: 'Pedro',
            nota: 33
        },
        {
            nombre: 'Marco',
            nota: 21
        }
    ]
};

function createTable() {
    return "<tr><th> E S T U D I A N T E </th><th>C U R S O </th><th>N O T A </th></tr>";
}

function createRows(cursos) {
    let row = "";

    for (var i = 0; i < cursos.DesarrolloWeb.length; i++) {
        row = row + "<tr><td>" + cursos.DesarrolloWeb[i].nombre + "</td>" + "<td>" + "Desarrollo Web" + "</td>";

        if (Number(cursos.DesarrolloWeb[i].nota) <= 10) {
            row = row + "<td style='background-color: skyblue'>" + cursos.DesarrolloWeb[i].nota + "</td>" + "</tr>";
        } else if (Number(cursos.DesarrolloWeb[i].nota) <= 20) {
            row = row + "<td style='background-color: red'>" + cursos.DesarrolloWeb[i].nota + "</td>" + "</tr>";
        } else {
            row = row + "<td style='background-color: gray'>" + cursos.DesarrolloWeb[i].nota + "</td>" + "</tr>";
        }
    }

    for (var i = 0; i < cursos.Programacion2.length; i++) {
        row = row + "<tr><td>" + cursos.Programacion2[i].nombre + "</td>" + "<td>" + "Programacion 2" + "</td>";

        if (Number(cursos.Programacion2[i].nota) <= 10) {
            row = row + "<td style='background-color: skyblue'>" + cursos.Programacion2[i].nota + "</td>" + "</tr>";
        } else if (Number(cursos.Programacion2[i].nota) <= 20) {
            row = row + "<td style='background-color: green'>" + cursos.Programacion2[i].nota + "</td>" + "</tr>";
        } else {
            row = row + "<td style='background-color: violet'>" + cursos.Programacion2[i].nota + "</td>" + "</tr>";
        }
    }


    return row;
}

function showMessage(cursos) {
    let tableComplete = "<table>";
    tableComplete = tableComplete + createTable();
    tableComplete = tableComplete + createRows(cursos);
    tableComplete = tableComplete + "</table>";

    document.getElementById("LEstudiantes").innerHTML = tableComplete;
}

showMessage(Cursos);

//EJERCICIO TABLA MULTIPLICACION
tablaMultiplicar = (numero) => {
    let tabla = "<table>";
    tabla = tabla + "<tr><th>O P E R A C I O N  </th><th> R E S U L T A D O </th > < /tr>";

    for (var i = 1; i <= 10; i++) {
        tabla = tabla + "<tr><td>" + numero + " x " + i + " = " + "</td>" + "<td>" + Number(numero * i) + "</td></tr>";
    }

    tabla = tabla + "<table>";

    console.log(tabla);

    return tabla;
}

function showTable(numero) {
    document.getElementById("lblTabla").innerHTML = tablaMultiplicar(numero);
}