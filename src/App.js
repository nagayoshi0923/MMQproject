import React from 'react';
import Header from './components/Header';
import Login from './components/Login'; // ログインコンポーネントのインポート

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Login />  {/* ログインコンポーネントを表示する */}
                <h1>ようこそ！私たちの予約サイトへ</h1>
                {/* 他のコンテンツをここに追加 */}
            </main>
        </div>
    );
}

export default App;
