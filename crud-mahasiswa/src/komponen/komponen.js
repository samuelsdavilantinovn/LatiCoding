// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export const AddMahasiswa = (props) => {
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Tambah Data</h5>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">NIK</label>
            <input
              value={props.mahasiswa.nik || ""}
              onChange={props.handleChange}
              type="text"
              name="nik"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input
              value={props.mahasiswa.nama || ""}
              onChange={props.handleChange}
              type="text"
              name="nama"
              className="form-control"
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Jurusan</label>
            <input
              value={props.mahasiswa.jurusan || ""}
              onChange={props.handleChange}
              type="text"
              name="jurusan"
              className="form-control"
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Jurusan</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              name="jurusan"
              onChange={props.handleChange}
            // value={props.mahasiswa.status || ""}
            >
              <option value="">Silahkan Pilih</option>
              <option value="Serba Guna">Serba Guna</option>
              <option value="Logistik">Logistik</option>
              <option value="Investigasi">Investigasi</option>
              <option value="Medis">Medik</option>
              <option value="Bela Diri">Medik</option>
            </select>
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Status</label>
            <input
              value={props.mahasiswa.status || ""}
              onChange={props.handleChange}
              type="text"
              name="status"
              className="form-control"
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Status</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              name="status"
              onChange={props.handleChange}
            // value={props.mahasiswa.status || ""}
            >
              <option value="">Silahkan Pilih</option>
              <option value="Aktif">Aktif</option>
              <option value="Cuti">Cuti</option>
              <option value="Lulus">Lulus</option>
            </select>
          </div>


          {/* <div className="mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                Jurusan {props.value}
              </Dropdown.Toggle>
              <Dropdown.Menu
                name="jurusan"
                onChange={props.handleChange}
                value={props.mahasiswa.status || ""}>
                <Dropdown.Item>Logistik</Dropdown.Item>
                <Dropdown.Item>Investigasi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}

          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export const ListMahasiswa = (props) => {
  let counter = 0;
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Daftar Mahasiswa</h5>
        <table className="table text-light">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.daftarMahasiswa.map((mahasiswa, i) => (
              <tr key={i} onClick={() => props.getMahasiswa(mahasiswa, i)}>
                <td>{mahasiswa.nik}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>{mahasiswa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const EditMahasiswa = (props) => {
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Edit {props.mahasiswa.nik}</h5>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">NIK</label>
            <input
              value={props.mahasiswa.nik || ""}
              onChange={props.handleChange}
              type="text"
              name="nik"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama Mahasiswa</label>
            <input
              value={props.mahasiswa.nama || ""}
              onChange={props.handleChange}
              type="text"
              name="nama"
              className="form-control"
            />
          </div>


          {/* <div className="mb-3">
            <label className="form-label">Jurusan</label>
            <input
              value={props.mahasiswa.jurusan || ""}
              onChange={props.handleChange}
              type="text"
              name="jurusan"
              className="form-control"
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Jurusan</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              name="jurusan"
              onChange={props.handleChange}
            // value={props.mahasiswa.status || ""}
            >
              <option value="">Silahkan Pilih</option>
              <option value="Serba Guna">Serba Guna</option>
              <option value="Logistik">Logistik</option>
              <option value="Investigasi">Investigasi</option>
              <option value="Medis">Medik</option>
              <option value="Bela Diri">Bela Diri</option>
            </select>
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Status</label>
            <input
              value={props.mahasiswa.status || ""}
              onChange={props.handleChange}
              type="text"
              name="status"
              className="form-control"
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Status</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              name="status"
              onChange={props.handleChange}
            // value={props.mahasiswa.status || ""}
            >
              <option value="">Silahkan Pilih</option>
              <option value="Aktif">Aktif</option>
              <option value="Cuti">Cuti</option>
              <option value="Lulus">Lulus</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
          &nbsp;
          <button
            onClick={props.handleCancelEdit}
            className="btn btn-secondary">
            Cancel
          </button>
          &nbsp;
          <button onClick={props.handleRemove} className="btn btn-danger">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};