# バレナイ（Barenai）

「Barenai」は、**選んだドメインの履歴だけを自動で削除**できるChrome拡張機能です。
一方で残しておきたいページは事前に保存することで、**自分にとって都合の良い履歴管理**ができます。

---

## 主な機能

- ✅ 現在のタブのURLとタイトルを保存（手動）
- ✅ 保存済みURLの一覧表示
- ✅ 保存済みURLの個別削除・全削除
- ✅ 保存済みURLの全コピー（タイトル＋URL形式）
- ✅ URLを入力すると任意のドメインを登録（自動で整形される）
- ✅ 登録済みドメインの一覧表示・個別削除・全削除
- ✅ 表示の切り替え（URLリスト / ドメインリスト）
- ✅ `chrome.history.onVisited` によって、該当ページを閉じた時に自動で履歴から削除
- ✅ 簡易的なメッセージ表示（保存完了・バリデーション表示）

---

## 使い方

1. このリポジトリを `clone` または ZIPでダウンロード
2. Chromeの `拡張機能` 管理画面（`chrome://extensions/`）を開く
3. 右上の「デベロッパーモード」をONに
4. 「パッケージ化されていない拡張機能を読み込む」をクリック

---

## コンセプト

- 見られたくない履歴だけを自動で消す
- それでも保存しておきたいURLは履歴に見つからない状態で残す

---

## 使用ライブラリ

- [`psl`](https://github.com/lupomontero/psl) - ドメインの正規化（サブドメインを除去）

---

## ライセンス

本プロジェクトは [MIT License](./LICENSE) のもとで公開されています。
