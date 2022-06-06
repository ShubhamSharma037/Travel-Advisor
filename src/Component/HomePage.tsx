import axios from "axios";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
// import { state } from "../reducer/reducer";




const HomePage : React.FC = ()=>{

    const users  = useSelector((state:[])=>state);
    const dispatch = useDispatch()


    useEffect(()=>{

        axios.get('http://localhost:5000/users')
        .then((res)=>{
            console.log(res.data)
            dispatch({
                type : 'fetch',
                payload : res.data
            })
        })
        .catch(err=>console.log('Error',err))

    },[])

    return(
        <ul>
           {
              Object.keys(users).map((el : any,id)=>(
                    <li key={id}>{el[id].username}<br/>{el[id].city}</li>
               ))
            
           }
        </ul>
    )
}


export default HomePage;