import { openai } from './api.js'


async function createFineTune() {
  try {
    const response = await openai.cancelFineTune("ft-mcAowYyIDdPkLvaHibwHGshO")
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
