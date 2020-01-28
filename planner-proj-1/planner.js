//display month divs as buttons are clicked

//jan display

$("#janClick").on("click", function() {
    $(".months").hide(500);
    $("#janDisplay").show(500);
});

//feb display

$("#febClick").on("click", function() {
    $(".months").hide(500);
    $("#febDisplay").show(500);
});

//mar display

$("#marClick").on("click", function() {
    $(".months").hide(500);
    $("#marDisplay").show(500);
});

//apr display

$("#aprClick").on("click", function() {
    $(".months").hide(500);
    $("#aprDisplay").show(500);
});

//may display

$("#mayClick").on("click", function() {
    $(".months").hide(500);
    $("#mayDisplay").show(500);
});

//jun display

$("#junClick").on("click", function() {
    $(".months").hide(500);
    $("#junDisplay").show(500);
});

//jul display

$("#julClick").on("click", function() {
    $(".months").hide(500);
    $("#julDisplay").show(500);
});

//aug display

$("#augClick").on("click", function() {
    $(".months").hide(500);
    $("#augDisplay").show(500);
});

//sep display

$("#sepClick").on("click", function() {
    $(".months").hide(500);
    $("#sepDisplay").show(500);
});

//oct display

$("#octClick").on("click", function() {
    $(".months").hide(500);
    $("#octDisplay").show(500);
});

//nov display

$("#novClick").on("click", function() {
    $(".months").hide(500);
    $("#novDisplay").show(500);
});

//dec display

$("#decClick").on("click", function() {
    $(".months").hide(500);
    $("#decDisplay").show(500);
});

//append typed books to current div

//Jan Books to be saved
var janBookSaved;
$("#janBookSubmit").on("click", function() {
    var book = $("#janBookInput").val();
    var janBookSaved = $("<option>").append(book);
    $("#janBookHolder").prepend(janBookSaved);
    $("#janBookHolder").show(500);
});



//Feb Books to be saved

$("#febBookSubmit").on("click", function() {
    var book = $("#febBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#febBookHolder").prepend(bookSaved);
    $("#febBookHolder").show(500);
});