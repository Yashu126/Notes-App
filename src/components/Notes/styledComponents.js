import styled from 'styled-components'

export const NotesCon = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: Roboto;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
  font-size: 28px;
`
export const NoteCard = styled.form`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px #aab8c8;
  margin-top: 20px;
  margin: bottom: 20px;
`

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  color: #475569;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`
export const Input = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  color: #475569;
  font-size: 14px;
  margin-bottom: 10px;
`

export const AddBtn = styled.button`
  background-color: #4c63b6;
  padding: 5px 10px;
  color: #ffffff;
  width: 80px;
  margin-left: auto;
  border: none;
  outline: none;
  border-radius: 3px;
`
export const EmptyListCon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UnorderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  width: 90%;
  align-item: center;
`
export const Emptyheading = styled.h1`
  font-size: 18px;
  color: #334155;
`

export const EmptyText = styled.p`
  font-size: 14px;
  color: #aab8c8;
`
