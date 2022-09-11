import { useState } from "react";
import {
  AddMahasiswa,
  ListMahasiswa,
  EditMahasiswa
} from "../komponen/komponen";
import { LogoKampus } from "../komponen/logo.komponen";



export const CRUD = () => {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [mahasiswa, setMahasiswa] = useState({});
  const [untukEdit, setUntukEdit] = useState(false);
  const [currentID, setCurrentID] = useState(null);

  // const dropdownMenu = ({placeholder, options}) => {
  //   const getDisplay = () => {
  //     return placeholder;
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mahasiswa)
    if
      (mahasiswa.nama != null && mahasiswa.nik != null && mahasiswa.jurusan != null && mahasiswa.status != null
      && mahasiswa.nama != "" && mahasiswa.nik != "" && mahasiswa.jurusan != "" && mahasiswa.status != ""
    ) {
      if (untukEdit) {
        let updateMahasiswa = [...daftarMahasiswa];
        updateMahasiswa[currentID] = mahasiswa;
        setDaftarMahasiswa(updateMahasiswa);
        setUntukEdit(false);
        setMahasiswa({});
        setCurrentID(null);
      } else {
        setDaftarMahasiswa((values) => [mahasiswa, ...values]);
        setMahasiswa({});
      }
    } else {
      alert("Tolong Lengkapi Sebelum Submit!")
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const nilai = e.target.value;

    setMahasiswa((values) => ({ ...values, [key]: nilai }));
    // console.log(mahasiswa);
  };

  const getMahasiswa = (mahasiswa, index) => {
    setMahasiswa(mahasiswa);
    setUntukEdit(true);
    setCurrentID(index);
  };

  const handleCancelEdit = (e) => {
    setUntukEdit(false);
    setMahasiswa({});
  };

  const handleRemove = (e) => {
    let updateMahasiswa = [...daftarMahasiswa];
    updateMahasiswa.splice(currentID, 1);
    setDaftarMahasiswa(updateMahasiswa);
    setUntukEdit(false);
    setMahasiswa({});
    setCurrentID(null);
  };

  return (
    <>
      <LogoKampus />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            {untukEdit ? (
              <EditMahasiswa
                handleCancelEdit={handleCancelEdit}
                mahasiswa={mahasiswa}
                handleRemove={handleRemove}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            ) : (
              <AddMahasiswa
                mahasiswa={mahasiswa}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className="col-md-8">
            <ListMahasiswa getMahasiswa={getMahasiswa} daftarMahasiswa={daftarMahasiswa} />
          </div>
        </div>
      </div>
    </>
  );
};