function getAndUpdate() {
    console.log("Heloo");
    let work = document.getElementById('work').value;

    if (localStorage.getItem('jsonElem') == null) {
        jsonArray = [];
        jsonArray.push(work);
        localStorage.setItem('jsonElem', JSON.stringify(jsonArray))
    }
    else {
        jsonArrayStr = localStorage.getItem('jsonElem');
        jsonArray = JSON.parse(jsonArrayStr);
        jsonArray.push(work);
        localStorage.setItem('jsonElem', JSON.stringify(jsonArray));
    }
    addwork();
}
addwork();
function addwork() {
    if (localStorage.getItem('jsonElem') == null) {
        jsonArray = [];
        localStorage.setItem('jsonElem', JSON.stringify(jsonArray))
    }
    else {
        jsonArrayStr = localStorage.getItem('jsonElem');
        jsonArray = JSON.parse(jsonArrayStr);
    }
    let tbody = document.getElementById('tbody');
    let item = "";
    jsonArray.forEach((element, index) => {
        item += `
        <tr>
        <td>${index + 1}</td>
        <td>${element}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" onclick="return remove(${index})" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg></td>
    </tr> `;
    });
    tbody.innerHTML = item;
}
function remove(index) {
    jsonArrayStr = localStorage.getItem('jsonElem');
    jsonArray = JSON.parse(jsonArrayStr);
    //remove item
    jsonArray.splice(index, 1);
    localStorage.setItem('jsonElem', JSON.stringify(jsonArray));
    addwork();
}

