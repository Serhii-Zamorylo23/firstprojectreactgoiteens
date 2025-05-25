import './App.css';
const objectSite={
  name:"Youtube",
  url:"https://www.youtube.com/"
}
const name="Сергій"
let img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yvNioQtw6BovV6C0fsn7_-FGiIOuMyzf0g&s"
let alt="he National Emblem of Ukraine"
const firstNumber = 5
const secondNumber= 10
const colorsArray=["Червоний", "Синій", "Зелений"]
function App() {
  return (
    <>
    <h1>{name}</h1>
    <p>Ласкаво просимо до нашого сайту! </p>
    <img src={img} alt={alt}/>
    <a href={objectSite.url}>{objectSite.name}</a>
    <p>{firstNumber+secondNumber}</p>
    <ul>
      {colorsArray.map((color)=>{
        return(
          <li>{color}</li>
        )
      })}
    </ul>
    </>
  );
}

export default App;
