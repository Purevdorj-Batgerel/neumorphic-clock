(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const t={},d=[3,6,9,12],l=["hourDegree","minuteDegree","secondDegree"],c=new Map;d.forEach(r=>{c.set(r,document.getElementById(`_${r}`))});function a(){const r=new Date;t.seconds=r.getSeconds();const s=r.getMinutes(),o=(r.getHours()+11)%12+1;t.secondDegree=t.seconds*6,t.minuteDegree=s*6+t.seconds*6/60,t.hourDegree=o*30+s*30/60,setInterval(m,1e3)}function f(r){switch(r){case 0:return c.get(12);case 15:return c.get(3);case 30:return c.get(6);case 45:return c.get(9);default:return}}function m(){var r,s;t.seconds=(t.seconds+1)%60,t.secondDegree+=6,t.minuteDegree+=.1,t.hourDegree+=.1/60,(r=document.querySelector(".shine"))==null||r.classList.remove("shine"),(s=f(t.seconds))==null||s.classList.add("shine"),l.forEach(o=>{document.documentElement.style.setProperty(`--${o}`,`${t[o]}deg`)})}a();
