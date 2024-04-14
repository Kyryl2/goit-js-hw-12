import{a as L,i as u,S as g}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function h(o,t){const r="43212506-95870309335e8ebf3ea9c8656",n="https://pixabay.com",e="/api/",s=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return await L.get(`${n}${e}?${s}`)}function p(o){return o.map(t=>`<li class="gallery-item">
        <div class ="foto"><a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"></a></div>
        
        <div class = "under-photo">
        
        <div class ="info"><h3>Likes</h3><p>${t.likes}</p></div>
      
      <div class ="info"><h3>Views</h3>
      <p>${t.views}</p></div>
      
      <div class ="info"><h3>Comments</h3>
      <p>${t.comments}</p></div>
      
      <div class ="info"> <h3>Downloads</h3>
      <p>${t.downloads}</p></div>
     
</div>


      </li>`).join("")}const f=document.querySelector(".js-form"),m=document.querySelector(".input"),c=document.querySelector(".gallery"),a=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let l=1;const y=15,v=m.value.trim(),b=Math.ceil(1e3/y);i.classList.add("is-hidden");i.addEventListener("click",w);f.addEventListener("submit",P);async function w(){if(l>b)return i.classList.add("is-hidden"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{l+=1,i.classList.add("is-hidden"),a.classList.remove("is-hidden");const o=await h(v,l,y);c.insertAdjacentHTML("beforeend",p(o.data.hits)),i.classList.remove("is-hidden"),a.classList.add("is-hidden")}catch(o){console.log(o)}}async function P(o){o.preventDefault();const t=m.value.trim();if(!t)return c.innerHTML="",a.classList.add("is-hidden"),i.classList.add("is-hidden"),o.target.reset(),u.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});c.innerHTML="";try{a.classList.remove("is-hidden"),i.classList.add("is-hidden");const r=await h(t,1);if(r.data.hits.length===0){c.innerHTML="",a.classList.add("is-hidden"),i.classList.add("is-hidden"),f.reset(),u.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}c.insertAdjacentHTML("beforeend",p(r.data.hits)),i.classList.remove("is-hidden"),a.classList.add("is-hidden");const n={captionsData:"alt",captionDelay:250};new g(".gallery a",n).refresh()}catch(r){console.log(r)}}
//# sourceMappingURL=commonHelpers.js.map
