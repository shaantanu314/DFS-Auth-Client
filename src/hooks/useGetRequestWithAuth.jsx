// useGetRequestWithAuth.js
import axios from "axios";

import { useAuth } from "./useAuth";

/**
 * `useGetRequestWithAuth` is a custom React hook designed to perform authenticated GET requests.
 * It leverages the `useAuth` context to access the current user's authentication token,
 * which is then included in the Authorization header of the request.
 *
 * This hook is particularly useful for fetching data that requires authentication, such as
 * protected API endpoints.
 *
 * @param {string} url - The URL to which the GET request should be made. This should be a string
 *                       representing the full URL of the resource you wish to fetch.
 * @param {object} options - Extra options to be sent which are sent in second argument of axios.get
 *
 * @returns {function} A function that, when called, returns a promise resolving to the response
 *                     of the GET request. The response object will contain the data returned
 *                     from the server, along with other information such as status and headers.
 *
 * @note This hook relies on the `useAuth` context to access the authentication token. Ensure
 *       that the `useAuth` context is properly set up and provides an `authentication` object
 *       with an `accessToken` property.
 */

const useGetRequestWithAuth = (url, options = {}) => {
  const { authentication } = useAuth();

  const fetchData = async () => {
    if (!authentication) {
      return null;
    }

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${authentication.accessToken}`,
        ...(typeof options?.headers === "object" ? options.headers : {}),
      },
      ...options,
    });
  };

  return fetchData;
};

export default useGetRequestWithAuth;
