import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', namaLatin: '', frekuensiSiram: '', kebutuhanCahaya:'' }

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
        <option>Merambat</option>
        <option>Perdu</option>
        <option>Semak</option>
        <option>Sukulen</option>
        <option>Epifit</option>
        <option>Kaktus</option>
        <option>Umbi</option>
        <option>Semusim</option>
        
      </select>

      <label htmlFor="namaLatin">Nama Latin</label>
      <input id="namaLatin" name="namaLatin" value={form.namaLatin} onChange={ubah} />

      <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
     <input id="frekuensiSiram" name="frekuensiSiram" value={form.frekuensiSiram} onChange={ubah} />
        
      <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
      <select id="kebutuhanCahaya" name="kebutuhanCahaya" value={form.kebutuhanCahaya} onChange={ubah}>
        <option value="penuh">Penuh</option>
        <option value="parsial">Parsial</option>
        <option value="teduh">Teduh</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}