import{r as t,h as e}from"./p-2eb42df6.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as s}from"./p-43fec8b7.js";const i=class{constructor(e){t(this,e),this.title=""}render(){const t=e("div",{class:"psk-description"},e("slot",null));return""===this.title.replace(/\s/g,"")?e("psk-card",null,t):e("psk-chapter",{title:this.title},t)}};!function(t,e,s,i){var r,p=arguments.length,c=p<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(c=(p<3?r(c):p>3?r(e,s,c):r(e,s))||c);p>3&&c&&Object.defineProperty(e,s,c)}([s({description:"This property is the title of the new psk-card/psk-chapter that will be created.",isMandatory:!1,propertyType:"string",specialNote:"All the empty spaces in the title will be deleted."})],i.prototype,"title",void 0);export{i as psk_description};