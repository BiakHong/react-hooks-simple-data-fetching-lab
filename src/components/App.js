// create your App component here
import { useEffect, useState } from "react";

function App(){
    const [dog, setDog]=useState('')
    const [loaded, setLoaded] =useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => {setDog(json["message"]); setLoaded((loaded)=> !loaded)});
    },[])
    if(!loaded){return <p>Loading...</p>}
    return <div><img src={dog} alt="A Random Dog"/></div>
}
export default App;