
document.addEventListener("DOMContentLoaded", function() {
    // 获取模板元素
    const template = document.getElementById('block-template');
    const container = document.getElementById('blocks-container');

    // 获取模板内容
    const templateContent = template.content;

    // 创建 10 个 block 元素
    for (let i = 0; i < 10; i++) {
        // 克隆模板内容
        const clone = document.importNode(templateContent, true);
        // 将克隆的内容添加到容器中
        container.appendChild(clone);
    }


    let node = document.getElementsByClassName("block");

    // alert(node.length);

    for (let i = 0; i < node.length; i++) {
        node[i].addEventListener("click", function() {

            // alert("You clicked on block " + (i + 1));

            // change the source of the image and content of the paragraph

            let image = node[i].querySelector('img');
            let src = image.getAttribute('src');

            let word = node[i].querySelector('p');

            if (src == "初雪.jpg") {
                image.classList.add("fadeout");
                word.classList.add("fadeout");

                setTimeout(function() {
                    image.classList.remove("fadeout");
                    word.classList.remove("fadeout");

                    image.src = "银灰.jpg";
                    word.innerText = "银灰";

                    // image.src = "某某.jpg";
                    // word.innerText = "某某";

                    image.classList.add("fadein");
                    word.classList.add("fadein");
                    setTimeout(function() {
                        image.classList.remove("fadein");
                        word.classList.remove("fadein");
                    }, 500);

                }, 500);
            }
            else if(src == "银灰.jpg") {
            // else if(src == "某某.jpg") {
                image.classList.add("fadeout");
                word.classList.add("fadeout");

                setTimeout(function() {
                    image.classList.remove("fadeout");
                    word.classList.remove("fadeout");

                    image.src = "初雪.jpg";
                    word.innerText = "初雪";

                    image.classList.add("fadein");
                    word.classList.add("fadein");
                    setTimeout(function() {
                        image.classList.remove("fadein");
                        word.classList.remove("fadein");
                    }, 500);

                }, 500);
            }

        });
    }
});
