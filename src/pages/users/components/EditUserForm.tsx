// React imports
import { ChangeEvent, ReactElement, useContext, useEffect, useState } from "react";
// State management and Context imports
import { UsersContext, UsersDispatchContext } from "../context";
import { ACTIONS } from "../state/actions";
// Types imports
import { User, UserPropsTypes } from "../../../types/user";
// Utility imports
import { str2bool } from "../../../utils/parsingHelpers";
// Component imports
import { FormField } from "../../../components/FormField";
import { initialUserState } from "../state/state";

/**
 * Renders the user editing form.
 *
 * @returns {ReactElement} A React element representing the user editing form.
 */
export function UserEditForm(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(UsersContext);
    const dispatch = useContext(UsersDispatchContext);

    // State for managing dialog visibility and user data
    const [formData, setFormData] = useState<User>(initialUserState);

    // Extract keys from formData or provide an empty object if formData is undefined
    const keys = Object.keys(formData ?? {});
    const formDataWithKeys: { [key: string]: any } = formData as { [key: string]: any };

    // Update formData when the selectedUser in context changes and calling handleSubmit
    useEffect(() => {
        if (state?.submitForm)
            handleSubmit();

        if(state?.selectedUser)
            setFormData(state?.selectedUser);
    }, [state?.selectedUser, state?.submitForm]);

    /**
     * Handles changes in the user editing form inputs.
     *
     * @param event - The change event containing the input element's new value.
     */
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFormData((user: User) => ({ ...user, [name]: str2bool(value) }));
    };

    /**
    * Handles the submission of the user editing form.
    *
    * @param event - The form submission event.
    */
    function handleSubmit(): void {
        dispatch!({ type: ACTIONS.UPDATE_USER, payload: formData });
        dispatch!({ type: ACTIONS.SUBMIT_FORM, payload: false });
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {keys.map((key) => {
                const typeKey = key as keyof User;
                return (
                    <FormField
                        key={key}
                        type={UserPropsTypes[typeKey]}
                        name={key}
                        label={key}
                        value={formDataWithKeys?.[key] ?? ''}
                        onChange={handleChange}
                        disabled={key === 'id' && !!state?.selectedUser?.[key]}
                    />
                );
            })}
        </form>
    );
}
