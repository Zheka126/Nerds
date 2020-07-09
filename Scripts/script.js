var write_form_button = document.querySelector(".open_button");
var write_form = document.querySelector(".write_us");
var close = write_form.querySelector(".close_button");

write_form_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_form.classList.add("modal_show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    write_form.classList.remove("modal_show");
}); 


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if (write_form.classList.contains("modal-show")) {
            write_form.classList.remove("modal-show");
        }
    }
});
