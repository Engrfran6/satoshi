import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../../../components/Commons/HandleRequest";

export const Investing = () => {

  const navigate = useNavigate()
  const [message, setMessage]= useState('')
  const [invest, setInvest] = useState('');
  const [prevInvestment, setPrevInvestment] = useState([]);

  const newIvest = prevInvestment.push(invest)

  const handleInputChange = (e) => {
    setInvest(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserData('/auth/investing', {invested: [newIvest]});
    
      if(response.Ok){
        setMessage(`Congratulations!!! ${<br/>} Your have successfully invested $ -${invest}`)
      }
       navigate('/dashboard#'); // <-- redirect

    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
  };


// get account balance
  // const url = "http://localhost:8000/auth/investing" // Replace with your API endpoint
  // const { data, loading, error } = useFetch(url)
  // .then(()=>{
  //   setPrevInvestment(data.invested)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Investment amount:</label>
        <input type="number" value={invest} onChange={handleInputChange} placeholder="Enter investment amount"/>
      </form>
    </div>
  )
}