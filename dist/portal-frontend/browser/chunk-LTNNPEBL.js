import{a as c}from"./chunk-RQIDKQUN.js";import{Nc as s,S as o,Y as n}from"./chunk-HOTPW52P.js";var u=(()=>{let t=class t{constructor(){this.END_POINT=c.API_URL+"/protected/residences",this.http=n(s)}findAll(e=0,r=""){return this.http.get(this.END_POINT+`?page=${e}&search=${r}`)}updateResidence(e,r){return this.http.put(this.END_POINT+`/${e}`,r)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{u as a};
