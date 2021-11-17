import ListItem from "./ListItem";
const ListPassenger = (props) => {
  return (
    <div>
      <hr />
      <input value={props.userId} onChange={props.onChangeUserId} />
      <button onClick={props.onGetData}>Get Data</button>
      <hr />
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {props.data?.task_21_table_user.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
