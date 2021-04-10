import { Fragment } from "react";
import "./App.css";
import { data } from "./data";
import useOptions from "./hooks/useOptions";

function App() {
  const {
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
  } = useOptions();

  return (
    <div className="App">
      <div className="header-app">
        <h1>Css Grid & Flex Power</h1>
        <b
          className={option2cols ? "selected-color" : ""}
          onClick={handleClickOption2cols}
        >
          2 cols
        </b>
        <b
          className={option3cols ? "selected-color" : ""}
          onClick={handleClickOption3cols}
        >
          3 cols
        </b>
        <b
          className={option4cols ? "selected-color" : ""}
          onClick={handleClickOption4cols}
        >
          4 cols
        </b>
        <b
          className={option5cols ? "selected-color" : ""}
          onClick={handleClickOption5cols}
        >
          5 cols
        </b>
        <b
          className={optionrows ? "selected-color" : ""}
          onClick={handleClickOptionrows}
        >
          rows
        </b>
      </div>
      <div
        className={
          option4cols
            ? "card-container card-container-option1 fade-in-bck"
            : option2cols
            ? "card-container card-container-option2 fade-in-bck"
            : option3cols
            ? " card-container card-container-option3 fade-in-bck"
            : option5cols
            ? "card-container card-container-option4 fade-in-bck"
            : optionrows
            ? "card-container card-container-4rows fade-in-bck"
            : "card-container fade-in-bck"
        }
      >
        {data.map((res) => (
          <div
            key={res.id}
            className={
              optionrows
                ? "card card-container-option3 fade-in-bck "
                : option2cols
                ? " card card-container-option2 fade-in-bck "
                : "card fade-in-bck "
            }
          >
            <div className="header-card">
              <h1>{res.title}</h1>
              <sub>{res.subTitle}</sub>
            </div>
            {option5cols ? (
              <span className="reversed">
                <div className="center-card">
                  <p>{res.content}</p>
                </div>
                <div className="picture-container">
                  <img src={res.img} alt="landscape" />
                </div>
              </span>
            ) : option3cols ? (
              <span className="inverted">
                <div className="center-card">
                  <p>{res.content}</p>
                </div>
                <div className="picture-container">
                  <img src={res.img} alt="landscape" />
                </div>
              </span>
            ) : (
              <Fragment>
                <div className="center-card">
                  <p>{res.content}</p>
                </div>
                <div className="picture-container">
                  <img src={res.img} alt="landscape" />
                </div>
              </Fragment>
            )}
            <br />
            <div className="footer-card">
              <p style={{ fontSize: 12 }}>auteur : {res.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
