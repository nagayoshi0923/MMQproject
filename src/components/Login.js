import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // AuthContextからuseAuthをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート

function Login() {
  const { login } = useAuth(); // useAuth()からlogin関数を取得
  const navigate = useNavigate(); // useNavigateフックを使用してページ遷移
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ここで認証処理を行う
    if (username === '' || password === '') {
      alert('ユーザー名とパスワードを入力してください');
      return;
    }

    // ログイン成功処理
    login(); // 認証状態を更新
    navigate('/'); // ホームページに遷移
  };

  return (
    <div>
      <h2>ログインページ</h2>
      <div>
        <label htmlFor="username">ユーザー名:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}

export default Login;