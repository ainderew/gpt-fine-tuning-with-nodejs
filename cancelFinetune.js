import { openai } from './api.js'


async function createFineTune() {
  try {
    const response = await openai.cancelFineTune('ft-KGWfbWv44vAPf71FCz5L08j3')
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
