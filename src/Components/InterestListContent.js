import React, { useState, useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { NewEntryModal, RenameModal } from './InterestListModals';

function InterestListCreatorPage() {
  const [showNewEntryModal, setShowNewEntryModal] = useState(false);
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryDescription, setNewEntryDescription] = useState('');
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [interestListName, setInterestListName] = useState('');
  const [interestList, setInterestList] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current);
    }
  }, []);
  
  const handleNewEntryTitleChange = (event) => setNewEntryTitle(event.target.value);
  const handleNewEntryDescriptionChange = (event) => setNewEntryDescription(event.target.value);
  const handleNewEntrySubmit = (event) => {
    event.preventDefault();
    if (newEntryTitle.trim() !== '' && newEntryDescription.trim() !== '') {
      setInterestList([...interestList, { title: newEntryTitle, description: newEntryDescription }]);
      setNewEntryTitle('');
      setNewEntryDescription('');
      setShowNewEntryModal(false);
    }
  };

  const handleRenameChange = (event) => setNewListName(event.target.value);
  const handleRenameSubmit = (event) => {
    event.preventDefault();
    if (newListName.trim() !== '') {
      setInterestListName(newListName);
      setNewListName('');
      setShowRenameModal(false);
    }
  };

  const interestListItems = interestList.map((item, index) => (
    <li key={index}>
      <h4>{item.title}</h4> {item.description}
    </li>
  ));

  const handleShowNewEntryModal = () => {
    setShowNewEntryModal(true);
  };

  const handleShowRenameModal = () => {
    setShowRenameModal(true);
  };

  const handleCloseNewEntryModal = () => {
    setShowNewEntryModal(false);
  };

  const handleCloseRenameModal = () => {
    setShowRenameModal(false);
  };

  return (
    <div>
      <main>
        <section className="list-box">
          <button className="btn btn-dark" onClick={handleShowNewEntryModal}>Add New Entry</button>
          <button className="btn btn-dark" onClick={handleShowRenameModal}>Rename Interest List</button>
          <h3 className="interest-list-title">{interestListName}</h3>
          <ol className="interest-list" ref={listRef}>
            {interestListItems}
          </ol>
        </section>

        {showNewEntryModal && (
          <NewEntryModal
            newEntryTitle={newEntryTitle}
            newEntryDescription={newEntryDescription}
            handleNewEntryTitleChange={handleNewEntryTitleChange}
            handleNewEntryDescriptionChange={handleNewEntryDescriptionChange}
            handleNewEntrySubmit={handleNewEntrySubmit}
            handleCloseModal={handleCloseNewEntryModal}
          />
        )}

        {showRenameModal && (
          <RenameModal
            newListName={newListName}
            handleRenameChange={handleRenameChange}
            handleRenameSubmit={handleRenameSubmit}
            handleCloseModal={handleCloseRenameModal}
          />
        )}
      </main>
    </div>
  );
}

export default InterestListCreatorPage;