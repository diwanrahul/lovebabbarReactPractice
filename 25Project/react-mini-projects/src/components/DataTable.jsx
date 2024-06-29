import React, {useState, useEffect} from "react";

const DataTable = () => {

  const [formData, setFormData] = useState({
    name:"",
    gender:"",
    age:"",
  });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(false);

  useEffect(() => {
    if(!editId) return;

    const selectedItems = document.querySelectorAll(`[id='${editId}']`)
    selectedItems[0].focus();
  }, [editId]);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})

  }
  const handleAddClick = () => {
    if(formData.name && formData.gender && formData.age){
      const newItem = {
        id : Date.now(),
        name : formData.name,
        gender : formData.gender,
        age : formData.age,
      };

      setData([...data, newItem]);
      setFormData({name:"", gender:"", age:""});
    }

  }

  const handleDelete = (id) => {
    const updatedList = data.filter((item)=> item.id !== id);
    setData(updatedList);
  }

  console.log(data)
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-container">
          <input 
          type="text" 
          name="name" 
          value={formData.name} 
          placeholder="Name"
          onChange={handleInputChange}
          />
        </div>
        <div className="info-container">
          <input 
          type="text" 
          name="gender"
          value={formData.gender} 
          placeholder="Gender"
          onChange={handleInputChange}
          />
        </div>
        <div className="info-container">
          <input 
          type="text" 
          name="age" 
          value={formData.age} 
          placeholder="Age"
          onChange={handleInputChange}
          />
        </div>
        <button 
        className="add"
        onClick={handleAddClick}
        >ADD</button>
      </div>
      <div className="search-table-container">
        <input 
        type="text" 
        placeholder="Search By Name" 
        value={""}
        onChange={()=>{}}
        />

        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((item)=> (
                <tr key={item.id}>
                  <td id={item.id} contentEditable={editId === item.id} >{item.name}</td>
                  <td id={item.id} contentEditable={editId === item.id}>{item.gender}</td>
                  <td id={item.id} contentEditable={editId === item.id}>{item.age}</td>
                  <td  className="actions">
                    <button className="edit" onClick={()=>setEditId(item.id)}>Edit</button>
                    <button  className="delete" onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                 
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default DataTable;
