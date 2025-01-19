import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false); // State to track button click

  // useRef
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '~!@#$%^&*_(){}[]+=';
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);

    // Change button style on click
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false); // Revert style after 500ms
    }, 500);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-2 p-4 my-8"
        style={{ color: 'orange', backgroundColor: 'gray' }}
      >
        <h1 className="text-center" style={{ color: 'white' }}>
          Password Generator
        </h1>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-5 rounded text-center mx-2"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`outline-none px-3 py-0.5 shrink-0 ${
            isClicked ? 'bg-lightblue' : ''
          }`}
          style={{
            color: 'white',
            backgroundColor: isClicked ? '#ADD8E6' : 'blue', // Lighter blue on click
          }}
        >
          Copy
        </button>

        <div className="d-flex small gap-2 justify-content-center my-2">
          <div className="d-flex align-item-center gap-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="d-flex items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="d-flex items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
