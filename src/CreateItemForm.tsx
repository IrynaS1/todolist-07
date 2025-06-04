import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { type ChangeEvent, type KeyboardEvent, useState } from "react";

type Props = {
  onCreateItem: (title: string) => void;
};

export const CreateItemForm = ({ onCreateItem }: Props) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createItemHandler = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle !== "") {
      onCreateItem(trimmedTitle);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
    setError(null);
  };

  const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createItemHandler();
    }
  };

  const buttonStyles = {
    maxWidth: "38px",
    maxHeight: "38px",
    minWidth: "38px",
    minHeight: "38px",
    background: "blue",
  };

  return (
    <div>
      <TextField
        error={!!error}
        id="outlined-basic"
        className={error ? "error" : ""}
        size={"small"}
        value={title}
        label={error ? error : "type smth, please"}
        variant="outlined"
        onChange={changeTitleHandler}
        onKeyDown={createItemOnEnterHandler}
      />
      <Button
        variant="contained"
        onClick={createItemHandler}
        size="small"
        style={buttonStyles}
      >
        +
      </Button>
    </div>
  );
};
