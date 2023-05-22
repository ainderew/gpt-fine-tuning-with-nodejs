import { openai } from './api.js'

async function createCompletion(prompt) {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-04-27-08-50-17',
      prompt: prompt,
      max_tokens: 20,
  
    })
    if (response.data) {
      console.log('choices: ', response.data)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
