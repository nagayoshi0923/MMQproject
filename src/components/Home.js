import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // AuthContextからuseAuthをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート

function Home() {
  const auth = useAuth(); // useAuth()を使って認証情報を取得
  const navigate = useNavigate(); // useNavigateフックを使用してページ遷移

  // authがundefinedの場合は認証情報が取得できていないことを意味します
  if (!auth) {
    return (
      <div>
        <h1>ホームページ</h1>
        <p>認証情報を取得できませんでした。ログインし直してください。</p>
      </div>
    );
  }

  // authが正常に取得できた場合
  const { logout } = auth;

  const handleLogout = () => {
    logout(); // ログアウト処理
    navigate("/login"); // ログインページに遷移
  };

  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button> {/* ログアウトボタン */}
    </div>
  );
}

export default Home;