
// import { useState } from "react";
// import { useFormAction, useNavigate } from "react-router-dom";
// import { useEffect } from "react";



// function Checkout () {
//     const [formData, setFormData] = useState ({})
//     const history = useNavigate()

//     useEffect(()=>{

//     },[])
   
// }

// const onSubmit = async (data) => {
//     setFormData(data);
//     try {
//       const response = await axios.post("/checkout", data);
//       console.log(response.data);
//       history.push("/thankyou");
//     } catch (error) {
//       console.log(error);
//     }
  

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" name="name" ref={register({ required: true })} />
//       {errors.name && <span>This field is required</span>}
//       <input type="email" name="email" ref={register({ required: true })} />
//       {errors.email && <span>This field is required</span>}
//       <input type="submit" value="Submit" />
//     </form>
//   );

//   }

//   export default Checkout;