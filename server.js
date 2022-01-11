const app = require('express')();

const cors = require('cors');

const PORT = 5000;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://JakubM1999:WebDevLearning1234@mernlearning.w6zvu.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.get('/', (req,res)=>{ 

        client.connect(async err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object

            const data = await collection.find().toArray();

        res.send(JSON.stringify(data))
        });
})


app.listen(PORT, ()=>{
    console.log("listening to port: " + PORT);
})