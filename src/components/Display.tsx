import  {FC} from 'react'
import Navmenu from './Navmenu'


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

interface Props  {
    description: string;
    search: string;
}

 const ProductDescription: FC<Props> = ({description, search}) => {
  return (
    <div>
        <Navmenu/>


      <div className='hero'>

        
        <p> {description}</p>


      <form action="#" className="form-search d-flex align-items-stretch " data-aos="fade-up" data-aos-delay="200">
            <input type="text" className="form-control" placeholder="Product name" />
            <button type="submit" className="btn ">Search</button>
            {/* <button className="button-19" role="button">{search}</button> */}
          </form>
      </div>
      

    </div>
  )
}

export default ProductDescription
