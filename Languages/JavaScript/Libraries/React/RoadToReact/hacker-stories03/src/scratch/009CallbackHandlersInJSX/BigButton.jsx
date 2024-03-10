// BigButton.jsx

// 👇️ named export
export default function BigButton() {
    // console.log("test from BigButton scratch")
    return (
      <button
        style={{padding: '2rem 1rem'}}
        onClick={() => console.log('big button 009CallbackHandlersInJSX')}
      >
        Big button
      </button>
    );
  }