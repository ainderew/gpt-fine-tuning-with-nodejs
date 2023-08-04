import { openai } from './api.js'


async function createFineTune() {
  try {
    const response = await openai.listFiles()
    console.log('response: ', response.data)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
