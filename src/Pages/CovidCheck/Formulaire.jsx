import React, { useState } from 'react';
import "./Formulaire.css";
import FormInput from "./FormInput";
import Rapport_Chest from './Rapport_Chest';

function Formulaire() {
  const [values, setValues] = useState({
    username: "",
    date: "",
  });
  const [image, setImage] = useState(null);
  const [jsonData, setJsonData] = useState({});

  const { username, date } = values;

  const inputs = [
    {
      id: "patient-id",
      name: "username",
      type: "text",
      placeholder: "Identifiant",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Identifiant",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "phone-number",
      name: "phone",
      type: "tel",
      placeholder: "Numéro de téléphone",
      label: "Numéro de téléphone",
      pattern: "[0-9]{10}",
      required: true,
    },
    {
      id: "birthday",
      name: "date",
      type: "date",
      placeholder: "Date de naissance",
      label: "Date de naissance",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("patient_id", username);
    formData.append("phone", values.phone);
    formData.append("date", date);
    fetch("/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
          // afficher un message d'erreur à l'utilisateur
          return;
        }
        console.log(data);
        setJsonData(data);
      });
  };

  return (
    <div className="rapport-chest-container">
      <div className='update'>
        {Object.keys(jsonData).length === 0 ? (
          <div className="app1">
            <form onSubmit={handleSubmit} className='form1'>
              <h1 className='h11'>Formulaire</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div>
                <label htmlFor="image-input">Télécharger une image:</label>
                <input
                  type="file"
                  id="image-input"
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </div>
              <button className='button1'>Soumettre</button>
            </form>
          </div>
        ) : (
          <div>
            <Rapport_Chest data={{ ...jsonData, phone: values.phone }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Formulaire;
