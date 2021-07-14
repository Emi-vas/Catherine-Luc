window.onload = function() {
    main()
}

function main() {

    const plus = document.getElementById("plus")
    const moins = document.getElementById("moins")


    class tableau {
        constructor(lien, dim, prix, desc) {
            this.lien = lien;
            this.dim = dim;
            this.prix = prix
            this.desc = desc;
        }
    }

    const tableau_1 = new tableau("./images/tableaux/catherine-luc-tableau1.jpg", "60cm / 90cm", "300€", "lorem")
    const tableau_2 = new tableau("./images/tableaux/catherine-luc-tableau2.jpg", "60cm / 90cm", "150€", "lorem")
    const tableau_3 = new tableau("./images/tableaux/catherine-luc-tableau3.jpg", "60cm / 90cm", "250€", "lorem")
    const tableau_4 = new tableau("./images/tableaux/catherine-luc-tableau4.jpg", "60cm / 90cm", "125€", "lorem")
    const tableau_5 = new tableau("./images/tableaux/catherine-luc-tableau5.jpg", "60cm / 90cm", "355€", "lorem")
    const tableau_6 = new tableau("./images/tableaux/catherine-luc-tableau6.jpg", "60cm / 90cm", "455€", "lorem")
    const tableau_7 = new tableau("./images/tableaux/catherine-luc-tableau7.jpg", "60cm / 90cm", "1520€", "lorem")
    const tableau_8 = new tableau("./images/tableaux/catherine-luc-tableau8.jpg", "60cm / 90cm", "351€", "lorem")
    
    
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

    let i = 0

    function printImageBig() {
        document.getElementById("imageBig").innerHTML = `<img src="${tableaux[i].lien}" alt="tableau de catherine luc">`
        document.getElementById("imageTxt").innerHTML = ` 
        <p>
        30cm / 60cm <br>
        ${tableaux[i].prix} <br>
        lorem foryum
        </p>`
    }

    printImageBig()

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


