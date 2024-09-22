function checkVotingEligibility(age){
    if(age>=18){
        return "Congratulations,you are eligible to vote";
    }else{
        return "you are not eligible to vote";
    }
}

console.log(checkVotingEligibility(18));
// -------------------------------------------------------------------

function temperatueStatus(degree){
    if(degree<15){
        return "Cold";
    }else if(degree>=15 && degree<=30){
        return "Warm"
    }else{
        return "Hot";
    }
}

console.log(temperatueStatus(10));
// --------------------------------------------------------------------
function calculateDiscount(amount){
    let discount=0;
    if(amount<50){
     discount=0;   
    }else if(amount>=50 && amount<=100){
     discount =10;
    }else if(amount>=100 && amount<=200){
        discount=20;
    }else{
        discount=30;
    }

    let discountAmount=(amount*discount)/100;
    let total=amount-discountAmount;

    console.log(`congratulations, you have got ${discount}% discount`);
    return `your total amount after discount is ${total}`;
}

console.log(calculateDiscount(300));
// ---------------------------------------------------------------------
function weatherAdvice(condition){
    switch(condition){
        case "sunny":
            return "Wear Glasses";
        case "rainy":
            return "Take a Umbrella";
        case "snowy":
            return "Wear a Heavy Coat";
        case "cloudy":
            return "Might Rain,Carry a Umbrella";
        default:
            return "Weather not Recognized";
    }
}

console.log(weatherAdvice("sunny"));
// -----------------------------------------------------------------------
function determineGameLevel(level){
    if(level>0 && level<50){
        return `congratulation you have unlocked Beginner level and your level is ${level}`;
    }else if(level>=50 && level<80){
        return  `hurrah! you have moved to intermediate level and your level is ${level}`;
    }else if(level >=80 && level <=100){
        return `hurrah! you have moved to intermediate level and your level is ${level}`;
    }else{
        return `${level} level is coming soon`;
    }
}
 console.log(determineGameLevel(60));
// ------------------------------------------------------------------------
function advancedCalculator(operator,a,b){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            if(a==0 || b==0){
               return `inappropriate values`
            }
            return a/b;
        case "%":
            if(a==0 || b==0){
                return `inappropriate values`
             }
            return a%b;
    }
}
console.log(advancedCalculator("/",10,0));
// -------------------------------------------------------------
function calculateFinalPrice(type,price){
    let discount=0;
    if(type=="regular"){
        discount=0;
    }else if(type=="silver"){
        discount=10;
    }else if(type=="silver"){
        discount=20;
    }

    let discountPrice=(price*discount)/100;
    let finalPrice=price-discountPrice;

    console.log(`congratulations, you have got ${discount}% discount`);
    return `your total amount after discount is ${finalPrice}`;
}
console.log(calculateFinalPrice("silver",899));
// --------------------------------------------------------------
function calculateInvestmentReturns(amount,interest,years){
    if(interest<=5){
        console.log("low risk");
    }else if(interest>5 && interest <10){
        console.log("medium risk");
    }else if(interest>10){
        console.log("high risk")
    }

    let gains=(amount*interest*years)/100;
    let totalAmount=amount+gains;

    return `your total amount after ${years} years with ${interest}% interest is ${totalAmount} rupees`;
}
console.log(calculateInvestmentReturns(10000,15,5));
// --------------------------------------------------------------------------------------------------------------

function suggestClothing(celsius){
    if(celsius<0){
        return "Wear a Heavy Coat And Thermal Wear"
    }
    else if(celsius>=0 && celsius<=15){
        return "Wear a Jacket"
    }
    else if(celsius>=16 && celsius <=25){
        return "Wear a Light Sweater";
    }
    else if(celsius>25){
        return "Wear Shorts And T-shirts";
    }
}
console.log(suggestClothing(9));

// ----------------------------------------------------------------------------------------------------------
function convertCurrency(amount,type){
    let rupees=0;
    switch(type){
        case "USD":
            rupees=amount*75;
            return `your amount after converting to Rupess is ${rupees}`
        case "EUR": 
            rupees=amount*90;
            return `your amount after converting to Rupess is ${rupees}`
        case "GBP":
            rupees=amount*100;
            return  `your amount after converting to Rupess is ${rupees}`
        default:"invalid currency";
    }
}
console.log(convertCurrency(500,"USD"));
// ------------------------------------------------------------------------------------------------------------
function isLeapYear(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return `${year} is a leap year`;
            }
            else{
                return `${year} is not a leap year`;
            }
        }
        else {
            return `${year} is a leap year`;
        }
    }
    else{
        return `${year} is not a leap year`;
    }
}
console.log(isLeapYear(1900));
// -------------------------------------------------------------------------------------------------
function validatePassword(password){
    let message="";
    if(password.length>=8){
        message+="Valid, At Least 8 characters\n";
    }else{
        return "invalid,Less than 8 characters"
    }

    if(/[A-z]/.test(password)){                 //test method is used to match the apttern in string
        message+="Valid, At Least One Uppercase/n";
    }else{
        return "Invalid,no upperase";
    }
    if(/[a-z]/.test(password)){
        message+="Valid, At Least One Lowercase/n";
    }else{
        return "Invalid,no lowercase";
    }
    if(/[0-9]/.test(password)){
        message+="Valid, At Least One number/n";
    }else{
        return "Invalid,no number";
    }
    if(/[!@#$^&*()_-{},.|<>?/:;"'+=]/.test(password)){
        message+="Valid, At Least One Special Characters/n";
    }else{
        return "Invalid,no number";
    }
    return "password is Strong";
}
console.log(validatePassword("Password123@"));
console.log(validatePassword("password"));





