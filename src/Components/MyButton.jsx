// function Button(properties){
//     console.log(properties);
//     return (
//     <button>Click me</button>
//     )
//   }
  
//   export function MyButton () {
//     return (
//       <div>
//          <Button/>
         
//       </div>
//     );
//   }


//Using handle Click give same output to all buttons
const handleClick = () => {
    alert("Clicked");
}


//Using Props
function MyButton(properties){
    console.log(properties);
    return <button onClick={handleClick} style={{backgroundColor: properties.bgColor}}>{properties.buttonText}</button>
}

//Destructuring
function MyButton1(props){
    console.log(props);
    const {buttonText,bgColor,onClick} = props;
    return <button onClick={onClick} style={{backgroundColor:bgColor}}>{buttonText}</button>
}

export default MyButton1;