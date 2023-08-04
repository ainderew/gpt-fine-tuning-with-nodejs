import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { openai } from './api.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const { data } = req.body;
  console.log(req.body.data);

  async function createCompletion(messages) {
    try {
      // const response = await openai.createChatCompletion({
      //   model: 'davinci:ft-personal-2023-05-23-03-57-07',
      //   messages: [
      //     { role: 'user', content: prompt }
      //   ],
      //   temperature: 0,
      // });

      const prompt = messages.map((message) => `${message.role}: ${message.content}`).join('\n');
      const response = await openai.createCompletion({
        model: 'davinci:ft-personal-2023-05-23-04-31-55',
        prompt: prompt,
        temperature: 0.4,
        max_tokens: 100,

      });
      if (response.data) {
        console.log('choices: ', response.data);
        return response.data.choices;
      }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  const x = await createCompletion(data);

  res.send(x[0].text);
});

app.listen(2121, () => {
  console.log(`[server]: Server is running at http://localhost:2121 🚀🥳`);
});
