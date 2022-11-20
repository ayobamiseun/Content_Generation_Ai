import React,{useState} from 'react'
import { Form } from 'react-router-dom'
const { Configuration, OpenAIApi } = require("openai");
 // @ts-ignore

   // @ts-ignore
function Display() {
     
 const [products, setProducts] = useState({
    heading: "",
    response: "hello response"
 })

  // @ts-ignore


        // open ai api

         
    // const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Tell me all i need to know about: ${products}",
//   temperature: 0.8,
//   max_tokens: 143,
//   top_p: 1,
//   frequency_penalty: 0, 
//   presence_penalty: 0,
// }). then((response) => {
//     setProducts ({
//         heading: `AI Product Description Suggestion for: ${formDataObj.product.Name}`,
//         response: `${response.data.choices[0].text}`
//     })
// })
// ;

 
       // @ts-ignore
    
    
       // @ts-ignore
       const handleChange  = (e) => {

        setProducts({...products, heading: e.target.value})

       }
 // @ts-ignore
       const onFormSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target), 
        formDataObj = Object.fromEntries(formData.entries())
        // @ts-ignore
        console.log(formDataObj.productName)
        const brand = formDataObj.productName;
        console.log(brand)
         // @ts-ignore
         const configuration = new Configuration({
  apiKey: "",
});
 // @ts-ignore
const openai = new OpenAIApi(configuration);
 // @ts-ignore
openai.createCompletion({
  model: "text-davinci-001",
  prompt: `Tell me all i need to know about: ${brand}`,
  temperature: 0.8,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0, 
  presence_penalty: 0,
   // @ts-ignore
}). then((response) => {
    setProducts ({
         // @ts-ignore
        heading: `AI Product Description Suggestion for: ${brand}`,
        response: `${response.data.choices[0].text}`
    })
})
;
       }
  return (
    <div>
     

     <form  onSubmit={onFormSubmit} className="form-search d-flex align-items-stretch " data-aos="fade-up" data-aos-delay="200">
            <input 
            type="text" 
            className="form-control"
             placeholder="Product name"
             name="productName"
              // @ts-ignore
            //  value={products.heading}
             // @ts-ignore
             onChange={handleChange}
           
             />
            <button type="submit" className="btn ">Search</button>
            {/* <button className="button-19" role="button">{search}</button> */}
          </form>
          
          <p> {products.heading}</p>
          <p> {products.response}</p>


    </div>
  )
}

export default Display