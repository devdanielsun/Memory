import { Component } from '@angular/core';

@Component({
  selector: 'pickcolor',
  template: `
    <button class="jscolor
      {valueElement:'valueinactive',
       styleElement:'styleInactive',
       onFineChange:'setColor(\'td.inactive\')'}">
    Kaartkleur
  </button>
  <input type="hidden" id="valueinactive" value="ff0000"><input id="styleInactive">
  <br>
    <button class="jscolor
      {valueElement:'valueactive',
       styleElement:'styleActive',
       onFineChange:'setColor(\'td.active\')'}">
    Open
  </button>
  <input type="hidden" id="valueactive" value="008C00"><input id="styleActive">
  <br>
    <button class="jscolor
      {valueElement:'valuefound',
       styleElement:'styleFound',
       onFineChange:'setColor(\'td.found\')'}">
    Gevonden
  </button>
  <input type="hidden" id="valuefound" value="800080"><input id="styleFound">
  `
})
export class PickcolorComponent { }
