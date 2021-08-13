import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Styles,{Image,Details,Scroller} from "./character.styles"
import ErrorMsg from '../../molecules/error-message/error-message.molecules';


const getCaracter = async (author,setQuotes) => {

    try{
        if(!author) return 0;
        setQuotes({
            status:"pending",
            data:[],
            message:""
        })
        const response = await axios.get(`/quote?author=${author.replace(/\s/g,"+")}`)
        console.log(response.data)
        setQuotes({
            status:"success",
            data:response.data,
            message:""
        })
    }
    catch(error){
        console.log(error)
        setQuotes({
            status:"failed",
            data:{},
            message:error.message
        })
    }
}


const Character = ({data}) => {
    const [quotes,setQuotes] = useState({
        status:"pending",
        data:{},
        message:""
    });
    useEffect(() => {
      getCaracter(data.name,setQuotes)
    }, [])
    
    return (
        <Styles>
           <Image>
               <img src={data.img}/>
           </Image>
           <Details>
               <div className="head">
                <h2>{data.name}</h2>
                <hr/>
               </div>
               <table className="details-table">
                   <tbody>
                    <tr>
                        <td className="key">Portrayed By:</td>
                        <td className="value">{data.portrayed}</td>
                    </tr>
                    {
                        data.nickname?
                            <tr>
                                <td className="key">Nickname:</td>
                                <td className="value">{data.nickname}</td>
                            </tr>
                            :null
                    }
                    
                    <tr>
                        <td className="key">Date of Birth:</td>
                        <td className="value">{data.birthday}</td>
                    </tr>
                    <tr>
                        <td className="key">Occupation:</td>
                        <td className="value">{data.occupation.toString().replace(/,/g,", ")}</td>
                    </tr>
                    <tr>
                        <td className="key">Status:</td>
                        <td className="value">{data.status}</td>
                    </tr>
                    <tr>
                        <td className="key">Appearance in Seasons:</td>
                        <td className="value">{data.appearance.toString().replace(/,/g,", ")}</td>
                    </tr>
                   </tbody>
               </table>
               <div className="quotes">
                   <div className= "quote-title">
                    Quotes
                   </div>
                   {
                        quotes.status==="pending"?
                            <div>Loading quotes...</div>
                            :(
                                quotes.status === "success"?(
                                    quotes.data.length?
                                    <Scroller>
                                        <ol className="content">
                                            {
                                                quotes.data.map(quote => 
                                                    <li className="single-quote">
                                                        {quote.quote}
                                                    </li>
                                                )
                                            }
                                        </ol>
                                    </Scroller>  
                                    : 
                                    <div className="404-quotes">
                                       Oops, This character do not have any quotes ¯\_(ツ)_/¯.
                                    </div>
                                ) 
                                :<ErrorMsg  handleTryAgain={() => getCaracter(data.name,setQuotes)}/>
                            )
                    }
                    
               </div>
           </Details>
        </Styles>
    )
}

export default Character
