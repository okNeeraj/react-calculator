import {useState} from "react";
import './Calculator.css';

function Calculator() {
  // useEffect(() => {
  //   document.title = `Your result is ${result || 0}`;
  // });

  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState('');
  const ops = ['+', '-', '*', '/', '.'];

  const updateCalc = value => {
    // alert(`Value is ${value} and cals is ${calc.toString()}`);
    console.log(calc);

    if (
      ops.includes(value) &&
      (calc.toString() === '' || ops.includes(calc.toString().slice(-1)))
    ) {
      return ;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  }

  const delLastInput = () => {
    setCalc(calc.slice(0, -1).toString());
    setResult(calc.slice(0, -1).toString());
  }

  const calculate = () => {
    // alert(calc);
    if(calc.toString() !== '' && !ops.includes(calc.toString().slice(-1))) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc).toString());
      setCalc('');
    }
  }

  const clearCalc = () => {
    setCalc('');
    setResult('');
  }

  return (
    <div className="bg-gray-100 w-screen h-screen text-center">
      <div className=" py-10 flex justify-center items-center">
        <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
          <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
            <div className="text-gray-700">{calc}</div>
            <div className="text-black font-bold text-3xl">{result}</div>
          </div>
          <div className="w-auto m-1 h-auto mb-2">
            <div className="m-2 flex justify-between">
              <div className="bg-yellow-100 shadow-md rounded-2xl w-full h-12 text-yellow-600 font-medium flex justify-center items-center calc-btn"
                onClick={clearCalc} >
                C
              </div>
              <div className="flex w-full ml-3 justify-between">
                <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                  onClick={delLastInput}>
                  ⌫
                </div>
                <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center calc-btn"
                onClick={() => updateCalc('/')} >
                /
              </div>
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('7')} >
                7
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('8')} >
                8
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('9')} >
                9
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center calc-btn"
                onClick={() => updateCalc('*')}>
                x
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('4')} >
                4
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('5')} >
                5
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('6')} >
                6
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center calc-btn"
                onClick={() => updateCalc('-')}>
                -
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('1')} >
                1
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('2')}>
                2
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('3')}>
                3
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center calc-btn"
                onClick={() => updateCalc('+')} >
                +
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center calc-btn"
              onClick={() => updateCalc('0')} >
                0
              </div>
              <div className="flex w-full ml-3 justify-between">
                <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center calc-btn"
                onClick={() => updateCalc('.')} >
                  .
                </div>
                <div className="bg-green-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center calc-btn"
                  onClick={calculate}>
                  =
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="">Simple React Calculator <a target="_blank" rel="noreferrer" href="https://github.com/okNeeraj" className="text-blue-600">Neeraj</a></h3>
    </div>
  );
}

export default Calculator;
