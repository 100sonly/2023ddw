"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[3997],{9052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=(a(1694),a(3707),a(6533)),o=a(505);const s={sidebar_position:1},l="Basics of Graph",h={unversionedId:"graphs/basics-graph",id:"graphs/basics-graph",title:"Basics of Graph",description:"Graph theory is a mathematical discipline that studies the properties and relationships of graphs, which consist of nodes (vertices) connected by edges, enabling analysis of various real-world systems and phenomena.",source:"@site/docs/05-graphs/basics-graph.md",sourceDirName:"05-graphs",slug:"/graphs/basics-graph",permalink:"/2023hong/notes/graphs/basics-graph",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Week 5: Searching Data",permalink:"/2023hong/notes/category/week-5-searching-data"},next:{title:"Breadth First Search",permalink:"/2023hong/notes/graphs/bfs"}},p={},d=[{value:"Goals",id:"goals",level:3},{value:"What is a Graph?",id:"what-is-a-graph",level:2},{value:"How to Represent a Graph in a Code?",id:"how-to-represent-a-graph-in-a-code",level:2},{value:"Adjacency Matrix",id:"adjacency-matrix",level:3},{value:"Adjacency List",id:"adjacency-list",level:3},{value:"Using Object Oriented Programming",id:"using-object-oriented-programming",level:3}],c={toc:d},m="wrapper";function g(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics-of-graph"},"Basics of Graph"),(0,r.kt)("p",null,"Graph theory is a mathematical discipline that studies the properties and relationships of graphs, which consist of nodes (vertices) connected by edges, enabling analysis of various real-world systems and phenomena."),(0,r.kt)(o.Z,{mdxType:"ChatBaseBubble"}),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"Dictionary")," to represent graph"),(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("strong",{parentName:"li"},"graph"),", ",(0,r.kt)("strong",{parentName:"li"},"vertices"),", ",(0,r.kt)("strong",{parentName:"li"},"edges")," and ",(0,r.kt)("strong",{parentName:"li"},"weights")),(0,r.kt)("li",{parentName:"ul"},"Differentiate ",(0,r.kt)("strong",{parentName:"li"},"directed")," and ",(0,r.kt)("strong",{parentName:"li"},"undirected")," graphs"),(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("strong",{parentName:"li"},"paths")),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Vertex")," class and a Graph class"),(0,r.kt)("li",{parentName:"ul"},"Represent graphs using ",(0,r.kt)("strong",{parentName:"li"},"adjacency-list")," representation or ",(0,r.kt)("strong",{parentName:"li"},"adjacency-matrix")," representation")),(0,r.kt)("admonition",{title:"Keywords",type:"keyword"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graph"),",",(0,r.kt)("inlineCode",{parentName:"p"},"adjacency matrix"),",",(0,r.kt)("inlineCode",{parentName:"p"},"adjacency list"),",",(0,r.kt)("inlineCode",{parentName:"p"},"vertex"),",",(0,r.kt)("inlineCode",{parentName:"p"},"neighbours"),",",(0,r.kt)("inlineCode",{parentName:"p"},"edge"),",",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),",",(0,r.kt)("inlineCode",{parentName:"p"},"directional edge"))),(0,r.kt)("h2",{id:"what-is-a-graph"},"What is a Graph?"),(0,r.kt)("p",null,"In previous sections, we have worked with various algorithms and data. For example, we did sorting algorithm in a sequence of data of a list or array-like type. List and array is one kind of data where the item has relationship only with its previous and next item in a sequence. Stack and Queues are another kind of data structures. Even with these two, each item is related only in linear fashion, either with the next one at the top of the Stack or with the next in the sequence of the Queue. A Graph allows more relationship to be represented between each item. Two examples of graph data structures are shown below."),(0,r.kt)(i.Z,{path:a(5371).Z,widthPercentage:"30%",mdxType:"ImageCard"}),(0,r.kt)(i.Z,{path:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Control-flow-graph-ex.svg/753px-Control-flow-graph-ex.svg.png",widthPercentage:"50%",mdxType:"ImageCard"}),(0,r.kt)("p",null,"In the first example, the graph represent a kind of connection between places like in a map. With this kind of data, we can find a path from one place to another place or finding the shortest distance between two places. In the second example, the graph represent the control flow of a computer program. Compiler can use this information to optimize the code. Both are a Graph data type that represent different things. We can define a few things when dealing with a Graph."),(0,r.kt)(i.Z,{path:a(8999).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vertex"),': A vertex is a node that is connected by edges in a graph. A vertex can have a name which is also called its "key". In the above example, V1, V2, V3, etc are the vertices.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Edge"),": An edge in the figure above is represented by the lines connecting two vertices. An edge can be uni-directinal or bi-directional. The direction is usually represented by the arrow. Bi-directional edges usually do not have arrow heads. In the above examples, E1, E2, E3, etc are edges. Note that E1 and E6 are bi-directional while the rest are uni-directional.")),(0,r.kt)("h2",{id:"how-to-represent-a-graph-in-a-code"},"How to Represent a Graph in a Code?"),(0,r.kt)("p",null,"In the previous section we show some examples how real-world data like train stations or even a computer code can be represented as a graph. In this section we would like to discuss how such graphs are written in a computer code. The main information needed by the computer is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"what are the vertices"),(0,r.kt)("li",{parentName:"ul"},"what are the edges"),(0,r.kt)("li",{parentName:"ul"},"how the vertices are connected by the edges")),(0,r.kt)("h3",{id:"adjacency-matrix"},"Adjacency Matrix"),(0,r.kt)("p",null,"One way to represent this is to use an ",(0,r.kt)("strong",{parentName:"p"},"Adjencency Matrix"),". In this matrix, if there is a connection between one vertex to another, the cell between that row and column is represented by some number, e.g. 1 instead of 0 as when there is no connection. For example, the last graph above can be written in the following matrix:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"V1"),(0,r.kt)("th",{parentName:"tr",align:null},"V2"),(0,r.kt)("th",{parentName:"tr",align:null},"V3"),(0,r.kt)("th",{parentName:"tr",align:null},"V4"),(0,r.kt)("th",{parentName:"tr",align:null},"V5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V4"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Note the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The connection from vertex ",(0,r.kt)("em",{parentName:"li"},"u")," to vertex ",(0,r.kt)("em",{parentName:"li"},"v")," is represented by a non-zero value at row ",(0,r.kt)("em",{parentName:"li"},"u")," and column ",(0,r.kt)("em",{parentName:"li"},"v"),"."),(0,r.kt)("li",{parentName:"ul"},"For example, there is an edge from V1 to V2, so there is a 1 entry at row V1 and column V2. Similarly, there is an edge from V4 to V3 and this is represented by a 1 at row V4 and column V3."),(0,r.kt)("li",{parentName:"ul"},"If the edge is bi-directional, we have a symmetry in the entry. For example, V1 is connected to V2 with a bi-directional edge. We see a non-zero entry at row V1 and column V2 as well as row V2 and column V1. Similarly between V2 and V3.")),(0,r.kt)("p",null,"The advantage of this representation is that it is simple and intuitive. The only thing is that it may end up in a sparse matrix where most of the entry are zeros and only a few non-zero entry. So this is good when the number of edges is large such as when every vertex is connected to every other vertices."),(0,r.kt)("h3",{id:"adjacency-list"},"Adjacency List"),(0,r.kt)("p",null,"Another way to represent a graph is to use ",(0,r.kt)("strong",{parentName:"p"},"adjacency list"),". This is more suitable when the number of edges is not large. We can use a dictionary for this purpose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"graph1 = {'V1': ['V2', 'V5'],\n          'V2': ['V1', 'V3', 'V4'],\n          'V3': ['V2'],\n          'V4': ['V1', 'V3'],\n          'V5': ['V4']}\n")),(0,r.kt)("p",null,"Notice that the keys are all the vertices in the graph and the value of the dictionary is a list of all the adjacent vertices connected to that particular vertex. For example, vertex V1 is connected to two other vertices V2 and V5. In fact, since there is no particular sequence for the adjacent vertices, you need not use a list and can use a dictionary instead as in the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"graph1 = {'V1': {'V2': 1, 'V5': 1},\n          'V2': {'V1': 1, 'V3': 1, 'V4': 1},\n          'V3': {'V2': 1 },\n          'V4': {'V1': 1, 'V3': 1},\n          'V5': {'V4': 1}}\n")),(0,r.kt)("p",null,"The value in the dictionary of the adjacent vertices are all 1 for this example, but they need not be. These values are called the ",(0,r.kt)("strong",{parentName:"p"},"weights")," or the ",(0,r.kt)("strong",{parentName:"p"},"costs"),". You can assign different weights. For example, in the graph for the MRT train, you can assign more cost to connection between Tampines Downtown Line to Pasir Ris or Simei East West Line if passanger has to go out from the MRT station from one line to the other line."),(0,r.kt)("h3",{id:"using-object-oriented-programming"},"Using Object Oriented Programming"),(0,r.kt)("p",null,"You have learnt Object Oriented programming in the previous week. We can apply this programming concept to represent a graph. We can create two classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Vertex")," class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph")," class")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," class is similar to each entry in the dictionary. This class contains information on that particular vertex and who are the neighbouring or adjacent vertices connected this particular vertex. This class can also contains the weights of the connection between this vertex to its neighbours. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph")," class, on the other hand, contains the list of all the vertices in the graph. Each of this vertex is of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex"),". We can draw the UML diagram of these two classes as follows."),(0,r.kt)("mermaid",{value:"classDiagram\n    Graph *-- Vertex"}),(0,r.kt)("br",null),"The above UML diagram shows that a `Graph` is composed of one or more `Vertex` objects. This is another _composition_ relationship between two classes.",(0,r.kt)("p",null,"We can specify the attributes and methods for both classes as shown in the image below."),(0,r.kt)("mermaid",{value:"classDiagram\nclass Graph{\n    vertices\n    add_vertex(id)\n    get_vertex(id)\n    add_edge(start_id, end_id, weight)\n    get_neighbours(id)\n    get_num_vertices()\n}\nclass Vertex{\n    id\n    neighbours\n    add_neighbour(neighbour_vertex,weight)\n    get_neighbours()\n    get_weight(neighbour_vertex)\n}"}),(0,r.kt)("br",null),"The class `Graph` has an attribute called `vertices`. This attribute contains all the vertices in the graph where each vertex is of the type `Vertex`. This class has several methods like how to create or retrieve a `Vertex` object in the graph, add an edge between two vertices given their starting and ending `id`s. It may also have some other helper methods like to get all the neighbouring vertices of a given `Vertex` or to get the number of vertices in the graph. You can design some other methods but these are some of the common operations we may want to perform with a graph.",(0,r.kt)("p",null,"The class ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," has two attributes. The first one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or the label for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object and the second one is its neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," objects. The class has some basic operation such as to add a neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," to the current ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object, or to get all the neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," objects of the current Vertex. Lastly, it also has a method to get the weight of the edge to the neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object. Similarly, you can think of some other operations of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object that may not be listed above."))}g.isMDXComponent=!0},8999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Graphs-e656b2ae8fa3d87dcb0f8a291852e66b.png"},5371:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MRT_Train-cd89106da00c927ac48ff3792b34ebc2.png"}}]);