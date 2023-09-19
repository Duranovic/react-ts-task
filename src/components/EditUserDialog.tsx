import { ChangeEvent, useContext, useEffect, useState } from "react";
import { UsersContext, UsersDispatchContext } from "../pages/users/context";
import { User, UserPropsTypes } from "../models/user";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ACTIONS } from "../pages/users/actions";
import { FormField } from "./formControls/FormField";
import { str2bool } from "../utils/parsingHelpers";

export function EditUserDialog() {
    const state = useContext(UsersContext);
    const dispatch = useContext(UsersDispatchContext);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<User | undefined>(undefined);

    const keys = Object.keys(formData ?? {});
    const formDataWithKeys: { [key: string]: any } = formData as { [key: string]: any };

    useEffect(() => {
        setIsOpen(state?.selectedUser !== undefined);
        setFormData(state?.selectedUser);
    }, [state?.selectedUser]);

    const handleClose = () => {
        dispatch({ type: ACTIONS.SELECT_USER, payload: null });
        setIsOpen(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((user: any) => ({ ...user, [name]: str2bool(value) }));
    };


    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.UPDATE_USER, payload: formData });
    };

    return (
        <Dialog open={isOpen} >
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {keys.map((key) => {
                        const typeKey = key as keyof User;
                        return (
                            <FormField key={key} style={{ flex: '1' }} type={UserPropsTypes[typeKey]} id={key} name={key} label={key} variant="standard" value={formDataWithKeys?.[key] ?? ''} onChange={handleChange} />
                        )
                    })}
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
                <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>

    );
}