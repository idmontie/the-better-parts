/**
 * Fat arrow functions look too similar to comparison operators
 * 
 * > But they auto-bind!
 * 
 * Thats true, but another recommendation is to not use this.
 */
const a = () => {
    this.f = adsf;
};