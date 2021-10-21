import React, {useState, useEffect} from 'react';



const Header = () => {
  
  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    console.log("time",dateState);
  return (
    <div class="container  ">
      <div class="row header  mt-3  ">
        <div class="col-md-6 text-start text-light">
          <p>Drilling Dashboard Demo <p class="textHeader" >From Deep See Drilling Project</p></p>
         
        </div>
        <div class="col-md-2 pt-2 " style={{textAlign:"end"}}>
          {" "}
          <button type="button" class="btn btn-warning btn-sm  text-end ">
            Drilling
          </button>
        </div>
        <div class="col-md-4 text-light  text-right "> Drilling Dashboard Demo
        <p style={{color:"#00ffa1"}}>
            
            {dateState.toLocaleString('en-US', {
               hour: 'numeric',
               minute: 'numeric',
               hour12: true,
               day: 'numeric',
                 month: 'short',
                 year: 'numeric',
           })}
           </p>
         
        
        </div>
      </div>
    </div>
  );
};

export default Header;
