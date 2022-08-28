import React,{useState}  from 'react'
import './Form.css'

function Form(){
    const data={name:"",email:"",password:""};
        const [inputData,SetInputData]=useState(data)

    function handleData(e){
SetInputData({...inputData,[e.target.name]:e.target.value})
    }

    return(
        
        <form className='container'>
        
           
<div className='heading'>Do you want to become a volunteer ?</div>

<div>
    <input type='text' placeholder='Your Name:' name='name'  onChange={handleData} className="item">
    </input>
</div>

<div>
    <input type='email' placeholder='Your Email:' name='email'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='text' placeholder=' Your Phone No.:' name='Your phone no.'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='' placeholder=' Your Adhar No.:' name='Your adhar no.'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='text' placeholder=' Your Blood Group:' name='Your Blood Group'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='text' placeholder=' Your DOB:' name='Your DOB'  onChange={handleData} className="item">
    </input>
</div>
<div className='form-check-input item'>
    Your Position:<br/>
   
      <input type="radio"  id='radio' name="option1"  onChange={handleData} />Member
    
    
      <input type="radio" id='radio' name="option2" value="option2" onChange={handleData} />
      Volunteer (For School and College Students)
        
</div>
<div>
    <input type='text' placeholder=' Address.:' name='address'  onChange={handleData} className="item">
    </input>
</div>
<div>
    <input type='textarea' placeholder='Why do you want to join?:' name='message'  onChange={handleData} className="item1">
    </input>
</div>

<div className="form-checked-flex-justify-content-center"> 
  <input  type="checkbox" value="" id="form"  onChange={handleData}  className="item" /> 
<label className="form-check-label"> 
 Agree to the terms and conditions
  </label> 
</div>

<div>
    <button type='submit' className='btn'>Submit</button>
</div>

        </form>
    )
}
export default Form