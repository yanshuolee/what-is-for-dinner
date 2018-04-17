var number_of_choices = 8;


function getRandom(){
    return Math.floor(Math.random()*(number_of_choices))
}

function getRandArr(){
    var randArr = [number_of_choices-1];
    var returnNumber;
    
    for(i=0;i<number_of_choices;i++){
        do{
            var checker = false;
            returnNumber = getRandom();
            if(randArr.indexOf(returnNumber) != -1) checker = true;
        }while(checker)

        randArr[i] = returnNumber;
    }
    return randArr;
}

function getResturantByList(){
    var rdAr = getRandArr();
    var result = ["<ol>"];
    var except_selected = document.getElementById("resturant").selectedIndex;
    var selection = document.getElementById("resturant").getElementsByTagName("option");
    for(i=0;i<number_of_choices;i++){
        if(rdAr[i] != except_selected)
            result += "<li>" + selection[rdAr[i]].childNodes[0].nodeValue + "</li>";
    }
    result += "</ol>";
    document.getElementById("output").innerHTML = result;
}

function getResturant(){
    var index_of_res;
    var selection = document.getElementById("resturant").getElementsByTagName("option");
    var except_selected = document.getElementById("resturant").selectedIndex;
    var checker = true;
    while(checker){
        index_of_res = Math.floor(Math.random()*(number_of_choices));
        if(index_of_res != except_selected){
            checker = false;
        } 
    }
    document.getElementById("output").innerHTML = selection[index_of_res].childNodes[0].nodeValue;
    
}