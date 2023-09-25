// React imports
import { ChangeEvent, ReactElement, useContext, useEffect, useState } from "react";
// State management and Context imports
import { EditorContext, EditorDispatchContext } from "../context";
import { ACTIONS } from "../state/actions";
// Utility imports
import { str2bool } from "../../../utils/parsingHelpers";
// Component imports
import { FormField } from "../../../components/FormField";

/**
 * Renders the item editing form.
 *
 * @returns {ReactElement} A React element representing the item editing form.
 */
export function EditForm(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(EditorContext);
    const dispatch = useContext(EditorDispatchContext);

    // State for managing dialog visibility and item data
    const [formData, setFormData] = useState<any>();

    // Extract keys from formData or provide an empty object if formData is undefined
    const keys = Object.keys(formData ?? {});
    const formDataWithKeys: { [key: string]: any } = formData as { [key: string]: any };

    // Update formData when the selected item in context changes and calling handleSubmit
    useEffect(() => {
        if (state?.submitForm)
            handleSubmit();

        if(state?.selected)
            setFormData(state?.selected);
    }, [state?.selected, state?.submitForm]);

    /**
     * Handles changes in the item editing form inputs.
     *
     * @param event - The change event containing the input element's new value.
     */
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFormData((item: any) => ({ ...item, [name]: str2bool(value) }));
    };

    /**
    * Handles the submission of the item editing form.
    *
    * @param event - The form submission event.
    */
    function handleSubmit(): void {
        dispatch!({ type: ACTIONS.UPDATE, payload: formData });
        dispatch!({ type: ACTIONS.SUBMIT, payload: false });
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {keys.map((key) => {
                return (
                    <FormField
                        key={key}
                        type={key}
                        name={key}
                        label={key}
                        value={formDataWithKeys?.[key] ?? ''}
                        onChange={handleChange}
                        disabled={key === 'id' && !!state?.selected?.[key]}
                    />
                );
            })}
        </form>
    );
}
