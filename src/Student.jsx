function Student(props) {
  return (
    <div
      style={{ backgroundColor: "yellow", marginBottom: "10px", color: "#000" }}
    >
      <h1>{props?.name}</h1>
      <h3>{props?.email}</h3>
    </div>
  );
}

export default Student;
