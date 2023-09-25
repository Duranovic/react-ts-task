/**
 * Finds the item in a list that matches the target object.
 *
 * @param list The list to search.
 * @param targetObject The object to match.
 * @returns The item in the list that matches the target object, or `undefined` if no matching item is found.
 */
export const findItemByObject = (list: any[], targetObject: any): any => {
  return list.find((item: any) => {
    // Use JSON.stringify for a deep comparison of objects
    return JSON.stringify(item) === JSON.stringify(targetObject);
  });
}