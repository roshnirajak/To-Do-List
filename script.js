function addwork(){
    console.log("Heloo");
    let work= document.getElementById('work').value;
    let display= document.getElementById('display');

    if(localStorage.getItem('jsonElem')==null){
        jsonArray=[];
        jsonArray.push(work);
        localStorage.setItem('jsonElem', JSON.stringify(jsonArray))
    }
    return false;
}