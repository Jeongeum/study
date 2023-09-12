import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-indigo-100/75 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={reactLogo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <br />
      {/* <button className="bg-green-50 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-100 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-200 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-300 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-400 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-500 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-600 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-700 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-800 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-900 text-white font-semibold m-1 p-2">
        button
      </button>
      <button className="bg-green-950 text-white font-semibold m-1 p-2">
        button
      </button> 
      <button className="bg-sky-500/100 text-white font-semibold m-1 p-2">
        button A
      </button>
      <button className="bg-sky-500/75 text-white font-semibold m-1 p-2">
        button B
      </button>
      <button className="bg-sky-500/50 text-white font-semibold m-1 p-2">
        button C
      </button>*/}
      {/* <button className="bg-sky-500/50 hover:bg-sky-500/100 border-none text-white font-semibold m-1 p-2">
        button hover
      </button> */}
      <button className="bg-sky-500/50 md:bg-green-500/100 border-none text-white font-semibold m-1 p-2">
        button mediaqeury
      </button>
      {/* <div
        className="w-52 h-40 bg-no-repeat bg-center bg-contain bg-scroll"
        style={{ backgroundImage: `url(${reactLogo})` }}
      >
        "우편물은 결코 멈추지 않으니까요. 계속 오고 오고, 결코 포기할 수
        없습니다. 가차없죠. 매일 점점 더 쌓이고 있습니다. 그리고 꺼내야 하지만
        더 많이 꺼내야 합니다." 그러면 계속해서 들어오죠. 그러다가 바코드
        리더기가 고장나고 출판사의 정보 교환소 날이 됩니다." - 새로운 남자
      </div> */}
    </>
  );
}

export default App;
