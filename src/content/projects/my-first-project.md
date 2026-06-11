---
title: "Star NLP — 文本偏见消除系统"
description: "基于 VAE 的文本偏见消除框架，支持 Independence / Separation / Sufficiency 三大标准"
tech: ["Python", "PyTorch", "VAE", "NLP"]
github: "https://github.com/www425/STAR"
date: "2025-09"
---

## Overview

基于 **Star 框架** 的文本偏见消除系统，通过 VAE（变分自编码器）实现文本表示的偏见消除。

## 核心方法

- 使用 **VAE** 对文本表示进行解耦，分离语义信息与敏感属性信息
- 支持三种偏见消除标准：**Independence / Separation / Sufficiency**
- 采用 **SentimentaDutch** 数据集，以 **UF-score** 作为评估指标

## 实验结果

- **UF-score** 从基线 68% → 47%（DF-LA + INLP）
- **BLIND-MABR** 基线 UF-score: 0.82
- VAE 的 **cTPR_rms** 达到 0.152 → 0.133

## 关键技术

- VAE 变分自编码器
- 公平性约束优化
- 文本表示解耦
