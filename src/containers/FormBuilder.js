import React  from 'react'



function Todo() {
  
  const [name , setName] = React.useState("");

  const[ todos , setTodo] = React.useState([]);

  const handleChange = (e) => {
      setName(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = [...todos , name];
    setTodo(newItem);
    setName("");
  }

  const display = () => {
    if(!todos.length) return <h2>Nothing to todo!!</h2>
    return todos.map((item , index) => {
      return (
        <>
           <li>{item}</li>
        </>
      )
    })
  }

  return (
    <form  onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
        {display()}
    </form>
  )
}

export default Todo;