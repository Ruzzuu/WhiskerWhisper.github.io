// Signup.js

import { useEffect, useState }
  from "react";

import "style.css";
const usernames = ["fairuz", "fai",];

const useDebounce = (value, delay) => {
    const [debounced, setDebounced] =
        useState(value);

    useEffect(() =>{
        const handler = setTimeout(() => {
            setDebounced(value);
        },delay);
return () => clearTimeout(handler);
}, [value, delay]);

return debounced;
};
const Username = (
    {isValid, isLoading, handleChange}
) =>{
    return (
        <>
        <div className="username">
            <Input
                onChange={handleChange}
                className="control"
                placeholder="Username"
            />
            <div className={ ' spinner $ {isLoading ? "loading": ""}'} ></div>
        </div>

            <div className={ 'validation ${!isValid ? "invalid": ""}'}>
            Username already taken
        </div>
        </>
    );
};

export const Signup = () => {
    const[isLoading, setIsLoading] =
        useState(false);

    const[isValid, setIsValid]=useState(false);
    const[username, setUsername]=useState("");

    const debouncedUsername=
        useDebounce(username,500);
    const handleChange = e => {
        setIsLoading(true);
        setUsername(e.target.value)
    };

    useEffect(()=> {
        setIsValid(!usernames.some(
            u => u === debouncedUsername));
            setIsLoading(false);
    }, [debouncedUsername]);

    return(
        <Username
        isLoading={isLoading}
        isValid={isValid}
        handleChange={handleChange}
    />
    );
};          