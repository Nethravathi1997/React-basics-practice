export function DispayCard() {
    const JohnHobbies = ["Reading","Writing","Coding"]
    const AlexaHobbies = ["Surfing","Traveling","Sports"]
  return (
    <div style={{display:"flex"}}>
    <div style={{border:"1px solid black", textAlign:"left", marginLeft:"5%",padding:"2%",paddingRight:"12%"}}>
        <img src="https://fastly.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU" alt="img 1" />
        <h1>John Doe</h1>
        <p>Age : 30</p>
        <div>
        <h2>Hobbies</h2>
         <ol>
            {JohnHobbies.map((hobby) => (
                <li> {hobby}</li>
            ))}
         </ol>
        </div>
        <p>Mobile : 9000000000</p>
        <p>Landline : 55-114</p>
        <p>IsMarried : Yes</p>
    </div>

    <div style={{border:"1px solid black", textAlign:"left",marginLeft:"5%",padding:"2%",paddingRight:"12%"}}>
        <img src="https://fastly.picsum.photos/id/118/200/200.jpg?hmac=r_5sQuuYCa3xJmO_wafQe_A_P-F2Kimwk-48579v9uY" alt="img 1" />
        <h1>Alexa Queen</h1>
        <p>Age : 30</p>
        <div>
        <h2>Hobbies</h2>
         <ol>
            {AlexaHobbies.map((hobby) => (
                <li>{hobby}</li>
            ))}
         </ol>
        </div>
        <p>Mobile : 9090909000</p>
        <p>Landline : 55467-114</p>
        <p>IsMarried : No</p>
    </div>
    </div>
  );
}