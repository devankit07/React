

const Card = (props) => {
 
  return (
  
    <div className="bg-white px-20 py-20 w-fit rounded-2xl m-5">
        <h1 className="text-5xl">{props.text}</h1>
    </div>
  ) 
}

export default Card