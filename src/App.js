import "./css/App.css";
function App() {
  //1
  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

  const positive = array.filter((num) => num >= 0);

  console.log(positive);

  //2
  const messages = [
    { message: "hello", error: true },
    { message: "javascript", error: false },
    { message: "expovision", error: true },
    { message: "react", error: true },
    { message: "angular", error: false },
    { message: "es6", error: false },
  ];

  const filteredMsgs = messages.filter((item) => {
    return item.error === false;
  });
  console.log(filteredMsgs);

  //3
  const words = ["экспо", "js", "react", "css", "angular", "vue", "html"];

  const newWords = words.map((word) => (word.length < 5 ? "*" : word));

  console.log(newWords);

  //4
  const sendMessage = (message) => {
    /*
     * тут какой-то большой код для отправки сообщения
     */
  };

  const half = (number) => {
    return number / 2;
  };

  const showConsole = () => {
    console.log("Экспо");
  };

  const concatWords = (first, second) => {
    return first + second;
  };

  //5
  function justText() {
    return "expo";
  }

  function logging(text) {
    console.log(text);
  }

  function add(x, y) {
    const z = 3;
    return z * x * y;
  }

  function onlyPositive(number) {
    if (number < 0) {
      return false;
    }
    return true;
  }
}

export default App;
