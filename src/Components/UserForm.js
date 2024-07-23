import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    company: ''
  });


  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {

    if (user) {
      setFormData(user);
      setIsEdited(false); 
    }else{
     
    }
  }, [user]);


  function handleChange(event){
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setIsEdited(true); 
  }


  function handleSave(event){
    if(!event.target.form.checkValidity()) {
      event.preventDefault(); 
      event.target.form.reportValidity();
    }else{
      onSave(formData);
      setIsEdited(false); 
    }
  }


  function handleCancel(){
    setFormData(user); 
    setIsEdited(false);
  }


  let noUserSelected = (
    <div className='no-users-form-container'>
      <div className='no-users-form'>Select a user to edit.</div>
    </div>
  );

 
  return (
    <form className="user-form">
      {!user ? noUserSelected : 
      <> 
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <label htmlFor="address">Address</label>
        <input id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
        <div className='button-container'>
          {isEdited && <button className="cancel-button" onClick={handleCancel}>Cancel</button>}
          <button type="submit" className={`save-button ${isEdited ? 'enabled' : undefined}`} onClick={handleSave} disabled={!isEdited}>Save</button>
        </div>
      </>}
    </form>
  );
};

export default UserForm;
