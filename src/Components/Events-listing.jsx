import MyButton1 from './MyButton';
import { Avatar } from './Avatar';

const numberListing = [1,2,3,4,5].map((el) => <li>{el*2}</li>)
console.log(numberListing)

const users = [
  {
    name: "Spider Man",
    src:"https://media.istockphoto.com/id/1364370202/photo/a-man-cosplaying-the-famous-marvel-comic-character-spiderman-during-the-carnival-parade-along.jpg?s=612x612&w=0&k=20&c=IGjcJ7U2quDXqe2J8sFWxzsRypcFilT20B9Toc2RT3o=",
    rounded: false,
  },
  {
    name: "Iron Man",
    src:"https://wallpapers.com/images/hd/iron-man-pictures-0vznt5nxhi64027w.jpg",
    rounded: false,
  },
  {
    name: "Bat Man",
    src:"https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png",
    rounded: false,
  },
]

const userAvatar = users.map((user) => (
    <Avatar src={user.src} name={user.name} rounded={user.rounded}/>
  ) )
  console.log(userAvatar);
  
  const button1Clicked = () => {
    alert("Button 1 Clicked");
  }
  const button2Clicked = () => {
    alert("Button 2 Clicked");
  }
  const button3Clicked = () => {
    alert("Button 3 Clicked");
  }

export function EventsListing() {
   
  return (
    <div>
        <h1> {numberListing}</h1> 
    <br />
    <hr />

    {userAvatar}

    <br />
    <hr />
      <div>
      <MyButton1 buttonText="Click Me" bgColor="pink" onClick= {button1Clicked}/>
      <MyButton1 buttonText="I am here" bgColor="Green" onClick={button2Clicked}/>
      <MyButton1 buttonText="Click Are you Bored" bgColor="yellow" onClick={button3Clicked}/>
      </div>
    
<br />
<hr />

    <div>
      <Avatar  src="https://media.istockphoto.com/id/1364370202/photo/a-man-cosplaying-the-famous-marvel-comic-character-spiderman-during-the-carnival-parade-along.jpg?s=612x612&w=0&k=20&c=IGjcJ7U2quDXqe2J8sFWxzsRypcFilT20B9Toc2RT3o=" 
      name="Spider Man"
      rounded = {false}/>
      <Avatar src="https://wallpapers.com/images/hd/iron-man-pictures-0vznt5nxhi64027w.jpg" name="Iron Man"
      rounded = {true}/>
      
    </div>
    </div>
  );
}