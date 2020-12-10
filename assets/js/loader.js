$.ajax({
    url: "./assets/data.json",
    type: "GET",
    dataType: "json",
    success: result => {
        let container = $("#main-content")
        let data = result["data"];
        data.forEach(val => {
            console.log(container);
            let internalDiv = $("<div class='col-sm-9'></div>");
            let section = $("<section class='row alternate'></section>");

            let titleEl = $(`<h4>${val["title"]}</h4>`);
            let textEl = $(`<p>${val["content"]}</p>`);

            internalDiv.append(titleEl);
            internalDiv.append(textEl);

            let imageEl = $(`<img class='col-sm-3' src='${val["url"]}' alt='${val["alt"]}'>`);
            section.append(imageEl);
            section.append(internalDiv);

            container.append("<hr>")
            container.append(section);
        });
    }
});