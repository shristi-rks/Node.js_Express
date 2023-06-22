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
            .then(data => {
                                // Update the frontend list with the text
                                const newText = request.text;
                                    addNewText(newText);
                                    console.log(data);
        })
            .catch(error => {
                console.error(error);
            });
    });
}

function addNewText(text) {
    const theWall = document.getElementById("lists");
    let newListItem = document.createElement("li");

    newListItem.appendChild(document.createTextNode(text));

    theWall.appendChild(newListItem);
    console.log("Working... adding new stuff...");
}
