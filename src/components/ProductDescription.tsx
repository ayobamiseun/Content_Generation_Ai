import React from 'react'
import Display from './Display'

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Tell me all i need to know about Iphone",
//   temperature: 0.8,
//   max_tokens: 143,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });

 const ProductDescription = () => {
  return (
    <div>
     
      <Display
       description="Generate the detail you want to know by inputting the product name"
       search="search product"

    />
  </div>
  )
}

export default ProductDescription
