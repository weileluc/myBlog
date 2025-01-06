import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialisierung des Stores
export const isAuthenticated = writable(browser && JSON.parse(localStorage.getItem('isAuthenticated')) || false);
export const token = writable(browser && localStorage.getItem('token') || null);

// Synchronisierung nur im Browser
if (browser) {
    isAuthenticated.subscribe((value) => {
        localStorage.setItem('isAuthenticated', JSON.stringify(value));
    });

    token.subscribe((value) => {
        localStorage.setItem('token', value);
    });
}

