import type { Note } from "./StickyNote";

interface Props {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
  isEditing: boolean;
}

export default function NoteItem({ note, onEdit, onDelete, isEditing }: Props) {
  return (
    <div>
      <div
        style={{ height: "1px", backgroundColor: "#F9C23C", margin: "0 16px" }}
      ></div>
      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#333",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "14px",
            marginRight: "8px",
          }}
        >
          {note.content}
        </span>
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={onEdit}
            style={{
              border: "none",
              background: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            style={{
              border: "none",
              background: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

