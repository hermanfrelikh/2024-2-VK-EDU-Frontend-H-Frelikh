import { useState } from "react";
import "./EditProfileInput.css";

export default function EditProfileInput(props) {
  const [value, setValue] = useState(props.inputvalue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    props.onInputChange(props.type, newValue);
  };

 
  const renderErrorMessage = () => {
    if (props.type === "username") {
      if (value[0] !== "@") {
        return <span className="error-message">Username должен начинаться с @</span>;
      } else if (value.length < 6) {
        return <span className="error-message">Username должен содержать не менее 6 символов</span>;
      }
    }
    
    if (props.type === "name"){
      if (value.length < 1){
        return <span className="error-message">Имя не можеть быть пустое</span>;
      }
    }
    
    return null
  };


  
  return (
    <div id="edit-profile-input-conteiner">
      <p>{props.title}</p>
      <input
        className="edit-profile-input"
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
      {renderErrorMessage()}
    </div>
  );
}
