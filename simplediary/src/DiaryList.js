import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
    console.log(diaryList)
    return (
        <div className="DiaryList">
            <h2>다이어리 목록</h2>
            <h4>{diaryList.length}개의 일기가 있어요.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}
DiaryList.defaultProps = { //Props가 제대로 전달되지 않았을 때를 대비하여 기본값을 설정하는 것
    diaryList : [],
}
export default DiaryList