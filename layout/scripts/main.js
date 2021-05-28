$("#form").hide();
$("#submitted").hide();

$("#join").click(function(){
    if ($("#form").is(":hidden"))
    {
        $("#form").show();
        $("#join").html("Cancel");
    }
    else
    {
        $("#form").hide();
        $("#join").html("Join us");
    }
});

$("#form").submit(function(e){
    e.preventDefault();
    $("#join").hide();
    $("#form").hide();
    $("#submitted").show();
});