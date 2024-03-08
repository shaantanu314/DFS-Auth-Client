import axios from "axios";

import { REFRESH_TOKEN_URL } from "../constants";

const getAccessToken = (authURL, setAuthentication) =>
  axios
    .get(authURL + REFRESH_TOKEN_URL)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data.message);
      }

      const { user, accessToken } = req.data.data;

      setAuthentication((prev) => ({
        ...prev,
        isInitialized: true,
        user,
        accessToken,
      }));
    })
    .catch((err) => {
      console.log("DFS Auth Error : ", err.message);

      setAuthentication((prev) => ({
        ...prev,
        isInitialized: true,
      }));
    });

export { getAccessToken };
