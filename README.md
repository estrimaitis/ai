# GPT Sheets

A Google Sheets custom function that uses the OpenAI API to generate text based on a given prompt. 

## Getting Started

1. Replace the string 'your-api-key' with your own API key in the script. 
2. To use the function in Google Sheets, you can enter "=GPT(" and then add your prompt text in quotation marks, and close the parentheses. Then press enter. The function will return the API's response.
3. You can also adjust the temperature and max tokens in the script according to your need.
4. The model name is already set to 'text-davinci-002' which is more structured and deterministic: for data, you can change it to "davinci" which is more flexible and creative: for stories, chatbots.

## Temperature Setting

The temperature setting controls the randomness or creativity of the API's response. Lower values result in more predictable responses, while higher values result in more creative responses. The default temperature for this script is set to 0.3. 

## Usage

This script is a Google Sheets custom function that uses the OpenAI API to generate text based on a given prompt. To use this function, you will need an API key from OpenAI. Once you have an API key, replace the string 'your-api-key' with your own API key in the script.

## Note
Please note that OpenAI API has usage limits based on the plan you subscribe, so please check the usage limits on OpenAI website before using the function.
