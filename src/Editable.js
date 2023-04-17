import { useState } from "react";

const Editable = (props) => {
  const [editing, setEditing] = useState(false);

  return <span>{props.value}</span>;
};

export default Editable;
