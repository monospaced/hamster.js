// Type definitions for Hamster.js 1.1.4
// Definitions by: Kensington Technology associates <[~https://knowledgekta.com~]>

declare function Hamster(el: HTMLElement, passive?: boolean): Hamster;

interface Hamster {
  wheel( handler, useCapture?: boolean );
  unwheel();
}
