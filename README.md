1. 本川越駅
   1. 自動販売機
   2. ホーム
   3. 券売機（西口向き）
   4. PePe
   5. ガスト（跡地）
2. クレアモール
   1. 吉野園（塾）
3. 大正浪漫夢通り
4. 熊野神社
   1. 鳥居
   2. 稽古場
   3. 絵馬
   4. 本殿横（北側）
5. 大正浪漫夢通りのシマノコーヒー大正館・いせや
6. 蔵造りの町並み
7. 時の鐘
8. 菓子屋横丁（いも恋）
9. 高沢橋・六塚稲荷神社
10. 濯紫公園
11. 東明寺公園
12. 田谷堰
13. 氷川橋
14. 氷川神社

# Team Blog Hub

![Demo](https://user-images.githubusercontent.com/34590683/96832331-8c289400-1479-11eb-9466-f24d30860a24.png)

企業/チームのためのブログ・スターターです。Fork してご自由にお使いください。

ブログの RSS の URL を登録することで、チームメンバーの投稿を一覧にまとめて表示します。Zenn、Qiita、Medium、note、はてなブログなど、RSS フィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。

詳しくは下記の記事をご覧ください。

[チーム個々人のテックブログを RSS で集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

## Demo

https://team-blog-hub.vercel.app

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールや RSS の登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

その他、ご自由にコードを書き換えてください。

## Deployment

Vercel や Netlify にデプロイすることを推奨します。`yarn build`を実行することで、RSS からの投稿データの取得とサイトのビルドが行われます。1 日に 1 回などの頻度で自動デプロイするのが良いかもしれません。

## Licence

MIT
