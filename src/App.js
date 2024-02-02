import React, { useState } from 'react';

const App= () => {
  // State to store the values of the input fields and a list of items
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, { name, text }]);
    
    setName('');
    setText('');
  };

  
  const handleDelete = (index) => {
 
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    
    setItems(updatedItems);
  };

  return (
    <div>
      
      <h1 style={{ fontSize: '24px', textAlign:'center' }}>Director And Movies</h1>

      <form onSubmit={handleSubmit}>
     
        <label style ={{margin: '50px'}}>
          Director Name:
          <input
          style ={{margin: '20px', backgroundColor: 'lightgray', outline: 'none', border: 'none'}}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        
        <label style ={{margin: '5px'}}>
          Movie Name:
          <input
         style={{margin:'20px', backgroundColor: 'lightgray', outline: 'none', border: 'none'}}
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </label>

       
        <button type="submit" style={{ fontSize: '20px', borderSpacing:'10px', textAlign:'center', outline: 'none', border: 'none', backgroundColor: 'green', color: 'lightgray' }}>
          Add
        </button>
      </form>

     
      <ul>
        {items
        .filter((item) => item.name.toLowerCase() !== 'exclude')
        .map((item, index) => (
          <li key={index}>
              <input
          style ={{margin: '20px'}}
            type="text"
            value={item.name}
            onChange={handleNameChange}
          />
            <input
         style={{margin:'20px'}}
            type="text"
            value={item.text}
            onChange={handleTextChange}
          />
            <button style={{margin:'20px', borderSpacing:'10px', fontSize: '20px', textAlign:'center', outline: 'none', border: 'none', backgroundColor: 'red', color: 'lightgray' }} onClick={() => handleDelete(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;



