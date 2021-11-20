import "./Home.css";
import PassengerEdit from "./PassengerEdit";

const ListItem = (props) => {
  const { id, nama, umur, Jenis_Kelamin } = props.data;
  return (
    <tr>
      <td>{id}</td>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{Jenis_Kelamin}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder">
        <PassengerEdit
          id={id}
          editPengunjung={props.editPengunjung}
        ></PassengerEdit>
      </td>
    </tr>
  );
};

export default ListItem;
