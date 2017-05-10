/*
 * Archivo principal de JS
 */
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){

      document.getElementById("nav-header").classList.remove("cambiar-nav");
      document.getElementById("content-nav").classList.remove("content-nav");


   } else if(currentScroll<=3){

     document.getElementById('nav-header').classList.add('cambiar-nav');
     document.getElementById('content-nav').classList.add('content-nav');
   }
   lastScrollTop = currentScroll;
}, false);
var arrayImgs = [{alt:"cabin"},{alt:"cake"},{alt:"circus"},{alt:"game"},
                 {alt:"safe"},{alt:"submarine"}];
window.addEventListener('load',function(){
  var dfm = document.createDocumentFragment();
  arrayImgs.map(e=>dfm.appendChild(crearImgWork("assets/images/portfolio/"+e.alt+".png",e.alt)));

  document.getElementById('container-work').appendChild(dfm);
});
document.getElementsByClassName('close')[0].addEventListener('click',function(e){
  document.getElementById('modal').classList.toggle('OpenClose');
});

function crearImgWork(url,descripcion,id){
  var figure = document.createElement('figure');
  figure.setAttribute('class','col-4');
  figure.setAttribute('id','img-'+id);
  var img = document.createElement('img');
  img.setAttribute('src',url);
  img.setAttribute('class','img-work');
  img.setAttribute('alt',"name");
  var figcaption = document.createElement('figcaption');
  figcaption.setAttribute('class','text-uppercase text-bold')
  figure.appendChild(img);
  figure.appendChild(figcaption);
  img.addEventListener('click',function(e){
    console.log(e.target);
    var img = document.createElement('img');
    img.setAttribute('src',e.target.getAttribute('src'));
    document.getElementById('modal-img').setAttribute('src',e.target.getAttribute('src'));
    // document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').classList.toggle('OpenClose');
  });
  return figure;
}
