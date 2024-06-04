

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from 'pg';
import multer from 'multer';
import axios from 'axios';
// import {create} from 'ipfs-http-client';

const { Pool } = pg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'All_Users',
    password: '@viru',
    port: 5432,
});
// const pool2 = new Pool({
//     user: 'postgres',
//     host:'localhost',
//     database: 'Users',
//     password: '@viru',
//     port: 5432,
// })

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/getall', (req, res) => {
    const {user , waddress} = req.body;
    console.log(user,waddress);
});
// ********************** Upload part
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const filedata = new FormData();
        filedata.append("file",file)
      if (!file) {
        return res.status(400).send({ message: 'No file uploaded' });
      }else{
        console.log(file);
        const response = await axios({
            method:"POST",
            url:"https://api.pinata.cloud/pinning/pinFileToIPFS",
            data:file,
            headers:{
                pinata_api_key: "41e55f076665914186ad",
                pinata_secret_api_key:" 3659ebd1afc84d23bcc16d68a35495091fdc8ce4bbbf4e9caf3d43794a409e52",
                "Content-Type":"multipart/form-data",
            }
        })
        const fileURL = "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash;
        console.log(fileURL)
      }
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    }
  });
//************************ Upload part 

app.post('/', cors(), async (req, res) => {
    const client = await pool.connect();
    // const client2 = await pool2.connect();
    try {
        console.log(req.body);
        const { fullname, phoneno, email, npwd, waddress, userid } = req.body;
        const exist = await checkRegister(email, client);
        if (exist) {
            res.json("exist");
        } else {
        
            await client.query('INSERT INTO users_data (fullname, phoneno, email, password, waddress, userid) VALUES ($1, $2, $3, $4, $5, $6)', [fullname, phoneno, email, npwd, waddress, userid]);
            res.json({ message: 'Data inserted successfully' });
        }
    } catch (err) {
        res.send(err);
    } finally {
        client.release();
    }
});

app.post("/login", cors(), async (req, res) => {
    const client = await pool.connect();
    try {
        console.log(req.body);
        const { email, password } = req.body;
        console.log(email,password)
        const match = await checkMatch(email,password, client);
        if (match) {
            res.json({match});
            console.log(match);
        } else {
            res.json("no");
            console.log("nooooo");
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    } finally {
        client.release();
    }
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} .....`);
});

const checkRegister = async (email, client) => {
    const result = await client.query('SELECT * FROM users_data WHERE email = $1', [email]);
    return result.rows.length > 0;
};

const checkMatch = async (email, password, client) => {
    console.log(email,"",password,"","got in checkmatch")
    const result = await client.query('SELECT userid FROM users_data WHERE email = $1 AND password = $2',[email,password]);
    console.log(result)
    if(result.rows.length == 1){
        return result.rows[0];
    }else{
        return 0;
    }
};

