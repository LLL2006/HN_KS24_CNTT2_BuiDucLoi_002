import { useState, useEffect } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import DeleteModal from "./DeleteModal";

export interface Note {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function StickyNote() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<number | null>(null);

  const [notes, setNotes] = useState<Note[]>(() => {
  const saved = localStorage.getItem("sticky-notes");
  if (saved) {
    return JSON.parse(saved).map((n: any) => ({
      ...n,
      createdAt: new Date(n.createdAt),
      updatedAt: new Date(n.updatedAt),
    }));
  }
  return [];
});


  useEffect(() => {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (content: string) => {
    const newNote: Note = {
      id: Date.now(),
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const editNote = (id: number, content: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, content, updatedAt: new Date() } : n
      )
    );
    setEditingId(null);
  };

  const handleDeleteClick = (id: number) => {
    setNoteToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (noteToDelete !== null) {
      setNotes((prev) => prev.filter((n) => n.id !== noteToDelete));
      if (editingId === noteToDelete) setEditingId(null);
    }
    setShowDeleteModal(false);
    setNoteToDelete(null);
  };

  return (
    <div style={{ width: "450px", margin: "50px auto", fontFamily: "Arial" }}>
      <div
        style={{
          backgroundColor: "#F9C23C",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
            STICKY NOTE
          </h1>
          <div>
             💾 
          </div>
        </div>

        <NoteInput
          addNote={addNote}
          editNote={editNote}
          editingNote={notes.find((n) => n.id === editingId) || null}
          cancelEdit={() => setEditingId(null)}
        />

        <NoteList
          notes={notes}
          onEdit={(id) => setEditingId(id)}
          onDelete={handleDeleteClick}
          editingId={editingId}
        />
      </div>

      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}

