const ENTRIES = [
  {
    "file": "2026-07-07_102155.png",
    "tags": [
      "Claude Desktop"
    ],
    "title": "ダッシュボード概要画面",
    "caption": "Claude Desktopのダッシュボードでセッション数やメッセージ数、トークン使用量などの利用状況を確認している。"
  },
  {
    "file": "2026-07-07_102220.png",
    "tags": [
      "Claude Code"
    ],
    "title": "READMEで自己紹介を生成",
    "caption": "「自己紹介のREADME.mdを作って」と依頼し、名前・好きなもの3つ・学びたいことを箇条書きにしたファイルが生成された。"
  },
  {
    "file": "2026-07-07_110936.png",
    "tags": [
      "Claude Code"
    ],
    "title": "2つのセッションを並べて表示",
    "caption": "天気予報用の空ファイルweather.mdを作ったセッションと、自己紹介README.mdを作ったセッションを左右に並べている。"
  },
  {
    "file": "2026-07-07_112115.png",
    "tags": [
      "Claude Code"
    ],
    "title": "メモアプリの実装計画とプレビュー",
    "caption": "「メモアプリを作る」という要望からプランを作成し、index.html・style.css・app.jsを実装してライブプレビューを表示している。"
  },
  {
    "file": "2026-07-07_114129.png",
    "tags": [
      "Claude Code"
    ],
    "title": "サイドチャットで質問",
    "caption": "メモアプリのセッション中に、メインの会話へ影響を与えず質問できるサイドチャット機能を開いた状態。"
  },
  {
    "file": "2026-07-07_114634.png",
    "tags": [
      "Claude Code"
    ],
    "title": "権限モードの切り替えメニュー",
    "caption": "操作の許可方式を手動承認・編集を承認・プランモード・自動モードから選ぶメニューをメモアプリのセッションで開いている。"
  },
  {
    "file": "2026-07-07_120325.png",
    "tags": [
      "MCP/Plugin",
      "Claude Desktop"
    ],
    "title": "プラグインディレクトリを閲覧",
    "caption": "Anthropic製プラグインのディレクトリで、Productivity・Sales・Finance・Data・Legalなどのカテゴリ一覧を閲覧している。"
  },
  {
    "file": "2026-07-07_120759.png",
    "tags": [
      "MCP/Plugin",
      "Claude Desktop"
    ],
    "title": "プラグイン検索で該当なし",
    "caption": "プラグインディレクトリで「commit」を検索したが、Anthropicソース内には一致するプラグインが見つからなかった。"
  },
  {
    "file": "2026-07-07_120937.png",
    "tags": [
      "Claude Code",
      "MCP/Plugin"
    ],
    "title": "/pluginコマンドが未対応",
    "caption": "Codeのチャットで/plugin installコマンドを試したが「この環境では利用できません」というエラーが返された。"
  },
  {
    "file": "2026-07-07_121445.png",
    "tags": [
      "MCP/Plugin",
      "Claude Desktop"
    ],
    "title": "プラグインソースを追加選択",
    "caption": "Anthropicが厳選するプラグインソース一覧で、Knowledge Workが追加済みで他のソースも追加できる画面。"
  },
  {
    "file": "2026-07-07_122806.png",
    "tags": [
      "Claude Code"
    ],
    "title": "claudeコマンド未インストール",
    "caption": "PowerShellでclaudeコマンドを実行したが未インストールのため認識されないというエラーが表示された。"
  },
  {
    "file": "2026-07-07_123016.png",
    "tags": [
      "Claude Code"
    ],
    "title": "Claude Codeをインストール",
    "caption": "irm https://claude.ai/install.ps1 | iexを実行し、Claude Code v2.1.202のインストールに成功したログが表示された。"
  },
  {
    "file": "2026-07-07_123521.png",
    "tags": [
      "Claude Code"
    ],
    "title": "初回起動時のテーマ選択",
    "caption": "Claude Code初回起動時にダークモードなどのテキストスタイルを選ぶ画面で、コード差分のプレビューも確認できる。"
  },
  {
    "file": "2026-07-07_124701.png",
    "tags": [
      "Claude Code"
    ],
    "title": "認証コードの取得画面",
    "caption": "Claude Code CLIのログイン認証のため、ブラウザに表示された認証コードをターミナルに貼り付ける準備をしている。"
  },
  {
    "file": "2026-07-07_124954.png",
    "tags": [
      "Claude Code"
    ],
    "title": "CLIのウェルカム画面",
    "caption": "ログイン後、ターミナルに「Welcome back Miho!」の挨拶とFable 5の案内が表示された起動直後の画面。"
  },
  {
    "file": "2026-07-07_125133.png",
    "tags": [
      "Claude Code",
      "MCP/Plugin"
    ],
    "title": "commit-commandsの詳細",
    "caption": "Claude Code CLIのDiscover画面でcommit-commandsプラグインの説明とインストールスコープの選択肢を表示している。"
  },
  {
    "file": "2026-07-07_125309.png",
    "tags": [
      "Claude Code",
      "MCP/Plugin"
    ],
    "title": "/plugin installを実行",
    "caption": "ターミナルで/plugin install commit-commands@claude-plugins-officialを実行しインストール完了と表示された。"
  },
  {
    "file": "2026-07-07_125408.png",
    "tags": [
      "Claude Code",
      "MCP/Plugin"
    ],
    "title": "プラグインをリロード",
    "caption": "/reload-pluginsを実行し、1プラグイン・3スキル・6エージェントが読み込まれたことを確認している。"
  },
  {
    "file": "2026-07-07_125628.png",
    "tags": [
      "Claude Desktop",
      "MCP/Plugin"
    ],
    "title": "インストール済みプラグイン一覧",
    "caption": "設定画面でclaude-test2プロジェクトにインストール済みのProductivityとCommit commandsプラグインを確認している。"
  },
  {
    "file": "2026-07-07_130813.png",
    "tags": [
      "Claude Code",
      "MCP/Plugin"
    ],
    "title": "commitコマンドの候補表示",
    "caption": "チャット入力欄に/commit-commands:commitと入力し、gitコミットを作成するスラッシュコマンドの候補が表示されている。"
  },
  {
    "file": "2026-07-07_131045.png",
    "tags": [
      "Claude Desktop",
      "MCP/Plugin"
    ],
    "title": "プラグインのスキル一覧",
    "caption": "設定画面でCommit commandsプラグインが提供する/clean_gone、/commit、/commit-push-prの一覧を確認している。"
  },
  {
    "file": "2026-07-07_131353.png",
    "tags": [
      "Claude Desktop",
      "MCP/Plugin"
    ],
    "title": "プラグイン一覧を再確認",
    "caption": "claude-test2プロジェクトのプラグイン管理画面でProductivityとCommit commandsが有効なことを再確認している。"
  },
  {
    "file": "2026-07-07_152541.png",
    "tags": [
      "Subagent",
      "コードレビュー"
    ],
    "title": "code-reviewerでレビュー実行",
    "caption": "code-reviewer Subagentでsample.pyをレビューし、コマンドインジェクションやパスワードのハードコードなどCritical項目を検出した。"
  },
  {
    "file": "2026-07-07_155733.png",
    "tags": [
      "コードレビュー",
      "Subagent"
    ],
    "title": "レビュー結果をArtifact化",
    "caption": "code-reviewer Subagentのレビュー結果を重大・注意・提案の3段階で色分けしたArtifactレポートとしてまとめた。"
  },
  {
    "file": "2026-07-07_162111.png",
    "tags": [
      "Subagent"
    ],
    "title": "複数Subagent連携の課題",
    "caption": "学習教材のページで、ドキュメント生成やテスト実行など複数のSubagentを役割分担させ連携させる上級チャレンジを確認している。"
  },
  {
    "file": "2026-07-07_171030.png",
    "tags": [
      "Subagent"
    ],
    "title": "3つのSubagentを並行実行",
    "caption": "Pythonスクリプト作成後、doc-generator・code-reviewer・test-runnerの3つのSubagentを並行して起動し作業を進めている。"
  },
  {
    "file": "2026-07-07_171048.png",
    "tags": [
      "Subagent",
      "コードレビュー"
    ],
    "title": "3つのSubagent実行結果",
    "caption": "doc-generatorがdocstringを追加し、code-reviewerが重大な問題なしと判定、test-runnerが5件のテスト全てPASSしたことを確認した。"
  },
  {
    "file": "2026-07-11_130854.png",
    "tags": [
      "Skill"
    ],
    "title": "文字数を4パターンで計測",
    "caption": "character-counterスキルでSKILL.mdの文字数を、改行やスペースの有無別に4パターン計測し結果を表で表示している。"
  },
  {
    "file": "2026-07-11_131419.png",
    "tags": [
      "Skill"
    ],
    "title": "スキルのエンコーディング対応検証",
    "caption": "character-counterスキルのSKILL.mdとスクリプトを改良し、UTF-8とShift-JISの自動判定やエラー処理の動作を検証した。"
  },
  {
    "file": "2026-07-11_133825.png",
    "tags": [
      "Skill"
    ],
    "title": "議事録整形スキルを新規作成",
    "caption": "日時・参加者・議題・決定事項のテンプレートを持つ議事録整形スキルの作成を依頼し、出力形式と保存先の確認に回答している。"
  },
  {
    "file": "2026-07-11_133840.png",
    "tags": [
      "Skill"
    ],
    "title": "議事録整形スキルの動作確認",
    "caption": "雑多な会議メモを議事録整形スキルに通し、日時・参加者・議題を含む整形済みの議事録が生成されたことを確認している。"
  },
  {
    "file": "2026-07-11_133917.png",
    "tags": [
      "Skill"
    ],
    "title": "整形した議事録を保存",
    "caption": "決定事項とネクストアクションを含む議事録を20260711_議事録.mdとして保存し、一時ファイルを片付けて動作確認を完了した。"
  },
  {
    "file": "2026-07-11_134051.png",
    "tags": [
      "Claude Code",
      "Skill"
    ],
    "title": "議事録整形Skillの保存確認",
    "caption": "meeting-minutes-formatterスキルで議事録を整形し、20260711_議事録.mdとして保存する様子。"
  },
  {
    "file": "2026-07-11_142553.png",
    "tags": [
      "Subagent",
      "Skill"
    ],
    "title": "SubAgentのBashツール不足を修正",
    "caption": "seo-blog-writerサブエージェントがBashツール未設定でcount_chars.pyを実行できなかった問題を発見し修正した。"
  },
  {
    "file": "2026-07-11_152826.png",
    "tags": [
      "Subagent"
    ],
    "title": "seo-blog-writerに記事執筆を依頼",
    "caption": "seo-blog-writerサブエージェントにClaude CodeのSubAgents等をテーマにした5000文字記事の執筆を依頼した。"
  },
  {
    "file": "2026-07-11_152852.png",
    "tags": [
      "Subagent"
    ],
    "title": "5000文字ブログ記事が完成",
    "caption": "サブエージェントが記事概要と文字数(4,925文字)を報告し、Bashツール追加で計測方法も修正済みと説明した。"
  },
  {
    "file": "2026-07-11_153640.png",
    "tags": [
      "Subagent",
      "Skill"
    ],
    "title": "SubAgentのSkill使い分け一覧",
    "caption": "seo-blog-writerが読者分析・競合調査・文字数計測の各段階で3つのSkillを使い分けた過程を表で確認した。"
  },
  {
    "file": "2026-07-11_153659.png",
    "tags": [
      "Subagent",
      "Skill"
    ],
    "title": "SubAgent・Skillの使い分けまとめ",
    "caption": "サブエージェント・スキル・コマンドの役割の違いをまとめ、文字数レポートを提示しSkill利用箇所を質問した。"
  },
  {
    "file": "2026-07-11_153751.png",
    "tags": [
      "Subagent",
      "Skill"
    ],
    "title": "新規Skill2つで記事を再執筆",
    "caption": "新たに作成したreader-persona-analyzerとcompetitor-heading-analyzerを使わせ記事のタイトル案を生成した。"
  },
  {
    "file": "2026-07-11_161329.png",
    "tags": [
      "Claude Code",
      "Skill"
    ],
    "title": "file-summarizerでCLAUDE.md要約",
    "caption": "カスタムコマンド/file-summarizerでCLAUDE.mdを読み取り、サブエージェント4種・スキル4種の構成を要約した。"
  },
  {
    "file": "2026-07-11_163642.png",
    "tags": [
      "Claude Code",
      "Skill"
    ],
    "title": "議事録ファイルをコマンドで要約",
    "caption": "/file-summarizerコマンドで20260711_議事録.mdを読み取り、決定事項とネクストアクションを要約した。"
  },
  {
    "file": "2026-07-11_163654.png",
    "tags": [
      "Claude Code",
      "Skill"
    ],
    "title": "議事録要約への改善提案",
    "caption": "要約結果に続けて、決定理由の明記や見積仕様の追記など議事録への改善提案を3点提示した。"
  },
  {
    "file": "2026-07-11_165408.png",
    "tags": [
      "Subagent",
      "Skill"
    ],
    "title": "agents/skills全体のファイル構成",
    "caption": ".claude配下のagents7種、commands1種、skills5種を含むプロジェクト全体のファイルツリーを表示した。"
  },
  {
    "file": "2026-07-11_165431.png",
    "tags": [
      "Subagent",
      "コードレビュー"
    ],
    "title": "build-and-reviewで3段階レビュー",
    "caption": "/build-and-reviewコマンドでAnalyzer→Builder→ReviewerのSubAgentを直列実行しREADME整備を開始した。"
  },
  {
    "file": "2026-07-11_165443.png",
    "tags": [
      "コードレビュー",
      "Subagent"
    ],
    "title": "3段階SubAgentレビューで合格判定",
    "caption": "Analyzer分析→Builder実装→Reviewer検証の結果サマリーが表示され、README.mdの追加が合格と判定された。"
  },
  {
    "file": "2026-07-11_171048.png",
    "tags": [
      "Claude in Chrome"
    ],
    "title": "Claude in ChromeでYahoo見出し取得",
    "caption": "Claude in Chromeのサイドパネルで実際のYahoo!ニュースからトップ見出し10個を自動抽出して一覧表示した。"
  },
  {
    "file": "2026-07-11_171617.png",
    "tags": [
      "Claude in Chrome"
    ],
    "title": "Claude in Chromeでログイン自動化",
    "caption": "the-internet.herokuapp.comにtomsmithでログインさせ、Secure Areaへの遷移成功をClaudeが報告した。"
  },
  {
    "file": "2026-07-11_172010.png",
    "tags": [
      "Claude in Chrome"
    ],
    "title": "ログインフォーム自動入力の実行中",
    "caption": "Claude in ChromeがユーザーIDとパスワードを入力しLoginボタンをクリックする様子、Stop Claudeが表示中。"
  },
  {
    "file": "2026-07-11_173507.png",
    "tags": [
      "MCP/Plugin",
      "Claude Code"
    ],
    "title": "MCP経由で複数ニュースサイト取得",
    "caption": "Chrome連携ツールでYahoo・NHK・朝日新聞にアクセスしようとしたが、NHKと朝日はドメイン制限でブロックされた。"
  },
  {
    "file": "2026-07-11_173523.png",
    "tags": [
      "MCP/Plugin",
      "Claude Code"
    ],
    "title": "取得対象サイトのタブ一覧確認",
    "caption": "Chrome news headline scraperプロジェクトで開いたNHKニュース・朝日新聞のタブと使用ツール数を確認した。"
  },
  {
    "file": "2026-07-11_173536.png",
    "tags": [
      "MCP/Plugin"
    ],
    "title": "Yahoo見出し取得、朝日は失敗",
    "caption": "Yahoo!ニュースの見出し8件は取得できたが、朝日新聞はper-action approval制限で取得できなかったと報告。"
  },
  {
    "file": "2026-07-11_173550.png",
    "tags": [
      "MCP/Plugin"
    ],
    "title": "NHKニュース見出しの取得結果",
    "caption": "NHKニューストップニュース7件を一覧表示し、朝日新聞は自動アクセス制限のため取得不可と最終報告した。"
  },
  {
    "file": "2026-07-11_175401.png",
    "tags": [
      "Claude Code"
    ],
    "title": "完成したストップウォッチを確認",
    "caption": "Claude Codeが生成したindex.html単一ファイルのストップウォッチをブラウザで開き00:02.07まで計測動作を確認。"
  },
  {
    "file": "2026-07-11_175439.png",
    "tags": [
      "Claude Code"
    ],
    "title": "ストップウォッチ実装計画(要件)",
    "caption": "単一HTMLファイルで動くストップウォッチの実装計画をPlanモードで提示し、ファイル構成と画面イメージを説明した。"
  },
  {
    "file": "2026-07-11_175453.png",
    "tags": [
      "Claude Code"
    ],
    "title": "ストップウォッチ実装計画(技術詳細)",
    "caption": "Date.nowとsetIntervalを使った経過時間計算のロジックやStart/Stop/Reset時の状態管理を計画に記載した。"
  },
  {
    "file": "2026-07-11_175503.png",
    "tags": [
      "Claude Code"
    ],
    "title": "ストップウォッチの検証方法を計画",
    "caption": "Start/Stop/Reset操作と時間表示フォーマットを目視確認する検証手順をPlanモードでリストアップした。"
  },
  {
    "file": "2026-07-11_180738.png",
    "tags": [
      "Claude Code"
    ],
    "title": "goalコマンドでLap機能を自動実装",
    "caption": "/goalコマンドでLap機能付きストップウォッチの完成条件を指定し、Claude Codeが自律的に実装と検証を開始した。"
  },
  {
    "file": "2026-07-11_180759.png",
    "tags": [
      "Claude Code"
    ],
    "title": "ブラウザ操作で自動テスト実行中",
    "caption": "ローカルサーバーを起動しStartボタンをクリック、タイマー動作を確認しsetIntervalベースに実装を修正した。"
  },
  {
    "file": "2026-07-11_180811.png",
    "tags": [
      "Claude Code"
    ],
    "title": "Lap・Stop・Resetの動作を順次検証",
    "caption": "Lapを2回記録し時間順リストを確認、Stopで00:30.75のまま停止することをブラウザ操作で検証した。"
  },
  {
    "file": "2026-07-11_180826.png",
    "tags": [
      "Claude Code"
    ],
    "title": "ミリ秒3桁表示に修正し再検証",
    "caption": "表示形式をセンチ秒2桁からミリ秒3桁に修正し、Start→Lap→Stop→Resetの一連動作を再度自動検証した。"
  },
  {
    "file": "2026-07-11_180836.png",
    "tags": [
      "Claude Code"
    ],
    "title": "goalタスクの完了条件を全て確認",
    "caption": "5つの完了条件を全てブラウザで実証し、setIntervalへの修正内容も含めて最終報告した。"
  },
  {
    "file": "2026-07-11_180848.png",
    "tags": [
      "Claude Code"
    ],
    "title": "Lap記録付きストップウォッチ完成",
    "caption": "claude-test4フォルダのindex.htmlをブラウザで開き、Lap1・Lap2が記録された完成形の動作を確認した。"
  },
  {
    "file": "2026-07-11_182648.png",
    "tags": [
      "Skill",
      "Claude Code"
    ],
    "title": "goal用メタプロンプトSkillを計画",
    "caption": "音声入力の雑多な内容を/goal用の完成条件プロンプトに整形するSkillの作成計画をSKILL.md仕様とともに提示した。"
  },
  {
    "file": "2026-07-11_182707.png",
    "tags": [
      "Skill"
    ],
    "title": "Skillの設計方針を検討",
    "caption": "goal-prompt-composer Skillの実装方針として、単一のSKILL.mdファイルで簡潔に作る設計判断を記載している。"
  },
  {
    "file": "2026-07-11_182729.png",
    "tags": [
      "Skill"
    ],
    "title": "SKILL.md本文の構成を計画",
    "caption": "音声入力を/goal条件文に変換するSkillの本文構成を7項目立てで設計し、変換プロセスを詳細化している。"
  },
  {
    "file": "2026-07-11_182739.png",
    "tags": [
      "Skill"
    ],
    "title": "Skillの検証方法を計画",
    "caption": "skill-creatorの記法を踏襲しつつ、SKILL.md作成後にfrontmatter確認や口語入力での動作検証手順を整理している。"
  },
  {
    "file": "2026-07-12_113800.png",
    "tags": [
      "Claude Desktop"
    ],
    "title": "Claude Desktopの利用状況概要",
    "caption": "Obsidianの隣でClaude Desktopの概要画面を開き、セッション数27件やトークン数1.2Mなどの利用統計を確認している。"
  },
  {
    "file": "2026-07-12_115403.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "YouTube文字起こしノートを確認",
    "caption": "Obsidian上で「課題用YouTube取得」ノートを開き、動画の文字起こしパネルをタイムスタンプ付きで表示している。"
  },
  {
    "file": "2026-07-12_120305.png",
    "tags": [
      "Claude Code"
    ],
    "title": "yt-dlpでYouTube字幕を取得",
    "caption": "Claude CodeがWebFetchとyt-dlpでYouTube動画の日本語自動字幕を取得し、frontmatter付きMarkdownとして保存している。"
  },
  {
    "file": "2026-07-12_120325.png",
    "tags": [
      "Claude Code"
    ],
    "title": "文字起こしMDファイルの作成完了",
    "caption": "自動生成字幕から抽出したテキストを整形し「7_オレンジのメッセージ_文字起こし.md」を作成、既存ノートは変更しない旨を報告している。"
  },
  {
    "file": "2026-07-12_122101.png",
    "tags": [
      "Claude Code"
    ],
    "title": "動画をダウンロードして画面解析",
    "caption": "同じ動画をyt-dlpでダウンロードし、OpenCVで41枚のフレームを抽出して音声と画面の両方を解析するタスクを実行中。"
  },
  {
    "file": "2026-07-12_122122.png",
    "tags": [
      "Claude Code"
    ],
    "title": "動画解析結果をノートに整理",
    "caption": "動画解析結果を基本情報テーブルにまとめ、Claude Codeが「やったこと」「わかったこと」を報告し、続けて文字起こしの校正を依頼している。"
  },
  {
    "file": "2026-07-12_122141.png",
    "tags": [
      "Claude Code"
    ],
    "title": "文字起こしの誤字脱字を校正",
    "caption": "画面構成の解析結果を記載する一方、Claude Codeが文字起こしファイルの句読点追加や誤字修正を行い校正メモを添付している。"
  },
  {
    "file": "2026-07-12_122203.png",
    "tags": [
      "Claude Code"
    ],
    "title": "Claude Codeのセッション一覧画面",
    "caption": "Claude CodeのCodeタブでセッション一覧を表示しつつ、校正済みの文字起こしMarkdownファイルの内容を確認している。"
  },
  {
    "file": "2026-07-12_122232.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "校正済み文字起こしの最終確認",
    "caption": "Obsidianで校正済みの文字起こしノートを開き、確信度の低い訂正箇所についての注意書きと整形済み本文を確認している。"
  },
  {
    "file": "2026-07-12_130402.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "音声ファイルの文字起こし結果",
    "caption": "「20210521_202815.wav」の文字起こし結果をタイムスタンプ付きでObsidianに表示、天命鑑定サービスの紹介トーク内容が並ぶ。"
  },
  {
    "file": "2026-07-12_130940.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "文字起こしのテーマ別まとめ作成",
    "caption": "文字起こしを基に「天命鑑定サービス紹介トークのまとめ」ノートを新規作成し、元音声・元文字起こしをリンクしタグを付与している。"
  },
  {
    "file": "2026-07-12_131000.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "サービス対象者と目的の要約",
    "caption": "テーマ別まとめノートで「サービスの対象者」「天命とは」「お断りする人」の3セクションを箇条書きで整理している。"
  },
  {
    "file": "2026-07-12_131011.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "有料サービスの4ステップ表",
    "caption": "フリーサービスの内容と、有料サービスの4ステップ(ファースト〜フォース)を期間・ペース付きの表にまとめている。"
  },
  {
    "file": "2026-07-12_131029.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "推奨プランと元資料へのリンク",
    "caption": "全22回・1年コースの推奨プランを記載し、詳細発言は元の文字起こしノートを参照するようリンクを添えて締めくくっている。"
  },
  {
    "file": "2026-07-12_133956.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "新規ボイスメモの要約作成",
    "caption": "新しい音声ファイル「20260712_131955.wav」を文字起こしし、「社長の右腕」としての業務紹介の要約を冒頭に生成している。"
  },
  {
    "file": "2026-07-12_134008.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "ボイスメモの全文文字起こし",
    "caption": "要約に続けて役割紹介・具体的業務内容をタイムスタンプ付きの全文文字起こしとして表示している。"
  },
  {
    "file": "2026-07-12_134021.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "業務内容と締めの言葉を確認",
    "caption": "文字起こしの続きで、研修事務局対応や会計入力などの具体例と「めんどくさいことはお任せください」という締めの一文を表示している。"
  },
  {
    "file": "2026-07-12_141656.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "note投稿記事の下書き作成",
    "caption": "文字起こしを元にnote投稿用記事の下書きを新規作成し、タイトルや元音声・元文字起こしへのリンクをプロパティに設定している。"
  },
  {
    "file": "2026-07-12_141718.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "占星術記事のヘッダー画像",
    "caption": "生成されたヘッダー画像とともに、経営者向けインド占星術で天命を読み解く記事の導入文が表示されている。"
  },
  {
    "file": "2026-07-12_141730.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "有料プログラムの4ステップ図",
    "caption": "「本当のあなたに近づく、4つのステップ」として気づきの明確化から定着までを図解した画像を記事内に挿入している。"
  },
  {
    "file": "2026-07-12_155246.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "記事に裏付け情報を追加",
    "caption": "note記事のプロパティに「裏付け情報」ノートへのリンクと「出典あり」タグを追加し、ファクトチェック済みであることを示している。"
  },
  {
    "file": "2026-07-12_155259.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "インド占星術の出典を明記",
    "caption": "「天命とは何か」のセクションにインド占星術(ジョーティッシュ)の歴史的根拠を出典リンク付きで記述している。"
  },
  {
    "file": "2026-07-12_155310.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "経営者と占星術の事例を紹介",
    "caption": "海外の経営者や占星術師の事例を出典付きで紹介し、経営者が占星術を活用する動向を裏付けている。"
  },
  {
    "file": "2026-07-12_163725.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "オレンジ記事のnote下書き",
    "caption": "7話オレンジ回の内容を基にしたnote記事下書きを新規作成し、裏付け情報ノートへのリンクと出典ありタグを設定している。"
  },
  {
    "file": "2026-07-12_163736.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "オレンジ記事のヘッダー画像",
    "caption": "炎と紅葉をモチーフにした生成ヘッダー画像とともに、オレンジ色が表す欲求についての記事本文が始まっている。"
  },
  {
    "file": "2026-07-12_163746.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "オレンジと消化器の対応を解説",
    "caption": "アーユルヴェーダのチャクラ理論を出典付きで引用し、オレンジ色が消化吸収を司る器官と対応する根拠を説明している。"
  },
  {
    "file": "2026-07-12_163800.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "色彩理論とオレンジの図解",
    "caption": "赤と黄を混ぜてオレンジができる色彩理論を説明し、体との対応や連想されるものをまとめた図解画像を掲載している。"
  },
  {
    "file": "2026-07-12_163818.png",
    "tags": [
      "コンテンツ制作"
    ],
    "title": "心のサインと処方箋の図解",
    "caption": "オレンジが気になるときに考えられる心理状態と、日常に取り入れるおすすめの方法を対比形式の図解でまとめている。"
  }
];
