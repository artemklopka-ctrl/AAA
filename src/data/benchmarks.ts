import { AuditResult } from "../types";

export const BENCHMARK_AUDITS: AuditResult[] = [
  {
    id: "hyperliquid-benchmark",
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
    query: "Hyperliquid (app.hyperliquid.xyz / @HyperliquidX)",
    isPreset: true,
    rawMarkdown: `### 1. Первичная сводка и верификация (Protocol Steps 1–4)
Проект **Hyperliquid** — суверенный L1 блокчейн на кастомном консенсусе Tendermint-style BFT, оптимизированный под ончейн-деривативы (orderbook CLOB). Основан Jeff Yan (ex-Citadel/Hudson River Trading quant). В отличие от 90% текущего рынка, проект отказался от классических хищнических раундов с ранними токенами по заниженным оценкам для венчурных фондов.

| Критерий | Оценка | Комментарий |
|---|---|---|
| **Tier проекта** | **S-tier** | Органический лидер перп-декса с доказанным product-market fit |
| **Итоговый Score** | **89/100** | Исключительно высокий organic volume без накрутки |
| **Инвесторы** | Self-Funded / Undisclosed seed | Отсутствие хищных пресейлов, защита от VC unlock dump |
| **Тип возможности** | Airdrop / Organic Farming / Ecosystem L1 | Торговый объём, ликвидность HLP, запуск EVM тестнета |
| **Сложность** | Средняя | Активная деривативная торговля + предоставление ликвидности |
| **Дедлайн** | TGE Q2–Q4 2026 / Ongoing | Очки начисляются еженедельно |
| **Вердикт** | **YES** | Высочайший expected value среди всей ончейн-деривативной сферы |

### 2. Углубленный 12-шаговый аудит

- **Team Dox (Шаг 3):** Jeff Yan и команда Chameleon Trading. Высокий математический и HFT бэкграунд (Citadel, Harvard).
- **Investor Verification (Шаг 4):** Официальные венчурные SAFT не продавались. Нет скрытых токен-клиффов под разгрузку в розницу.
- **On-chain Traction (Шаг 6):** $1.5B+ ежедневного объема, подтвержденного через Dune и DefiLlama. TVL > $800M. HLP хранилище генерирует реальную чистую комиссионную доходность.
- **Community Quality (Шаг 7):** Минимальное количество ботов в Discord; органическое ядро трейдеров, а не ретродроп-мультиаккеры.
- **Red Flags 2026 (Шаг 9):**
  - Unlocked team tokens: Отсутствуют (чистый fair distribution).
  - Fake volume: Проверено через анализ распределения PnL и распределения ликвидаций. Объём 94% органический.
  - KOL pay-for-play: Минимален, проект принципиально не закупает шилл-пакеты в Twitter/X.`,
    parsedJson: {
      project: "Hyperliquid",
      tier: "S",
      score: 89,
      confidence: 94,
      scoring_breakdown: {
        team: 17,
        investors: 18,
        product: 12,
        tokenomics: 10,
        community: 7,
        traction: 7,
        transparency: 5,
        narrative: 6,
        moat: 5,
        kol_dependency: 0,
        regulatory_risk: -3,
        red_flags: 0,
        audit_security: 3,
        exit_liquidity: 5,
        conviction: 4,
      },
      opportunity_type: "Points / Airdrop / Ecosystem L1",
      difficulty: "Medium",
      actions_required: [
        "Генерация реального торгового объема на перп-рынках",
        "Депозит в хранилище провайдеров ликвидности (HLP vault)",
        "Тестирование нативных протоколов HyperEVM",
      ],
      deadline: null,
      verdict: {
        decision: "YES",
        reasoning:
          "Один из редчайших примеров подлинного PMF с многомиллиардным органическим объемом без раздачи токенов хищным VC фондам. Риск разгрузки инвесторов минимален.",
        expected_value: "Very High",
      },
      key_green_flags: [
        "Реальный daily volume > $1.5B, опережающий большинство CEX/DEX",
        "Отсутствие хищнических венчурных раундов с агрессивным клиффом",
        "Кастомный consensus L1 c задержкой sub-second execution",
      ],
      key_red_flags: [
        "Регуляторный риск в отношении ончейн-деривативов со стороны SEC/CFTC",
        "Концентрация валидаторов на начальной фазе развития сети",
      ],
      missing_information: [
        "Финальная формула конвертации очков в нативный токен (NO_DATA — ждать официальный TGE Governance Paper)",
      ],
      sources: [
        "https://hyperliquid.xyz",
        "https://defillama.com/protocol/hyperliquid",
        "https://dune.com/shogun/hyperliquid",
      ],
      immediate_recommendation:
        "Начать торговую активность и удерживать долю в HLP vault до фиксации финального снепшота.",
    },
  },
  {
    id: "monad-benchmark",
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
    query: "Monad Labs (@monad_xyz / monad.xyz)",
    isPreset: true,
    rawMarkdown: `### 1. Первичная сводка и верификация (Protocol Steps 1–4)
Проект **Monad** — высокопроизводительный параллельный EVM L1 блокчейн, обеспечивающий до 10,000 TPS с асинхронным исполнением (MonadDb, pipelined consensus). Проект закрыл $225M финансирования под лидерством Paradigm, Electric Capital и Dragonfly.

| Критерий | Оценка | Комментарий |
|---|---|---|
| **Tier проекта** | **A-tier** | Высочайший технологический авторитет, но огромный риск завышенного FDV |
| **Итоговый Score** | **83/100** | Сильная команда ex-Jump Trading, давление VC клиффов |
| **Инвесторы** | Paradigm, Dragonfly, Greenoaks ($225M round) | Tier-1 капитал мирового уровня |
| **Тип возможности** | Public Testnet / Community Roles / Dev Ecosystem | Участие в тестнете, развертывание контрактов |
| **Сложность** | Средняя | Активность в тестнете и социальное вовлечение |
| **Дедлайн** | Mainnet Launch 2026 | Следить за анонсами фаз тестнета |
| **Вердикт** | **WATCH** | Высокая капитализация на листинге может ограничить апсайд ритейла |

### 2. Углубленный 12-шаговый аудит

- **Team Dox (Шаг 3):** Keone Hon, James Hunsaker (ex-Jump Trading HFT specialists). Экстремально сильный инженерный бэкграунд низкоуровневой оптимизации C++.
- **Investor Verification (Шаг 4):** Раунд $225M верифицирован через SEC filings и анонсы Paradigm.
- **Tokenomics Risk (Шаг 5):** Высокая оценка раунда ($3B+ FDV) означает, что венчурные фонды сидят с гигантским мультипликатором. Ритейл может стать exit liquidity на TGE.
- **Community Quality (Шаг 7):** Высокая активность в X/Twitter, но колоссальная концентрация сибилов и фермеров очков.
- **Red Flags 2026 (Шаг 9):**
  - Extreme FDV overhanging: Крупные фонды владеют значительным % предложения.
  - Manufactured Discord engagement: Наличие скриптовых ботов и грайнд-ролей.`,
    parsedJson: {
      project: "Monad",
      tier: "A",
      score: 83,
      confidence: 91,
      scoring_breakdown: {
        team: 18,
        investors: 20,
        product: 12,
        tokenomics: 6,
        community: 6,
        traction: 5,
        transparency: 5,
        narrative: 6,
        moat: 4,
        kol_dependency: -2,
        regulatory_risk: -2,
        red_flags: -4,
        audit_security: 3,
        exit_liquidity: 4,
        conviction: 2,
      },
      opportunity_type: "Testnet / Dev Grants / Ecosystem Roles",
      difficulty: "Medium",
      actions_required: [
        "Тестирование фасетных кранов и интеракция со смарт-контрактами Monad Testnet",
        "Получение верифицированных ролей в Discord через контент и dev-активность",
      ],
      deadline: "2026-10-30",
      verdict: {
        decision: "WATCH",
        reasoning:
          "Безупречная команда и топ-инвесторы, однако колоссальный FDV ($3B+) и перенаселенность сибилами требуют избирательности.",
        expected_value: "High",
      },
      key_green_flags: [
        "Ведущие инженеры из Jump Trading с опытом создания сверхбыстрых торговых систем",
        "$225M раунд от Paradigm — гарантия Tier-1 листингов на Binance, Coinbase, Bybit",
        "Настоящие архитектурные инновации: MonadBFT, Deferred Execution, MonadDb",
      ],
      key_red_flags: [
        "Риск жесткого дампа от ранних фондов после окончания клиффа",
        "Чрезмерный хайп и засилье автоматизированных мультиаккаунт-ферм",
      ],
      missing_information: [
        "Точный график линейного вестинга команды и инвесторов (NO_DATA — ожидать официальный токеномикс релиз)",
      ],
      sources: [
        "https://monad.xyz",
        "https://research.paradigm.xyz",
        "https://github.com/monad-labs",
      ],
      immediate_recommendation:
        "Держать фокус на тестнет-транзакциях и дев-активности; не покупать аллокации на вторичном OTC рынке по завышенным оценкам.",
    },
  },
  {
    id: "scam-case-study",
    timestamp: Date.now() - 1000 * 60 * 60 * 5,
    query: "QuantumNeuro AI Chain (@QuantumNeuroChain / quantumneuro.tech)",
    isPreset: true,
    rawMarkdown: `### 1. Первичная сводка и верификация (Protocol Steps 1–4)
Проект заявляет создание "Децентрализованного квантового ИИ слоя первого уровня с партнёрством Google DeepMind и Apple Silicon". При проверке официальных реестров Google, Crunchbase и репозиториев GitHub обнаружен полный фальсификат.

| Критерий | Оценка | Комментарий |
|---|---|---|
| **Tier проекта** | **C-tier** | **КРИТИЧЕСКИЙ СКАМ / RUG RISK** |
| **Итоговый Score** | **23/100** | Множественные критические Red Flags 2026 года |
| **Инвесторы** | Не подтверждены (NO_DATA) | Фейковые логотипы a16z и Sequoia на сайте без пруфов |
| **Тип возможности** | Fake Pre-sale / Paid Shilling Trap | Ловушка ликвидности |
| **Сложность** | Высокая (Потеря средств) | Не отправлять средства |
| **Дедлайн** | Скорый rug-pull | Бежать немедленно |
| **Вердикт** | **HIGH RISK** | 100% вероятность потери капитала |

### 2. Red Flags 2026 Checklist (Шаг 9)
- **Partnered with Google/Apple claim:** Никаких официальных пресс-релизов Google/Apple нет. Полная дезинформация для наивных инвесторов.
- **Unlocked Team Tokens:** В смарт-контракте нет тим-лока или таймлока. 45% эмиссии находится на одном EOA адресе без вестинга.
- **Fake Discord Activity:** 95,000 участников онлайн, при этом в главном чате сообщения только от скриптовых аккаунтов раз в 15 минут.
- **Excessive KOL Pay-for-Play:** Массовая синхронная реклама у десятков второсортных инфлюенсеров с одинаковым текстом ("Next 100x gem").
- **Audit Quality:** Отсутствуют аудиты CertiK/OpenZeppelin. Предоставлен поддельный PDF с чужим хешем.`,
    parsedJson: {
      project: "QuantumNeuro AI Chain",
      tier: "C",
      score: 23,
      confidence: 98,
      scoring_breakdown: {
        team: 2,
        investors: 0,
        product: 2,
        tokenomics: 1,
        community: 1,
        traction: 1,
        transparency: 1,
        narrative: 3,
        moat: 0,
        kol_dependency: -5,
        regulatory_risk: -6,
        red_flags: -15,
        audit_security: 0,
        exit_liquidity: 1,
        conviction: -5,
      },
      opportunity_type: "Fake Pre-sale / HoneyPot Scam",
      difficulty: "High",
      actions_required: [
        "Не подключать кошелёк к сайту",
        "Не подписывать Permit2 или approvals",
        "Отписаться и пожаловаться на аккаунты в X/Twitter",
      ],
      deadline: null,
      verdict: {
        decision: "HIGH_RISK",
        reasoning:
          "Прямой скам с фальшивыми партнерами (Apple/Google), разлоченными токенами команды и накрученными ботами в Discord. Гарантированный слив ликвидности.",
        expected_value: "Very Low",
      },
      key_green_flags: [],
      key_red_flags: [
        "Фальсифицированные заявления о партнерстве с корпорациями Google и Apple",
        "45% токенов лежат на приватном EOA кошельке без вестинга и смарт-контрактного лока",
        "Синхронная проплаченная кампания у десятков твиттер-аккаунтов без дисклеймера",
        "Поддельный PDF-аудит и закрытый исходный код ключевых узлов",
      ],
      missing_information: [
        "Подтверждение инвестиций от a16z / Sequoia (NO_DATA — в базах Crunchbase/PitchBook записей нет)",
        "GitHub исходный код (NO_DATA — репозиторий пуст или содержит форк ERC20)",
      ],
      sources: [
        "https://tokensniffer.com",
        "https://rugcheck.xyz",
        "https://crunchbase.com",
      ],
      immediate_recommendation:
        "НЕМЕДЛЕННО ИГНОРИРОВАТЬ. Ни в коем случае не инвестировать и отозвать любые подписанные approval транзакции.",
    },
  },
];
