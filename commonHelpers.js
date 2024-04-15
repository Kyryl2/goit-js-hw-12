import{a as v,S as b,i as h}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();async function g(s,e){const c="43212506-95870309335e8ebf3ea9c8656",a="https://pixabay.com",t="/api/",o=new URLSearchParams({key:c,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await v.get(`${a}${t}?${o}`)}function f(s){return s.map(e=>`<li class="gallery-item">
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


      </li>`).join("")}const y=document.querySelector(".js-form"),w=document.querySelector(".input"),n=document.querySelector(".gallery"),r=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let d=1;const m=15;let u=0;const S={captionsData:"alt",captionDelay:250},p=new b(".gallery a",S);i.classList.add("is-hidden");i.addEventListener("click",P);y.addEventListener("submit",L);async function L(s){if(s.preventDefault(),d=1,u=w.value.trim(),!u)return n.innerHTML="",r.classList.add("is-hidden"),i.classList.add("is-hidden"),s.target.reset(),h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});n.innerHTML="";try{r.classList.remove("is-hidden"),i.classList.add("is-hidden");const e=await g(u,1);if(console.log(e),e.data.hits.length===0)return n.innerHTML="",r.classList.add("is-hidden"),i.classList.add("is-hidden"),y.reset(),h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});if(e.data.total<=m){n.insertAdjacentHTML("beforeend",f(e.data.hits)),i.classList.add("is-hidden"),r.classList.add("is-hidden"),i.removeEventListener("click",L),h.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"});return}n.insertAdjacentHTML("beforeend",f(e.data.hits)),i.classList.remove("is-hidden"),r.classList.add("is-hidden"),p.refresh()}catch(e){console.log(e)}}async function P(){d+=1,i.classList.add("is-hidden"),r.classList.remove("is-hidden");try{const{data:s}=await g(u,d,m),e=Math.ceil(s.total/m);if(d===e){i.classList.add("is-hidden"),r.classList.add("is-hidden"),console.log(d),console.log(e),n.insertAdjacentHTML("beforeend",f(s.hits)),h.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"}),p.refresh();const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"});return}n.insertAdjacentHTML("beforeend",f(s.hits));const{height:c}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:c*2,behavior:"smooth"}),p.refresh(),i.classList.remove("is-hidden"),r.classList.add("is-hidden")}catch(s){console.log(s)}}
//# sourceMappingURL=commonHelpers.js.map
