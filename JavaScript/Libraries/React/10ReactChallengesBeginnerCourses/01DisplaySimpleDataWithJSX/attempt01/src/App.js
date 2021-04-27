import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

function FunctionTag() {
  return (<h1>Hello</h1>);
}

function App() {
  return (
    <div className="App">
    <p>Hello!</p>
    <FunctionTag/>
      <ScotchInfoBar />
    
    </div>
  );
}

export default App;
