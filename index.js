import{S as p,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="46160271-30a7facc458188e9573ebab80",L="https://pixabay.com/api/";function v(s){const o=new URLSearchParams(s);return fetch(`${L}?key=${y}&${o}`).then(r=>{if(!r.ok)throw new Error("Bad Request!");return r.json()})}const m=document.querySelector(".gallery");function b(s){const o=s.map(r=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:a,views:f,comments:u,downloads:g}=r;return`
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${n}"
                    data-source="${e}"
                    alt="${t}"
                />
                <div class="image-descrition">
                    <div>
                        <span class="image-descrition-font">Likes</span>
                        <span class="image-descrition-font">${a}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Views</span>
                        <span class="image-descrition-font">${f}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Comments</span>
                        <span class="image-descrition-font">${u}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Downloads</span>
                        <span class="image-descrition-font">${g}</span>
                    </div>
                </div>
            </a>`}).join("");m.insertAdjacentHTML("beforeend",o),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function w(){m.innerHTML=""}let $="";const S=document.querySelector(".form-image"),d=document.querySelector(".loader"),c={q:$,image_type:"photo",orientation:"horizontal",safesearch:!0},i={messageColor:"white",backgroundColor:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"},P=s=>{const{imageName:o}=s.currentTarget.elements;c.q=o.value,s.preventDefault(),s.currentTarget.reset(),w(),q(),v(c).then(r=>{r.hits.length?b(r.hits):l(!1)}).catch(r=>l(r)).finally(T)},q=()=>{d.innerHTML="<span></span>"},T=()=>{d.innerHTML=""},l=s=>{i.message=typeof s=="object"?s.message:i.message,h.error(i)};S.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
