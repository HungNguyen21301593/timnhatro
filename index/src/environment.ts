export class UrlUtil {
    public static database = "https://rs-agent-map-default-rtdb.asia-southeast1.firebasedatabase.app/"
    public static base = "/main/";
    public static imageUrl = "https://api.cloudflare.com/client/v4/accounts/ee931afd697673b7d6841a64430b280c/images/v1";

    public static getDbUrlForUser(userphone: string) {
        return `${UrlUtil.database}${userphone}.json`;
    }

    public static getMapUrlForUser(userphone: string) {
        return `${UrlUtil.base}${userphone}`;
    }
}
