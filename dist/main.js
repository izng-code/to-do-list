(()=>{"use strict";let t=[];t.push(new function(t,e,n,d){this.title=t,this.description=e,this.dueDate=n,this.priority=d}("Add more items","Add more to-do-items to your first project","soon","high"));const e=t;console.log(e),function(){let t=document.querySelector(".to-do-list"),n=document.createElement("div");n.classList.add("project-container");let d=document.createElement("div");d.classList.add("project-title"),d.textContent="My first project",t.appendChild(n),n.appendChild(d);for(let t in e){let d=document.createElement("div");d.classList.add("to-do-container"),n.appendChild(d);let i=document.createElement("div");i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n        <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 "></path>\n        </svg>';let o=document.createElement("div");o.textContent=e[t].title;let s=document.createElement("div");s.textContent=`Due: ${e[t].dueDate}`,d.appendChild(i),d.appendChild(o),d.appendChild(s)}let i=document.createElement("div");i.classList.add("icon-div"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>\n    </svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">\n    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>\n    </svg>',n.appendChild(i)}()})();