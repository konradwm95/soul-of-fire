const imagesContainer = document.querySelector(".images_container");

const imgs = [
    ["../assets/images/1.jpg", "piec"],
    ["../assets/images/2.jpg", "piec"],
    ["../assets/images/3.jpg", "piec"]
]

function createImageElem(url) {
    const fragment = document.createDocumentFragment();
    const imageElem = document.createElement("div");
    imageElem.classList.add("container");
    const img = document.createElement('img');
    img.src = url[0];
    img.alt = url[1];
    
    imageElem.appendChild(img);
    fragment.appendChild(imageElem);

    imagesContainer.appendChild(fragment);
}

for (let i=0; i<=10; i++) {
    for (let j=0; j<imgs.length; j++) {
        createImageElem(imgs[j])
    }
};