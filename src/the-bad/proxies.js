/**
 * Proxies are over-complicated and hide intent.
 *
 * @param {any} obj 
 */
export default function createProxy(obj) {
    return new Proxy(obj, {
        apply: function (obj, prop) {

        },

        construct: function (obj, prop) {

        },

        defineProperty: function (obj, prop) {

        },

        deleteProperty: function (obj, prop) {

        },

        // enumerate: function (obj, prop) {

        // },

        get: function (obj, prop) {
            return obj[prop];
        },

        getOwnPropertyDescriptor: function (obj, prop) {

        },

        getPrototypeOf: function (obj, prop) {

        },

        has: function (obj, prop) {

        },

        isExtensible: function (obj, prop) {

        },

        ownKeys: function (obj, prop) {

        },

        preventExtensions: function (obj, prop) {

        },

        set: function (obj, prop) {

        },

        setPrototypeOf: function (obj, prop) {

        },

    });
}
