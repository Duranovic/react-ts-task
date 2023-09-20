/**
 * A type that represents a props object for UserTableCell.
 */
export type UserTableCellProps = {
    type: string;
    value: string;
}

/**
 * A type that represents a props object for FormControls.
 */
export type FormControlProps = {
    type?: string;
    value?: any;
    label?: string;
    name?: string;
    disabled?: boolean;
    onChange: (event: any) => void;
}

export type FormControlTextProps = {
    type?: string;
    value?: any;
    label?: string;
    name?: string;
    disabled?: boolean;
    onChange: (event: any) => void;
}