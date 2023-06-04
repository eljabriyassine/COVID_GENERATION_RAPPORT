import React from 'react';
import "./Rapport.css";
import logo from '../../Images/GG1.jpg';
import domtoimage from 'dom-to-image';

function Rapport_Chest(props) {
  // Créer une liste de traitement en séparant la chaîne par les espaces
  const traitementList = props.data.traitement.split(" ");

  // Créer les éléments de la liste de traitement
  const traitementItems = traitementList.map((traitement, index) => (
    <li key={index}>{traitement}</li>
  ));

  // Fonction de téléchargement du rapport au format PNG
  const telechargerRapport = () => {
    // Sélectionner le conteneur du rapport
    const rapportContainer = document.getElementById('rapport');

    // Convertir le conteneur en une image au format PNG
    domtoimage.toPng(rapportContainer)
      .then(function (dataUrl) {
        // Créer un élément <a> pour télécharger l'image
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'rapport.png';

        // Simuler un clic sur le lien pour déclencher le téléchargement
        link.click();
      })
      .catch(function (error) {
        console.error('Erreur lors de la génération de l\'image :', error);
      });
  };

  // Create Document Component
  return (
    <div   id ='rapport' className='formeGlobale'>
      <h1>Compte Rendu Radiologique</h1>
      <div  className='container'>
        <div className='etp,one'>
          <div   className='container2'>
            <div>
            <div className='t1'>
                <h3 className='title'>SMARTHEALTH</h3>
              </div>
              <div className='t2'>
                <h4>Chest Analyse</h4>
              </div>
              <img className='image' src={logo} height="20px" width="20px" alt="Logo" />
              
            </div>
            <div className='container5'>
              
            </div>
          </div>
        </div>
        <div className='info,two'>
          <h3 className='title centre'>Informations</h3>
          <table className="tableau-personnalise">
            <tbody>
              <tr>
                <td>Patient_id :</td>
                <td>{props.data.patient_id}</td>
              </tr>
              <tr>
                <td>Numéro de téléphone:</td>
                <td>{props.data.phone}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{props.data.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr />

      <div id="rapport-container" className='container3'>
        <div className='two' dangerouslySetInnerHTML={{ __html: `<img src="${props.data.image_url}" alt="Uploaded Image" width='800px' height='800px'/>` }} />
        <div className='one'>
          <div className='container4'>
            <div className='container5'>
              <div>
                <h3 className='title2 centre'>Tableau de prédiction</h3>
              </div>
              <div>
                <table className="tableau tableau-personnalise">
                  <thead>
                    <tr>
                      <th>Type de maladie</th>
                      <th>Probabilité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.data.prediction}</td>
                      <td>{props.data.score}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='traitement-container'>
        <h3 className='title2 centre'>Traitement</h3>
        <ul>{traitementItems}</ul>
      </div>
            </div>
          </div>
        </div>
      </div>

      

      
      <div className='button-container'>
        <button className='download-button' onClick={telechargerRapport}>Télécharger le rapport</button>
      </div>
    </div>
  );
}

export default Rapport_Chest;