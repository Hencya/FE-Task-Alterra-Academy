import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, Jenis_Kelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{Jenis_Kelamin}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
