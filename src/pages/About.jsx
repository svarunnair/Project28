import React, { useEffect, useRef, useState } from 'react'
import './About.css'
const inputStyle = {
        width: '30px',
        height: '30px',
        margin: '5px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

function About() {
    const emptyArr=['','','','']
    const refs=[useRef(),useRef(),useRef(),useRef()]
    const [inputs,setInputs]=useState(emptyArr)
    const [missing,setMissing]=useState(emptyArr)
    const code='1234';

    useEffect(()=>{
        refs[0].current.focus()
    },[])

    const handleSubmit=()=>{
        const missed=inputs.map((item,i)=>{
            if(item===""){
              return i
            }  
        }).filter((item)=>(item||item===0))
        console.log("missed",missed)
        setMissing(missed)

        const userInput=inputs.join('')
        const isMatch=userInput===code
        const msg=isMatch?"code is valid": "Code is not valid"
        alert(msg)
    }

    const handlePast=(e)=>{
       const data= e.clipboardData.getData("text")
        console.log("pasted",data)
        if(!Number(data)||data.length!==inputs.length){
            return
        }
        const pastCode=data.split('')
        setInputs(pastCode)
        refs[inputs.length-1].current.focus()
    }


    const handleDelete=(e,i)=>{
        console.log(e.keyCode,i)
        if(e.keyCode===8){
            const copyInputs=[...inputs]
            copyInputs[i]=''
            setInputs(copyInputs)
             if(i>0){
            refs[i-1].current.focus()
        }
        }  
    }

    const handleInput=(e,i)=>{
        const value=e.target.value 
        console.log("valu",value,i)

        if(!Number(value)){
            return
        }

        if(i<inputs.length-1){
            refs[i+1].current.focus()
        }

        const copyInputs=[...inputs]
        copyInputs[i]=value
        setInputs(copyInputs)

    }

  return (
    <div>
    <h1>Two-factor code input</h1>
    <div>
    {emptyArr.map((item,i)=>{
        return <input
        ref={refs[i]}
        value={inputs[i]}
        key={i}
        type='text'
        maxLength="1"
        style={inputStyle}
        onPaste={handlePast}
        onChange={(e)=>handleInput(e,i)}
        onKeyDown={(e)=>handleDelete(e,i)}
        className={missing.includes(i)? "error":''}
        />
    })}
        
    </div>
    <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default About