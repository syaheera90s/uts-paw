import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, namaLatin, frekuensiSiram, kebutuhanCahaya} = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        Nama Tanaman : {kategori},
        Nama Latin : {namaLatin}, 
        Frekuensi Siram : {frekuensiSiram}, 
        Kebutuhan Cahaya : {kebutuhanCahaya}
      </p>
    </article>
  )
}