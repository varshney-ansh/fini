'use server'
import { plaidClient } from "./plaid";
import { CountryCode, Products } from "plaid";

export const createPlaidLink = async() =>{
    try {
        const client_user_id = '8282785315';
        const tokenResponse = await plaidClient.linkTokenCreate({
            client_id: process.env.PLAID_CLIENT_ID,
            secret: process.env.PLAID_SANDBOX_KEY,
            user: { client_user_id: client_user_id },
            client_name: "Fini Corporation",
            language: 'en',
            products: [Products.Auth, Products.Transactions],
            country_codes: [CountryCode.Us, CountryCode.Ca],
        });

        return tokenResponse?.data.link_token;
    } catch (error) {
        console.log(error)
    }
}

export const exchangePlaidToken = async(public_token) =>{
    try {
        const exchangeResponse = await plaidClient.itemPublicTokenExchange({
            public_token,
            client_id: process.env.PLAID_CLIENT_ID,
            secret: process.env.PLAID_SANDBOX_KEY,
        });

        const accessToken = exchangeResponse.data.access_token;
        console.log({accessToken});

    } catch (error) {
        console.log(error);
    }
}
