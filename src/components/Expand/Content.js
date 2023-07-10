export default function Content(props) {
    return (
        <>
            <button onClick={props.collapse}>Đóng giới thiệu</button>
            <h5>GIới thiệu</h5>
            <p>Trong ReactJS, đôi khi có 1 số component và tùy thuộc vào từng điều kiện ví dụ như trạng  thái của state, props,... mà bạn muốn hiển thị
                hoặc 1 số component nào đó. Khi đó bạn có thể sử dụng...
            </p>
        </>
    );
}