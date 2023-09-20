/**
 * Converts a string value to a boolean value.
 *
 * @param {string} value - The string value to convert to a boolean.
 * @returns {boolean|string} The converted boolean value, or the original string if not "true" or "false".
 */
export const str2bool = (value: string): boolean | string => {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;

    return value;
}