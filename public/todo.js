if (document.readyState !== "loading") {
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document ready after waiting!");
        initializeCode();
    });
}

function initializeCode() {
    const inputText = document.getElementById("input-text");
    const submitButton = document.getElementById("submit-data");

    submitButton.addEventListener("click", function () {
        const text = inputText.value;

        // Create a request with JSON object
        const request = {
            text: text
        };

        // POST request to the "/list" route
        fetch("/list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(request => {
                console.log(request.list);
            })
            .catch(error => {
                console.error(error);
            });
    });
}

function addNewText(text) {
    const theWall = document.getElementById("the-wall");
    let newListItem = document.createElement("li");

    newListItem.classList.add("col", "s6", "m4", "l3");

    newListItem.appendChild(document.createTextNode(text));

    theWall.appendChild(newListItem);
    console.log("Working... adding new stuff...");
}
