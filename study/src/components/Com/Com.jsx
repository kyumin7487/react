function Com() {
    const name = "리엑트";

    const style = {
        backgroundColor: "red",
        color: "blue",
    }
    return(
        <div>
            {/* 주석방법 */}
            <h1> 컴포넌트 배우기 </h1>
            <div>{name}</div>
            {name === "리엑트" ? (<h1>리엑트 입니다</h1>) : (<h2>리엑트가 아닙니다</h2>)}
            {/* {조건 === "" ? true : false}*/}

            {name === "리엑트" ? <h1>리엑트 입니다</h1> : null}

            {name == "리엑트" && <h1>리엑트 입니다</h1>}
        </div>
    );
}
export default Com;