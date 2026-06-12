---
title: "Agentic RAG — 多智能体 GraphRAG 系统"
description: "基于 LangChain/LangGraph 构建的多智能体 RAG 问答系统，支持 FAQ、GraphRAG、Text2Cypher 等多种策略"
tech: ["Python", "LangChain", "LangGraph", "RAG", "Neo4j", "DeepSeek"]
github: "https://github.com/www425/GraphRAG"
image: "/projects/flowchart.png"
date: "2026-03"
---

## Overview

一个基于 **Agentic RAG** 架构的 **Multi-Agent GraphRAG** 系统，使用 LangChain/LangGraph 框架，结合 ReAct 推理模式，支持多种检索与问答策略。

## 核心功能

### FAQ RAG
传统 RAG 管道，支持知识库 FAQ 问答，结合 **GraphRAG** 提升知识关联性。

### Map-Reduce 优化
使用 LangGraph 的 Map-Reduce 模式并行处理，响应时间从 **4.8s** 优化至 **2.1s**，提升 **56%**。

### 结构化输出
基于 Prompt-template + **DeepSeek v3** 的 Few-Shot Prompt 设计，JSON 格式输出，F1 从 **0.82** 提升至 **0.93**。

### Text2Cypher
| 功能 | 说明 |
|------|------|
| 查询模板 | 100+ 条 Cypher 模板 |
| 优化策略 | EXPLAIN / LIMIT 1 |
| 检索方式 | GraphRAG 混合检索 |

### Fallback 机制
| 指标 | 数值 |
|------|------|
| Cypher 失败率 | **0.8%** |
| 自动降级 | FAQ 检索 |
| 回答质量 | **88%** |

## 技术亮点

- **多智能体协作**（Multi-Agent）— 多个 Agent 分工处理不同任务
- **Plan-and-Execute** — 先规划再执行的任务流程
- **MCP 协议集成** — 标准化工具调用接口
