$.ajax({
    url: "./assets/data.json",
    type: "GET",
    dataType: "json",
    success: result => {
        let container = $("#main-content")
        let data = result["data"];
        data.forEach(val => {
            let internalDiv = $("<div class='row'></div>");
            let section = $("<section class='alternate promo'></section>");

            let titleEl = $(`<h3>${val["title"]}</h3>`);
            let textEl = $(`<p class="col-sm-9">${val["content"]}</pclass>`);

            let imageEl = $(`<img class='col-sm-3 marketing-image' src='${val["url"]}' alt='${val["alt"]}'>`);

            internalDiv.append(imageEl);
            internalDiv.append(textEl);

            section.append(titleEl);
            section.append(internalDiv);

            container.append("<hr>");
            container.append(section);
        });
    },
    error: (_, status, err) => {
        console.error("App failed with status " + status);
        console.error(err);
    }
});