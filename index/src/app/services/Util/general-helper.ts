import { Color } from "src/app/interfaces/color";

export class GeneralHelper {
    public static getRandomRGB(opacity: number = 1): Color {
        // Generate random values between 0 and 255 for each component
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        // Construct and return the RGB color string
        return {
            r: red,
            g: green,
            b: blue,
            a: opacity
        };
    }

    public static toString(color: Color) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
