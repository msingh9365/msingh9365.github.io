---
title: Credit Card Fraud Detection
tag: nlp-data
kind: Minor project
order: 5
summary: "A real-time fraud detection pipeline with Spark Streaming and Kafka that filters fraudulent transactions out of live streams."
status: Completed
stack: ["PySpark Streaming", "Kafka", "Docker"]
links:
  repo: https://github.com/msingh9365/CreditCardFraud
art: fraud
---

## Overview

A streaming pipeline that checks card transactions as they arrive and filters out the fraudulent ones.

## How it works

- **Kafka** carries the live stream of transactions.
- **PySpark Streaming** processes the stream and flags fraud in real time.
- Everything runs in **Docker** containers.
