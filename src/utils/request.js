import axios from "axios";
import Config from "react-native-config";

export const request = ({ url, method, data }) => {
    return axios({
        method: method || "post",
        url: `${Config.API_BASE_URL2}${url}`,
        data,
    });
};
