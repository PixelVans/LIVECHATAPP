const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const apiResponse = await axios.put("https://api.chatengine.io/users/", {
            username: username, 
            secret: username, 
            first_name: username
        }, {
            headers: {
                "private-key": process.env.CHATKEY
            }
        });

        // Return the response from the external API
        return res.status(apiResponse.status).json(apiResponse.data);
    
    } catch (e) {
        // Handle errors and return the error response
        if (e.response) {
            // Axios error response is available
            return res.status(e.response.status).json(e.response.data);
        } else {
            // Handle other types of errors (e.g., network errors)
            return res.status(500).json({ error: 'Internal Server Error', message: e.message });
        }
    }
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
});
