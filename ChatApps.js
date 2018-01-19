/* Message */
document.getElementById("random").addEventListener("click", myFunction);
function myFunction() {
    var msg=document.getElementById("input-msg").value;
    document.getElementById("random").innerHTML = msg;
}



