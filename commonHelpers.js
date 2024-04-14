import{a as L,i as u,S as g}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function p(o,e){const r="43212506-95870309335e8ebf3ea9c8656",n="https://pixabay.com",t="/api/",s=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await L.get(`${n}${t}?${s}`)}function f(o){return o.map(e=>`<li class="gallery-item">
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


      </li>`).join("")}const m=document.querySelector(".js-form"),h=document.querySelector(".input"),c=document.querySelector(".gallery"),a=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let l=1;const y=15;h.value.trim();const v=Math.ceil(1e3/y);i.classList.add("is-hidden");i.addEventListener("click",b);m.addEventListener("submit",w);async function b(){if(l>v)return i.classList.add("is-hidden"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{l+=1,i.classList.add("is-hidden"),a.classList.remove("is-hidden");const o=h.value.trim(),e=await p(o,l,y);c.insertAdjacentHTML("beforeend",f(e.data.hits)),i.classList.remove("is-hidden"),a.classList.add("is-hidden")}catch(o){console.log(o)}}async function w(o){o.preventDefault();const e=h.value.trim();if(!e)return c.innerHTML="",a.classList.add("is-hidden"),i.classList.add("is-hidden"),o.target.reset(),u.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});c.innerHTML="";try{a.classList.remove("is-hidden"),i.classList.add("is-hidden");const r=await p(e,1);if(r.data.hits.length===0){c.innerHTML="",a.classList.add("is-hidden"),i.classList.add("is-hidden"),m.reset(),u.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}c.insertAdjacentHTML("beforeend",f(r.data.hits)),i.classList.remove("is-hidden"),a.classList.add("is-hidden");const n={captionsData:"alt",captionDelay:250};new g(".gallery a",n).refresh()}catch(r){console.log(r)}}
//# sourceMappingURL=commonHelpers.js.map
