window.addEventListener("keydown", function(event) {
    let key = event.key;
    let code = event.code;
    let which = event.which;
    
    this.document.getElementById("eventWhichLarge").innerHTML= which;
    document.getElementById("eventCode").innerHTML= code;
    document.getElementById("eventKey").innerHTML= key;
    document.getElementById("eventWhich").innerHTML= which;
})