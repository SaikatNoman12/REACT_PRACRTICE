function ClickEvent() {
  function onAlert() {
    alert("Hello this is a alert!");
  }

  let changeData = "Abdullah Al Nomaan";

  function onChangeData() {
    changeData = "Shamim Hossain";

    alert(changeData);
  }

  return (
    <div>
      <h1>{changeData}</h1>

      {/* 
        <button type="button" onClick={onAlert()}>
            Click Show Alert
        </button> 
      */}

      {/* END! this alert is render initially */}

      <button type="button" onClick={onAlert}>
        Click Show Alert Two
      </button>

      <br />
      <br />

      <button type="button" onClick={() => alert("This my third alert")}>
        Click Show Alert Three
      </button>

      <br />
      <br />

      <button type="button" onClick={() => onChangeData()}>
        Click Show Alert forth
      </button>
    </div>
  );
}

export default ClickEvent;
