import React, { useState } from 'react';

export const useForm = (isInputValid: (value: string) => boolean) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => setValue(target.value);
    const isTouchedHanlder = () => setIsTouched(true);

    let isValid = isInputValid(value);
    const error = isTouched && !isValid;

    return {
        value,
        valueHandler,
        isTouchedHanlder,
        error,
        isValid,
    };
};
