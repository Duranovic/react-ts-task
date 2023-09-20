/**
 * A type that represents a user object.
 */
export type User = {
    id?: string;
    isActive: boolean;
    picture: string;
    age: number;
    name: string;
    email: string;
    address: string;
    about: string;
    registered: string;
  };

  /**
   * A constant that maps user props to form controls.
   */
  export const UserPropsTypes = {
    id: 'text',
    isActive: 'boolean',
    picture: 'image',
    age: 'number',
    name: 'text',
    email: 'email',
    address: 'text',
    about: 'textarea',
    registered: 'date',
  };
  