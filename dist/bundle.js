!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o="Basic TWpaaVpXTXhPR05pTmpnME5HVTJaV0psWXpZeFltVmhOVFpsT1dJeFpERXhORE15TWpBMk9UZzRPVFUwOll6STROVGt4T1dReE5qZG1ORGsxWXpneU5UZzRPV0ZpWlRCaVlUY3hNR1F4TkRNeU1qQTJPVGc0T1RVMA==";const r="../../bower_components/jsartoolkit5/examples/Data/camera_para.dat";(function(e,t){return new Promise((n,r)=>{let a=new XMLHttpRequest;a.open("POST","https://iotmakers.kt.com/oauth/token"),a.setRequestHeader("Accept","application/json, text/plain, */*"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),a.setRequestHeader("Authorization",o),a.onload=(()=>{if(a.status>=200&&a.status<300){let e=JSON.parse(a.response);o=e.access_token,n(e)}else r(a.statusText)}),a.onerror=(()=>r(a.statusText)),a.send(`grant_type=password&username=${e}&password=${t}`)})})("wis2016","new1234!").then(e=>(function(e){return new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("GET",`https://iotmakers.kt.com/masterapi/v1.1/arCodes?offset=1&limit=5&targetSequence=${e}&deviceSequence=`),r.setRequestHeader("Accept","application/json, text/plain, */*"),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.setRequestHeader("Authorization","Bearer "+o),r.onload=(()=>{r.status>=200&&r.status<300?t(JSON.parse(r.response)):n(r.statusText)}),r.onerror=(()=>n(r.statusText)),r.send()})})(e.svc_tgt_seq)).then(e=>{window.ARThreeOnLoad=(()=>{ARController.getUserMediaThreeScene({maxARVideoSize:320,cameraParam:r,onSuccess:function(e,t,n){document.body.className=t.orientation,t.setPatternDetectionMode(artoolkit.AR_MATRIX_CODE_DETECTION);let o=function(e){let t=new THREE.WebGLRenderer({antialias:!0});if("portrait"===e.orientation){let n=windoww.innerWidth.innerWidth/e.videoHeight*e.videoWidth,o=windo;t.setSize(n,o),t.domElement.style.paddingBottom=n-o+"px"}else/Android|mobile|iPad|iPhone/i.test(navigator.userAgent)?t.setSize(window.innerWidth,window.innerWidth/e.videoWidth*e.videoHeight):(t.setSize(e.videoWidth,e.videoHeight),document.body.className+=" desktop");return t}(t);document.body.insertBefore(o.domElement,document.body.firstChild);let r=new THREE.Mesh(new THREE.SphereGeometry(.5,8,8),new THREE.MeshNormalMaterial);r.material.shading=THREE.FlatShading,r.position.z=.5;let a=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial);a.material.shading=THREE.FlatShading,a.position.z=.5;let i=t.createThreeBarcodeMarker(20);i.add(r),e.scene.add(i),(i=t.createThreeBarcodeMarker(21)).add(a),e.scene.add(i);let s=0,d=0;o.domElement.addEventListener("click",function(e){e.preventDefault(),d+=1},!1);let l=()=>{e.process(),e.renderOn(o),s+=.05*(d-r.rotation.z),r.rotation.z+=s,s*=.8,requestAnimationFrame(l)};l()}}),delete window.ARThreeOnLoad}),window.ARController&&ARController.getUserMediaThreeScene&&ARThreeOnLoad()})}]);