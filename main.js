
// let m = birthDay.getMonth().toLocaleString('fr-FR',{month: 'short'});

function showName() {

    let fname = document.getElementById("firstName").value;

    const birthDay = new Date(document.getElementById('dbd').value);

    let j = birthDay.getDate();
    let m = birthDay.getMonth();
    // let a = birthDay.getFullYear();

    console.log(birthDay + ' 1');

    document.getElementById('prez').innerHTML =
        'Bienvenue ' + fname
        + ' vous êtes né le : ' + j + ' du mois de ' + (m + 1);

    // calcul du N° de jour avec la variable birthDay
    const lastDay = new Date(birthDay.getFullYear(), 0, 1, 0, 0, 0, 0);
    // birthDay.setFullYear(today.getFullYear()) ;

    console.log(birthDay + "2");

    var theDay = Math.round(((birthDay - lastDay) / 1000 / 60 / 60 / 24) + .5, 0);

    console.log(theDay);
    let msg1 = "Vous êtes né le " + theDay + (theDay == 1 ? " er" : (theDay == 2 ? "nd" : " ème")) + " jour de l'année";
    document.getElementById('aff1').innerHTML  =msg1;
    /*
    switch (signe) {
        case "Capricorne" :
         if(theDay <= 20 || theDay >= 357 ){
            signe = "Capricorne" ;
        } 
            break;
        case "Verseau" :
            if(theDay <= 50){
                signe = "Verseau";
            }
        case "Poissons" :
            if ( theDay <= 79){
                signe = "Poissons";
            }  
        case "Bélier" :
            if( theDay <= 109){
                signe ="Bélier"
            } 
            case "Taureau" :
            if( theDay <= 140){
                signe ="Taureau"
            } 
            case "Gémeaux" :
            if( theDay <= 172){
                signe ="Gémeaux"
            } 
            case "Cancer" :
            if( theDay <= 203){
                signe ="Cancer"
            }  
            case "Lion" :
            if( theDay <= 234){
                signe ="Lion"
            }  
            case "Vierge" :
            if( theDay <= 265){
                signe ="Vierge"
            }  
            case "Balance" :
            if( theDay <= 296){
                signe ="Balance"
            }  
            case "Scorpion" :
            if( theDay <= 326){
                signe ="Scorpion"
            }  
            case "Sagitaire" :
                if( theDay <= 356){
                    signe ="Sagitaire"
                }  
        default: signe = "End of the Line";
            break;
    }
    */
    if (theDay <= 20) {
        signe = "Capricorne";
    } else if (theDay <= 50) {
        signe = "Verseau";
    } else if (theDay <= 79) {
        signe = "Poissons";
    } else if (theDay <= 109) {
        signe = "Bélier"
    } else if (theDay <= 140) {
        signe = "Taureau"
    } else if (theDay <= 172) {
        signe = "Gémeaux"
    } else if (theDay <= 203) {
        signe = "Cancer"
    } else if (theDay <= 234) {
        signe = "Lion"
    } else if (theDay <= 265) {
        signe = "Vierge"
    } else if (theDay <= 296) {
        signe = "Balance"
    } else if (theDay <= 326) {
        signe = "Scorpion"
    } else if (theDay <= 356) {
        signe = "Sagitaire"
    } else if (theDay <= 366) {
        signe = "Capicorne (2)"
    } else {
        signe = "End of the Line";
    }

    console.log(signe);
    let msg2 =  "Votre signe est :" + signe;
    document.getElementById('aff2').innerHTML = msg2 ;
   
}





