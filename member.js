function skillsMember() {
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegex = /^[a-zA-Z\s]+$/;
    if (member == "") {
        memberError.innerHTML = "Please enter your name";
        memberError.style.color = "red";
        return false;
    } else if (!memberRegex.test(member)) {
        memberError.innerHTML = "Please enter a valid name";
        memberError.style.color = "red";
        return false;
    } else {
        memberError.innerHTML = "";
        return true;
    }
}