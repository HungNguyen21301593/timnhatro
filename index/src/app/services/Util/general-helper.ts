export class GeneralHelper {
    public static getRandomRGB(opacity: number = 1) {
        // Generate random values between 0 and 255 for each component
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        // Construct and return the RGB color string
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
}
