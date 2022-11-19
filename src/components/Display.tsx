import  {FC, useState} from 'react'
import Navmenu from './Navmenu'
const { Configuration, OpenAIApi } = require("openai");

// type Person = {
//     heading: string | null;
//     response: string | null;
//   };

interface Props  {
 
    event:any;
    // value?: React.InputHTMLAttributes<HTMLInputElement>;
    // products?:  string | ReadonlyArray<string> | number | undefined;
    products?:string| '';
    setProducts: React.Dispatch<React.SetStateAction<string>>;
    onFormSubmit: (e: React.FormEvent) => void
    heading: string | null;
    response: string | null;
}


 const ProductDescription: FC<Props> = () => {
   
    const [products, setProducts] = useState ({
        heading: 'This Response from AI will be shown here',
        response: '... await response here'
    });
    



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
// }). then((response) => {
//     setProducts ({
//         heading: `AI Product Description Suggestion for: ${formDataObj.product.Name}`,
//         response: `${response.data.choices[0].text}`
//     })
// })
// ;

 function onFormSubmit (e:any) {
   e.preventDefault()
   
 }
//  const onProductschange = (event: React.ChangeEvent<HTMLInputElement> ) => {
//     setProducts(event.target.value)
//  }
 const {heading, response} = products;
  return (
    <div>
        <Navmenu/>


      <div className='hero'>


      <form  onSubmit={onFormSubmit} className="form-search d-flex align-items-stretch " data-aos="fade-up" data-aos-delay="200">
            <input 
            type="text" 
            className="form-control"
             placeholder="Product name"
             name="productName"
             value={products?.heading}
             // @ts-ignore
             onChange={(e)=> setProducts(e.target.value)}
           
             />
            <button type="submit" className="btn ">Search</button>
            {/* <button className="button-19" role="button">{search}</button> */}
          </form>
          <p> {heading}</p>

          {/* <p>{products.heading}</p> */}
      </div>
      

    </div>
  )
}

export default ProductDescription
