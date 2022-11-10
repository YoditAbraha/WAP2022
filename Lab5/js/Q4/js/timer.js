window.onload = setInterval(showDate,1000);


function showDate(){
    const div = document.getElementById("time");
    let date = new Date();
    let month = date.getMonth() +1;
    div.innerHTML = `
    ${date.getFullYear()}-${month}-${date.getDay()}     
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `;
}