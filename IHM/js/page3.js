const doneButton = document.getElementById("done-button"); 
doneButton.onclick = () => {
    var symptomes = document.querySelectorAll('main ul li input'); 
    var checked = 0; 
    var possibility; 
    for (var i = 0; i < symptomes.length; i++) {
        if (symptomes[i].checked) {
            checked++; 
        }
    }
    possibility = (checked / 10) * 100; 
    if (possibility >= 50) {
        location.href = 'page_4.html'; 
    }
    else {
        location.href = 'page_5.html'; 
    }
}