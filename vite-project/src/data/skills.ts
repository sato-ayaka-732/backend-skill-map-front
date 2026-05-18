export type SkillItem = {
  name: string
  detail?: string
  level?: '基礎' | '中級' | '上級'
}

export type SkillCategory = {
  id: number
  title: string
  subtitle?: string
  color: string
  icon: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'アーキテクチャ・データアクセス',
    subtitle: '設計の土台',
    color: '#d97706',
    icon: '🏛️',
    items: [
      { name: '設計の基本', detail: 'クリーン/レイヤード、責務分離、SOLID', level: '基礎' },
      { name: 'データ操作', detail: 'SQL/Query(GET/取得), CRUD(POST/PUT/DELETE/PATCH), N+1', level: '基礎' },
      { name: 'サービス層', detail: 'ロジック分離、外部APIラッパ', level: '中級' },
      { name: 'ミドルウェア', detail: '共通処理を挟み込む、Auth/Logging', level: '中級' },
    ],
  },
  {
    id: 2,
    title: '外部連携・通信',
    subtitle: 'API・Webhook',
    color: '#2563eb',
    icon: '🌐',
    items: [
      { name: '外部API呼出', detail: 'REST/GraphQL, gRPC', level: '中級' },
      { name: 'ウェブフック', detail: 'Slack/Discord/Stripe等の連携', level: '中級' },
      { name: 'CORS', detail: '異なるドメイン間の通信制御', level: '基礎' },
      { name: 'バリデーション', detail: '入力値チェック、リクエスト/レスポンス', level: '基礎' },
    ],
  },
  {
    id: 3,
    title: 'ログ・運用の見える化',
    subtitle: 'モニタリング',
    color: '#0891b2',
    icon: '📊',
    items: [
      { name: 'アクセスログ', detail: 'リクエスト履歴の記録', level: '基礎' },
      { name: 'クエリログ', detail: 'SQL実行履歴', level: '中級' },
      { name: 'エラーログ', detail: '例外検知と通知 (Sentry等)', level: '中級' },
      { name: '通知設定', detail: 'Slack/メール通知', level: '中級' },
    ],
  },
  {
    id: 4,
    title: 'ミドルウェア & セキュリティ',
    subtitle: '安全な通信',
    color: '#ca8a04',
    icon: '🔐',
    items: [
      { name: 'シークレット管理', detail: '環境変数・秘匿情報の取扱', level: '中級' },
      { name: 'HTTPS', detail: 'TLS/SSLによる暗号化通信', level: '基礎' },
      { name: '認証・認可', detail: 'JWT, OAuth, セッション', level: '中級' },
      { name: 'CORS設定', detail: 'オリジン制御', level: '基礎' },
    ],
  },
  {
    id: 5,
    title: '入力・品質・テスト',
    subtitle: '品質保証',
    color: '#9333ea',
    icon: '✅',
    items: [
      { name: 'テストコード', detail: 'Unit / Integration / E2E', level: '中級' },
      { name: 'バリデーション', detail: '型・値の整合性チェック', level: '基礎' },
      { name: '品質指標', detail: 'カバレッジ、Lint', level: '中級' },
      { name: '多言語対応', detail: 'i18n / l10n', level: '上級' },
    ],
  },
  {
    id: 6,
    title: '非同期・イベント駆動',
    subtitle: 'バックグラウンド処理',
    color: '#b45309',
    icon: '⚡',
    items: [
      { name: '外部APIイベント', detail: 'Webhook受信処理', level: '中級' },
      { name: '定期実行ジョブ', detail: 'cron / スケジューラ', level: '基礎' },
      { name: 'クリーンジョブ', detail: '不要データの自動削除', level: '中級' },
      { name: 'メッセージキュー', detail: 'Redis / RabbitMQ', level: '上級' },
    ],
  },
  {
    id: 7,
    title: 'ファイル・ストレージ',
    subtitle: 'データ保存',
    color: '#0284c7',
    icon: '📁',
    items: [
      { name: 'アップロード', detail: 'マルチパート、容量制限', level: '基礎' },
      { name: 'ダウンロード', detail: '署名付きURL、ストリーム', level: '中級' },
      { name: 'クラウドストレージ', detail: 'S3 / GCS', level: '中級' },
      { name: '画像処理', detail: 'リサイズ・圧縮', level: '中級' },
    ],
  },
  {
    id: 8,
    title: 'データベース・マルチテナント',
    subtitle: 'DB運用',
    color: '#db2777',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL / RLS', detail: '行レベルセキュリティ', level: '上級' },
      { name: 'マイグレーション', detail: 'スキーマのバージョン管理', level: '中級' },
      { name: 'DDLとデータ', detail: 'スキーマ設計、INDEX', level: '中級' },
      { name: 'バックアップ', detail: 'ダンプファイル管理', level: '中級' },
    ],
  },
  {
    id: 9,
    title: 'デプロイ・インフラ・サーバー',
    subtitle: '本番運用',
    color: '#16a34a',
    icon: '🚀',
    items: [
      { name: '開発環境', detail: 'ローカル構築', level: '基礎' },
      { name: 'コンテナ', detail: 'Docker / docker-compose', level: '中級' },
      { name: 'CI/CD', detail: 'GitHub Actions等で自動デプロイ', level: '中級' },
      { name: 'サーバー管理', detail: 'VPS / Nginxリバースプロキシ', level: '中級' },
      { name: 'ドメイン・ネットワーク', detail: 'DNS, HTTPS証明書', level: '中級' },
    ],
  },
]

export const automationCategory: SkillCategory = {
  id: 10,
  title: '自動化・運用ツール',
  subtitle: '運用効率化',
  color: '#475569',
  icon: '🛠️',
  items: [
    { name: 'Makefile', detail: 'よく使うコマンドの定型化', level: '基礎' },
    { name: 'シェルスクリプト', detail: 'バックアップ・移行の自動化', level: '中級' },
    { name: '運用の標準化', detail: '手順書・チェックリスト', level: '中級' },
  ],
}

export const levelLegend = [
  { label: '基礎', color: '#10b981', description: 'CRUD・API・認証など、最初に押さえる土台' },
  { label: '中級', color: '#3b82f6', description: 'デプロイ・テスト・運用など、現場で武器になる領域' },
  { label: '上級', color: '#a855f7', description: 'RLS・パフォーマンス・マルチテナントなど、堅牢化と拡張' },
]
