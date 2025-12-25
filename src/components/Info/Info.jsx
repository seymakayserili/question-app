import { useState } from "react";
import "./Info.css";
import Questions from "../Questions/Questions";

function Info() {
  // Bilgilendirme ekranının gösterilip gösterilmeyeceğini kontrol eder
  const [showInfo, setShowInfo] = useState(true);

  // Sorular ekranının gösterilip gösterilmeyeceğini kontrol eder
  const [showQuestions, setShowQuestions] = useState(false);

  // "Teste Başla" butonuna basıldığında info ekranını kapatıp
  // soru ekranını açar
  const handleStartClick = () => {
    setShowInfo(false);
    setShowQuestions(true);
  };

  return (
    <>
      {showInfo && (
        <div>
          <h3>KURALLAR</h3>
          <ul className="list-type">
            <li>Uygulama 10 sorudan oluşmaktadır.</li>
            <li>Her soru ekranda 30 saniye kalacaktır.</li>
            <li>İlk 4 saniye cevap şıkları ekranda görünmeyecektir.</li>
            <li>
              Cevap şıklarından biri tıklandıktan ya da 30 saniye tamamlandıktan
              sonra yeni soruya geçilecektir.
            </li>
            <li>Geçmiş sorulara dönülemeyecektir.</li>
            <li>
              Test bitiminde her soruya verilen yanıt ile doğru ve yanlış
              sayılarınızı görebilirsiniz.
            </li>
          </ul>
          <h3>BAŞARILAR!</h3>
          <div className="btn-div">
            <button className="btn" onClick={handleStartClick}>
              Teste Başla!
            </button>
          </div>
        </div>
      )}
      {showQuestions && <Questions />}
    </>
  );
}

export default Info;
