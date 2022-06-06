import React, {useState} from 'react';
import axios from "axios"
import './style.css';
function RegistrationForm() {

    const [PatientFirstName, setFirstName] = useState(null);
    const [PatientLastName, setLastName] = useState(null);
    const [PatientDateOfBirth, setDate] = useState(null);
    const [PatientAdress,setAddress] = useState(null);
    const [PatientCity,setCity] = useState(null);
    const [PatientZip,setZip] = useState(null);
    const [PatientLand,setLand] = useState(null);
    const [PatientCell,setCell] = useState(null);
    const [PatientInfected,setInfected] = useState(false);
    const [PatientDiabetes, setDiabetes] = useState(false);
    const [PatientCardio, setCardio] = useState(false);
    const [PatientAllergies,setAllergies] = useState(false);
    const [PatientOther, setOther] = useState("");


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        console.log("id is", id);
        console.log("value is", value);
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "date"){
            setDate(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "zip"){
            setZip(value);
        }
        if(id === "land line"){
            setLand(value);
        }
        if(id === "cellular phone"){
            setCell(value);
        }
        if(id === "infected"){
            setInfected(!PatientInfected);
        }
        if(id === "diabetes"){
            setDiabetes(!PatientDiabetes);
        }
        if (id === "cardio") {
            setCardio(!PatientCardio);
        }
        if (id === "allergies") {
            setAllergies(!PatientAllergies);
        }
        if (id === "other") {
            setOther(value);
        }

    }

    const handleSubmit  = async(e) => {
        e.preventDefault();
        const details ={PatientFirstName,PatientLastName,PatientDateOfBirth,PatientAdress,PatientCity,PatientZip,PatientLand,PatientCell,PatientInfected,PatientDiabetes,PatientCardio,PatientAllergies,PatientOther};
        try {
            await axios.post('http://localhost:8000/patient', details);
        } catch (e) {
            console.log("failed fetch");
        }
    }

    return(
        <div className="form" onClick={handleSubmit}>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={PatientFirstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={PatientLastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="date">
                    <label className="form__label" for="date">Date of Birth </label>
                    <input  type="date" id="date" className="form__input" value={PatientDateOfBirth} onChange = {(e) => handleInputChange(e)} placeholder="Date"/>
                </div>
                <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input className="form__input" type="address"  id="address" value={PatientAdress} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
                <div className="city">
                    <label className="form__label" for="city">City </label>
                    <select className="form-select my-3"  aria-label="Default select example"  id="city"  onChange={(e) => setCity(e.target.value)}>
                        <option selected>choose your city</option>
                        <option value="Vasco Da Gama">Vasco Da Gama</option>
                        <option value="Gangtok">Gangtok</option>
                        <option value="Aurangabad">Aurangabad</option>
                        <option value="Jehanabad">Jehanabad</option>
                        <option value="Tezpur">Tezpur</option>
                        <option value="Buxar">Buxar</option>
                        <option value="Amaravati">Amaravati</option>
                        <option value="Tadepalligudem">Tadepalligudem</option>
                        <option value="Kavali">Kavali</option>
                        <option value="Ballia">Ballia</option>
                    </select>

                </div>
                <div className="zip">
                    <label className="form__label" for="zip">Zip </label>
                    <input className="form__input" type="zip" id="zip" value={PatientZip} onChange = {(e) => handleInputChange(e)} placeholder="Zip"/>
                </div>
                <div className="land line">
                    <label className="form__label" for="land line">Land line </label>
                    <input className="form__input" type="land line" id="land line" value={PatientLand} onChange = {(e) => handleInputChange(e)} placeholder="Land Line"/>
                </div>
                <div className="cellular phone">
                    <label className="form__label" for="cellular phone">Cellular phone </label>
                    <input className="form__input" type="cellular phone" id="cellular phone" value={PatientCell} onChange = {(e) => handleInputChange(e)} placeholder="cellular Phone"/>
                </div>
                <div className="infected">
                    <label className="form__label" for="infected">infected by COVID-19 before </label>
                    <input className="form__input" type="checkbox" id="infected" onChange = {(e) => handleInputChange(e)} placeholder="infected"/>
                </div>
                <div className="conditions">
                    <h6>previous conditions:</h6>
                    <label className="form__label" for="diabetes">Diabetes </label>
                    <input className="form__input" type="checkbox" id="diabetes" onChange = {(e) => handleInputChange(e)} placeholder="conditions"/>
                    <br></br>
                    <label className="form__label" for="cardio">Cardio-Vascular problems </label>
                    <input className="form__input" type="checkbox" id="cardio" onChange = {(e) => handleInputChange(e)} placeholder="conditions"/>
                    <br></br>
                    <label className="form__label" for="allergies">Allergies </label>
                    <input className="form__input" type="checkbox" id="allergies" onChange = {(e) => handleInputChange(e)} placeholder="conditions"/>
                    <br></br>
                    <label className="form__label" for="other">Other </label>
                    <input className="form__input" type="text" id="other" onChange = {(e) => handleInputChange(e)} placeholder="conditions"/>
                </div>
            </div>
            <div class="footer">
                <button  type="submit" class="btn">Register</button>
            </div>
        </div>

    )
}

export default RegistrationForm