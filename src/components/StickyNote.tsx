interface Note {
  id: number;
  title: string;
  
}

const initialNotes: Note[] = [
  {
    id: 1,
    title: "Làm việc nhà",
    
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    
  },
  {
    id: 3,
    title: "Tôi tài giỏi, bạn cũng thế",
   
  },
  {
    id: 4,
    title: "Nhà giả kim",
    
  }
];


const  = (value: string) => {
    const categoryMap: { [key: string]: string } = {
      technology: "Công nghệ",
      psychology: "Tâm lý học",
      "self-help": "Phát triển bản thân",
      novel: "Tiểu thuyết"
    };
    return categoryMap[value] || value;
  };

  const handleDeleteClick = (book: Book) => {
    setSelectedBook(book);
    setShowDeleteModal(true);
  };

  const handleEditClick = (book: Book) => {
    setSelectedBook(book);
    setEditForm({ ...book });
    setShowEditModal(true);
  };

  const handleAddClick = () => {
    setEditForm({
      id: Math.max(...books.map(b => b.id)) + 1,
      title: "",
      author: "",
      genre: "technology",
      publishedYear: new Date().getFullYear(),
      quantity: 0,
      available: 0,
      isbn: "",
      status: "available"
    });
    setShowAddModal(true);
  };

  const confirmDelete = () => {
    if (selectedBook) {
      setBooks(books.filter(book => book.id !== selectedBook.id));
    }
    setShowDeleteModal(false);
    setSelectedBook(null);
  };

  const handleSaveEdit = () => {
    setBooks(books.map(book => 
      book.id === editForm.id ? editForm : book
    ));
    setShowEditModal(false);
    setSelectedBook(null);
  };

export default function StickyNote() {
  return (
    <div>
        <div>
        <div style={{display: 'flex', flexDirection: 'column' ,minHeight: '100vh', width: '400px', justifyContent: 'center'}}>
            <div style={{background: '#FFC53D', padding: '10px', height: '100px', width: '400px'}}>
                <div style={{display: "flex"}}>
                  <div>STICKY NOTE</div>
                  <div>💾</div>
                </div>
                <textarea style={{background: '#333333', color: 'white', width: '370px'}}></textarea>
            </div>
            <div className="main" style={{background: '#202020', color: 'white', width: '370px'}} >
                <div className="List" style={{display: 'flex', flexDirection: 'row'}} >Làm việc nhà<div>✏️</div>
                <div>🗑️</div></div>
            </div>
            <div className="main" style={{background: '#202020', color: 'white', width: '370px'}} >
                <div className="List" style={{display: 'flex', flexDirection: 'row'}} >Làm việc nhà<div>✏️</div>
                <div>🗑️</div></div>
            </div>
            <div className="main" style={{background: '#202020', color: 'white', width: '370px'}} >
                <div className="List" style={{display: 'flex', flexDirection: 'row'}} >Làm việc nhà<div>✏️</div>
                <div>🗑️</div></div>
            </div>
        </div>

    </div>
    </div>
  )
}
