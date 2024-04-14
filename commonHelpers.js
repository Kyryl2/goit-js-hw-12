import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function f(i){const e=new URLSearchParams({key:"43212506-95870309335e8ebf3ea9c8656",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`,{header:{"Access-Control-Allow-Origin":"https://pixabay.com"}}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p(i){return i.map(e=>`<li class="gallery-item">
        <div class ="foto"><a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"></a></div>
        
        <div class = "under-photo">
        
        <div class ="info"><h3>Likes</h3><p>${e.likes}</p></div>
      
      <div class ="info"><h3>Views</h3>
      <p>${e.views}</p></div>
      
      <div class ="info"><h3>Comments</h3>
      <p>${e.comments}</p></div>
      
      <div class ="info"> <h3>Downloads</h3>
      <p>${e.downloads}</p></div>
     
</div>


      </li>`).join("")}const d=document.querySelector(".js-form"),h=document.querySelector(".input"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");d.addEventListener("submit",m);function m(i){i.preventDefault();const e=h.value.trim();if(!e)return n.innerHTML="",i.target.reset(),c.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});l.classList.remove("is-hidden"),n.innerHTML="",f(e).then(r=>{if(r.hits.length===0){n.innerHTML="",d.reset(),c.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}n.innerHTML=p(r.hits);const s={captionsData:"alt",captionDelay:250};new u(".gallery a",s).refresh()}).catch(r=>console.log(r)).finally(()=>{l.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
