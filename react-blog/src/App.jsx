// import { ButtonClick } from './ButtonClick';
// import { ConditionalRendering } from './Conditionalredering';
// import Header from './header';
// import { HideandShow } from './HideandShow';
// import { PropsDemo } from './PropsDemo';
// import { StateDemo } from './StateDemo';
// import { ToDo } from './ToDo';
// import { User } from './User';
// import Login, { Profile, UserKey } from './UserComponent';
// import { Printdata } from './VariablesObjects';
// import { useState } from 'react';
// import { Wrapper } from './Wrapper';

import { CounterIncrement } from './Counter';
import { LifeCycle } from './LifeCycle';

// // Note: If StudentShow is in a separate file, make sure to import it correctly!
// // import { StudentShow } from './StudentShow/StudentShow';

// function App() {
//   // let mydata = {
//   //   name: 'John Doe',
//   //   age: 30,
//   //   city: 'New York',
//   // };

//   // let array = [1, 2, 3, 4, 5];
//   const [sname, setSname] = useState();

//   return (
//     <div className="App">
//       {/* <Printdata /> */}
//       {/* <ButtonClick /> */}
//       {/* <StateDemo />
//       <HideandShow />
//       <ConditionalRendering /> */}
//       {/* <PropsDemo data={mydata} /> */}

//       {/* This passes the 'name' prop correctly */}
//       {/* {sname && <StudentShow name={sname} />}
//       <button onClick={() => setSname('Alice')}>Show Student Name</button> */}
//       <User />
//       <Wrapper>
//         <Fruit />
//         <Color />
//       </Wrapper>
//     </div>
//   );
// }

// function Fruit() {
//   return (
//     <div className="Fruit">
//       <h1>Fruit Component</h1>
//     </div>
//   );
// }

// function Color() {
//   return (
//     <div className="Color">
//       <h1>Color Component</h1>
//     </div>
//   );
// }

// export default App;

// // --- CORRECTION APPLIED BELOW ---

// // We destructure the 'name' prop directly from the incoming arguments
// export const StudentShow = ({ name }) => {
//   return (
//     <div>
//       <h1>Student Show name : {name}</h1>
//     </div>
//   );
// };

// function App() {
//   const [val, setVal] = useState('Heramb Shinde'); // Example state variable
//   return (
//     <div className="App">
//       <h2>
//         Input :
//         <input
//           type="text"
//           placeholder="Enter text"
//           onChange={(event) => setVal(event.target.value)}
//         />
//       </h2>
//       <h1 style={{ color: 'green', padding: '10px' }}>
//         Output : <p> {val} </p>
//       </h1>
//       <button onClick={() => setVal('')}>Clear </button>
//     </div>
//   );
// }

// export default App;

// import { ButtonClick } from './ButtonClick';
// import { ConditionalRendering } from './Conditionalredering';
// import Header from './header';
// import { HideandShow } from './HideandShow';
// import { PropsDemo } from './PropsDemo';
// import { StateDemo } from './StateDemo';
// import { ToDo } from './ToDo';
// import { User } from './User';
// import Login, { Profile, UserKey } from './UserComponent';
// import { Printdata } from './VariablesObjects';
// import { useState } from 'react';
// import { Wrapper } from './Wrapper';

// // Note: If StudentShow is in a separate file, make sure to import it correctly!
// // import { StudentShow } from './StudentShow/StudentShow';

// function App() {
//   // let mydata = {
//   //   name: 'John Doe',
//   //   age: 30,
//   //   city: 'New York',
//   // };

//   // let array = [1, 2, 3, 4, 5];
//   const [sname, setSname] = useState();

//   return (
//     <div className="App">
//       {/* <Printdata /> */}
//       {/* <ButtonClick /> */}
//       {/* <StateDemo />
//       <HideandShow />
//       <ConditionalRendering /> */}
//       {/* <PropsDemo data={mydata} /> */}

//       {/* This passes the 'name' prop correctly */}
//       {/* {sname && <StudentShow name={sname} />}
//       <button onClick={() => setSname('Alice')}>Show Student Name</button> */}
//       <User />
//       <Wrapper>
//         <Fruit />
//         <Color />
//       </Wrapper>
//     </div>
//   );
// }

// function Fruit() {
//   return (
//     <div className="Fruit">
//       <h1>Fruit Component</h1>
//     </div>
//   );
// }

// function Color() {
//   return (
//     <div className="Color">
//       <h1>Color Component</h1>
//     </div>
//   );
// }

// export default App;

// // --- CORRECTION APPLIED BELOW ---

// // We destructure the 'name' prop directly from the incoming arguments
// export const StudentShow = ({ name }) => {
//   return (
//     <div>
//       <h1>Student Show name : {name}</h1>
//     </div>
//   );
// };

// function App() {
//   const [name, setName] = useState('');
//   const [sirname, setSirname] = useState('');
//   const [phone, setPhone] = useState('');

//   return (
//     <div>
//       <form action="" method="get">
//         <input
//           value={name}
//           type="text"
//           placeholder="enter name"
//           onChange={(event) => setName(event.target.value)}
//         />
//         <br />
//         <br />
//         <input
//           value={sirname}
//           type="text"
//           placeholder="enter sirname"
//           onChange={(event) => setSirname(event.target.value)}
//         />
//         <br />
//         <br />
//         <input
//           value={phone}
//           type="text"
//           placeholder="enter phone"
//           onChange={(event) => setPhone(event.target.value)}
//         />
//         <button>Submit</button>

//         <h1>Name : {name}</h1>
//         <h1>Sirname : {sirname}</h1>
//         <h1>Phone : {phone}</h1>
//       </form>
//     </div>
//   );
// }

 
function App() {
  return (
    <div>
     </div>
  );
}

export default App;
