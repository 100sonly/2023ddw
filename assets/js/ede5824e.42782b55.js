"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[4665],{3031:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>h});var n=t(7462),s=(t(7294),t(3905)),r=(t(1694),t(3707),t(6533)),m=t(505);const p={sidebar_position:3},o="State Space Search",i={unversionedId:"sm/state-space-search",id:"sm/state-space-search",title:"State Space Search",description:"State machine state space search refers to the process of systematically exploring and navigating through the possible states of a state machine to find an optimal or desired solution.",source:"@site/docs/12-sm/state-space-search.md",sourceDirName:"12-sm",slug:"/sm/state-space-search",permalink:"/2023hong/notes/sm/state-space-search",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SM Abstract Base Class",permalink:"/2023hong/notes/sm/state-machine-abc"}},l={},h=[{value:"Goals",id:"goals",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Defining State-Space Search",id:"defining-state-space-search",level:2},{value:"Search Trees",id:"search-trees",level:2},{value:"Class SearchNode",id:"class-searchnode",level:2},{value:"State Machine for State-Space Search",id:"state-machine-for-state-space-search",level:2}],c={toc:h},k="wrapper";function u(e){let{components:a,...p}=e;return(0,s.kt)(k,(0,n.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"state-space-search"},"State Space Search"),(0,s.kt)("p",null,"State machine state space search refers to the process of systematically exploring and navigating through the possible states of a state machine to find an optimal or desired solution."),(0,s.kt)(m.Z,{mdxType:"ChatBaseBubble"}),(0,s.kt)("h3",{id:"goals"},"Goals"),(0,s.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Apply")," breadth first search to perform state-space search")),(0,s.kt)("admonition",{title:"Keywords",type:"keyword"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"state space search"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"legal inputs"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"state map"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"graph traversal"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"breadth first search"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"queue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"step"))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Previously we have learnt on how we can find data from a graph data structure. We implemented breadth-first search and explore depth-first search algorithm. We can look into this problem from a different angle as a state-space search. Instead of thinking about nodes and edges, we can see it as ",(0,s.kt)("em",{parentName:"p"},"states")," and ",(0,s.kt)("em",{parentName:"p"},"transitions"),". Each node can be thought of as one state and each edge can be thought of as a transition from one state to anther state. We can then apply graph algorithm for our state machines."),(0,s.kt)("p",null,"But what does it mean of doing a state-space search? Remember that we attach every transition from one state to another state with an ",(0,s.kt)("em",{parentName:"p"},"input")," that moves that state machine from the current state to the next state. Doing a state-space search allows us to find a path or ",(0,s.kt)("em",{parentName:"p"},"sequence of inputs")," that bring us from a starting state to a goal state. This means that if I know my goal state of my machine, I can do a search what are the inputs needed to reach that state. This can be used to make our state machine more intelligent through ",(0,s.kt)("em",{parentName:"p"},"planning"),"."),(0,s.kt)("h2",{id:"defining-state-space-search"},"Defining State-Space Search"),(0,s.kt)("p",null,"Let's first define our problem. We can model this state-space search problem as follows. Given the following information:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a set of states the system can be in;"),(0,s.kt)("li",{parentName:"ul"},"a starting state;"),(0,s.kt)("li",{parentName:"ul"},"a goal test, which is a procedure that can be applied to any state, and returns the True if that state is the goal state;"),(0,s.kt)("li",{parentName:"ul"},"a successor function, which takes a state and an action as input, and returns the new state that results from taking the action in that state;"),(0,s.kt)("li",{parentName:"ul"},"and a legal action list, which is just a list of actions that can be executed in this domain\nthe problem is to find a sequence of input that brings us to the goal state given the starting state.")),(0,s.kt)("p",null,"Let's take a look an an example. Consider the case where we have the following states:"),(0,s.kt)(r.Z,{path:t(5489).Z,widthPercentage:"40%",mdxType:"ImageCard"}),(0,s.kt)("p",null,"We do not draw any arrow in the above diagram to simplify the drawing as we assume that the transition is bi-directional. This means that there is a transition from S to A and from A to S."),(0,s.kt)("p",null,"In the above example, we have the set of states:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"G"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mi",{parentName:"mrow"},"H"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"states = \\{`S`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\\}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2018"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}")))))),(0,s.kt)("p",null,"We also need to know the starting state, so let's say state 'S' is the starting state. The goal test is a function that takes in a state as an input and returns True if that state is the goal state. So if we want to reach G starting from S, we can write the following goal test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def goal_test(state):\n    return state == 'G'\n")),(0,s.kt)("p",null,"We can also write it as a lambda function in Python as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"lambda state: state == 'G'\n")),(0,s.kt)("p",null,"The legal actions in this domain can be integers values like ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow"},"\u2026"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0, 1, \\ldots, n-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},"\u2026"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the maximum number of successors in any of the states. The maximum number of successors simply means the maximum number of degrees in the graph. We can find this number by looking at the node (or state) that has the largest number of edges. In this case, state 'D' has the largest number of edges, i.e. 4. So the legal actions are integer values: 0, 1, 2, 3. We can assign, for example, the following transitions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"input 0: transition from D to A"),(0,s.kt)("li",{parentName:"ul"},"input 1: transition from D to B"),(0,s.kt)("li",{parentName:"ul"},"input 2: transition from D to F"),(0,s.kt)("li",{parentName:"ul"},"input 3: transition from D to H")),(0,s.kt)("p",null,"Therefore, we also need a kind of transition maps. If our legal input is integer values, we can simply use a list where the index matches the transition. We can write our transition map as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"statemap = {'S': ['A', 'B'],\n            'A': ['S', 'C', 'D'],\n            'B': ['S', 'D', 'E'],\n            'C': ['A', 'F'],\n            'D': ['A', 'B', 'F', 'H'],\n            'E': ['B', 'H'],\n            'F': ['C', 'D', 'G'],\n            'G': ['F', 'H'],\n            'H': ['D', 'E', 'G']}\n")),(0,s.kt)("p",null,"Notice in the above dictionary that we use list in the same sequence for state D, i.e."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"'D': ['A', 'B', 'F', 'H'],\n")),(0,s.kt)("p",null,"This allows us to have transition as specified above. For example,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"statemap['D'][0] # returns state A\nstatemap['D'][1] # returns state B\nstatemap['D'][2] # returns state F\nstatemap['D'][3] # returns state H\n")),(0,s.kt)("p",null,"Given the above dictionary, we can simply write our successor function as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def statemap_successor(state, action):\n    return statemap[state][action]\n")),(0,s.kt)("p",null,"We may need some additional test to ensure that if an action that does not exist from that current state, it will just remain in the current state. For example, state 'G' has two transitions, we should expect the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(statemap_successor('G', 2)) # output 'G'\n")),(0,s.kt)("p",null,"The above code should output 'G' because there is only two transition and so action 2 which index the third transition does not exist."),(0,s.kt)("h2",{id:"search-trees"},"Search Trees"),(0,s.kt)("p",null,"Our state-space search can be represented as a search tree having the starting state as its root. For example, if we want to search path from state S to state D, we can draw the following search tree."),(0,s.kt)(r.Z,{path:t(4974).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,s.kt)("p",null,"In the above tree, we label the edges with the input action that one takes from one state to another state following the ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," dictionary in the previous section. If we can build this tree, we can find the path from S to D and we know that we need to take the following actions:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Take 0 from S to reach B"),(0,s.kt)("li",{parentName:"ol"},"Take 1 from B to reach D\nor we can also take the following sequence of actions:"),(0,s.kt)("li",{parentName:"ol"},"Take 1 from S to reach A"),(0,s.kt)("li",{parentName:"ol"},"Take 2 from A to reach D")),(0,s.kt)("h2",{id:"class-searchnode"},"Class SearchNode"),(0,s.kt)("p",null,"We can facilitate this search by creating a class called ",(0,s.kt)("inlineCode",{parentName:"p"},"SearchNode")," that contains the information needed to build the search Trees. The UML diagram for ",(0,s.kt)("inlineCode",{parentName:"p"},"SearchNode")," is shown below."),(0,s.kt)("mermaid",{value:"classDiagram\nclass SearchNode{\n    state\n    action\n    parent\n    path()\n    in_path(state)\n    __eq__(other)\n}"}),(0,s.kt)("p",null,"The class has three attributes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"state, which identifies the node for the particular state it represents in the tree"),(0,s.kt)("li",{parentName:"ul"},"action, which stores the action it takes from the parent to reach the current node"),(0,s.kt)("li",{parentName:"ul"},"parent, which stores the reference to the parent node in the search tree")),(0,s.kt)("p",null,"The class has three methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path()")," which returns the path from the root of the tree to the current node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"in_path(state)")," which takes in a state and check if that state is in the path from the root to the current node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"__eq__(other)")," which allows us to use the equality operator in Python to check if two nodes are equal")),(0,s.kt)("p",null,"You will work on the implementation of this class in your Problem Set."),(0,s.kt)("h2",{id:"state-machine-for-state-space-search"},"State Machine for State-Space Search"),(0,s.kt)("p",null,"We have been looking into this search problem from the perspective of state machine. This implies that we can create a state machine class to represent a state machine that does state-space search. This class, however, has unique requirements as you need to make sure you have enough information for the problem. This means that you may want to ensure that such class must provide information about the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"statemap"),", which gives you the transition relationship from one state to another with respect to the legal input"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"legal_inputs"),", which is a set of legal inputs in this domain.")),(0,s.kt)("p",null,"We can enforce this in Python using the Abstract Base Class and creating an ",(0,s.kt)("strong",{parentName:"p"},"abstract property"),". This is a similar concept as how we implement the computed property ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state"),". We can, thus, define the following class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from abc import abstractmethod\n\nclass StateSpaceSearch(StateMachine):\n    @property\n    @abstractmethod\n    def statemap(self):\n        pass\n\n    @property\n    @abstractmethod\n    def legal_inputs(self):\n        pass\n\n    @property\n    @abstractmethod\n    def start_state(self):\n        return self.__start_state\n\n    @start_state.setter\n    @abstrctmethod\n    def start_state(self, value):\n        self.__start_state = value\n\n")),(0,s.kt)("p",null,"In the above definition, ",(0,s.kt)("inlineCode",{parentName:"p"},"StateSpaceSearch")," class inherits from ",(0,s.kt)("inlineCode",{parentName:"p"},"StateMachine")," class and it adds the required property ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"legal_inputs"),". Any state machine class implementing ",(0,s.kt)("inlineCode",{parentName:"p"},"StateSpaceSearch")," now must define these two properties and its getter method. The last two abstract methods that we have is simply the getter and the setter of ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state")," computed property which has to be implemented for all ",(0,s.kt)("inlineCode",{parentName:"p"},"StateMachine")," child class. We created a general implementation that sets and returns the attribute ",(0,s.kt)("inlineCode",{parentName:"p"},"__start_state"),". We use Python name mangling with double underscore at the beginning of the variable to keep this attribute hidden."),(0,s.kt)("p",null,"So now, what we need to do is simply to implement the two abstract methods, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"legal_inputs"),", as well as initializing the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state")," property. For example, we can initialize the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state")," property and implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," property as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class MapSM(StateSpaceSearch):\n\n    def __init__(self, start):\n        self.start_state = start\n\n    @property\n    def statemap(self):\n        statemap = {"S": ["A", "B"],\n                    "A": ["S", "C", "D"],\n                    "B": ["S", "D", "E"],\n                    "C": ["A", "F"],\n                    "D": ["A", "B", "F", "H"],\n                    "E": ["B", "H"],\n                    "F": ["C", "D", "G"],\n                    "H": ["D", "E", "G"],\n                    "G": ["F", "H"]}\n        return statemap\n')),(0,s.kt)("p",null,"Notice that the ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," must be defined in the child class that implements ",(0,s.kt)("inlineCode",{parentName:"p"},"StateSpaceSearch")," because such mapping transition information can be different from one state machine to another. This cannot be defined in the base class."),(0,s.kt)("p",null,"Similarly, the computed property ",(0,s.kt)("inlineCode",{parentName:"p"},"legal_inputs")," can take in the information from ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," and return a set of the legal inputs. Though we may think that the code to create such a set is the same for all state-space search, it actually depends on how one implements the ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," property. If one uses a list as in our case, such set will be a set of integer values. But if one uses a dictionary, the set ",(0,s.kt)("inlineCode",{parentName:"p"},"legal_inputs")," may be a set of other data types used in the key of that dictionary."),(0,s.kt)("p",null,"In this state machine the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state")," is the starting state of our search problem. For example, state 'S' should be initialized as our ",(0,s.kt)("inlineCode",{parentName:"p"},"start_state")," following the previous examples."),(0,s.kt)("p",null,"We also need to define our ",(0,s.kt)("inlineCode",{parentName:"p"},"get_next_values(state, inp)")," method. This method should return the next state and the output of our search transition. In our state-space search, the output is usually the same as the next state, which is what state should the machine go to given the current state and the input action. In fact, this function is exactly what a successor function ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap_successor(state, action)")," does in our previous discussion. This means that you can implement your ",(0,s.kt)("inlineCode",{parentName:"p"},"get_next_values(state, inp)")," method using the information you have from ",(0,s.kt)("inlineCode",{parentName:"p"},"statemap")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"legal_inputs"),". Remember to ensure that if the input is not valid for that current state, it should remain in the current state. And now you have a complete state machine to do state-space search."),(0,s.kt)("p",null,"You can write your breadth-first search algorithm and makes use of the ",(0,s.kt)("inlineCode",{parentName:"p"},"get_next_values()")," of the state machine to find a path from the starting state to the goal state. You will do this in your Problem Set."))}u.isMDXComponent=!0},4974:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/state_search_trees-50e520d5be514e114e428c84ef3da926.png"},5489:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/state_space_map-11c07cbe83c95b6f8f8e9915f832ee3e.png"}}]);