List = []; 

Ex = function (exercise, minutes, burned){

    this.exercise = exercise;
    this.minutes = minutes;
    this.burned = burned;
};


function Wrk(){
    
    if(document.getElementById("Situps").checked == true){ List.push(new Ex("Situps", document.getElementById("minutes").value, document.getElementById("minutes").value * 3));}

    else if(document.getElementById("Pushups").checked == true){ List.push(new Ex("Pushups", document.getElementById("minutes").value, document.getElementById("minutes").value * 7) );}

    else if(document.getElementById("Jumprope").checked == true){ List.push(new Ex("Jump Rope", document.getElementById("minutes").value, document.getElementById("minutes").value * 15) );}
}  




function mostcalories(){
    highest = 0;
    for (i = 0; i < List.length; i++) 

    { if(List[i].burned > List[highest].burned)
        {highest = i;}
    }
    document.getElementById("burnedminutes").value = List[highest].exercise + ', ' + List[highest].burned + ' calories';
}

function All(){
    for (i = 0; i < List.length; i++) 
    {
        allWorkouts = document.createElement('ol');
        allWorkouts.innerHTML= List[i].exercise + ' for ' + List[i].minutes + ' minutes ' + ' with ' + List[i].burned + ' calories burned. \n';
        document.getElementById('showalloutput').append(allWorkouts);
    }

}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("Add").addEventListener("click", Wrk);
    document.getElementById("burned").addEventListener("click", mostcalories);
    document.getElementById("showall").addEventListener("click", All);
    
}); 