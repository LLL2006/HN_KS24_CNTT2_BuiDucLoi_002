
interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({ onCancel, onConfirm }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: "0 0 10px", fontWeight: "bold" }}>Xóa note</h3>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
          Bạn có chắc muốn xóa note này?
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button
            onClick={onCancel}
            style={{
              padding: "6px 12px",
              border: "none",
              background: "#ccc",
              borderRadius: "4px",
            }}
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "6px 12px",
              border: "none",
              background: "#2196F3",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
