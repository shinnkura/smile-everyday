"use client";

import React, { useState, useRef, useEffect } from "react";

const EditableBox = () => {
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
    // 明示的な型指定
    setText(e.target.value);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // 明示的な型指定
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-3 cursor-text" onClick={handleBoxClick}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="outline-none w-8"
        />
      ) : (
        <div>{text || "　　"}</div>
      )}
    </div>
  );
};

export default EditableBox;
