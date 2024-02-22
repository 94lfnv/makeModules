import "./App.css";
import MyModal from "./components/modal/MyModal";

function App() {
  // 모달 훅 만들기
  // 형태와 기능이 다른 모달을 만들 때 어떻게 해야 할지 생각해보기
  // 형태 따로, 기능 따로 어떻게 hook을 나누면 좋을지 생각해보기

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <MyModal />
      </div>
    </>
  );
}

export default App;
