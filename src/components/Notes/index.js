import {useState} from 'react'
import {v4 as uudiv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesCon,
  Heading,
  NoteCard,
  TitleInput,
  Input,
  AddBtn,
  EmptyListCon,
  UnorderedList,
  Emptyheading,
  EmptyText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNoteList] = useState([])

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onNoteChange = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uudiv4(),
      title,
      note,
    }
    setNoteList(prevList => [...prevList, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <NotesCon>
      <Heading>Notes</Heading>
      <NoteCard onSubmit={onAddNote}>
        <TitleInput
          placeholder="Title"
          type="text"
          onChange={onTitleChange}
          value={title}
        />
        <Input
          placeholder="Take a note..."
          rows="4"
          onChange={onNoteChange}
          value={note}
        />
        <AddBtn type="submit">Add</AddBtn>
      </NoteCard>
      {notesList.length < 1 ? (
        <EmptyListCon>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
            width="70"
          />
          <Emptyheading>No Notes Yet</Emptyheading>
          <EmptyText>Notes you add will appear here</EmptyText>
        </EmptyListCon>
      ) : (
        <UnorderedList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} eachNote={eachNote} />
          ))}
        </UnorderedList>
      )}
    </NotesCon>
  )
}
export default Notes
