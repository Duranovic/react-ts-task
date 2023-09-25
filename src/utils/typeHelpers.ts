// Enum imports
import { TypeEnum } from "../enums/type";


/**
 * Checks if a string is an image.
 *
 * @param value The string to check.
 * @returns `true` if the string is an image, or `false` otherwise.
 */
export const isImage = (value: string): boolean => {
    return value.includes('http');
}

/**
 * Checks if a string is an email address.
 *
 * @param email The string to check.
 * @returns `true` if the string is an email address, or `false` otherwise.
 */
export const isEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * Checks if a value is a valid date.
 *
 * @param input The value to check.
 * @returns `true` if the value is a valid date, or `false` otherwise.
 */
export const isValidDate = (input: any): boolean => {
    return isNaN(input) && !isNaN(Date.parse(input));
}

/**
 * Checks if a string is a long text.
 *
 * @param value The string to check.
 * @returns `true` if the string is a long text, or `false` otherwise.
 */
export const isLongText = (value: string): boolean => {
    return value.length > 50;
}

/**
 * Gets the type of a value.
 *
 * @param value The value to get the type for.
 * @returns The type of the value, or `TypeEnum.TEXT` if the type of the value is not recognized.
 */
export const getType = (value: any): TypeEnum => {
    switch (typeof value) {
        case 'boolean':
            return TypeEnum.BOOLEAN;
        case 'number':
            return TypeEnum.NUMBER;
        case 'object': 
            return TypeEnum.OBJECT;
        case 'string':
            if (isEmail(value))
                return TypeEnum.EMAIL;
            if (isImage(value))
                return TypeEnum.IMAGE;
            if (isValidDate(value))
                return TypeEnum.DATE;
            if (isLongText(value))
                return TypeEnum.LONG_TEXT;
            return TypeEnum.TEXT;
        default:
            return TypeEnum.TEXT;
    }
}