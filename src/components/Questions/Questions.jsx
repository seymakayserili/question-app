import React, { useState, useEffect, useCallback } from "react";
import "./Questions.css";
import questions from "../../assets/questions";

function Questions() {
  // Aktif soru index'i
  const [index, setIndex] = useState(0);

  // Gösterilen soru objesi
  const [question, setQuestion] = useState(questions[index]);

  // Cevap kilidi (bir soru için sadece bir kez cevap verilmesini sağlar)
  const [lock, setLock] = useState(false);

  // Şıkların gecikmeli gösterimi için kontrol
  const [showOptions, setShowOptions] = useState(false);

  // Geri sayım süresi
  const [seconds, setSeconds] = useState(30);

  // Doğru ve yanlış sayıları
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  // Kullanıcının verdiği cevapları tutar
  const [userResponses, setUserResponses] = useState([]);

  // Test bitince sonuç ekranını gösterir
  const [showResults, setShowResults] = useState(false);

  // Bir sonraki soruya geçer, test bittiyse sonuç ekranını açar
  const goToNextQuestion = useCallback(() => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setQuestion(questions[index + 1]);
      setLock(false);
      setShowOptions(false);
      setSeconds(30);
    } else {
      setShowResults(true);
    }
  }, [index]);

  useEffect(() => {
    // 30 saniye sonunda sayaç sıfırlama işlemi
    const interval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(30);
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    // 4 saniye sonra seçenekleri gösterme işlemi
    const timer = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextQuestion();
    }, 30000);

    return () => clearTimeout(timer);
  }, [lock, index, goToNextQuestion]);

  const checkAnswer = (e, ans) => {
    // kullanıcının verdiği cevabı kontrol etme işlemi
    if (!lock) {
      let response = { answer: ans, isCorrect: false };
      if (question.answer === ans) {
        e.target.classList.add("correct");
        response.isCorrect = true;
        setCorrectCount(correctCount + 1);
      } else {
        e.target.classList.add("wrong");
        const correctIndex = question.options.findIndex(
          (option) => option === question.answer
        );
        const correctElement =
          e.currentTarget.parentElement.childNodes[correctIndex];
        correctElement.classList.add("correct");
        setWrongCount(wrongCount + 1);
      }
      setUserResponses([
        ...userResponses,
        { ...response, selectedOption: ans },
      ]);
      setLock(true);
      setTimeout(goToNextQuestion, 1000);
    }
  };

  return (
    <div className="content">
      <h1 className="header-name">Question App</h1>
      <hr />
      <div className="container">
        {!showResults ? (
          <>
            <img key={question.media} src={question.media} alt="Resim yok" />
            <h2 className="ques">
              {index + 1}. {question.question}
            </h2>
            <ul>
              {showOptions &&
                question.options.map((option, idx) => (
                  <li key={idx} onClick={(e) => checkAnswer(e, option)}>
                    {option}
                  </li>
                ))}
            </ul>
            <div className="index">
              <strong>{index + 1}</strong> / {questions.length} soru
            </div>
            <div
              className="timer"
              style={{ color: seconds <= 10 ? "red" : "#686868" }}
            >
              Bu soruya cevap vermek için {seconds} saniyen kaldı.
            </div>
          </>
        ) : (
          <div className="results">
            <h2>Test Sonuçlarınız</h2>
            <p>Doğru Cevaplar: {correctCount}</p>
            <p>Yanlış Cevaplar: {wrongCount}</p>
            <p>Boş Cevaplar: {questions.length - userResponses.length}</p>
            <h3>Cevaplarınız:</h3>
            <ul className="results-list">
              {userResponses.map((res, i) => (
                <li key={i} className={res.isCorrect ? "correct" : "wrong"}>
                  {i + 1}. {res.selectedOption}{" "}
                  {res.isCorrect ? "(Doğru)" : "(Yanlış)"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
