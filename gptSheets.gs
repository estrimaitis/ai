// Constants for API access and model settings
const SECRET_KEY = 'your-api-key'  // Replace this with your API key
const MAX_TOKENS = 10 // The maximum number of tokens to generate in the response
const MODEL_NAME = 'text-davinci-002' // The name of the model to use for the API request
const MODEL_TEMP = 0.3 // The temperature setting for the API request

/**
 * @function GPT
 * @param {string} prompt - The text prompt to send to the API
 * @returns {string} - The API's response to the prompt
 * @description - This function sends a text prompt to the OpenAI API and returns the API's response.
 */
function GPT(prompt) {
  // The URL for the API endpoint
  const url = 'https://api.openai.com/v1/completions'
  // The payload for the API request
  const payload = {
    model: MODEL_NAME,
    prompt: prompt,
    temperature: MODEL_TEMP,
    max_tokens: MAX_TOKENS
  }
  // The options for the API request
  const options = {
    headers: { 
      Authorization: `Bearer ${SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'post',
    payload: JSON.stringify(payload)
  }
  // Make the API request
  const res = UrlFetchApp.fetch(url, options)
  // Parse the response
  const json = JSON.parse(res.getContentText())
  // Return the API's response
  return json.choices[0].text.trim()
}
