import React, { useState, useEffect } from "react";
import type { Note } from "./StickyNote";

interface Props {
  addNote: (content: string) => void;
  editNote: (id: number, content: string) => void;
  editingNote: Note | null;
  cancelEdit: () => void;
}

export default function NoteInput({ addNote, editNote, editingNote }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (editingNote) setValue(editingNote.content);
  }, [editingNote]);

  const handleSubmit = () => {
    if (!value.trim()) {
      setError(true);
      return;
    }
    setError(false);

    if (editingNote) {
      editNote(editingNote.id, value.trim());
    } else {
      addNote(value.trim());
    }
    setValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div style={{ backgroundColor: "#333" }}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Nhập ghi chú"
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          outline: "none",
          padding: "12px 16px",
        }}
      />
      {error && (
        <div style={{ backgroundColor: "#F9C23C", padding: "6px 16px" }}>
          <span style={{ color: "red", fontSize: "13px" }}>
            Nội dung ghi chú không được bỏ trống
          </span>
        </div>
      )}
    </div>
  );
}

