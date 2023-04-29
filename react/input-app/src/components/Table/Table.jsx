import React, { useState } from "react";
import "./Table.css";

export const Table = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  // 전체 체크
  const onCheckBoxAll = (e) => {
    if (e.target.checked) {
      const checkedListArr = [];
      data.forEach((item) => checkedListArr.push(item.no));
      setCheckedItems(checkedListArr);
    } else {
      setCheckedItems([]);
    }
  };

  // 개별 체크
  // 체크된 아이템의 아이디를 배열 형태로 관리
  // 체크가 false이면 해당 item의 id가 아닌 것들만 담음.
  const onChangeCheckBox = (e, item) => {
    const isChecked = e.target.checked;
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return [...prevCheckedItems, item.no];
      } else {
        return prevCheckedItems.filter((no) => no !== item.no);
      }
    });
  };

  return (
    <div className="table-container">
      <ul>
        <li className="header">
          <div className="cell">
            <input type="checkbox" onChange={(e) => onCheckBoxAll(e)} />
          </div>
          <div className="cell">no</div>
          <div className="cell">제목</div>
          <div className="cell">게시자</div>
          <div className="cell">게시일자</div>
        </li>
        {data.map((item) => (
          <li
            key={item.no}
            className={checkedItems.includes(item.no) ? "select" : ""}
          >
            <div className="cell">
              <input
                type="checkbox"
                onChange={(e) => onChangeCheckBox(e, item)}
                checked={checkedItems.includes(item.no)}
              />
            </div>
            <div className="cell">{item.no}</div>
            <div className="cell">{item.title}</div>
            <div className="cell">{item.name}</div>
            <div className="cell">{item.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
