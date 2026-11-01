import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kuliah', tenggat: '', prioritas: 'sedang' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Koleksi</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>id</option>
        <option>judul</option>
        <option>kategori</option>
        <option>namaLatin</option>
        <option>frekuensiSiram</option>
        <option>kebutuhanCahaya</option>
      </select>

      <label htmlFor="namaLatin">namaLatin</label>
      <input id="namaLatin" name="namaLatin" type="date" value={form.namaLatin} onChange={ubah} />

      <label htmlFor="frekuensiSiram">frekuensiSiram</label>
      <select id="frekuensiSiram" name="frekuensiSiram" value={form.frekuensiSiram} onChange={ubah}>
        <option>id</option>
        <option>judul</option>
        <option>kategori</option>
        <option>namaLatin</option>
        <option>frekuensiSiram</option>
        <option>kebutuhanCahaya</option>
      </select>
        
      <label htmlFor="kebutuhanCahaya">kebutuhanCahaya</label>
      <select id="kebutuhanCahaya" name="kebutuhanCahaya" value={form.kebutuhanCahaya} onChange={ubah}>
        <option value="rendah">Rendah</option>
        <option value="sedang">Sedang</option>
        <option value="tinggi">Tinggi</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}