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

//Mar Books to be saved
$("#marBookSubmit").on("click", function() {
    var book = $("#marBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#marBookHolder").prepend(bookSaved);
    $("#marBookHolder").show(500);
});

//Apr Books to be saved
$("#aprBookSubmit").on("click", function() {
    var book = $("#aprBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#aprBookHolder").prepend(bookSaved);
    $("#aprBookHolder").show(500);
});

//May Books to be saved
$("#mayBookSubmit").on("click", function() {
    var book = $("#mayBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#mayBookHolder").prepend(bookSaved);
    $("#mayBookHolder").show(500);
});

//Jun Books to be saved
$("#junBookSubmit").on("click", function() {
    var book = $("#junBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#junBookHolder").prepend(bookSaved);
    $("#junBookHolder").show(500);
});

//Jul Books to be saved
$("#julBookSubmit").on("click", function() {
    var book = $("#julBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#julBookHolder").prepend(bookSaved);
    $("#julBookHolder").show(500);
});

//Aug Books to be saved
$("#augBookSubmit").on("click", function() {
    var book = $("#augBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#augBookHolder").prepend(bookSaved);
    $("#augBookHolder").show(500);
});

//Sep Books to be saved
$("#sepBookSubmit").on("click", function() {
    var book = $("#sepBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#sepBookHolder").prepend(bookSaved);
    $("#sepBookHolder").show(500);
});

//Oct Books to be saved
$("#octBookSubmit").on("click", function() {
    var book = $("#octBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#octBookHolder").prepend(bookSaved);
    $("#octBookHolder").show(500);
});

//Nov Books to be saved
$("#novBookSubmit").on("click", function() {
    var book = $("#novBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#novBookHolder").prepend(bookSaved);
    $("#novBookHolder").show(500);
});

//Dec Books to be saved
$("#decBookSubmit").on("click", function() {
    var book = $("#decBookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#decBookHolder").prepend(bookSaved);
    $("#decBookHolder").show(500);
});