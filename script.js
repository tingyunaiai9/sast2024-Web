
let node = document.getElementsByClassName("block");

for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", function() {
        // change the source of the image and content of the paragraph

        let image = node[i].querySelector('img');
        let src = image.getAttribute('src');

        let word = node[i].querySelector('p');

        if (src == "初雪.jpg") {
            image.src = "银灰.jpg";
            word.innerText = "银灰";
        }
        else if(src == "银灰.jpg") {
            image.src = "初雪.jpg";
            word.innerText = "初雪";
        }

    });
}
