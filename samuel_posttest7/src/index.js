import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';




function Validasi() {
  const [data, setData] = useState({})

  const MasukData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [key]: value }))
  }

  const CekData = (e) => {
    e.preventDefault();
    // return {
    console.log('hai');
    console.log(data.nama);
    console.log(data.email);
    if (data.nama !== '' && data.email !== '') {
      console.log('oke');
      <>
      </>
      // }
    }
    else {
      console.log("salah")
      alert("Email dan pesan harus diisi")

    }
  }

  return (
    <form onSubmit={CekData}>
      <div className="container mt-5">
        <div className="row">
          <label>Email</label>
          <input
            onChange={MasukData}
            type="email"
            name="email"
            value={data.email || ""}
            className="form-control" />
        </div>
        <div className="container mt-5">
          <label>Pesan</label>
          <input
            onChange={MasukData}
            type="text"
            name="nama"
            value={data.nama || ""}
            className="form-control" />
        </div>
        <div className="container mt-5">
          <button type="submit" className="btn btn-primary">Cek</button>&nbsp;
        </div>
      </div>
    </form>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Validasi />);

