import './styles.css';
import { useState } from 'react';
import axios from 'axios';

export default function Volunteer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [scholarity, setScholarity] = useState('');
  const [age, setAge] = useState(18);

  const handleEmail = event => {
    setEmail(event.target.value);
  }

  const handlePhone = event => {
    setPhone(event.target.value);
  }

  const handleAddress = event => {
    setAddress(event.target.value);
  }

  const handleScholarity = event => {
    setScholarity(event.target.value);
  }

  const handleAge = event => {
    setAge(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const userInformation = {
      email,
      phone,
      address,
      scholarity,
      age
    };

    if (!email.length || !phone.length || !address.length || !scholarity.length) {
      alert('Preencha todos os campos');
      return;
    }

    axios.post('http://localhost:9000/api/volunteers', userInformation)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  return (
    <div className='volunteerContainer'>
      <h1>Voluntários</h1>
      <form className="volunteerForm">
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputTel">Telefone</label>
            <input
              type="tel"
              class="form-control"
              id="inputTel"
              placeholder="Telefone"
              value={phone}
              onChange={handlePhone}
            />
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputAddress">Endereço</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Endereço"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputScholarity">Escolaridade</label>
            <input
              type="text"
              class="form-control"
              id="inputScholarity"
              placeholder='Escolaridade'
              value={scholarity}
              onChange={handleScholarity}
            />
          </div>
          <div class="form-group col-md-1">
            <label for="inputAge">Idade</label>
            <input
              type="number"
              class="form-control"
              id="inputAge"
              placeholder="Idade"
              min={1}
              max={100}
              value={age}
              onChange={handleAge}
            />
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-primary col-md-1"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}