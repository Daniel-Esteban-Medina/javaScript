import './App.css';

function App() {
  const titulo = <h1 class='titulo'>Mi titulo</h1>
  return <div>{titulo}<h2>{sum(4,5)}</h2></div>

}

function sum(num1, num2){
  return num1+num2;
}

export default App;
