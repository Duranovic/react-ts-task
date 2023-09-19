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
  