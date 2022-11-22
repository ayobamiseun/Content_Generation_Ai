import React,{useState} from 'react'
import Navmenu from './Navmenu'
const { Configuration, OpenAIApi } = require("openai");
const Email = () => {
  const [email, setEmail] = useState({
    heading: "",
    response: "hello response"
 })

       const handleChange  = (e: React.ChangeEvent<HTMLInputElement> ) => {

        setEmail({...email, heading: e.target.value})

       }
   
       const onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        email.heading = "";

        const formData = new FormData(e.target), 
        formDataObj = Object.fromEntries(formData.entries())
 
        console.log(formDataObj.productName)
        const brand = formDataObj.productName;
        console.log(brand)

         const configuration = new Configuration({
       
          apiKey:  process.env.OPENAI_API_KEY,
          });   
          const openai = new OpenAIApi(configuration);         
          openai.createCompletion({
            model: "text-davinci-001",
            prompt: `Write a very nice tweet about lgbt: ${brand}`,
            temperature: 0.8,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0, 
            presence_penalty: 0,
          }). then((response: any) => {
              setEmail ({
      
                  heading: `AI Product Description Suggestion for: ${brand}`,
                  response: `${response.data.choices[0].text}`
              })
          })
          ;
       }


  return (<>
      
      <Navmenu/>
<div>
     

     <form  onSubmit={onFormSubmit} className="form-search d-flex align-items-stretch " data-aos="fade-up" data-aos-delay="200">
            <input 
            type="text" 
            className="form-control"
             placeholder="Product name"
             name="productName"
             value={email.heading}
             onChange={handleChange}
             />
            <button type="submit" className="btn ">Search</button>
          </form>
          <section id="result" className="result">
          <div className="container" data-aos="zoom-out">
           <div className="row justify-content-center">
           <div className="col-lg-8 text-center">
            <h3>The result will be display</h3>
            <p> {email.response}.</p>
            </div>
          </div>
      </div>
    </section>
    </div>  
  </>
  )
}
export default Email