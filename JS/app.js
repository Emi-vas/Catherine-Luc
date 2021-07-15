window.onload = function() {
    main()
}

function main() {

    headerTel()

    const plus = document.getElementById("plus")
    const moins = document.getElementById("moins")


    class tableau {
        constructor(lienBig, lienSmall, dim, prix, desc) {
            this.lienBig = lienBig;
            this.lienSmall = lienSmall;
            this.dim = dim;
            this.prix = prix
            this.desc = desc;
        }
    }

    const tableau_1 = new tableau("./images/tableaux/catherine-luc-tableau1.jpg", 
    "./images/tableaux/small/catherine-luc-tableau1.jpg", "70cm / 80cm", "300€", "lorem")
    const tableau_2 = new tableau("./images/tableaux/catherine-luc-tableau2.jpg", 
    "./images/tableaux/small/catherine-luc-tableau2.jpg", "60cm / 190cm", "600€", "lorem")
    const tableau_3 = new tableau("./images/tableaux/catherine-luc-tableau3.jpg", 
    "./images/tableaux/small/catherine-luc-tableau3.jpg", "640cm / 90cm", "750€", "lorem")
    const tableau_4 = new tableau("./images/tableaux/catherine-luc-tableau4.jpg", 
    "./images/tableaux/small/catherine-luc-tableau4.jpg", "60cm / 44cm", "900€", "lorem")
    const tableau_5 = new tableau("./images/tableaux/catherine-luc-tableau5.jpg", 
    "./images/tableaux/small/catherine-luc-tableau5.jpg", "40cm / 90cm", "1300€", "lorem")
    const tableau_6 = new tableau("./images/tableaux/catherine-luc-tableau6.jpg", 
    "./images/tableaux/small/catherine-luc-tableau6.jpg", "60cm / 50cm", "322€", "lorem")
    const tableau_7 = new tableau("./images/tableaux/catherine-luc-tableau7.jpg", 
    "./images/tableaux/small/catherine-luc-tableau7.jpg", "60cm / 190cm", "850€", "lorem")
    const tableau_8 = new tableau("./images/tableaux/catherine-luc-tableau8.jpg", 
    "./images/tableaux/small/catherine-luc-tableau8.jpg", "160cm / 90cm", "450€", "lorem")
    
    
    const tableaux = [
        tableau_1,
        tableau_2,
        tableau_3,
        tableau_4,
        tableau_5,
        tableau_6,
        tableau_7,
        tableau_8,
    ]

    
    localStorage.setItem("tableaux", JSON.stringify(tableaux))
    let i = 0


    function printImageBig() {
        document.getElementById("imageBig").innerHTML = `<img src="${tableaux[i].lienBig}" alt="tableau de catherine luc" >`
        document.getElementById("imageTxt").innerHTML = ` 
        <p>
        ${tableaux[i].dim} <br>
        ${tableaux[i].prix} <br>
        lorem foryum
        </p>`      
    }
    

    printImageBig()
    printMosa(tableaux)

    plus.addEventListener("click", function() {
        i++


        if (i < tableaux.length) {
            printImageBig()
        } else {
            i = 0
            printImageBig()
        }
    })

    moins.addEventListener("click", function() {
        
        if (i>0) {
            i--
            printImageBig()
        } else {
            i = tableaux.length -1
            printImageBig()
        }
    })
}


function headerTel() {
    const icone = document.getElementById("iconeTel")
    const navTel = document.getElementById("navTel")
    const top = document.getElementById("top")

    icone.addEventListener("click", function() {
        icone.classList.toggle("rotate")
        navTel.classList.toggle("displayNone")
        top.classList.toggle("h1Del")
    })
}

function printMosa(tableaux) {
    const mosa = document.getElementById("mosa")

    let html = ""

    for (i in tableaux) {
        html = html + `<div class="mosaique_tableau" onclick="clicMosa(${i})">
        <img src=${tableaux[i].lienSmall} alt="tableau de catherine luc">
    </div>`
    }

    mosa.innerHTML = html
}

function clicMosa(i) {
    mosaBig = document.getElementById("mosaBig")
    
    let tableaux = JSON.parse(localStorage.getItem("tableaux")) 

    mosaBig.classList.remove("displayNone")

    mosaBig.innerHTML = `<div class="mosaBig__image">
        <img src="${tableaux[i].lienBig}" alt="tableau catherine luc">
        </div>
        `
        //<i class="fas fa-times" id="closeMosa"></i>

    closeMosa = document.getElementById("closeMosa")
    mosaBig.addEventListener("click", function() {
        mosaBig.classList.add("displayNone")
    })
}