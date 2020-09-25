/*
 *  Fireview.js © by Rohan Kanhaisingh.
 * 
 *  CustomShape
 * 
 *  ./shapes/customShape.js
 */

import { canvas, ctx, FireView } from '../../index.js';
import { mouse } from '../mouse.js';
import { graphical_objects } from '../objects.js';
import { lines } from '../draw.js';
import { setUniqueID } from '../uniqueID.js';

class pt_CustomShape {
    constructor(x, y) {
        this.x = y;
        this.y = y;
        this.points = [];

        graphical_objects.push(this);
    }
    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     */
    Arc(x, y, radius, background, borderColor, borderWidth, blurStrength, blurColor) {
        this.points.push({
            type: "CUSTOMSHAPE_ARC",
            x: x,
            y: y,
            radius: radius,
            background: background,
            borderColor: borderColor,
            borderWidth: borderWidth,
            blurStrength: blurStrength,
            blurColor: blurColor
        });
    }
    Rect() {

    }

    /**
     * Export this custom shape.
     * @param {("shape" | "image")} type Type of the file that will be exported.
     * @param {string} name Name of the file
     */
    Export(type, name,) {
        var type, name;

        switch (type) {
            case "shape":
                console.log(JSON.stringify(this));
                break;
            default:
                throw new Error(`${type} is not a valid type`);
                return;
                break;
        }
    }
    
    draw() {
        this.points.forEach((point) => {
            switch (point.type) {
                case "CUSTOMSHAPE_ARC":
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(this.x + point.x, this.y + point.y, point.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = point.background;
                    ctx.fill();
                    ctx.strokeStyle = point.borderColor;
                    ctx.lineWidth = point.borderWidth;
                    ctx.stroke();
                    ctx.shadowColor = point.blurColor;
                    ctx.shadowBlur = point.blurColor;
                    ctx.restore();

                    break;
            }
        }); 
    }
    update() {
        this.draw();
    }
}
export { pt_CustomShape };