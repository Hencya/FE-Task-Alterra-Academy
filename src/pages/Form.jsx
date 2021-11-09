import React, { useState, useRef } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const basedData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const basedError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(basedData);
  const [errorMessage, setErrorMessage] = useState(basedError);

  const regexName = /^[A-Za-z ]*$/;
  const regexEmail = /\S+@\S+\.\S+/;
  const regexNoHP = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

  const resetData = () => {
    setData(basedData);
    setErrorMessage(basedError);
  };

  const validateOnHandleInput = (name, value) => {
    if (name === "nama") {
      if (regexName.test(value)) {
        setErrorMessage({ ...errorMessage, nama: "" });
      } else {
        setErrorMessage({
          ...errorMessage,
          nama: "Nama lengkap harus berupa huruf",
        });
      }
    }

    if (name === "email") {
      if (regexEmail.test(value)) {
        setErrorMessage({
          ...errorMessage,
          email: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          email: "Email tidak sesuai",
        });
      }
    }

    if (name === "noHandphone") {
      if (regexNoHP.test(value)) {
        setErrorMessage({
          ...errorMessage,
          noHandphone: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          noHandphone: "No handphone tidak sesuai",
        });
      }
    }

    if (name === "pendidikan" && value !== "") {
      setErrorMessage({
        ...errorMessage,
        pendidikan: "",
      });
    }

    if (name === "kelas" && value !== "") {
      setErrorMessage({
        ...errorMessage,
        kelas: "",
      });
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateOnHandleInput(name, value);
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errorMessage.nama !== "" ||
      errorMessage.email !== "" ||
      errorMessage.noHandphone !== ""
    ) {
      alert("Terdapat data yang tidak sesuai");
      e.preventDefault();
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
      setData(basedData);
    }
  };

  return (
    <>
      <h1 style={{ "text-align": "center" }}>
        Pendaftaran Peserta Coding Bootcamp
      </h1>
      <form className="p-5" onSubmit={handleSubmit}>
        <label className="form-label text-start d-block">
          Nama Lengkap:
          <input
            type="text"
            name="nama"
            onChange={handleInput}
            value={data.nama}
            className="form-control"
            required
          />
        </label>
        <label className="form-label text-start d-block">
          Email:
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={data.email}
            className="form-control"
            required
          />
        </label>
        <label className="form-label text-start d-block">
          No Handphone:
          <input
            type="tel"
            name="noHandphone"
            onChange={handleInput}
            className="form-control"
            value={data.noHandphone}
            required
          />
        </label>
        <label className="form-label text-start d-block">
          Latar Belakang Pendidikan:
          <div className="d-block">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              value="IT"
              checked={data.pendidikan === "IT"}
              onChange={handleInput}
            />
            <label className="form-check-label">IT</label>
          </div>
          <div className="d-block">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              value="Non IT"
              checked={data.pendidikan === "Non IT"}
              onChange={handleInput}
            />
            <label className="form-check-label">Non IT</label>
          </div>
        </label>
        <label className="form-label text-start d-block">
          Kelas Coding yang Dipilih:
          <select
            type="text"
            name="kelas"
            onChange={handleInput}
            value={data.kelas}
            className="form-select"
            required
          >
            <option value="">Pilih Salah Satu Program</option>
            <option value="Coding BackEnd with Golang" required>
              Coding BackEnd with Golang
            </option>
            <option value="Coding FrontEnd with ReactJS">
              Coding FrontEnd with ReactJS
            </option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </label>
        <label className="form-label text-start d-block">
          Foto Surat Kesungguhan:
          <input
            type="file"
            ref={suratKesungguhan}
            className="form-control"
            required
          />
        </label>
        <label className="form-label text-start d-block">
          Harapan Untuk Coding Bootcamp ini:
          <textarea
            name="harapan"
            cols="30"
            rows="5"
            value={data.harapan}
            onChange={handleInput}
            className="form-control"
          ></textarea>
        </label>
        <ul>
          <li
            style={errorMessage.nama ? { color: "red" } : { display: "none" }}
          >
            {errorMessage.nama}
          </li>
          <li
            style={errorMessage.email ? { color: "red" } : { display: "none" }}
          >
            {errorMessage.email}
          </li>
          <li
            style={
              errorMessage.noHandphone ? { color: "red" } : { display: "none" }
            }
          >
            {errorMessage.noHandphone}
          </li>
        </ul>

        <input type="submit" value="submit" className={styles.buttonSubmit} />
        <button className={styles.buttonReset} onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
}
