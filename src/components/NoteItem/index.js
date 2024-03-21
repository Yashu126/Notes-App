import {ListCard, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {title, note} = eachNote
  return (
    <ListCard>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </ListCard>
  )
}

export default NoteItem
