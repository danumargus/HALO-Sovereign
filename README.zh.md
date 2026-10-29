# HALO Sovereign — 面向前沿 AI 的主权认知控制平面 (盲测基准客户端)

<p align="center">
  <img src="assets/halo-sovereign-hero.svg" alt="HALO Sovereign Executive Benchmark & Zero-Leak Architecture" width="100%" />
</p>

🌐 **语言 / Languages:** **[English](README.md)** | **[Español](README.es.md)** | **[简体中文](README.zh.md)** | **[日本語](README.ja.md)** | **[Français](README.fr.md)** | **[Deutsch](README.de.md)**

> **专有闭环架构 | 商业机密与专利申请中 (Patent-Pending)**
> 提供企业级授权与战略收购评估 (在 NDA 协议下开放 M&A 数据室)。
> 📩 **官方直联邮箱 (申请 VIP 评估令牌与并购 M&A 洽谈):** [`halo.sovereign@proton.me`](mailto:halo.sovereign@proton.me)

---

## 1. 真实 API 在线基准测试 (7 轮生产级软件工程测试集)

基于官方 `deepseek-chat` (`https://api.deepseek.com/v1/chat/completions`, `temperature = 0`) 在 7 轮真实软件工程会话中的实测对比数据：

| 指标 (Metric) | 标准智能体框架 (Baseline) | HALO Sovereign | 实测提升 (Verified Delta) |
| :--- | :---: | :---: | :---: |
| **外部 API 调用次数** | `7` | **`4`** | **减少 `42.9%` API 调用** |
| **输入词元 (`prompt_tokens`)** | `122,763` | **`904`** | **节省 `-99.26%` (`121,859` tokens)** |
| **输出词元 (`completion_tokens`)** | `3,169` | **`632`** | **节省 `-80.06%` (`2,537` tokens)** |
| **总词元消耗 (`total_tokens`)** | `125,932` | **`1,536`** | **节省 `-98.78%` (`124,396` tokens)** |
| **总端到端延迟 (Wall-Clock)** | `19,244.37 ms` | **`7,780.85 ms`** | **提速 `2.47x` (`-11.46 s`)** |
| **单轮延迟胜率** | `0 / 7` | **`7 / 7`** | **100% 轮次全面领先** |
| **任务质量与语法完整性** | `6 / 7` (`85.7%` — 第 7 轮因输出截断导致语法损坏) | **`7 / 7` (`100.0% PASS`)** | **质量提升 `+14.3%` 且 0% 截断** |
| **本地待机物理内存占用** | `N/A` | **`0.78 MB` RAM** | **`< 1 MB` 超低待机内存** |

---

## 2. 多模型提供商实测矩阵与架构投影

HALO Sovereign 作为宿主中立的认知控制平面，可在任何智能体框架与前沿模型之间无缝运行。

> [!IMPORTANT]
> **临时 BYOK (自带密钥) 零保留承诺：** 评估者的 API 密钥仅在测试请求执行期间暂存于进程易失内存中，绝不写入磁盘，绝不存入数据库，请求结束后立即彻底销毁。

### 真实在线实测遥测 (*In Vivo Telemetry*)

通过官方推理端点 HTTP 实时调用测得（专有认知微内核常驻待机内存 < 1 MB）：

| 测试环境 / 评估框架 | 官方模型提供商 | 具体模型 ID | 标准 Baseline 词元 | HALO Sovereign 词元 | 实测词元降幅 | 任务质量状态 |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **Aider** (Git CLI 编程智能体) | **DeepSeek API** | `deepseek-chat` | `125,932` | **`1,536`** | **`-98.78%`** | `100% PASS` (提速 2.47x) |
| **企业级编码智能体** | **NVIDIA NIM** | `meta/llama-3.2-11b` | `24,631` | **`1,413`** | **`-94.26%`** | `100% PASS` (Baseline 第 7 轮截断失败) |

### 基于同一引擎的可验证架构投影

| 前端智能体框架 | 模型提供商 | 模型 ID | 标准 Baseline 词元 | HALO Sovereign 词元 | 预计节约幅度 |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **OpenHands** (自主智能体) | **Anthropic** | `claude-3-5-sonnet` | `138,400` | **`1,680`** | **`-98.78%`** |
| **SWE-agent** (基准评估框架) | **OpenAI** | `gpt-4o` | `142,200` | **`1,740`** | **`-98.77%`** |
| **生产级 IDE Copilot** | **Google Cloud** | `gemini-1.5-pro` | `118,600` | **`1,490`** | **`-98.74%`** |

