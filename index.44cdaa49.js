(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),s=document.querySelector("[data-menu-close]"),c=document.querySelector("body");e.addEventListener("click",(()=>{t.classList.toggle("is-open"),c.classList.toggle("is-lock")})),s.addEventListener("click",(()=>{t.classList.toggle("is-open"),c.classList.toggle("is-lock")})),document.addEventListener("click",(e=>{e.target.classList.contains("mobile__link")&&(t.classList.toggle("is-open"),c.classList.toggle("is-lock"))}))})();
//# sourceMappingURL=index.44cdaa49.js.map
