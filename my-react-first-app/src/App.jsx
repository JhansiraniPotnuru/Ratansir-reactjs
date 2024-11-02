
  //const cities =['Hyderabad','Banglore','chennai','kolkata']
  // return(
  //   <>
  //   <h1>Popular cities..</h1>
  //   <p>cities</p>
  //   <p>first city{cities[0]}</p>
  //   <p>last city{cities[cities.length-1]}</p>
  //   </>
  // )

// const ListCities = cities.map((city,index) =>
//                               (<li key={index}>{city}</li>)
//                              )
//  return(
//       <>
//         <h1>Popular cities...</h1>
//         <ol>{ListCities}</ol>
//       </>
//        )

// const items =[
//   {id:101,name:'potato',category:'veg'},
//   {id:102,name:'mutton',category:'nonveg'},
//   {id:103, name: 'carrot', category: 'veg' },
//   {id:104, name: 'chicken', category: 'nonveg' },
//   {id:105, name: 'spinach', category: 'veg' },
//   {id:106, name: 'beef', category: 'nonveg' }
// ];
// const ListItems = items.map(item => (
//   <li key={item.id} style={{ color: item.category === 'veg' ? 'green' : 'red' }}>
//     {item.id}: {item.name} ({item.category})
//   </li>
// ));

// Filter items by category
// const vegItems = items.filter(item => item.category === 'veg');
// const nonVegItems = items.filter(item => item.category === 'nonveg');

// Prepare list items for rendering
// const ListItems = (
//   <>
//     <h2>Vegetarian Items</h2>
//     <ul>
//       {vegItems.length > 0 ? (
//         vegItems.map(item => (
//           <li key={item.id} style={{ color: 'green' }}>
//             {item.id}: {item.name} ({item.category})
//           </li>
//         ))  
//       ) : (
//         <li>No vegetarian items available.</li>
//       )}
//     </ul>

//     <h2>Non-Vegetarian Items</h2>
//     <ul>
//       {nonVegItems.length > 0 ? (
//         nonVegItems.map(item => (
//           <li key={item.id} style={{ color: 'red' }}>
//             {item.id}: {item.name} ({item.category})
//           </li>
//         ))
//       ) : (
//         <li>No non-vegetarian items available.</li>
//       )} 
//     </ul>
//   </>
// );

// return (
//   <>
//     <h1>Food Items</h1>
//     <ul>{ListItems}</ul>
//   </>
// )





// import CourseGoal  from "./CourseGoal";
// function App(){
//   return(
//     <>
//     <CourseGoal title = "Learn React" description = "In-Depth"/>
//     <CourseGoal title = "About Ratan sir" description = "Ratan sir is nice"/>
//     </>
//   )
// }
// export default App;

import Blog from './Blog';
import BrightText from './BrightText';
import MovieGrid from './MovieGrid';

import Increment from './Increment';
import IncrementDecrement from './IncrementDecrement';
import Apple from './Apple';
import Cricket from './Cricket';
import Discount from './Discount';

const App = () => {
    return (
        <>
        <h1>this is modification file</h1>
           <Increment/>
           <IncrementDecrement/>
           <Apple/>
           <Cricket/>
           <Discount/>
            
            <Blog />
    
            <h1>Movie List</h1>
            <MovieGrid/>
            <h1>BrightText</h1>
            <BrightText color ="red" text ="This text is red"/>
            <BrightText color ="blue" text ="This text is red"/>
            <BrightText color ="green" text ="This text is red"/> 
              
        </>
    );
};

export default App;





