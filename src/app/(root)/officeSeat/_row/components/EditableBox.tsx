"use client";

import React, { useState, useRef, useEffect } from "react";
import { getColorClass } from "../util/colorUtils";

interface EditableBoxProps {
  color: string;
}

const EditableBox: React.FC<EditableBoxProps> = ({ color }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBoxClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(false);
  };

  return (
    <div className={`bg-${color} p-1 cursor-text`} onClick={handleBoxClick}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={`outline-none w-8 ${getColorClass(color)}`}
        />
      ) : (
        <div>{text || "　　　　"}</div>
      )}
    </div>
  );
};

export default EditableBox;
