import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState } from "react";
import DocuPDF from "./DocuPDF";
import './styles.css';

function App() {
  const [ docName, setDocName ] = useState('SERVICIO PROFESIONAL - Migración a IPLAN CLOUD');
  const [ ammount, setAmmount ] = useState('');
  const [ vmValue, setVmValue ] = useState('');
  const [ lostIP, setLostIP ] = useState(false);
  const [ cloudType, setCloudType ] = useState('IPLAN Cloud');
  function isDisabled() {
    if (!ammount || !vmValue) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className='applicationAdminFile__containerProps'>
      <h1> AdminFile </h1>
      <div
      className='applicationAdminFile__card'>
        <div className='applicationAdminFile__row'>
          <p>
            <label>Nombre del documento</label>
            <input 
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            className='applicationAdminFile__input'/>
          </p>
        </div>
        <div className='applicationAdminFile__row'>
          <p>
            <label>VMs</label>
            <input 
            value={vmValue}
            onChange={(e) => setVmValue(e.target.value)}
            className='applicationAdminFile__input'/>
          </p>
        </div>
        <div className='applicationAdminFile__row--grid'>
          <p>
            <label>Cantidad</label>
            <input 
            value={ammount}
            onChange={(e) => setAmmount(e.target.value)}
            className='applicationAdminFile__input'/>
          </p>
          <p>
            <label>Tipo de nube</label>
            <select
            value={cloudType}
            onChange={(e) => setCloudType(e.target.value)}
            className='applicationAdminFile__input'>
              <option value='IPLAN Cloud'>IPLAN Cloud</option>
              <option value='IPLAN Cloud Premium'>IPLAN Cloud Premium</option>
            </select>
          </p>
          <p className='applicationAdminFile__checkboxStyle'>
            <label>Pierde IP pública</label>
            <input 
            checked={lostIP}
            type='checkbox'
            value={lostIP}
            onClick={(e) => setLostIP(e.target.value)}/>
          </p>
        </div>
        <PDFDownloadLink
        document={
        <DocuPDF
        ammount={ammount}
        vmValue={vmValue}
        cloudType={cloudType}
        lostIP={lostIP}
        />}
        fileName={docName ? `${docName}.pdf` : 'NuevaCotizacion'}>
          <div className='applicationAdminFile__buttonContainer'>
            { !isDisabled() ?
            <button 
            onClick={() => {
              setTimeout(() => {
                setAmmount('');
                setVmValue('');
                setDocName('SERVICIO PROFESIONAL - Migración a IPLAN CLOUD');
                setCloudType('');
                setLostIP(false);
              }, 500)
            }}
            className='applicationAdminFile__button'>Descargar PDF</button> : null }
          </div>
        </PDFDownloadLink>
      </div>
      <div className='aplplicationAdminFile__footer'>
        Demo @ AdminFile v1.0.0
      </div>
    </div>
  );
}

export default App;