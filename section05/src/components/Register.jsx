import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="ko">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;

// refactor 이전
//   const [name, setName] = useState("이름");
//   const [birth, setBirth] = useState("");
//   const [country, setCountry] = useState("");
//   const [bio, setBio] = useState("");
// const onChangeName = (e) => {
//   setInput({
//     ...input,
//     name: e.target.value,
//   });
//   // setName(e.target.value);
// };
// const onChangeBirth = (e) => {
//   setInput({
//     ...input,
//     birth: e.target.value,
//   });
//   // setBirth(e.target.value);
// };
// const onChangeCountry = (e) => {
//   setInput({
//     ...input,
//     country: e.target.value,
//   });
//   // setCountry(e.target.value);
// };
// const onChangeBio = (e) => {
//   setInput({
//     ...input,
//     bio: e.target.value,
//   });
//   // setBio(e.target.value);
// };
