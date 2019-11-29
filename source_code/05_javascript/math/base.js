function addStep() {
    let node = document.createElement("li");
    node.className = "list-group-item";
    let step = document.getElementById("step").value;
    node.innerHTML = `<div class="row">
        <div class="col-lg-10">${step}</div>
        <div class="col-lg-1">
            <button type="button" class="btn btn-danger" onclick="this.parentNode.parentNode.parentNode.remove()">Remove</button>
        </div> 
    </div>`;
    document.getElementById("stepList").appendChild(node);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, node]);
    node.innerHTML += `<div class="hiddenStepText">${step}</div>`
}

function download(data, filename, type) {
    let file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function saveSteps() {
    data = [];
    let steps = document.getElementById('stepList').getElementsByClassName("hiddenStepText");
    for (let i = 0; i < steps.length; i++) {
        data.push(steps[i].innerHTML);
    }
    download(data, 'steps.html', 'html');
}