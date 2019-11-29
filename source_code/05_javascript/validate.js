function validate_phone() {
    const phone_re = /^(\+\d{1,4} )?(\(\d{3}\) ?|\d{3}[ -])\d{3}[ -]\d{4}$/;
    const phone_input = document.getElementById("phone");
    console.log("validate");
    phone_input.value = phone_input.value.trim();
    if(phone_re.test(phone_input.value)) {
        phone_input.className = "";
    } else {
        // phone_input.className = "error";
        phone_input.classList.add("error");
        // phone_input.className += " error_big";
        phone_input.classList.add("error_big");
    }
    // document.write("no no no");
}