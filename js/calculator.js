main();

export function main(){
    WinsCalculation();
};


// function that calculates the result of wins vs. losses 

const winsResult = WinsCalculation(150, 11git 0);

function WinsCalculation(wins, losses){
    let calculation = (wins - losses);
    return calculation;
  
};



// function that calculates the hero's level

heroLevel();

function heroLevel(){

    let x = winsResult;

    var xp = ""

    if(x<=10){
       xp = "Ferro";

    }else if(x>=11 & x<=20){
       xp = "Bronze";

    }else if(x>=21 & x<=50){
       xp = "Prata";

    }else if(x>=51 & x<=80){
        xp = "Ouro";

    }else if(x>=81 & x<=90){
        xp = "Diamante";

    }else if(x>=91 & x<=100){
        xp = "Lendário";

    }else if (x>=101){
        xp = "Imortal";
    };

    let heroXp = xp;

    console.log("O Herói tem de saldo de " + winsResult +" vitórias, e está no nível de " + heroXp);

};










