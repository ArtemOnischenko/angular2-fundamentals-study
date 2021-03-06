import { OpaqueToken } from '@angular/core'

export let TOASTER_TOKEN = new OpaqueToken('toaster');
export interface Toaster {
    success (msg: string, title?:string): void;
    info (msg: string, title?:string): void;
    warning (msg: string, title?:string): void;
    error (msg: string, title?:string): void;
}

