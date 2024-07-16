import { useRouteError } from "react-router-dom"

export default Err=()=>{

    const ersttmnt=useRouteError();
    console.log(ersttmnt)

    return(
        <div>
        <h1>{ersttmnt?.status} : OOPS!!!</h1>
        <h2>THis page couldnt be found</h2>
        <h2>{ersttmnt?.data}</h2>
        </div>
    )
}