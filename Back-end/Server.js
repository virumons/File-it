
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import pg from 'pg'

const { Pool } = pg;
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'All_Users',
    password: '@viru',
    port: 5432,
});
const client = await pool.connect();
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api',(req,res)=>{
    res.send('Hello World');
})
// app.get("/",cors(),(req,res)=>{
//     console.log(req.body);
//     res.send("its data");
// })
app.post('/',cors(),async(req,res)=>{
    try{
    console.log(req.body);
    const { fullname, phoneno, email, npwd, waddress, userid } = req.body;
    const exist = await checkregister(email);
    if(exist == 0){
         client.query('INSERT INTO users_data (fullname, phoneno, email, password, waddress, userid) VALUES ($1, $2, $3, $4, $5, $6)', [fullname, phoneno, email, npwd, waddress, userid]);
    client.release(); // Release the client back to the pool
    res.json({ message: 'Data inserted successfully' });
    }else{
        res.json("exist")
    }
    // res.send(req.body)
}catch(err){
    res.send(err);
}
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} .....`);
});

const checkregister = async(email)=>{
    
    const result = await client.query('SELECT * FROM users_data WHERE email = $1',[email]);
    if(result.rows.length > 0){
        // const user = result.rows[0];
        return 1;
    }else{
        return 0;
    }
}
