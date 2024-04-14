import{a as g,i as l,S as L}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function v(r,t,s){const i="43212506-95870309335e8ebf3ea9c8656",e="https://pixabay.com",o="/api/",n=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}),p=await g.get(`${e}${o}?${n}`);return console.log(p.data.hits),p}function f(r){return r.map(t=>`<li class="gallery-item">
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


      </li>`).join("")}const m=document.querySelector(".js-form"),h=document.querySelector(".input"),a=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=document.querySelector(".load-more-btn");let c=1;const d=15;h.value.trim();const b=Math.ceil(100/d),$="43212506-95870309335e8ebf3ea9c8656",P="https://pixabay.com",w="/api/";y.addEventListener("click",S);const M=new URLSearchParams({key:$,q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:c});async function S(){if(c>b)return l.error({position:"topRight",message:"We're sorry, there are no more posts to load"});try{c+=1;const r=await axios.get(`${P}${w}?${M}`);a.insertAdjacentHTML("beforeend",f(r.data.hits)),c>1&&y.classList.add("is-hidden")}catch(r){console.log(r)}}m.addEventListener("submit",R);function R(r){r.preventDefault();const t=h.value.trim();if(!t)return a.innerHTML="",r.target.reset(),l.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});u.classList.remove("is-hidden"),a.innerHTML="",v(t,1,d).then(s=>{if(s.data.hits.length===0){a.innerHTML="",m.reset(),l.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}a.innerHTML=f(s.data.hits);const i={captionsData:"alt",captionDelay:250};new L(".gallery a",i).refresh()}).catch(s=>console.log(s)).finally(()=>{u.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
