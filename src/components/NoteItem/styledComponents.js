import styled from 'styled-components'

export const ListCard = styled.li`
  list-style-type: none;
  border: 1px solid #cbd5e1;
  padding: 10px;
  width: 30%;
  height: 100px;
  border-radius: 15px;
  margin: 8px;
  @media screen and (max-width: 767px) {
    width: 100%;
    heigth: 130px;
    margin: 2px;
  }
`
export const Title = styled.h1`
  color: #334155;
  font-size: 16px;
`
export const Note = styled.p`
  width: 90%;
  coler: #aab8c8;
  font-size: 14px;
  overflow: hidden;
`
