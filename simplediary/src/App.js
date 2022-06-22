import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import './App.css'

const dummyList = [
  {
    id : 1,
    author: "심채영",
    content: "하이 1",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id : 2,
    author: "심아롱",
    content: "하이루",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id : 3,
    author: "윤지훈",
    content: "하이용",
    emotion: 4,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  )
}

export default App