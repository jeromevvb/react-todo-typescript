import React, { useState } from "react";

interface AddTodoInputProps {
  onSave: (todoText: string) => void;
  editMode?: boolean;
  defaultValue?: string;
}

export const AddTodoInput: React.FC<AddTodoInputProps> = (props) => {
  const { onSave, editMode = false, defaultValue = "" } = props;
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSave(value);

      if (!editMode) {
        setValue("");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={editMode ? "edit-todo-input" : "new-todo-input"}
      />
    </div>
  );
};

export default AddTodoInput;
