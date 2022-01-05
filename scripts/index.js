window.onload = ()=> {
    // img_change button clicks 
    const img_change = document.querySelector("#change_image").onclick = ()=> {
        let img = document.querySelector("#gallary_image_content");
        let src = img.getAttribute("src");
        
        if(src === "/images/my-image.svg") {
            img.setAttribute('src', '/images/mehedi1.jpg');
        }
        else if( src=== '/images/mehedi1.jpg' ) {
            img.setAttribute('src', "/images/mehedi2.jpg");
        }
        else if (src === '/images/mehedi2.jpg') {
            img.setAttribute('src', '/images/my-image.svg');
        }
        else {
            img.setAttribute('src', 'images/my-image.svg');
        }

    };
}