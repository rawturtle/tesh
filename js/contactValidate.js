/**
 * Created by crawstorn on 10/8/16.
 */
var contactForm = (function () {
    var pub = {};
    function checkName() {
        if ($("#inputName").val() === "") {
            document.getElementById("nameError").style.display = "block";
        } else {
            document.getElementById("nameError").style.display = "none";
        }
    }
    function checkEmail() {
        if ($("#inputEmail").val() === "") {
            document.getElementById("emailError").style.display = "block";
        } else {
            document.getElementById("emailError").style.display = "none";
        }
    }
    function checkSubject() {
        if ($("#inputSubject").val() === "") {
            document.getElementById("subjectError").style.display = "block";
        } else {
            document.getElementById("subjectError").style.display = "none";
        }
    }
    function checkMessage() {
        if ($("#inputMessage").val() === "") {
            document.getElementById("messageError").style.display = "block";
        } else {
            document.getElementById("messageError").style.display = "none";
        }
    }
    
    pub.setup = function () {
        $("#inputName").on("focusout", checkName);
        $("#inputEmail").on("focusout", checkEmail);
        $("#inputSubject").on("focusout", checkSubject);
        $("#inputMessage").on("focusout", checkMessage);
    };
    return pub;
}());
$(document).ready(contactForm.setup());