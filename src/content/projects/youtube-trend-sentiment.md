---
title: YouTube Trend & Sentiment Analysis
tag: nlp-data
kind: Course work
order: 2
featured: true
summary: "A three-stage PySpark pipeline that turns raw, state-wise YouTube video and comment dumps into a queryable trend and sentiment dashboard."
status: Completed
period: "Jan 2026 – May 2026"
stack: ["PySpark", "Delta Lake", "Sentence-BERT", "KeyBERT", "VADER", "FLAN-T5", "Docker", "Streamlit"]
links:
  repo: https://github.com/msingh9365/trending-topics
art: youtube
---

## Problem

Raw YouTube data (videos and comments, split by Indian state) is large, messy and multilingual. The goal was to turn it into something you can ask questions of: what is trending in each state, and how people feel about it.

## Approach

The pipeline has four steps:

1. **Ingest:** load the video and comment dumps, by state.
2. **Process:** clean and validate the data with **PySpark**, then run a multilingual NLP stage:
   - **Sentence-BERT** embeddings
   - **KeyBERT** keyword extraction
   - **VADER** sentiment scoring
   - **FLAN-T5** summarisation
3. **Aggregate:** build state-level topic tables on **Delta Lake**.
4. **Serve:** show the results in a **Streamlit** dashboard.

## Infrastructure

- Containerised with **Docker**.
- Delta Lake tables stored on S3-compatible object storage.
