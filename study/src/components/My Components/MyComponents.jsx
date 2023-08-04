const MyComponents = (props) => {

    const { name, children } = props;

    return (
        <div>
            {/* props,children  */}
            {/* <div>안녕하세요 제 이름은 {props.name}</div>
            <div>children값은 {props.cheldren}</div> */}
            <div>안녕하세요 제 이름은 {name}</div>
            <div>children의 값은 {children}</div>
        </div>
    )
}