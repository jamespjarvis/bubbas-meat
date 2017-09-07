!function(e){function t(o){if(s[o])return s[o].exports;var n=s[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=163)}({144:function(e,t){},163:function(e,t,s){"use strict";function o(){var e=this;this.initialize=function(){e.submitButton=document.querySelector("button.submit"),e.form=document.querySelector("form"),e.title=document.querySelector("input#email"),e.description=document.querySelector("input#password"),e.formInputs=e.form.querySelectorAll(".form-input"),e.formInputs.forEach(function(t){return t.addEventListener("change",e.formInputHandler)}),e.formInputs.forEach(function(t){return t.addEventListener("keyup",e.formInputHandler)}),e.submitButton.addEventListener("click",e.submitForm),e.formReady=!1,e.formSubmitted=!1},this.formInputHandler=function(t){e.formSwitch(t.target),e.checkFormSubmitReady(),e.formReady&&(e.submitButton.disabled=!1)},this.checkFormSubmitReady=function(){e.form.querySelectorAll(".success").length===e.formInputs.length?e.submitButton.disabled=!1:e.submitButton.disabled=!0},this.formSwitch=function(t){var s=t.id,o=t.value,n=!1;switch(s){case"email":/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(o)&&(n=!0);break;case"password":o.length>4&&(n=!0);break;default:console.log("default!"),n=!0}return e.modifyElementStatus(t,n)},this.modifyElementStatus=function(e,t){return t?(e.classList.remove("error"),e.classList.add("success"),e.removeAttribute("required")):e.classList.add("error"),t},this.submitForm=function(t){if(t.preventDefault(),!e.formSubmitted){e.createMessageSpan(),e.formSubmitted=!0;var s={};e.formInputs.forEach(function(e){s[e.id]=e.value});var o={user:s},n={method:"POST",headers:[{name:"Content-Type",value:"application/json"}],data:JSON.stringify(o)};e.requestify("/api/users/login",n).then(JSON.parse).then(function(t){console.log(t);var s={type:"LOGIN",payload:t};s.payload?(e.localStorageMiddleware(s),e.displayResultMessage("&#10003;","rgb(90, 191, 13)"),setTimeout(function(){window.location.href="/admin"},800)):(e.displayResultMessage("&times;","rgb(245, 73, 73)"),setTimeout(function(){e.formSubmitted=!1,document.body.removeChild(e.message)},800))}).catch(function(t){e.displayResultMessage("&times;","rgb(245, 73, 73)"),setTimeout(function(){e.formSubmitted=!1,document.body.removeChild(e.message)},800)})}},this.localStorageMiddleware=function(e){"LOGIN"===e.type?localStorage.setItem("jwt",e.payload.user.token):"LOGOUT"===e.type&&localStorage.setItem("jwt","")},this.createMessageSpan=function(){e.message=document.createElement("span"),e.message.classList.add("message"),document.body.appendChild(e.message),e.messageSymbol=document.createElement("span"),e.messageSymbol.classList.add("loader"),e.message.appendChild(e.messageSymbol)},this.displayResultMessage=function(t,s){e.messageSymbol.classList.remove("loader"),e.messageSymbol.classList.add("message-symbol"),e.messageSymbol.innerHTML=t,e.messageSymbol.style.color=s,e.messageSymbol.classList.add("message-symbol")},this.requestify=function(e,t){return new Promise(function(s,o){var n=new XMLHttpRequest;n.open(t.method,e),void 0!==t.headers&&t.headers.forEach(function(e){return n.setRequestHeader(e.name,e.value)}),n.onload=function(){n.status>=200&&n.status<300?s(n.response):o(Error(n.statusText))},n.onerror=function(){return o({status:n.status,statusText:n.statusText})},n.send(t.data)})}}s(144),(new o).initialize()}});