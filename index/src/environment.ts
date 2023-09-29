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

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDiOX_nO14W7ogetcKbRBcOYDfVE9tvr1A",
        authDomain: "rs-agent-map.firebaseapp.com",
        databaseURL: "https://rs-agent-map-urls.asia-southeast1.firebasedatabase.app/",
        projectId: "rs-agent-map",
        storageBucket: "rs-agent-map.appspot.com",
        messagingSenderId: "870407299470",
        appId: "1:870407299470:web:56d8d6655bc654d0e444df"
    }
};