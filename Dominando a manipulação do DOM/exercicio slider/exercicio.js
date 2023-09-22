var lastIndex = 0;
var images = document.querySelectorAll('.conteiner  img');
images.forEach((item,index),()=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click',()=>{
        var lastImage = document.querySelectorAll('.conteiner img')[lastIndex];
        let actualImage = document.querySelectorAll('.conteiner img')[index];
        // resetando as bullets e setar a nova com base na imagem

       document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-single');
        document.querySelectorAll('.bullet-single')[index].classList.add('actice-bullet');

        lastImage.computedStyleMap.opacity = 0;
        actualImage.computedStyleMap.opacity = 1;
        lastIndex = index;
        }
    )})