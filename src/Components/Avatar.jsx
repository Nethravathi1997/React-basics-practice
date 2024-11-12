export function Avatar({src,name,rounded}) {

    const imgStyle = {borderRadius: rounded ? "50%": "20px", width:"200px",height:"200px"}

  return (
    <div>
        <img style={imgStyle} src={src} alt="spider" />
        <h1>{name}</h1>
    </div>
  );
}