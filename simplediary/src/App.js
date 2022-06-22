import { useEffect, useRef, useState } from 'react'
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

//https://jsonplaceholder.typicode.com/comments

const App = () => {

  const [data, setData] = useState([]); //일기 데이터 변경
  const dataId = useRef(0)
  
  //API호출
  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json())

    const initData = res.slice(0,20).map((it)=>{
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random()*5)+1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    })

    setData(initData)
  }

  useEffect(()=>{
    getData()
  },[])

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