


function printData() {

    var input_language = document.getElementById("Langs").value;

    var output_language = document.getElementById("out_language").value;

    var input_query = document.getElementById("language_input").value;

    async function getData() {
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: `${input_query}`,
                source: `${input_language}`,
                target: `${output_language}`
            }),
            headers: { "Content-Type": "application/json" }
        });

        let data = await res.json();
        console.log(data)
         var output = document.getElementById("out_put")
        if (input_query == null || data.translatedText == undefined) {
            output.innerHTML = ""
        }
        else {
            output.innerHTML = data.translatedText;
        }
    }
    getData();
}