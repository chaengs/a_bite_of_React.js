const DiaryList = ({ diaryList }) => {
    console.log(diaryList)
    return (
        <div className="DiaryList">
            <h2>다이어리 목록</h2>
            <h4>{diaryList.length}개의 일기가 있어요.</h4>
            <div>
                {diaryList.map((it) => (
                    <div>
                        <div>작성자 : {it.author}</div>
                        <div>일기 : {it.content}</div>
                        <div>감정점수 : {it.emotion}</div>
                        <div>작성 시간 : {it.created_date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
DiaryList.defaultProps = { //Props가 제대로 전달되지 않았을 때를 대비하여 기본값을 설정하는 것
    diaryList : [],
}
export default DiaryList;