export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  category: 'sns' | 'yui' | 'yuto' | 'portal' | 'other';
}

export const projects: Project[] = [
  // SNS公式アカウント
  {
    id: "sns-x",
    name: "X (Twitter)",
    url: "https://x.com/YUI_YUTO_TH_JA",
    description: "YUI & YUTOの公式X（旧Twitter）アカウント。日々のアップデートや最新情報を発信。",
    category: "sns"
  },
  {
    id: "sns-youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@yuiyuto",
    description: "公式YouTubeチャンネル。日本語とタイ語の学習コンテンツやゲームプレイ動画を投稿中。",
    category: "sns"
  },
  {
    id: "sns-instagram",
    name: "Instagram",
    url: "https://www.instagram.com/jlpt_thai_gal/",
    description: "公式Instagram。タイ人向けの日本語学習ビジュアルコンテンツを投稿。",
    category: "sns"
  },
  {
    id: "sns-facebook-group",
    name: "Facebook Group",
    url: "https://www.facebook.com/groups/yuiyuto",
    description: "日本語・タイ語学習者のための公式コミュニティ・Facebookグループ。",
    category: "sns"
  },
  {
    id: "sns-tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@gal_novel_th_jp",
    description: "公式TikTok。ギャルと学ぶ日本語ショート動画などを配信中。",
    category: "sns"
  },
  {
    id: "sns-threads",
    name: "Threads",
    url: "https://www.threads.com/@jlpt_thai_gal",
    description: "公式Threadsアカウント。タイムリーな対話とTipsの発信。",
    category: "sns"
  },
  {
    id: "sns-rakuten-room",
    name: "楽天ルーム",
    url: "https://room.rakuten.co.jp/jack555/items",
    description: "おすすめグッズや便利アイテムをまとめた楽天ルーム。",
    category: "sns"
  },
  {
    id: "sns-note-yui",
    name: "note ゆい姉さん",
    url: "https://note.com/yui_nee_san",
    description: "ゆい姉さんによる執筆・エッセイや情報発信を行うnoteアカウント。",
    category: "sns"
  },
  {
    id: "sns-note-psychology",
    name: "note 心理学の武器庫",
    url: "https://note.com/mind_weapons",
    description: "日常で使える心理学テクニックやマインドハックを解説するnoteマガジン。",
    category: "sns"
  },

  // 姉妹サイト（ゆいシリーズ）
  {
    id: "yui-jlpt",
    name: "ゆいとJLPT対策",
    url: "https://jlpt.yui-yuto.com/",
    description: "JLPT合格を目指す無料のインタラクティブ日本語学習ゲーム。",
    category: "yui"
  },
  {
    id: "yui-maid",
    name: "ゆいとメイド喫茶",
    url: "https://th-maid-gyaru-novel.yui-yuto.com/",
    description: "メイド喫茶で働きながら楽しく日本語を学ぶ恋愛ノベルゲーム。",
    category: "yui"
  },
  {
    id: "yui-teacher",
    name: "ゆい先生と勉強",
    url: "https://th-gyaru-novel.yui-yuto.com/",
    description: "教育実習生のゆい先生と一緒に日本語を学んでいくストーリー仕立ての学習ゲーム。",
    category: "yui"
  },
  {
    id: "yui-school-fes",
    name: "ゆいと学園祭",
    url: "https://th-school-fes.yui-yuto.com/",
    description: "日本の学園祭を追体験しながら日常会話やイベント単語を習得するゲーム。",
    category: "yui"
  },
  {
    id: "yui-tokyo-tour",
    name: "ゆいと東京観光",
    url: "https://th-tokyo-gyaru.yui-yuto.com/",
    description: "東京の観光地をバーチャルで巡りながら実践的な日本語会話を学ぶシミュレーション。",
    category: "yui"
  },

  // 姉妹サイト（ゆうとシリーズ）
  {
    id: "yuto-study",
    name: "ゆうとと勉強",
    url: "https://th-intern-romance.yui-yuto.com/",
    description: "インターンのゆうと一緒にオフィス会話やビジネス・日常日本語を学ぶストーリー学習。",
    category: "yuto"
  },
  {
    id: "yuto-long-distance",
    name: "ゆうとと遠距離恋愛",
    url: "https://th-distance-love.yui-yuto.com/",
    description: "日本へ帰国したゆうととの恋愛模様を描く、遠距離恋愛日本語ノベルゲーム。",
    category: "yuto"
  },
  {
    id: "yuto-tokyo-date",
    name: "ゆうとと東京デート",
    url: "https://th-tokyo-date.yui-yuto.com/",
    description: "東京のデートスポットを舞台に、シチュエーションに応じた会話やマナーを学ぶゲーム。",
    category: "yuto"
  },

  // ポータル・学習・その他
  {
    id: "portal-home",
    name: "YUI & YUTO 本家",
    url: "https://yui-yuto.com/",
    description: "すべての日本語学習プロジェクトを統括する、総合ポータルサイト。",
    category: "portal"
  },
  {
    id: "portal-nihongo-quest",
    name: "日本語クエスト",
    url: "https://th-nihongo-quest.yui-yuto.com/",
    description: "本格RPG形式で敵を倒しながら、楽しく語彙を増やすことができる日本語学習ゲーム。",
    category: "portal"
  },
  {
    id: "portal-typing",
    name: "タイピング日本語",
    url: "https://nihongo-typing-th.yui-yuto.com/",
    description: "タイ語話者向けの日本語タイピング練習プラットフォーム。キー配列と語彙を同時習得。",
    category: "portal"
  },
  {
    id: "portal-mimi-tap",
    name: "ミミとタップ学習",
    url: "https://th-kawaii-mimi-tap.yui-yuto.com/",
    description: "イラストをタップして音声とビジュアルで直感的に学ぶ、初心者向け日本語ゲーム。",
    category: "portal"
  },
  {
    id: "portal-vocabulary",
    name: "単語特化サイト",
    url: "https://th-vocabulary-jp.yui-yuto.com/",
    description: "難関レベルの単語や熟語に焦点を当て、効率的に記憶に定着させる単語特化型サイト。",
    category: "portal"
  },
  {
    id: "portal-nihongo-land",
    name: "ニホンゴランド",
    url: "https://nihongo-land.yui-yuto.com",
    description: "直感的に楽しめるクイズやミニゲームが満載の日本語パーク。",
    category: "portal"
  },
  {
    id: "portal-thaigo",
    name: "日本人向けタイ語学習サイト",
    url: "https://thaigo.yui-yuto.com/",
    description: "日本人がタイ語の発音や基本文法、日常会話を効率的に学習できる専用サイト。",
    category: "portal"
  },

  // その他 (自動生成・トレンド・ユーティリティ)
  {
    id: "other-trend",
    name: "トレンド情報サイト",
    url: "https://trend-delta.vercel.app/",
    description: "最新のニュースや急上昇ワードを自動収集して24時間更新するトレンドメディア。",
    category: "other"
  },
  {
    id: "other-yui-love",
    name: "ゆい姉さんの恋愛相談",
    url: "https://yui-love.vercel.app/",
    description: "お悩みにゆい姉さんが回答する形で、毎日自動更新される恋愛相談キュレーションサイト。",
    category: "other"
  },
  {
    id: "other-neo-uranai",
    name: "原宿ネオ占い",
    url: "https://harajuku-neo-uranai.vercel.app/",
    description: "毎日自動的に占いの記事と運勢画像を生成して更新する、新感覚のネオ占いメディア。",
    category: "other"
  },
  {
    id: "other-monster-garden",
    name: "増殖の庭 (Monster Garden)",
    url: "https://monster-garden.vercel.app/",
    description: "モンスターたちが自分の勢力を広げるために争う、自動シミュレーションゲーム。",
    category: "other"
  },
  {
    id: "other-nurinuri",
    name: "ぬりぬりぬりえ",
    url: "https://nurinuri-nurie.vercel.app/",
    description: "毎日AIが自動でぬりえ線画と紹介記事を更新するイラスト塗り絵サイト。",
    category: "other"
  },
  {
    id: "other-aetheria",
    name: "Aetheria",
    url: "https://wall-eosin.vercel.app/",
    description: "毎日自動で幻想的なオリジナル壁紙画像と記事を生成・更新するアートギャラリー。",
    category: "other"
  },
  {
    id: "other-recipe",
    name: "あくまれしぴ",
    url: "https://akuma-recipe.vercel.app/",
    description: "美味しすぎて悪魔的な魅力を持つ斬新な料理レシピを、画像付きで毎日自動更新するグルメサイト。",
    category: "other"
  },
  {
    id: "other-nihongo-kappa",
    name: "NIHON-GO!!",
    url: "https://nihon-go-kappa.vercel.app/",
    description: "英語圏の日本語学習者をターゲットに、分かりやすい表現で毎日レッスン記事を自動更新。",
    category: "other"
  },
  {
    id: "other-neon-noir",
    name: "NEON NOIR",
    url: "https://neon-noir-magazine.vercel.app/",
    description: "サイバーパンク調のダークな短編ミステリー小説を、ビジュアル付きで毎日自動執筆・更新。",
    category: "other"
  },
  {
    id: "other-monorepo",
    name: "モノレポ！",
    url: "https://monorepo-go.vercel.app/",
    description: "厳選されたAmazonガジェットやおすすめ商品のレビュー記事を画像付きで自動投稿する物欲刺激メディア。",
    category: "other"
  },
  {
    id: "other-nihon-note",
    name: "NIHON-NOTE",
    url: "https://thai-note.vercel.app/",
    description: "タイ人向けの1日1ページ自動更新される日本語ノート。",
    category: "other"
  },
  {
    id: "other-monorepo-hatena",
    name: "ものレポ！（はてなブログ版）",
    url: "https://mono-repo.hatenablog.jp/",
    description: "ものレポ！のはてなブログ版でアマゾンのおすすめ商品レビューを3時間ごとに自動更新。",
    category: "other"
  }
];

