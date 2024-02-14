if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
    let removeCartItem = document.querySelectorAll(".remove-btn");

    for (let i = 0; i < removeCartItem.length; i = i + 1) {
        let btn = removeCartItem[i];

        btn.addEventListener("click", event => {
            let btnClicked = event.target;
            btnClicked.parentElement.parentElement.remove();
        });
    }
}

function updateTotal() {
    
}

