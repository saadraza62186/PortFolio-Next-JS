// src/declarations.d.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'aos' {
    const AOS: any;
    export default AOS;
  }
  declare module 'aos' {
    export function init(options?: any): void;
}