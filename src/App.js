import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  let person = {
    name: "Shrikanta Mazumder",
    age: 24,
    profession: "Student"
  }
  let names = ["Shrikanta","Sajid","Mehedi","Munna"];
  var style = {
    color: "red",
  }

  //Product
  let products = [
    {name: "Photoshop",price: "$99.99"},
    {name: "Illustrator",price:"$20"},
    {name: "PDF Reader",price:"$10"},
];

  //Students
  let students = [
    {name: "Shrikanta",id:"120"},
    {name: "Jewel", id:"140"},
    {name: "Mazumder", id: "160"},
    {name: "Mehedi", id: "180"},
    {name: "Sajid", id: "200"}
  ];
const productNames = products.map(product => product.name);
console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <h1 className="" style={style}>This is first Heading</h1>
        <h1>Here are my friends</h1>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(productName => <li>{productName.name}</li>)
          }
        </ul>
        <p>This is paragraph</p>
        <p style={{backgroundColor:"lightgrey",color:"black",padding:"10px",borderRadius:"8px"}}>Math Result: <strong>{(2+5)*2}</strong></p>
        <p>My Name is {person.name} and I am {person.age} years old. I am a {person.profession}</p>
        <Person name={names[0]} quality="Awesome Programmer"></Person>
        <Person name={names[1]} quality="Awesome Designer"></Person>
        <Person name={names[2]} quality="Good at nothing"></Person>

        {
          products.map(product => <Product product={product}></Product>)
        }

        {/* Students List */}
        <ul>
          <h4>Student's Name</h4>
          {
            students.map(student => <li>{student.name}</li>)
          }
          <h4>Students Id</h4>
          {
            students.map(student => <li>{student.id}</li>)
          }
        </ul>
        
        {
          students.map(student => <Student student={student}></Student>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name} {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(0);
  
  // const handleIncrease = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease} className="btn btn-primary">Increase</button> */}
      <button onClick={ () => setCount(count - 1)} className="btn btn-danger mr-1">Decrease</button>
      <button onClick={ () => setCount(count + 1)} className="btn btn-primary">Increase</button>
    </div>
  )
}






function Person(props){
  let mainDivStyle = {
    width:"90%",
    backgroundColor:"steelblue",
    marginBottom:"10px",
    borderRadius:"8px",
  }
  return (
    <div style={mainDivStyle}>
      <h1>Name: {props.name}</h1>
      <h4>{props.quality}</h4>
    </div>
  );
}

function Product(props){
const productStyle = {
  width: "200px",
  height: "200px",
  border: "1px solid gray",
  borderRadius: "2PX",
  backgroundColor: "lightgray",
  color: "black",
  float: "left",
}
const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Student(props){
  const studentStyle = {
    width: "200px",
    height: "200px",
    border: "1px solid gray",
    borderRadius: "2PX",
    backgroundColor: "steelblue",
    color: "black",
    float: "left",
  }

const {name,id} = props.student;
  return (
    <div style={studentStyle}>
      <h3>{name}</h3>
      <h4>{id}</h4>
    </div>
  )
}

export default App;
