import React, { useState } from 'react';
import { supabase } from '../supabase'; // supabase.jsをインポートして使用する

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('ログインボタンが押されました'); // ログインボタンが押されたことを確認するためのログ

    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('ログインに失敗しました:', error.message); // エラー時のログ出力
      } else {
        console.log('ログイン成功:', data); // ログイン成功時のログ出力
        // 成功したら他のページにリダイレクトする（例: ダッシュボード）
      }
    } catch (error) {
      console.error('ログイン中にエラーが発生しました:', error); // 例外が発生した際のログ出力と思う
    }
  };

  return (
    <div>
      <h2>ログインページ</h2>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}

export default Login;
