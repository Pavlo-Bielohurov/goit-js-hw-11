import{S as m,i as c}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(o){return fetch(`https://pixabay.com/api/?key=44822255-685480c2b82623113acf30a35&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}function h(o){const r=document.querySelector(".js-gallery");r.innerHTML="";const n=o.map(({largeImageURL:i,webformatURL:e,tags:t,likes:s,views:p,comments:f,downloads:d})=>`
    <li class="gallery-item">
    <a href="${i}">
    <img src="${e}" alt="${t}" class="card-img"/>
    </a>
    <ul class="galery-item-description">
    <li>
    <p class="count-text">Likes</p>
    <p class="count">${s}</p>
    </li>
    <li>
    <p class="count-text">Views</p>
    <p class="count">${p}</p>
    </li>
    <li>
    <p class="count-text">Comments</p>
    <p class="count">${f}</p>
    </li>
    <li>
    <p class="count-text">Downloads</p>
    <p class="count">${d}</p>
    </li>
    </ul>
    </li>
    `).join("");r.insertAdjacentHTML("afterbegin",n),new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8})}const a=document.querySelector(".js-search"),l=document.querySelector(".loader");a.addEventListener("submit",g);function g(o){o.preventDefault();const n=o.currentTarget.elements.search.value.trim().toLowerCase();if(!n){c.error({title:"Error",message:"Please enter a search query.",position:"topRight",timeout:2e3});return}$(),y(n).then(i=>{i.hits.length===0?c.warning({title:"Warning",message:"Nothing found for your request.",position:"topRight",timeout:2e3}):h(i.hits)}).catch(L).finally(()=>{u(),a.reset()})}function L(o){console.error("Fetch Error:",o),u()}function $(){l.style.display="block"}function u(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
