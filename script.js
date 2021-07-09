document.getElementById('toggle-btn').addEventListener('click', ()=>{
    document.getElementById('navBar').classList.toggle('active');
})

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  const callback = function(event,observer){
      event.forEach(function(event){
        if(event.intersectionRatio > 0.1){//sion depasse 10% du block alors on lui rajoute la class reveal-visible
            event.target.classList.add('reveal-visible');
            observer.unobserve(event.target); //on arrete d'observer
        }
      })

  }

  var observer = new IntersectionObserver(callback, options);
    document.querySelectorAll('.reveal').forEach(function (r){ //Boucle pour pouvoir observer chaque element avec la classe reveal
      observer.observe(r);
  })
