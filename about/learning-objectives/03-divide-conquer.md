---
sidebar_position: 3
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 3: Divide and Conquer

- Solve problems using **recursion**
- Identify problems that has recursive solutions
- Explain and implement **merge sort** algorithm
- Derive solution of **recurrence** of merge sort using recursion-tree method
- Measure computation time of merge sort and **compare** it with the other sort algorithms

<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    A((Week 3<br>Recursion and Mergesort)) --> |learns| ALGO((Algorithm))
    ALGO --> |learns| C((Complexity))
    ALGO --> |learns| R((Recursion))
    ALGO --> |learns| S((Sorting))
    C  --> |computes| CT((Computational Time))
    R --> |may use| HF((Helper Function))
    R --> |has| CS((cases))
    S --> |learns| MS((Mergesort))
    CT --> |draw| RT((Recursive Tree))
    CT --> |is| EXP((exponential))
    CT --> |is| LL((Log Linear))
    MS --> |uses| R
    CS --> |uses| IE((if-else))
    CS --> |has| BASE((base))
    CS --> |is| REC((recursive))
    RT --> |for| TOH((Tower of Hanoi))
    RT --> |for| MS
    LL --> |for| MS
    TOH --> |uses| R
    CT --> |for| R
```

<!-- <ImageCard path={"https://drive.google.com/uc?export=view&id=1TRve3OUUgiqjE8DvUDA4breOvj6pmqK2"} widthPercentage="100%"/> -->