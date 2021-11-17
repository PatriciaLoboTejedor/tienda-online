"use strict";console.log(">> Ready :)");class Main{constructor(){this.products=[],this.min=0,this.max=5}async init(){this.initListenersInput(),this.products=await fetch("assets/data/products.json").then(t=>t.json()).then(t=>t.products),this.products.forEach(t=>{this.createCard(t)}),this.initListenerCard()}initListenerCard(){document.querySelectorAll(".js-buttonDetail").forEach(t=>{t.addEventListener("click",()=>this.navigateDetail(t.id))})}navigateDetail(t){window.location.href="product.html?id="+t}initListenersInput(){const t=document.querySelector("#inputMin"),e=document.querySelector("#inputMax");t.addEventListener("change",t=>{this.min=t.target.value,this.changeInput()}),e.addEventListener("change",t=>{this.max=t.target.value,this.changeInput()})}clearCards(){document.querySelectorAll(".card").forEach(t=>{t.remove()})}changeInput(){const t=this.products.filter(t=>t.price>=this.min&&t.price<=this.max);this.clearCards(),t.forEach(t=>{this.createCard(t)})}createCard(t){const e=document.querySelector(".js-container-products"),i=document.createElement("div");i.setAttribute("class","card"),i.setAttribute("style","width: 14rem"),i.setAttribute("id",t.id);const n=document.createElement("img");n.setAttribute("class","card-img-top"),n.setAttribute("src",t.img),n.setAttribute("alt",t.title);const s=document.createElement("div");s.setAttribute("class","card-body");const r=document.createElement("h4");r.setAttribute("class","card-title"),r.innerHTML=t.title;const a=document.createElement("p");a.setAttribute("class","card-text"),a.innerHTML=t.text;const c=document.createElement("h5");c.setAttribute("class","card-title"),c.innerHTML=t.price+"€";const d=document.createElement("a");d.setAttribute("class","btn btn-primary js-buttonDetail"),d.setAttribute("href","#"),d.innerHTML="Detalle",d.setAttribute("id",t.id),s.appendChild(r),s.appendChild(a),s.appendChild(c),s.appendChild(d),i.appendChild(n),i.appendChild(s),e.appendChild(i)}}const main=new Main;main.init();