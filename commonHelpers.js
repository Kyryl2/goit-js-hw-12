import{a as y,i as h,S as L}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function p(i,e){const n="43212506-95870309335e8ebf3ea9c8656",a="https://pixabay.com",t="/api/",s=new URLSearchParams({key:n,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await y.get(`${a}${t}?${s}`)}function f(i){return i.map(e=>`<li class="gallery-item">
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


      </li>`).join("")}const m=document.querySelector(".js-form"),g=document.querySelector(".input"),d=document.querySelector(".gallery"),r=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");let l=1;const v=15;let u=0;o.classList.add("is-hidden");o.addEventListener("click",b);m.addEventListener("submit",w);async function b(){try{l+=1,o.classList.add("is-hidden"),r.classList.remove("is-hidden");const{data:i}=await p(u,l,v);if(l===Math.ceil(i.totalHits/15))return o.classList.add("is-hidden"),r.classList.add("is-hidden"),h.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});d.insertAdjacentHTML("beforeend",f(i.hits)),o.classList.remove("is-hidden"),r.classList.add("is-hidden")}catch(i){console.log(i)}}async function w(i){if(i.preventDefault(),l=1,u=g.value.trim(),!u)return d.innerHTML="",r.classList.add("is-hidden"),o.classList.add("is-hidden"),i.target.reset(),h.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});d.innerHTML="";try{r.classList.remove("is-hidden"),o.classList.add("is-hidden");const e=await p(u,1);if(e.data.hits.length===0){d.innerHTML="",r.classList.add("is-hidden"),o.classList.add("is-hidden"),m.reset(),h.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}d.insertAdjacentHTML("beforeend",f(e.data.hits)),o.classList.remove("is-hidden"),r.classList.add("is-hidden");const n={captionsData:"alt",captionDelay:250};new L(".gallery a",n).refresh()}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
