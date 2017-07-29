$(document).ready(function () {
    //$("#Name").css({ "background-color": "red" });
    //alert("function Called");

});

//$(document.body).on("click", "#OK", function() {

//});


$(document.body).on("click", "#SaveButton", function () {
    //var name = $("#Name").val();
    //if (name == "" || name == undefined) {
    //    alert("Empty");
    //    return false;
    //} else {
    //    return true;
    //}
    $.ajax({
        type: "GET",
        url: "/students/info",
        contentType: "application/json; charset=utf-8,"
        data: JSON.stringify(),
    success: function(data{
        alert(data);
    }
});
});

//$(document.body).on("click", "#Ok", function() {

//});

//$("#OK").click(function() {
//    $(this).val("No");
//    $("#No").val("Ok");

//});

