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