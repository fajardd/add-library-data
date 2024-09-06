import "./index.css";
import { useState } from "react";
import moment from "moment";

function App() {
  const [perpus, setPerpus] = useState({
    judul: "",
    jumlah: "",
    penulis: "",
    penerbit: "",
    tanggal: "",
  });
  const [bukuList, setBukuList] = useState([]);

  const handleChange = (e) => {
    setPerpus({
      ...perpus,
      [e.target.name]: e.target.value,
    });
  };

  const addBuku = (e) => {
    e.preventDefault();
    setBukuList([...bukuList, perpus]);
    setPerpus({
      judul: "",
      jumlah: "",
      penulis: "",
      penerbit: "",
      tanggal: "",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <form onSubmit={addBuku} className="w-1/4 p-4 space-y-2 border">
          <div className="grid ">
            <label htmlFor="judul-buku">Judul Buku</label>
            <input
              type="text"
              name="judul"
              value={perpus.judul}
              onChange={handleChange}
              className="border border-slate-400 focus:border-blue-400 outline-none px-2 w-full"
              required
            />
          </div>

          <div className="grid">
            <label htmlFor="qty">Penulis</label>
            <input
              type="text"
              name="penulis"
              value={perpus.penulis}
              onChange={handleChange}
              className="border border-slate-400 focus:border-blue-400 outline-none px-2 w-full"
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="qty">Penerbit</label>
            <input
              type="text"
              name="penerbit"
              value={perpus.penerbit}
              onChange={handleChange}
              className="border border-slate-400 focus:border-blue-400 outline-none px-2 w-full"
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="qty">Jumlah</label>
            <input
              type="number"
              name="jumlah"
              value={perpus.jumlah}
              onChange={handleChange}
              className="border border-slate-400 focus:border-blue-400 outline-none px-2 w-full"
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="tanggal">Tanggal Masuk</label>
            <input
              type="date"
              name="tanggal"
              value={perpus.tanggal}
              onChange={handleChange}
              className="border border-slate-400 focus:border-blue-400 outline-none px-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-[3px] text-center bg-green-500 text-white font-normal "
          >
            Tambah Buku
          </button>
        </form>
      </div>
      <div>
        <table className="border">
          <thead>
            <tr>
              <th className="border bg-slate-100 p-2">No</th>
              <th className="border bg-slate-100 p-2">Judul</th>
              <th className="border bg-slate-100 p-2">Penulis</th>
              <th className="border bg-slate-100 p-2">Penerbit</th>
              <th className="border bg-slate-100 p-2">Jumlah</th>
              <th className="border bg-slate-100 p-2">
                Tanggal Masuk Perpustakaan
              </th>
            </tr>
          </thead>

          <tbody>
            {bukuList.map((buku, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{buku.judul}</td>
                <td className="border p-2">{buku.penulis}</td>
                <td className="border p-2">{buku.penerbit}</td>
                <td className="border p-2">{buku.jumlah}</td>
                <td className="border p-2">
                  {moment(buku.tanggal).format("DD MMM YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
