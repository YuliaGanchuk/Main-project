import style from "./pengination.module.scss";

const Pengination = (props) => {
  const { count, currentPage, setNumber } = props;
  const CurrentNumber = (event) => {
    const targetValue = event.target.innerHTML;
    if (targetValue !== " ..." && targetValue !== "... ") {
      setNumber(+targetValue);
    } else if (targetValue === " ...") {
      if (currentPage === 1) {
        setNumber(currentPage + 3);
      } else {
        setNumber(currentPage + 2);
      }
    } else if (targetValue === "... ") {
      if (currentPage === count) {
        setNumber(currentPage - 3);
      } else {
        setNumber(currentPage - 2);
      }
    }
  };
  const arr = Array.from({ length: count }, (a, k) => k + 1);
  let arr2 = [];
  if (count < 7) {
    arr2 = arr.slice(0, count);
  } else if (count > 6) {
    if (currentPage < 3) {
      arr2 = arr.slice(0, 3).concat([" ...", count]);
    } else if (currentPage === 3) {
      arr2 = arr.slice(0, 4).concat([" ...", count]);
    } else if (currentPage > 3 && currentPage < count - 2) {
      arr2 = [1, "... "]
        .concat(arr.slice(currentPage - 2, currentPage + 1))
        .concat([" ...", count]);
    } else if (currentPage > 3 && currentPage === count - 2) {
      arr2 = [1, "... "].concat(arr.slice(currentPage - 2, count));
    } else if (currentPage > 3 && currentPage === count - 1) {
      arr2 = [1, "... "].concat(arr.slice(currentPage - 2, count));
    } else if (currentPage > 3 && currentPage === count) {
      arr2 = [1, "... "].concat(arr.slice(currentPage - 3, count));
    }
  }
  return (
    <ul className={style.list}>
      {arr2.map((count, index) => {
        return (
          <li
            key={index}
            className={currentPage === count && style.active}
            id={count}
            onClick={CurrentNumber}
          >
            {count}
          </li>
        );
      })}
    </ul>
  );
};
export default Pengination;
