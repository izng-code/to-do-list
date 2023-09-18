(()=>{"use strict";let e=[];e.push(new function(e,t,n,d,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.number=i}("Add more items","Add more to-do-items to your first project","soon","high",0));const t=e,n=function(){let e=document.querySelector("#content");e.addEventListener("click",(function(t){let n=document.querySelector(".expanded-to-do");document.body.removeChild(n),e.classList.remove("blur")}))};(function(){let e=document.querySelector(".to-do-list"),n=document.createElement("div");n.classList.add("project-container");let d=document.createElement("div");d.classList.add("project-title"),d.textContent="My first project",e.appendChild(n),n.appendChild(d),function(e){for(let n in e){let e=document.createElement("div");e.classList.add("to-do-container"),e.setAttribute("number",t[n].number),document.querySelector(".project-container").appendChild(e);let d=document.createElement("div");d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n        <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 "></path>\n        </svg>';let i=document.createElement("div");i.textContent=t[n].title;let o=document.createElement("div");o.textContent=`Due: ${t[n].dueDate}`,e.appendChild(d),e.appendChild(i),e.appendChild(o)}}(t);let i=document.createElement("div");i.classList.add("icon-div"),i.innerHTML='<svg class="add-to-do" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>\n    </svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>\n    </svg>',n.appendChild(i)})(),document.querySelectorAll(".to-do-container").forEach((e=>e.addEventListener("click",(function(d){let i=e.getAttribute("number");d.stopPropagation(),d.preventDefault(),function(e){document.querySelector("#content").classList.add("blur");let d=document.createElement("div");d.classList.add("expanded-to-do"),document.body.appendChild(d);let i=document.createElement("div");i.textContent="Name";let o=document.createElement("div");o.textContent="Description";let l=document.createElement("div");l.textContent="Due";let a=document.createElement("div");a.textContent="Priority";let c=document.createElement("div");c.classList.add("editable-text"),c.textContent=t[e].title;let r=document.createElement("div");r.classList.add("editable-text"),r.textContent=t[e].description;let p=document.createElement("div");p.classList.add("editable-text"),p.textContent=t[e].dueDate;let m=document.createElement("div");m.classList.add("editable-text"),m.textContent=t[e].priority,d.appendChild(i),d.appendChild(c),d.appendChild(o),d.appendChild(r),d.appendChild(l),d.appendChild(p),d.appendChild(a),d.appendChild(m),n()}(i)})))),document.querySelectorAll(".add-to-do").forEach((e=>e.addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault(),function(){document.querySelector("#content").classList.add("blur");let e=document.createElement("form");e.classList.add("expanded-to-do"),e.method="GET",document.body.appendChild(e);let t=document.createElement("div");t.textContent="Name";let n=document.createElement("div");n.textContent="Description";let d=document.createElement("div");d.textContent="Due";let i=document.createElement("div");i.textContent="Priority";let o=document.createElement("input");o.name="name",o.required=!0;let l=document.createElement("input");l.name="description",l.required=!0;let a=document.createElement("input");a.name="due";let c=document.createElement("select");c.name="priority",c.value="Priority",c.required=!0;let r=document.createElement("option");r.value="High",r.textContent="High",c.appendChild(r);let p=document.createElement("option");p.value="Medium",p.textContent="Medium",c.appendChild(p);let m=document.createElement("option");m.value="Low",m.textContent="Low",c.appendChild(m);let u=document.createElement("input");u.type="Submit",u.value="Add",u.name="add-button",e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(l),e.appendChild(d),e.appendChild(a),e.appendChild(i),e.appendChild(c),e.appendChild(u)}()})))),n()})();