import { useEffect, useState } from "react";

const useOptions = () => {
  const [option4cols, setOption4cols] = useState(false);
  const [optionrows, setOptionrows] = useState(false);
  const [option2cols, setOption2cols] = useState(false);
  const [option3cols, setOption3cols] = useState(false);
  const [option5cols, setOption5cols] = useState(false);

  useEffect(() => {
    console.log("option 1:", option4cols);
    console.log("option 2:", option2cols);
    console.log("option 3:", option3cols);
    console.log("option 4:", option5cols);
  }, [option4cols, option2cols, option3cols, option5cols]);

  const handleClickOption4cols = () => {
    setOption4cols(true);
    setOption2cols(false);
    setOption3cols(false);
    setOption5cols(false);
    setOptionrows(false);
  };
  const handleClickOptionrows = () => {
    setOptionrows(true);
    setOption4cols(false);
    setOption2cols(false);
    setOption3cols(false);
    setOption5cols(false);
  };
  const handleClickOption2cols = () => {
    setOption2cols(true);
    setOption3cols(false);
    setOption4cols(false);
    setOption5cols(false);
    setOptionrows(false);
  };
  const handleClickOption3cols = () => {
    setOption3cols(true);
    setOption2cols(false);
    setOption4cols(false);
    setOption5cols(false);
    setOptionrows(false);
  };
  const handleClickOption5cols = () => {
    setOption5cols(true);
    setOption2cols(false);
    setOption4cols(false);
    setOption3cols(false);
    setOptionrows(false);
  };
  return {
    option4cols,
    optionrows,
    option2cols,
    option3cols,
    option5cols,
    handleClickOption4cols,
    handleClickOption2cols,
    handleClickOption3cols,
    handleClickOption5cols,
    handleClickOptionrows,
  };
};

export default useOptions;
