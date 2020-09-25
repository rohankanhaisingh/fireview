/*
 *  Fireview.js © by Rohan Kanhaisingh.
 * 
 *  Object and group handlers
 *  
 *  Fireview.js © by Rohan Kanhaisingh.
 */

const graphical_objects = [];
const drawing_objects = [];
const particles = [];
const trails = [];
const htmlElements = [];


class Group {
    #arr;
    
    constructor(options) {
        this.#arr = [];

        this.maxSize = options.maxSize;
        this.allowType = options.allowType;

    }
    Execute(type, args) {
        switch (type) {
            case "AddForce":

                break;
        }
    }
    /**
     * Adds a item to this group.
     * @param {("shape" | "audio" | "canvas")} type
     * @param {any} value
     * @param {object} arguments
     */
    AddItem(type, value, args) {
        switch (type) {
            case "shape":
                this.#arr.push(value);
                break;
        }
    }
}



function add(val) {
    graphical_objects.push(val);
}

function addD(val) {
    drawing_objects.push(val);
}



export { add, graphical_objects, addD, Group};