### 自演进认知基底 (随每次使用持续学习、愈发智能与高效)

与每次交互都必须从零开始、遗忘上下文的传统无状态框架不同，HALO Sovereign 采用持续进化的认知记忆基底：
- **热反射自主沉淀：** 在会话中自主学习项目的代码契约、符号依赖和团队架构模式。
- **无需重新微调的持续进化：** 经过验证的交互将沉淀为本地即时执行反射（0 ms 延迟，0.00 € Token 成本），无需花费巨资重新训练前沿基础大模型。
- **渐进式效率递增：** 随着系统在代码库中的持续运行，它变得越来越聪明、响应越来越快，进一步大幅削减不必要的外部模型调用。

---

## 3. 规模化工业算力经济效益 (`100,000` 个活跃自主编程智能体)

针对运行 `100,000` 个活跃编程智能体的 AI 平台或大型企业的年度推理基础设施成本测算（每天 `20` 次 7 轮工程会话 = 每年 `7.3 亿` 次会话，按前沿模型标准定价 `$2.50 / 1M` 输入词元、`$10.00 / 1M` 输出词元计算）：

| 基础设施维度 | 标准智能体框架 (Baseline) | 接入 HALO Sovereign | 年度净效益 |
| :--- | :---: | :---: | :---: |
| **年度输入词元总量** | `89.61 万亿 (Trillion)` | **`6599 亿 (Billion)`** | **消除 `-88.95 万亿` 输入词元** |
| **年度输出词元总量** | `2.31 万亿 (Trillion)` | **`4614 亿 (Billion)`** | **消除 `-1.85 万亿` 输出词元** |
| **年度推理算力总成本** | **`$247.1M USD / 年`** | **`$6.26M USD / 年`** | **每年直接节省 `$240.8M USD` (约 2.4 亿美元)** |
| **H100 / B200 GPU 集群负载** | `100%` (基准) | **`42.9%` 活跃调用** | **直接释放 `57.1%` GPU 集群容量** |
| **大文件输出截断故障率** | `14.3%` 构建损坏 | **`0.0%` (AST 语法验证)** | **零静默代码损坏** |

---

## 3. 使用您自己的 API Key 运行盲测与自定义代码挑战 (主机零成本 BYOK)

您可以使用自己的 API Key (`VISITOR_API_KEY`) 验证 **HALO Sovereign** 黑盒网关。您的密钥仅在单次请求的内存中瞬时使用，强制开启 `store: false`（零数据留存），绝不落盘存储。

### A) 标准盲测基准套件
```bash
VISITOR_API_KEY="sk-your-api-key" EVALUATOR_ORG="YourCompany" HALO_GATEWAY_URL="https://your-demo-tunnel.example.com" node public_github_client.mjs
```

### B) 实时自定义文件挑战 (使用您本地的真实代码文件测试)
传入您本地任意 `.js` / `.mjs` 文件，实时验证外科手术级函数修改与 `99%` 词元压缩率：
```bash
VISITOR_API_KEY="sk-your-api-key" CUSTOM_FILE="./path/to/your_file.mjs" CUSTOM_SYMBOL="targetFunctionName" CUSTOM_TASK="Add input validation and error handling" node public_github_client.mjs
```

> **企业级 VIP 评估模式：** 在高并发时段，在线网关需提供 `HALO_VIP_TOKEN`。前沿 AI 实验室的首席工程师、基础设施副总裁及战略投资/并购 (CorpDev/M&A) 团队请通过企业邮箱发送邮件至 **[`halo.sovereign@proton.me`](mailto:halo.sovereign@proton.me)** 申请专属 VIP 评估令牌。

---

## 4. 先发明权与原创作者密码学证明 (SHA-256 默克尔根封印)

完整的 16 层专有引擎源代码保存在私有安全库中。下方公开其不可逆的 SHA-256 默克尔根摘要（Merkle Root），作为截至 **2026-10-29** 的先发明权与原创版权的密码学证据：

```text
PROTOCOL: HALO-PRIOR-ART-SHA256-SEAL-V1
MERKLE_ROOT_SHA256: 48ad9b858da084b31267de9190b4c12460e71d16a8ed87f73f4f3d174233e540
```
