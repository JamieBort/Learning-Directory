// CallbackHandlersInJSX.jsx

// export { default as BigButton } from './BigButton'
// export { default as SmallButton } from './SmallButton'
// import { BigButton } from './BigButton'


// There is no way to pass information up the component tree, since props are naturally only passed downwards. However, we can introduce a callback handler instead: A callback handler gets introduced as event handler (A), is passed as function in props to another component (B), is executed there as callback handler (C), and calls back to the place it was introduced (D):


// *********************************************
// ***   Implement callback handlers here!   ***
// *********************************************

const BigButton = (props)=> {
// function BigButton() {
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
  // function BigButton() {
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
      {/* <input onChange={()=>handleChange()}/> */}
      <input onChange={handleChange}/>
    </div>
  )
}

function ChildComponent2(){console.log("Inside the ChildComponent2") }

const handleChange = (event) => console.log("the event.target.value:", event.target.value)

export default function MasterFunction() {
    return (
        <div>
        <h3>Inside the CallbackHandlersInJSX file</h3>
        <BigButton />
        <BigButton buttonName="Custom Named Button"/>
        <AnotherButton buttonName="Another Button"/>
        <ChildComponent1/>
        </div>
    );
}

