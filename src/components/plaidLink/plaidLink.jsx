import { createPlaidLink, exchangePlaidToken } from "@/js/plaidLink";
import { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";

const PlaidLink = () =>{
    
    const [token, setToken] = useState(null);

    useEffect(() => {
        const createLinkToken = async () => {
            const response = await createPlaidLink();
            const link_token = response;
            setToken(link_token);            
         };
        createLinkToken();
    }, []);    

    const onSuccess = useCallback(async(token)=>{
        await exchangePlaidToken(token);
        console.log("successful linked")
    }, []);

    const { open, ready } = usePlaidLink({
        token,
        onSuccess,
    });

    return(
        <button onClick={() => open()} disabled={!ready}>Next</button>
    )
}

export default PlaidLink;