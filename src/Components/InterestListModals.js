import React from 'react';
import 'react-dropdown/style.css';

export function NewEntryModal({
  newEntryTitle,
  newEntryDescription,
  handleNewEntryTitleChange,
  handleNewEntryDescriptionChange,
  handleNewEntrySubmit,
  handleCloseModal
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn" onClick={handleCloseModal}>X</button>
        <form onSubmit={handleNewEntrySubmit}>
          <label htmlFor="newEntryTitle">Hike Title:</label>
          <input
            type="text"
            id="newEntryTitle"
            value={newEntryTitle}
            onChange={handleNewEntryTitleChange}
            placeholder="Enter hike title"
          /> <br/><br/>
          <label htmlFor="newEntryDescription">Hike Description:</label>
          <textarea
            id="newEntryDescription"
            value={newEntryDescription}
            onChange={handleNewEntryDescriptionChange}
            placeholder="Enter hike description"
          /> <br/><br/>
          <button type="submit" className="btn btn-dark">Add Entry</button>
        </form>
      </div>
    </div>
  );
}

export function RenameModal({
  newListName,
  handleRenameChange,
  handleRenameSubmit,
  handleCloseModal
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn" onClick={handleCloseModal}>X</button>
        <form onSubmit={handleRenameSubmit}>
          <label htmlFor="newListName">New List Name:</label>
          <input
            type="text"
            id="newListName"
            value={newListName}
            onChange={handleRenameChange}
            placeholder="Enter new list name"
          /> <br/><br/>
          <button type="submit" className="btn btn-dark">Rename List</button>
        </form>
      </div>
    </div>
  );
}