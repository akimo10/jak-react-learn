import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0); //初期値
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //第二引数が無ければ、毎回実行される。
  useEffect(() => {
    console.log("useEffect");
  });
  //第二引数が空配列の場合、最初だけ実行される。
  useEffect(() => {
    console.log("useEffect!!!!");
  }, []);
  //第二引数に設定されている変数が存在する場合、変数が変更されたときに実行される。
  useEffect(() => {
    console.log("useEffect???");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true); //フラグがfalseの場合のみ処理
    } else {
      faceShowFlag && setFaceShowFlag(false); //フラグがtrueの場合のみ処理
    }
  }, [num]);

  //Too many re-renders. React limits the number of renders to prevent an infinite loop.
  //下記コメントアウト記述だと再レンダリングがループしてしまう。。。
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  return (
    //h1タグ、pタグをレンダリングしたいだけなのにdivタグは不要タグなので、下記修正
    // <React.Fragment>
    //   <h1>こんにちは</h1>
    //   <p>お元気ですか？</p>
    // </React.Fragment>
    // React.Fragmentは省略形で記述できる
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      <ColorfulMessage color="green">お元気ですよね？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

//他のファイルでも利用するように明示する。
export default App;
