---
title: Multi-Paradigm CBIR
tag: computer-vision
kind: Course work
order: 1
featured: true
summary: "A controlled comparison of six content-based image retrieval methods, from handcrafted descriptors to ResNet-18 features, including a new 76-dim descriptor I designed."
status: Completed
period: "Jan 2026 – May 2026"
stack: ["Python", "PyTorch", "ResNet-18", "Gradio", "scikit-learn", "scikit-image"]
links:
  repo: https://github.com/msingh9365/multi-paradigm-cbir
art: cbir
---

## Problem

Content-based image retrieval (CBIR) finds images that look like a query image. Most projects pick one way of describing images and move on. I wanted to know where handcrafted features still hold up against deep CNN embeddings, so I compared several methods under the same conditions.

## Approach

Six retrieval paradigms, all tested the same way:

- **Local Binary Patterns (LBP)**, a classic texture descriptor.
- **Colour descriptor**, 21 dimensions built from HSV, LAB and RGB statistics.
- **Shallow fully-connected network**, as a baseline.
- **Deeper network**, as a second baseline.
- **ResNet-18 features**, using pretrained ImageNet weights.
- **MSTE-RG**, a new 76-dimensional descriptor I designed. It combines multi-scale texture, spatial edge density, DCT coefficients and a Radial Gradient Energy Profile.

## Evaluation

- Metrics: **Precision@K**, **Recall@K** and **mAP**.
- Datasets: **CIFAR-10**, **MNIST** and **Fashion-MNIST**.
- Results can be explored in an interactive **Gradio** dashboard.
