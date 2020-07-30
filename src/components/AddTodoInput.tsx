import React, { useState } from "react";

interface AddTodoInputProps {
  onSave: (todoText: string) => void;
}

export const AddTodoInput: React.FC<AddTodoInputProps> = (props) => {
  const { onSave } = props;
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSave(value);
      setValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="new-todo-input"
      />
    </div>
  );
};

export default AddTodoInput;
