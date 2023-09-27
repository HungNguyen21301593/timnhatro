export class UrlUtil {
    public static database = "https://rs-agent-map-default-rtdb.asia-southeast1.firebasedatabase.app/"
    public static base = "/main/";

    public static getDbUrlForUser(userphone: string) {
        return `${UrlUtil.database}${userphone}.json`;
    }

    public static getMapUrlForUser(userphone: string) {
        return `${UrlUtil.base}${userphone}`;
    }
}