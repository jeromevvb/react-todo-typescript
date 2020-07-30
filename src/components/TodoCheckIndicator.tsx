import React from "react";

interface TodoCheckIndicatorProps {
  complete: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoCheckIndicator: React.FC<TodoCheckIndicatorProps> = (
  props
) => {
  const { complete, handleChange } = props;

  return (
    <div>
      <input type="checkbox" checked={complete} onChange={handleChange} />
    </div>
  );
};
