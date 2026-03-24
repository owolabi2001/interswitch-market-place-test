import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const clientId = process.env.CLIENT_ID;
const secretKey = process.env.CLIENT_SECRET;

const base64 = Buffer.from(`${clientId}:${secretKey}`).toString('base64');

const url = `https://qa.interswitchng.com/passport/oauth/token`;

const response = await axios.post(url, undefined, {
    params: {
        scope: "profile",
        grant_type: "client_credentials"
    },
    headers: {
        Authorization: `Basic ${base64}`,
    }
});

console.log("Response", response.data);
console.log("AccessToken", response.data.access_token);


