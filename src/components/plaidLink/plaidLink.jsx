import { createPlaidLink, exchangePlaidToken } from "@/js/plaidLink";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";

const PlaidLink = () =>{
    
    const [token, setToken] = useState(null);
    const router = useRouter();

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
        router.push('/myaccount/dashboard');
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