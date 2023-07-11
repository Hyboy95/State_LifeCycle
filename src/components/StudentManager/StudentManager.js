import { useState } from "react";
import Form from "./Form";
import BasicTable from "./Table";


export default function StudentManager() {
    const [studentList, setStudentList] = useState([]);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isValid, setIsValid] = useState(false);
    const [indexSelected, setIndexSelected] = useState(-1);
    const [messageCheck, setMessageCheck] = useState({ phoneCheck: '', emailCheck: '' })

    const handleClick = () => {
        if (isValid) {
            if (indexSelected === -1) {
                setStudentList([...studentList, formData]);
            } else {
                studentList.splice(indexSelected, 1, formData);
                setStudentList([...studentList]);
                setIndexSelected(-1);
            }
            setFormData({ name: '', phone: '', email: '' });
        }
    }

    const handleSelect = (index) => {
        let {name, phone, email} = studentList[index];
        setFormData({...formData, name, phone, email});
        setIndexSelected(index)
    }

    const handleChange = (e) => {
        let student = { ...formData, [e.target.name]: e.target.value };
        setFormData(student);
        handleCheckValid(e)
    }

    const handleCheckValid = (e) => {
        let input = {...formData, [e.target.name]: e.target.value}
        let {name, phone, email} = input;
        let patternPhone = /^(09|08)\d{8}$/;
        let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (e.target.name === 'phone') {
            let phoneCheckMessage = patternPhone.test(phone) ? '' : 'Số điện thoại phải bắt đầu bằng 09|08 và có 10 chữ số!';
            setMessageCheck({ ...messageCheck, phoneCheck: phoneCheckMessage});
        }
        if (e.target.name === 'email') {
            let emailCheckMessage = patternEmail.test(email) ? '' : 'Định dạng email không đúng!';
            setMessageCheck({ ...messageCheck, emailCheck: emailCheckMessage});
        }
        if (name && phone && email && patternPhone.test(phone) && patternEmail.test(email)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }


    const handleDelete = (index) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            studentList.splice(index, 1);
            setStudentList([...studentList]);
            setIndexSelected(-1);
        }
    }

    return (
        <>
            <Form form={formData} change={handleChange} click={handleClick} message ={{ phone: messageCheck.phoneCheck, email: messageCheck.emailCheck }} checkValid={!isValid} />
            <BasicTable rows={studentList} deleteClick={handleDelete} editClick={handleSelect} />
        </>
    );
}
