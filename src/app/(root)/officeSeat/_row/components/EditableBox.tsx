"use client";

import React, { useState, useRef, useEffect } from "react";
import { getColorClass } from "../util/colorUtils";
import { firestore } from "../../../../../../firebaseConfig";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

interface EditableBoxProps {
  id: string;
  color: string;
}

const useDynamicFontSize = (text: string) => {
  const baseSize = 16;
  const minFontSize = 10;
  const calculatedSize = Math.max(baseSize - text.length, minFontSize);

  return calculatedSize + "px";
};

const EditableBox: React.FC<EditableBoxProps> = ({ id, color }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const fontSize = useDynamicFontSize(text);

  useEffect(() => {
    // Firestoreからのテキスト更新を監視
    const boxDoc = doc(firestore, "boxes", id); // IDを使用
    const unsubscribe = onSnapshot(boxDoc, (docSnapshot) => {
      const data = docSnapshot.data();
      if (data) {
        setText(data.text);
      }
    });

    return () => unsubscribe();
  }, [id]); // IDを依存配列に追加

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // Firestoreにテキストを保存する関数
  const saveText = async (newText: string) => {
    try {
      const boxDoc = doc(firestore, "boxes", id); // IDを使用
      await setDoc(boxDoc, { text: newText });
    } catch (error) {
      console.error("Error saving text to Firestore: ", error);
    }
  };

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
          onBlur={() => {
            setIsEditing(false);
            saveText(text);
          }}
          className={`text-input outline-none w-14 ${getColorClass(color)}`}
        />
      ) : (
        <div className={`text-display`}>{text || "　　　　"}</div>
      )}
    </div>
  );
};

export default EditableBox;
