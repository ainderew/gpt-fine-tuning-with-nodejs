import { openai } from './api.js'

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('davinci:ft-personal-2023-04-26-17-02-58')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()