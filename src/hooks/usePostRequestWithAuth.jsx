// usePostRequestWithAuth.js
import axios from 'axios';

import { useAuth } from './useAuth';

/**
 * `usePostRequestWithAuth` is a custom React hook designed to perform authenticated POST requests.
 * It leverages the `useAuth` context to access the current user's authentication token,
 * which is then included in the Authorization header of the request.
 *
 * This hook is particularly useful for sending data to protected API endpoints that require authentication.
 *
 * @param {string} url - The URL to which the POST request should be made. This should be a string
 *                       representing the full URL of the resource you wish to send data to.
 * @param {object} data - The data to be sent in the body of the POST request.
 * @param {object} options - Extra options to be sent which are sent in the second argument of axios.post
 *
 * @returns {function} A function that, when called, returns a promise resolving to the response
 *                     of the POST request. The response object will contain the data returned
 *                     from the server, along with other information such as status and headers.
 *
 * @note This hook relies on the `useAuth` context to access the authentication token. Ensure
 *       that the `useAuth` context is properly set up and provides an `authentication` object
 *       with an `accessToken` property.
 */

const usePostRequestWithAuth = (url, options = {}) => {
  const authentication = useAuth();

  const postData = async data => {
    if (!authentication) {
      return null; // Throw error here
    }

    return axios.post(url, data, {
      ...options,
      headers: {
        Authorization: `Bearer ${authentication.accessToken}`,
        ...(typeof options?.headers === 'object' ? options.headers : {}),
      },
    });
  };

  return postData;
};

export { usePostRequestWithAuth };
