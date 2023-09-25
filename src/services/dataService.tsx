// Types imports
import { User } from "../types/user";

/**
 * Asynchronously fetches a list of users from the `data.json` file.
 *
 * @returns A Promise that resolves to an array of `User` objects, or an empty array if there is an error.
 */

export const getUsers = async (): Promise<Array<User>> => {
  try {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Asynchronously fetches a list of data from the `data.json` file.
 *
 * @returns A Promise that resolves to an array of `any` objects, or an empty array if there is an error.
 */

export const getData = async (): Promise<Array<any>> => {
  try {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Gets the data from the JSON Generator API.
 *
 * @returns A promise that resolves to an array of objects, or an empty array if an error occurs.
 */
export const getDataFromUrl = async (): Promise<Array<any>> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_TEMPLATE_ID}/data`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};