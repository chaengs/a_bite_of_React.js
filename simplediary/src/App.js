import { useRef, useState } from 'react'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import './App.css'

function App() {

  const [data, setData] = useState([]); //일기 데이터 변경
  const dataId = useRef(0)
  //일기 작성
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1
    setData([newItem, ...data]) //새 데이터 + 기존 데이터
  }
  //일기 삭제
  const onRemove = (targetId) => {
    console.log(`${targetId}번 일기가 삭제되었습니다`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    // console.log(newDiaryList);
    setData(newDiaryList)
  }
  //일기 수정
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content: newContent} : it)
    )
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  )
}

export default App