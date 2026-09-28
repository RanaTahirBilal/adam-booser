/* Adam C. Booser site. Minimal: drawer and smooth scroll offset. */
(function(){
  var burger=document.getElementById('ab_burger'), drawer=document.getElementById('ab_drawer');
  if(burger&&drawer){ burger.addEventListener('click',function(){ drawer.hidden=!drawer.hidden; }); }
  document.querySelectorAll('.ab-scroll').forEach(function(a){
    a.addEventListener('click',function(e){
      var t=document.querySelector(this.getAttribute('href'));
      if(!t) return; e.preventDefault();
      window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-66,behavior:'smooth'});
      if(drawer&&!drawer.hidden) drawer.hidden=true;
    });
  });
})();
