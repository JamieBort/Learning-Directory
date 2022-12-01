// CallbackHandlersInJSX.jsx

// export { default as BigButton } from './BigButton'
// export { default as SmallButton } from './SmallButton'
// import { BigButton } from './BigButton'

// *********************************************
// ***   Implement callback handlers here!   ***
// *********************************************

const BigButton2 = (props)=> {
// function BigButton2() {
    // console.log("test from BigButton scratch")
    return (
      <button
        style={{padding: '2rem 1rem'}}
        onClick={() => {
          if(props.buttonName)console.log(props.buttonName+' pressed.')
          else console.log('Default named button pressed.')
        }}
      >
        {props.buttonName||"Default named Button"}
      </button>
    );
  }

  const AnotherButton = (props)=> {
  // function BigButton2() {
      // console.log("test from BigButton scratch")
      return (
        <button
          style={{padding: '2rem 1rem'}}
          onClick={() => console.log('Another Button pressed')}
        >
          {props.buttonName||"Another button"}
        </button>
      );
    }

const ChildComponent1 = () =>{ 
  console.log("Inside the ChildComponent1") 
  return (
    <div>
      <label>Search:</label>
      <input onChange={()=>handleChange()}/>
    </div>
  )
}

function ChildComponent2(){console.log("Inside the ChildComponent2") }

const handleChange = (event) =>{
  console.log("the change is being handled")
}

export default function MasterFunction() {
    return (
        <div>
          <BigButton2 />
          <BigButton2 buttonName="Custom Named Button"/>
          <AnotherButton buttonName="Another Button"/>
          <ChildComponent1/>
        </div>
    );
}

