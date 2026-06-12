---
title: "Star NLP — 文本偏见消除系统"
description: "基于 VAE 的文本偏见消除框架，支持 Independence / Separation / Sufficiency 三大标准"
tech: ["Python", "PyTorch", "VAE", "NLP"]
github: "https://github.com/www425/STAR"
image: "/projects/framework.png"
date: "2025-09"
---

## Overview

基于 **Star 框架** 的文本偏见消除系统，通过 VAE（变分自编码器）实现文本表示的偏见消除，在多个偏见评估指标上取得显著提升。

## 核心方法

| 方法 | 说明 |
|------|------|
| **VAE 解耦** | 将文本表示分离为语义信息与敏感属性信息 |
| **偏见标准** | 支持 Independence / Separation / Sufficiency |
| **数据集** | SentimentaDutch |
| **评估指标** | UF-score |

## 实验结果

| 指标 | Baseline | 本方法 |
|------|----------|--------|
| **UF-score** | 68% (DF-LA + INLP) | **47%** |
| **BLIND-MABR** | 0.82 | — |
| **VAE cTPR_rms** | 0.152 | **0.133** |

> UF-score 越低表示偏见消除效果越好，本方法相比基线降低约 **30%**。

## 关键技术

- **VAE** 变分自编码器 — 对文本表示进行解耦
- **公平性约束优化** — 在训练过程中加入偏见约束
- **文本表示解耦** — 分离语义与敏感属性
