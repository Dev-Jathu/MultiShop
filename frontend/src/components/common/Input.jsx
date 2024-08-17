import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder = '', required = false }) => {
    return (
        <div className="input-field">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                id={name}
                className="input"
            />
        </div>
    );
};

export default Input;
