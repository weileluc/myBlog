import { writable } from 'svelte/store';

export const isAuthenticated = writable(false); // Login-Status
export const token = writable(null); // Authentifizierungstoken
