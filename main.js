import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { openai } from './api.js'

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async(req, res) => {

 const {data} = req.body
 console.log("ATAY")
 console.log(req.body.data)

async function createCompletion(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt }
      ],
      temperature: 0,
    });
    if (response.data) {
      console.log('choices: ', response.data)
      return response.data.choices;
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

const x = await createCompletion(data)

  res.send(x[0]);

});


app.listen(2121, () => {
  console.log(`[server]: Server is running at http://localhost:2121 🚀🥳`);
});