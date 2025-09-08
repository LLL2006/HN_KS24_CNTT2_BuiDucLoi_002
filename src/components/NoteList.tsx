import type { Note } from "./StickyNote";
import NoteItem from "./NoteItem";

interface Props {
  notes: Note[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  editingId: number | null;
}

export default function NoteList({ notes, onEdit, onDelete, editingId }: Props) {
  return (
    <div style={{ maxHeight: "300px", }}>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
          isEditing={editingId === note.id}
        />
      ))}
    </div>
  );
}

