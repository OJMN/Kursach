function change_block(){
    var radios = document.getElementsByName('dsc');
    var block = document.getElementsByClassName("maincontent");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (block[i].classList.contains("active")){
            block[i].classList.remove("active")
        }
    if (radios[i].checked) {
        
        
        block[i].classList.add("active")
    }
    }
}
change_block()