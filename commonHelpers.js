import{a as v,S as b,i as l}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();async function y(s,e){const d="43212506-95870309335e8ebf3ea9c8656",a="https://pixabay.com",t="/api/",i=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await v.get(`${a}${t}?${i}`)}function f(s){return s.map(e=>`<li class="gallery-item">
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


      </li>`).join("")}const g=document.querySelector(".js-form"),w=document.querySelector(".input"),n=document.querySelector(".gallery"),o=document.querySelector(".loader"),r=document.querySelector(".load-more-btn");let h=1;const p=15;let u=0;const S={captionsData:"alt",captionDelay:250},m=new b(".gallery a",S);r.classList.add("is-hidden");r.addEventListener("click",P);g.addEventListener("submit",L);async function L(s){if(s.preventDefault(),h=1,u=w.value.trim(),g.reset(),!u)return n.innerHTML="",o.classList.add("is-hidden"),r.classList.add("is-hidden"),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});n.innerHTML="";try{o.classList.remove("is-hidden"),r.classList.add("is-hidden");const e=await y(u,1);if(e.data.hits.length===0)return n.innerHTML="",o.classList.add("is-hidden"),r.classList.add("is-hidden"),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});if(e.data.total<=p){n.insertAdjacentHTML("beforeend",f(e.data.hits)),m.refresh(),r.classList.add("is-hidden"),o.classList.add("is-hidden"),r.removeEventListener("click",L),l.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"});return}n.insertAdjacentHTML("beforeend",f(e.data.hits)),r.classList.remove("is-hidden"),o.classList.add("is-hidden"),m.refresh()}catch(e){console.log(e),r.classList.add("is-hidden"),o.classList.add("is-hidden")}}async function P(){h+=1,r.classList.add("is-hidden"),o.classList.remove("is-hidden");try{const{data:s}=await y(u,h,p),e=Math.ceil(s.totalHits/p);if(console.log(s),h===e){r.classList.add("is-hidden"),o.classList.add("is-hidden"),n.insertAdjacentHTML("beforeend",f(s.hits)),l.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"}),m.refresh();const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"});return}n.insertAdjacentHTML("beforeend",f(s.hits));const{height:d}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:d*2,behavior:"smooth"}),m.refresh(),r.classList.remove("is-hidden"),o.classList.add("is-hidden")}catch(s){console.log(s),r.classList.add("is-hidden"),o.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
