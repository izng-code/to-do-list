(()=>{"use strict";const e=function(e,t,n,o,d,l){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.number=d};let t=[[]];if(localStorage.length>0)for(let e=0;e<localStorage.length;e++){let n=localStorage.getItem(`todo${e}`);t[e]=JSON.parse(n)}else t[0].push(new e("Add more items","Add more to-do-items to your first project","soon","high",0)),localStorage.setItem("todo0",JSON.stringify(t[0]));const n=t,o=function(e,t){console.log(e);for(let n in e){let o=document.createElement("div");o.classList.add("to-do-container"),o.setAttribute("number",e[n].number),document.querySelector(`[listnumber="${t}"]`).appendChild(o);let d=document.createElement("div");d.classList.add("checkbox"),d.setAttribute("number",e[n].number),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n        <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 "></path>\n        </svg>';let l=document.createElement("div");l.textContent=e[n].title;let i=document.createElement("div");i.textContent=`Due: ${e[n].dueDate}`,o.appendChild(d),o.appendChild(l),o.appendChild(i)}},d=function(){let e=document.querySelector(".to-do-list");for(let t=0;t<localStorage.length;t++){let d=document.createElement("div");d.classList.add("project-container"),d.setAttribute("listnumber",t.toString());let l=document.createElement("div");l.classList.add("project-title"),l.textContent="My first project",e.appendChild(d),d.appendChild(l),o(n[t],t);let i=document.createElement("div");i.classList.add("icon-div"),i.innerHTML=`<svg class="add-to-do" listnumber="${d.getAttribute("listnumber")}" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>\n        </svg><svg class="remove-list" listnumber="${d.getAttribute("listnumber")}" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>\n        </svg>`,d.appendChild(i)}},l=function(){let e=document.querySelector("#content");e.addEventListener("click",(function(t){let n=document.querySelector(".expanded-to-do");document.body.removeChild(n),e.classList.remove("blur")}))},i=function(t){document.querySelector("#content").classList.add("blur");let o=document.createElement("form");o.classList.add("expanded-to-do"),o.method="GET",document.body.appendChild(o);let d=document.createElement("div");d.textContent="Name";let l=document.createElement("div");l.textContent="Description";let i=document.createElement("div");i.textContent="Due";let r=document.createElement("div");r.textContent="Priority";let c=document.createElement("input");c.id="name",c.required=!0;let a=document.createElement("input");a.id="description",a.required=!0;let u=document.createElement("input");u.id="due";let m=document.createElement("select");m.id="priority",m.value="Priority",m.required=!0;let s=document.createElement("option");s.value="High",s.textContent="High",m.appendChild(s);let p=document.createElement("option");p.value="Medium",p.textContent="Medium",m.appendChild(p);let h=document.createElement("option");h.value="Low",h.textContent="Low",m.appendChild(h);let L=document.createElement("input");L.type="Submit",L.value="Add",L.name="add-button",L.onclick=function(o){o.stopPropagation(),function(t){console.log(t);let o=document.getElementById("name").value,d=document.getElementById("description").value,l=document.getElementById("due").value,i=document.getElementById("priority").value;n[t].push(new e(o,d,l,i,n[t].length)),localStorage.setItem(`todo${t}`,JSON.stringify(n[t]))}(t)},o.appendChild(d),o.appendChild(c),o.appendChild(l),o.appendChild(a),o.appendChild(i),o.appendChild(u),o.appendChild(r),o.appendChild(m),o.appendChild(L)};d(),document.querySelectorAll(".to-do-container").forEach((e=>e.addEventListener("click",(function(t){let o=e.getAttribute("number");t.stopPropagation(),t.preventDefault(),function(e){document.querySelector("#content").classList.add("blur");let t=document.createElement("div");t.classList.add("expanded-to-do"),document.body.appendChild(t);let o=document.createElement("div");o.textContent="Name";let d=document.createElement("div");d.textContent="Description";let i=document.createElement("div");i.textContent="Due";let r=document.createElement("div");r.textContent="Priority";let c=document.createElement("div");c.classList.add("editable-text"),c.textContent=n[e].title;let a=document.createElement("div");a.classList.add("editable-text"),a.textContent=n[e].description;let u=document.createElement("div");u.classList.add("editable-text"),u.textContent=n[e].dueDate;let m=document.createElement("div");m.classList.add("editable-text"),m.textContent=n[e].priority,t.appendChild(o),t.appendChild(c),t.appendChild(d),t.appendChild(a),t.appendChild(i),t.appendChild(u),t.appendChild(r),t.appendChild(m),l()}(o)})))),document.querySelectorAll(".add-to-do").forEach((e=>e.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault();let n=e.getAttribute("listnumber");i(n)})))),l(),document.querySelectorAll(".checkbox").forEach((e=>e.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),function(e){e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n    <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>\n    </svg>',n.splice(e.getAttribute("number"),1),localStorage.setItem("todos",JSON.stringify(n));let t=document.querySelector(`.to-do-container[number='${e.getAttribute("number")}']`);t.classList.add("strike"),setTimeout((function(){document.querySelector(".project-container").removeChild(t)}),600)}(e)})))),document.querySelector(".plus").addEventListener("click",(function(){(function(){let t=localStorage.length,n=(prompt("Name of the new list?","My project"),[new e("Add more items","Add more to-do-items to your first project","soon","high",0,0)]);localStorage.setItem(`todo${t}`,JSON.stringify(n))})(),function(){let e=document.querySelector(".to-do-list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(),d()})),document.querySelectorAll(".remove-list").forEach((e=>e.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),function(e){document.querySelector(`[listnumber="${e}"]`).remove(),localStorage.removeItem(`todo${e}`)}(e.getAttribute("listnumber"))})))),function(){const e=document.querySelector(".to-do-list");e.addEventListener("wheel",(t=>{t.preventDefault(),e.scrollLeft+=t.deltaY}))}()})();