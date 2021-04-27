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

function FunctionTag(props) {
  return <div>
          <p>{props.first}</p>
          <p>{props.second}</p>
        </div>;
        }

function App() {
  return (
    <div className="App">
      <img src={user.avatar} alt="Profile Picture" />
      <p>{user.name}</p>
      <FunctionTag first={Object.keys(user)[1]} second={user.location} />
      <FunctionTag first={Object.keys(user)[2]} second={user.foodType} />
      <FunctionTag first={Object.keys(user)[3]} second={user.age} />
      <FunctionTag first={Object.keys(user)[4]} second={user.likes} />
      <FunctionTag first={Object.keys(user)[5]} second={<a href={`https://twitter.com/@${user.twitterUsername}`}>@{user.twitterUsername}</a>} />
    </div>
  );
}

export default App;
