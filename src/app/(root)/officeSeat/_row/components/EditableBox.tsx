"use client";

import React, { useState, useRef, useEffect } from "react";
import { getColorClass } from "../util/colorUtils";

interface EditableBoxProps {
  color: string;
}

const useDynamicFontSize = (text: string) => {
  const baseSize = 16;
  const minFontSize = 10;
  const calculatedSize = Math.max(baseSize - text.length, minFontSize);

  return calculatedSize + "px";
};

const EditableBox: React.FC<EditableBoxProps> = ({ color }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const fontSize = useDynamicFontSize(text);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={`editable-box ${getColorClass(color)} p-1 cursor-text w-16`}
      onClick={() => setIsEditing(true)}
      style={{ fontSize }}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className={`text-input outline-none w-14 ${getColorClass(color)}`}
        />
      ) : (
        <div className={`text-display`}>{text || "　　　　"}</div>
      )}
    </div>
  );
};

export default EditableBox;
