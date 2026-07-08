(function(){
  "use strict";
  
  const BANK = {
    html: {
      label: "HTML", iconClass: "fab fa-html5",
      easy: [
        ["What does HTML stand for?", ["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Tech Making Language"], 0],
        ["Who is making the Web standards?", ["The World Wide Web Consortium (W3C)","Google","Mozilla","Microsoft"], 0],
        ["Choose the correct HTML element for the largest heading:", ["&lt;heading&gt;","&lt;h6&gt;","&lt;h1&gt;","&lt;head&gt;"], 2],
        ["What is the correct HTML element for inserting a line break?", ["&lt;br&gt;","&lt;lb&gt;","&lt;break&gt;","&lt;next&gt;"], 0],
        ["Which HTML attribute is used to define inline styles?", ["font","class","styles","style"], 3],
        ["What is the correct HTML for creating a hyperlink?", ["&lt;a url='url'&gt;Text&lt;/a&gt;","&lt;a&gt;url&lt;/a&gt;","&lt;a href='url'&gt;Text&lt;/a&gt;","&lt;hyperlink&gt;url&lt;/hyperlink&gt;"], 2],
        ["Which character is used to indicate an end tag?", ["^","*","/","<"], 2],
        ["How can you make a numbered list?", ["&lt;ul&gt;","&lt;ol&gt;","&lt;list&gt;","&lt;dl&gt;"], 1],
        ["How can you make a bulleted list?", ["&lt;ol&gt;","&lt;list&gt;","&lt;ul&gt;","&lt;dl&gt;"], 2],
        ["What is the correct HTML for declaring page metadata containers?", ["&lt;meta&gt;","&lt;head&gt;","&lt;header&gt;","&lt;data&gt;"], 1],
        ["Which HTML element is used to display a scalar measurement within a known range?", ["&lt;gauge&gt;","&lt;range&gt;","&lt;meter&gt;","&lt;measure&gt;"], 2],
        ["What is the correct HTML element for playing audio files?", ["&lt;sound&gt;","&lt;audio&gt;","&lt;music&gt;","&lt;play&gt;"], 1],
        ["The HTML global attribute 'contenteditable' is used to:", ["Specify elements that copy content","Define editable content spaces","Validating standard structures","Declare secure variables"], 1],
        ["Which HTML element handles container structure for site navigation?", ["&lt;nav&gt;","&lt;navigate&gt;","&lt;links&gt;","&lt;menu&gt;"], 0],
        ["Which HTML input type defines a slider control?", ["slider","controls","range","number"], 2]
      ],
      medium: [
        ["In HTML, which attribute specifies an alternate text for an image if it cannot be displayed?", ["title","alt","src","longdesc"], 1],
        ["Which HTML element is used to specify a footer for a document or section?", ["&lt;bottom&gt;","&lt;section-foot&gt;","&lt;footer&gt;","&lt;foot&gt;"], 2],
        ["Is the semantic tag &lt;canvas&gt; element used to display 3D graphic models natively without scripts?", ["Yes","No, it requires scripting via JS","Only in Google Chrome","Only for basic static image links"], 1],
        ["Which HTML element defines navigation links?", ["&lt;nav&gt;","&lt;navigate&gt;","&lt;bar&gt;","&lt;links&gt;"], 0],
        ["What is the correct HTML element for playing video files?", ["&lt;media&gt;","&lt;movie&gt;","&lt;video&gt;","&lt;play&gt;"], 2],
        ["Which HTML element is used to specify a header for a document or section?", ["&lt;head&gt;","&lt;header&gt;","&lt;top&gt;","&lt;section-head&gt;"], 1],
        ["The HTML5 &lt;figure&gt; element is commonly paired with which element to provide descriptions?", ["&lt;figcaption&gt;","&lt;desc&gt;","&lt;label&gt;","&lt;summary&gt;"], 0],
        ["Which attribute keeps an input field from accepting empty values during submissions?", ["validate","secure","required","active"], 2],
        ["Which attribute drops hints within input spaces before typing?", ["value","placeholder","text","hint"], 1],
        ["What target value opens web anchors in independent browser workspaces?", ["_self","_top","_blank","_parent"], 2],
        ["Which HTML element represents self-contained compositions like forum posts or blogs?", ["&lt;section&gt;","&lt;div&gt;","&lt;article&gt;","&lt;aside&gt;"], 2],
        ["Which attribute changes standard form collection methods from GET to data-payload arrays?", ["action","enctype","method","process"], 2],
        ["Which markup tag targets blockquotes with standalone container spacing?", ["&lt;q&gt;","&lt;blockquote&gt;","&lt;cite&gt;","&lt;code&gt;"], 1],
        ["What tag structure is used to embed code snippets safely with literal formatting spacing?", ["&lt;pre&gt;&lt;code&gt;","&lt;snippet&gt;","&lt;text&gt;","&lt;format&gt;"], 0],
        ["Which attribute maps form input names for backend processing endpoints?", ["id","class","name","value"], 2]
      ],
      hard: [
        ["What does the 'defer' attribute do when loading external scripts?", ["Executes the script immediately","Delays execution until parsing completes","Downloads script after window onload","Loads script on user interaction"], 1],
        ["Which attribute links an input directly to a predefined &lt;datalist&gt; dropdown element?", ["list","options","choices","data"], 0],
        ["What is the significance of the HTML5 'async' attribute on script tags?", ["Loads scripts synchronously","Executes script while parsing continues asynchronously","Delays script until page is fully complete","Forces background parsing compilation threads"], 1],
        ["Which element explicitly isolates parts of text that might be formatted in a different direction?", ["&lt;bdo&gt;","&lt;bdi&gt;","&lt;direction&gt;","&lt;isolate&gt;"], 1],
        ["What does the 'srcset' attribute do on an image tag?", ["Links to JavaScript source arrays","Allows defining alternative source layouts per responsive breakpoints","Specifies tracking codes","Loads high-res fallbacks sequentially"], 1],
        ["Which element group marks structural tables explicitly for screen readers?", ["&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;","&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;","&lt;row&gt;, &lt;cell&gt;, &lt;header&gt;","&lt;caption&gt;, &lt;summary&gt;"], 0],
        ["Which attribute natively provides descriptive summaries for assistive screen-reading technologies?", ["aria-describedby","title","alt-summary","role-description"], 0],
        ["The HTML5 Global attribute 'draggable' relies on which underlying engine interaction?", ["Native Web Sockets API","Drag and Drop Web API interaction","Pure CSS translation coordinates","Canvas rendering calls"], 1],
        ["Which metadata markup target blocks search indexing crawlers directly?", ["&lt;meta name='robots' content='noindex'&gt;","&lt;meta source='index' lock='true'&gt;","&lt;meta crawler='block'&gt;","&lt;meta configuration='private'&gt;"], 0],
        ["What does the HTML5 'ping' attribute do on anchor elements?", ["Keeps connection alive","Sends small asynchronous POST payloads for analytics tracking","Validates secure ports","Measures distance latency"], 1],
        ["Which tag group sets structural columns for batch width modification?", ["&lt;colgroup&gt; &lt;col&gt;","&lt;table-columns&gt;","&lt;grid&gt;","&lt;flex-col&gt;"], 0],
        ["What interface standard uses data properties like 'data-*' natively in JavaScript?", ["element.dataset","element.properties","element.attributes","element.data"], 0],
        ["Which semantic structure signals sidebar compositions tangential to primary articles?", ["&lt;section&gt;","&lt;aside&gt;","&lt;div&gt;","&lt;nav&gt;"], 1],
        ["Which element shows fine-print legal disclosures or dynamic updates natively?", ["&lt;small&gt;","&lt;sub&gt;","&lt;span&gt;","&lt;footer&gt;"], 0],
        ["What attribute value on a form is required to upload files via input type='file'?", ["application/x-www-form-urlencoded","multipart/form-data","text/plain","xml/multipart"], 1]
      ]
    },
    css: {
      label: "CSS", iconClass: "fab fa-css3-alt",
      easy: [
        ["What does CSS stand for?", ["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Colorful Style Sheets"], 0],
        ["Which HTML tag is used to define an internal style sheet?", ["&lt;script&gt;","&lt;css&gt;","&lt;style&gt;","&lt;link&gt;"], 2],
        ["Which HTML attribute is used to reference an external style sheet?", ["href","rel","src","link"], 0],
        ["Which is the correct CSS syntax?", ["body {color: black;}","{body;color:black;}","body:color=black;","body:color=black"], 0],
        ["How do you insert a comment in a CSS file?", ["// this is a comment","' this is a comment","/* this is a comment */","// this is a comment //"], 2],
        ["Which property is used to change the background color?", ["background-color","color","bgcolor","background-style"], 0],
        ["How do you add a background color for all heading elements?", ["h1.all {background-color:#FFF;}","h1 {background-color:#FFF;}","all.h1 {background-color:#FFF;}","h1:background-color:#FFF;"], 1],
        ["Which CSS property is used to change the text color of an element?", ["text-color","fgcolor","color","font-color"], 2],
        ["Which CSS property controls the text size?", ["font-style","text-size","font-size","text-style"], 2],
        ["What is the correct CSS syntax for making all paragraph elements bold?", ["p {font-weight:bold;}","p {text-size:bold;}","p {font-style:bold;}","p style='font-size:bold;'"], 0],
        ["How do you display hyperlinks without an underline?", ["a {text-decoration:none;}","a {underline:none;}","a {text-underline:false;}","a {text-decoration:no-underline;}"], 0],
        ["Which property capitalization scheme controls standard string casing alterations?", ["text-transform","text-style","font-variant","font-case"], 0],
        ["Which font configuration option manages font variant displays like italics?", ["font-weight","font-style","font-variant","font-family"], 1],
        ["How do you select an element with id 'demo'?", ["demo",".demo","#demo","*demo"], 2],
        ["How do you select elements with class name 'test'?", ["#test","test",".test","*test"], 2]
      ],
      medium: [
        ["What is the default value of the position property?", ["relative","fixed","absolute","static"], 3],
        ["How do you select all p elements inside a div element?", ["div p","div.p","div + p","div > p"], 0],
        ["How do you select a p element that is placed immediately after a div element?", ["div p","div ~ p","div + p","div > p"], 2],
        ["What CSS property manages layer ordering overlapping structures dynamically?", ["z-index","layer-order","position-weight","index-level"], 0],
        ["Which layout configuration turns items into self-aligning flex grids?", ["display: box","display: block-flex","display: grid","display: flex"], 3],
        ["Which property handles content distributions along primary flexbox direction flows?", ["align-items","justify-content","flex-wrap","align-content"], 1],
        ["Which property controls multi-line wrapping structures within flexible rows?", ["flex-wrap","flex-flow","overflow","white-space"], 0],
        ["How do you make a list that lists its items with squares?", ["list-type: square","list-style-type: square","list-style: square-box","list: square"], 1],
        ["What is the correct selector syntax targeting every unchecked input element?", ["input:not(:checked)","input:unchecked","input::disabled","input:checked(false)"], 0],
        ["Which box model system calculation keeps dimension widths accurate against paddings?", ["box-sizing: border-box","box-sizing: content-box","dimension: force","sizing-model: standard"], 0],
        ["What value hides structural elements completely without taking any page positioning layout footprint space?", ["display: none","visibility: hidden","opacity: 0","overflow: hidden"], 0],
        ["What layout attribute places element cards floating out from natural block flows?", ["float","position","clear","align"], 0],
        ["What shorthand property manages margin sizing structures across all card profiles sequentially?", ["padding","margin","border","outline"], 1],
        ["What responsive configuration method dynamically targets media query viewport break scopes?", ["@media","@responsive","@viewport","@queries"], 0],
        ["What color declaration standard handles alpha transparency adjustments directly?", ["Hex strings","RGB","RGBA","HSL"], 2]
      ],
      hard: [
        ["What is the specificity value of a single ID selector?", ["0,1,0,0","0,0,1,0","0,0,0,1","1,0,0,0"], 0],
        ["Which CSS property is used to look for text-overflow behaviors and truncate strings via ellipses?", ["text-overflow: ellipsis","overflow-wrap: break-word","text-wrap: dot-dot-dot","string-clip: true"], 0],
        ["The 'ch' absolute length system unit represents sizing values scaled to:", ["The width of the zero (0) character","The primary element base viewport block height","Character collection string density calculations","Standard browser channel heights"], 0],
        ["What target value creates self-contained block formatting contexts without structural layout clipping overflow leaks?", ["overflow: clip","display: flow-root","contain: strict","position: absolute"], 1],
        ["Which attribute function parses variable expressions dynamically inside rule parameters?", ["var()","calc()","env()","attr()"], 0],
        ["What layout distribution engine values implement implicit grid templates auto tracks?", ["grid-auto-flow","grid-template-areas","grid-column-gap","grid-basis"], 0],
        ["Which selector isolates functional states when clicking interaction targets dynamically active?", [":active",":focus-within",":visited",":hover"], 0],
        ["What is the primary difference between translate() configurations over standard absolute coordinate shifts?", ["Translates do not trigger heavy browser layout invalidation redraw computations","Translates break document flow spacing boundaries entirely","Coordinates require absolute positions","There are no structural operational rendering differences"], 0],
        ["What declaration handles hardware-accelerated rendering configurations explicitly?", ["will-change","transform-style: preserve-3d","backface-visibility","display: grid"], 0],
        ["Which pseudoclass isolates structural listings matching specific formulas like every third entry?", [":nth-child(3n)",":nth-of-type(odd)",":only-child",":index(3)"], 0],
        ["What filter function processes monochrome color spectrum balance mappings natively?", ["grayscale()","hue-rotate()","invert()","opacity()"], 0],
        ["What property isolates stacking context hierarchies without relying on explicit index scales?", ["isolation: isolate","z-index: auto","will-change: transform","mix-blend-mode: normal"], 0],
        ["What layout properties configure elastic stretch constraints along grid items?", ["grid-template-columns: repeat(auto-fit, minmax())","flex-shrink: 0","box-flex: 1","auto-adjust: true"], 0],
        ["Which shorthand manages transition animations parameter configurations synchronously?", ["transition","animation-delay","transform","keyframes"], 0],
        ["Which property changes the shape of background clipping spaces explicitly?", ["clip-path","mask-image","border-radius","background-clip"], 0]
      ]
    },
    js: {
      label: "JavaScript", iconClass: "fab fa-js",
      easy: [
        ["Inside which HTML element do we put the JavaScript?", ["&lt;scripting&gt;","&lt;javascript&gt;","&lt;script&gt;","&lt;js&gt;"], 2],
        ["What is the correct JavaScript syntax to change the content of an element with id='demo'?", ["document.getElementById('demo').innerHTML = 'Hello World!';","document.p.innerHTML = 'Hello World!';","$('#demo').content('Hello World!');","element('demo').value = 'Hello World!';"], 0],
        ["Where is the correct place to insert a JavaScript?", ["The head section","The body section","Both sections work","The footer section"], 2],
        ["What is the correct syntax for referring to an external script called 'xxx.js'?", ["&lt;script href='xxx.js'&gt;","&lt;script name='xxx.js'&gt;","&lt;script src='xxx.js'&gt;","&lt;script file='xxx.js'&gt;"], 2],
        ["How do you write 'Hello World' in an alert box?", ["msg('Hello World');","alertBox('Hello World');","alert('Hello World');","msgBox('Hello World');"], 2],
        ["How do you create a function in JavaScript?", ["function:myFunction()","function myFunction()","function = myFunction()","new Function()"], 1],
        ["How do you call a function named 'myFunction'?", ["call myFunction()","myFunction()","call function myFunction()","execute myFunction()"], 1],
        ["How to write an IF statement in JavaScript?", ["if i = 5 then","if (i == 5)","if i == 5 then","if i = 5"], 1],
        ["How to write an IF statement for executing some code if 'i' is NOT equal to 5?", ["if (i <> 5)","if i != 5 then","if (i != 5)","if i <> 5"], 2],
        ["How does a WHILE loop start?", ["while (i <= 10)","while i = 1 to 10","while (i <= 10; i++)","while i <= 10"], 0],
        ["How does a FOR loop start?", ["for (i = 0; i <= 5)","for (i <= 5; i++)","for (let i = 0; i <= 5; i++)","for i = 1 to 5"], 2],
        ["How can you add a comment in a JavaScript?", ["' This is a comment","// This is a comment","","* This is a comment"], 1],
        ["What is the correct way to write a JavaScript array?", ["let colors = 'red', 'green', 'blue'","let colors = ['red', 'green', 'blue']","let colors = (1:'red', 2:'green', 3:'blue')","let colors = 1=('red'), 2=('green')"], 1],
        ["How do you round the number 7.25, to the nearest integer?", ["Math.round(7.25)","Math.rnd(7.25)","round(7.25)","Math.floor(7.25)"], 0],
        ["Which operator is used to assign a value to a variable?", ["=","*","-","=="], 0]
      ],
      medium: [
        ["Which operator is used to test for both value and type equality constraints?", ["==","=","===","!="], 2],
        ["What will the following code return: Boolean(10 > 9)", ["true","false","NaN","undefined"], 0],
        ["Is JavaScript case-sensitive?", ["Yes","No","Only variables are","Only function interfaces are"], 0],
        ["Which JavaScript method removes the last element from an array?", ["pop()","push()","shift()","split()"], 0],
        ["Which method adds new elements to the tail end of an array sequence?", ["unshift()","push()","concat()","append()"], 1],
        ["How do you find the number with the highest value of x and y?", ["Math.max(x, y)","Math.ceil(x, y)","ceil(x, y)","Math.high(x, y)"], 0],
        ["What is the result of '2' + 2 in standard JS processing coercion rules?", ["4","22","NaN","Error"], 1],
        ["What evaluation response triggers when querying typeof null?", ["'null'","'object'","'undefined'","'value'"], 1],
        ["Which array iteration method transformations map results cleanly into arrays of equal lengths?", ["forEach()","filter()","map()","reduce()"], 2],
        ["What interface standard natively catches and handles JSON decoding operations safely?", ["JSON.parse()","JSON.stringify()","JSON.decode()","Data.parse()"], 0],
        ["What variable declaration keyword limits contextual scope usage structures strictly to blocks?", ["var","let","global","context"], 1],
        ["What scope state pattern binds variables safely inside child routines keeping structures closed?", ["Closures","Classes","Prototypes","Promises"], 0],
        ["Which structural method forces array groupings into standalone text strings?", ["join()","concat()","slice()","push()"], 0],
        ["What keyword stops execution progression pathways completely inside switch control stacks?", ["exit","stop","break","return"], 2],
        ["Which error monitoring structure safely executes code sequences despite functional issues occurring?", ["try...catch","if...else","assert","onError"], 0]
      ],
      hard: [
        ["What is the primary difference between a Shallow Copy over a Deep Copy?", ["Shallow copies copy references instead of creating standalone copies of nested object structures","Deep copies apply exclusively to functional arrays","Shallow copies break immutable variable locks","There are no functional code runtime differences"], 0],
        ["What problem does the Event Loop solve in asynchronous execution frameworks?", ["Manages execution order of multiple asynchronous callback scripts via execution stacks","Locks memory management tracks safely","Compiles scripts into low-level device processing routines","Accelerates array indexing loops"], 0],
        ["What data layout behavior outputs when using the 'this' keyword within standalone standard functions under strict execution configurations?", ["Window Object","undefined","Global Execution Array","Error Exception Trigger"], 1],
        ["What utility allows mapping asynchronous operations sequentially without descending into deep nested tracking structures?", ["Promises","Callbacks","Prototypes","Generators"], 0],
        ["What method configures context scopes permanently across target objects without triggering immediate function calls?", ["bind()","call()","apply()","execute()"], 0],
        ["What functional data engine maintains memory records tracking references safely without blocking garbage collectors?", ["WeakMap","Map","Set","WeakArray"], 0],
        ["What structural execution technique accelerates processing routines by memoizing function outputs?", ["Currying","Caching / Memoization","Deconstruction","Bubbling"], 1],
        ["What process isolates internal state structures using unique reference keys built dynamically?", ["Symbol","String","UUID","Object.freeze()"], 0],
        ["What DOM manipulation phenomenon propagates interaction clicks sequentially up parent levels?", ["Event Bubbling","Event Capturing","Event Broadcast","DOM Propagation"], 0],
        ["Which built-in API tracks configuration state adjustments on active base objects interactively via trap scripts?", ["Proxy","Reflect","Observer","Object.watch()"], 0],
        ["What modifier keyword flags continuous loops generator tracks dynamically?", ["function*","async function","yield","defer"], 0],
        ["What method blocks structural adjustments or variable modifications from affecting target objects completely?", ["Object.freeze()","Object.seal()","Object.lock()","Object.protect()"], 0],
        ["What runtime exception occurs when code tracking exceeds maximum call limits sequentially?", ["RangeError: Maximum call stack size exceeded","ReferenceError","TypeError","InternalError"], 0],
        ["What is the fundamental difference between standard function structures and Arrow functions?", ["Arrow functions do not bind independent context tracking variables for 'this'","Arrow functions are compiled faster","Standard functions require return statements always","Arrow functions lack arrays"], 0],
        ["Which syntax simplifies unpacking property matching attributes down into individual isolated variables cleanly?", ["Destructuring assignment","Spread operators","Rest parameters","Template strings"], 0]
      ]
    },
    backend: {
      label: "Backend", iconClass: "fas fa-server",
      easy: [
        ["What does API stand for?", ["Application Programming Interface","Access Program Installation","Automated Protocol Integration","Advanced Processing Interface"], 0],
        ["Which HTTP method is most commonly used to fetch data from a server?", ["POST","GET","PUT","DELETE"], 1],
        ["Which HTTP status code represents a successful request return?", ["200 OK","404 Not Found","500 Server Error","302 Redirect"], 0],
        ["What does SQL stand for?", ["Structured Query Language","System Query Level","Sequential Query Link","Standard Query Language"], 0],
        ["What is Node.js?", ["A frontend UI style framework","A server-side JavaScript runtime environment","A database engine type","A specific compilation protocol"], 1],
        ["Which database type structures collections without tabular relational schemas natively?", ["NoSQL / Document Database","Relational Database","SQL Server","Spreadsheet System"], 0],
        ["What port is default standard for unprotected HTTP web server traffic?", ["80","443","21","8080"], 0],
        ["What port is default standard for secure HTTPS encrypted server tunnels?", ["80","22","443","3000"], 2],
        ["Which core structural file maintains package installation manifests inside Node configurations?", ["package.json","index.js","config.xml","modules.config"], 0],
        ["What standard text data encoding package handles platform communication protocols cleanly?", ["JSON","XML","CSV","Binary Arrays"], 0],
        ["What database management interface standard uses tabular row configurations natively?", ["Relational Database (RDBMS)","MongoDB","Redis Cache","Local Storage Array"], 0],
        ["Which HTTP status code fires when requested structural endpoint links are missing on targets?", ["404 Not Found","403 Forbidden","502 Bad Gateway","201 Created"], 0],
        ["What does URL stand for?", ["Uniform Resource Locator","Universal Route Link","Unified Response Array","User Routine Log"], 0],
        ["Which module delivery tool standard manages package updates under Node.js infrastructures?", ["npm","composer","pip","git"], 0],
        ["What technology creates scalable containers isolating independent microservice platforms cleanly?", ["Docker","Apache Server","Nginx Router","Express App Engine"], 0]
      ],
      medium: [
        ["What is middleware in Express.js frameworks?", ["Functions that execute between receiving requests and sending final output data arrays","Standalone secondary thread workers","Database modeling wrappers","Template building scripts"], 0],
        ["Which HTTP method is best suited for completely replacing resource states idempotently?", ["POST","PUT","PATCH","OPTIONS"], 1],
        ["What is the main advantage of asymmetric hashing algorithms during user password configuration tasks?", ["They are one-way transformations keeping base values secure","They compress database memory usage footprint sizes","They run faster than raw validation scripts","They match plain string profiles natively"], 0],
        ["Which HTTP token delivery system secures profile authentication headers state-free?", ["JWT (JSON Web Token)","Session Cookies","Basic Auth Strings","Local Encryption Arrays"], 0],
        ["What architectural mechanism decouples long-running report updates off primary thread pathways?", ["Message Queues / Task Workers","Synchronous REST Calls","Database Trigger Scripts","Local View Updates"], 0],
        ["What structural architecture design leverages entity sets exposed clean through standard uniform verbs?", ["REST / RESTful Architecture","SOAP Calls","GraphQL Endpoints","gRPC Protocols"], 0],
        ["Which HTTP status code flags data request inputs formatting syntax failures natively?", ["400 Bad Request","401 Unauthorized","403 Forbidden","500 Internal Error"], 0],
        ["What data access layer design standard translates relational schemas cleanly into object models?", ["ORM (Object-Relational Mapping)","MVC Router Engine","NoSQL Schema Model","CRUD Template Builder"], 0],
        ["Which database solution stores dynamic system memory models key-value style to speed up cache lookup speeds?", ["Redis","PostgreSQL","MongoDB","SQLite"], 0],
        ["Which response optimization strategy bundles data sets into page subsets natively to limit layout strain?", ["Pagination","Indexing","Caching","Batch Compilation"], 0],
        ["What data management process structures tables meticulously to eliminate duplicate tracking redundancies?", ["Normalization","Denormalization","Aggregation","Indexing"], 0],
        ["What tool maps reverse proxy routing configurations while acting as a static text cache server?", ["Nginx","MongoDB","Express","Docker"], 0],
        ["Which environment manager safely locks runtime configuration variables outside repository logic?", [".env configuration files","Hardcoded Global Script Variables","Database Configuration Tables","System Registry Keys"], 0],
        ["Which database index style speeds up data retrieval speeds at the cost of slower file updates?", ["B-Tree Indexes / Structural Indexes","Linear Array Checks","Text Logs","Dynamic Views"], 0],
        ["Which HTTP payload verb manages fractional component modifications on target records safely?", ["PATCH","PUT","POST","UPDATE"], 0]
      ],
      hard: [
        ["What design pattern addresses race condition anomalies cleanly when modifying financial balance states concurrently?", ["Optimistic / Pessimistic Database Locking strategies","Asynchronous SetTimeouts","Frontend Input Validation Locks","Local Array Reductions"], 0],
        ["What distinct advantage makes GraphQL API architectures appealing over standard REST configurations?", ["Allows clients to query for specific target property structures accurately in single request actions","Provides automatic native encryption networks","Enforces file cache memory compression arrays","Compiles code lines directly inside servers"], 0],
        ["What core security protocol layer handles authentication challenges securely over transport tunnels?", ["TLS / SSL layer tracking","CORS Header validation parameters","JSON Payload signatures","Reverse Proxy routes"], 0],
        ["What optimization methodology builds local database indexes to speed up complex geolocation coordinate lookups?", ["Spatial Indexing / R-Tree Models","B-Tree Index Scans","Linear Binary Sorts","Hash Table Maps"], 0],
        ["What software design framework isolates write command tracking workflows entirely out from standard data read path models?", ["CQRS (Command Query Responsibility Segregation)","MVC Architecture Blocks","Monolithic Service Modules","CRUD Controller Units"], 0],
        ["Which error response code triggers under API rate limit restrictions when threshold bounds break?", ["429 Too Many Requests","503 Service Unavailable","401 Unauthorized","400 Bad Request"], 0],
        ["What problem does database sharding solve?", ["Horizontal partitioning to spread scale load among distributed nodes","Eliminating index redundancies","Validating encrypted transport pipelines","Compressing transactional audit tables"], 0],
        ["What communication channel standard maintains uninterrupted open-duplex sockets between clients and servers interactively?", ["WebSockets API protocol","Long-Polling REST loops","Server-Sent Events (SSE)","HTTP POST batches"], 0],
        ["What structural attack methodology embeds rogue inputs to corrupt execution pathways within standard SQL query compilation spaces?", ["SQL Injection (SQLi)","Cross-Site Scripting (XSS)","Cross-Site Request Forgery (CSRF)","Man-in-the-Middle (MitM)"], 0],
        ["What mechanism limits multi-origin resource access privileges securely across cross-domain browser interactions?", ["CORS (Cross-Origin Resource Sharing) headers","JWT Token validation logic","Database Session checks","HTTPS transport configurations"], 0],
        ["What concept maps architectural operations across decoupled distributed cloud infrastructures reliably via single IDs?", ["Distributed Tracing / Correlation IDs","Central Monolithic Tracking Logs","Local Stack Frames","Docker Routing tables"], 0],
        ["What database transaction constraint mechanism enforces complete execution reliability guarantees explicitly?", ["ACID Properties","CAP Theorem parameters","CRUD Actions","BASE Consistency states"], 0],
        ["What does the CAP Theorem state?", ["A distributed system can guarantee at most two out of: Consistency, Availability, and Partition Tolerance","All system databases must process operations synchronously","Caching tracks block pipeline availability models","Encryption parameters require token checking validation networks"], 0],
        ["What processing bottleneck occurs when database connection configurations fail to re-use persistent structural sockets cleanly?", ["Connection Pool Exhaustion","Thread Deadlocks","Memory Heap Overflows","Index Fragmentation"], 0],
        ["Which architectural concept coordinates microservices workflows using centralized engine conductors?", ["Saga Orchestration","Saga Choreography","Eventual Consistency","REST Routers"], 0]
      ]
    }
  };

  const CATEGORY_KEYS = Object.keys(BANK);

  const state = {
    category: "html",
    difficulty: "easy",
    numQuestions: 5,
    questions: [],
    index: 0,
    correctCount: 0,
    points: 0,
    streak: 0,
    bestStreak: 0,
    answered: false,
    timeLeft: 0,
    timeTotal: 15,
    timerId: null,
    soundOn: true,
  };

  const $ = (id) => document.getElementById(id);

  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function bestKey(cat, diff){ return `quizly_best_${cat}_${diff}`; }

  function getBest(cat, diff){
    const raw = localStorage.getItem(bestKey(cat, diff));
    return raw ? JSON.parse(raw) : null;
  }

  function setBestIfHigher(cat, diff, pct, points){
    const current = getBest(cat, diff);
    if(!current || pct > current.pct || (pct === current.pct && points > current.points)){
      localStorage.setItem(bestKey(cat, diff), JSON.stringify({ pct, points, date: Date.now() }));
      return true;
    }
    return false;
  }

  function timePerDifficulty(diff){
    return diff === "easy" ? 20 : diff === "medium" ? 15 : diff === "hard" ? 10 : 15;
  }

  let audioCtx = null;
  function ensureAudio(){
    if(!audioCtx){
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if(Ctx) audioCtx = new Ctx();
    }
    return audioCtx;
  }
  function beep(freq, start, dur, type, gainVal){
    const ctx = ensureAudio();
    if(!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.value = gainVal || 0.08;
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime + start + dur - 0.03);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + start + dur);
    osc.stop(ctx.currentTime + start + dur);
  }
  function playCorrect(){
    if(!state.soundOn) return;
    beep(523.25, 0, 0.11, "triangle");
    beep(783.99, 0.11, 0.16, "triangle");
  }
  function playWrong(){
    if(!state.soundOn) return;
    beep(220, 0, 0.14, "sawtooth", 0.05);
    beep(164.81, 0.12, 0.2, "sawtooth", 0.05);
  }
  function playClick(){
    if(!state.soundOn) return;
    beep(600, 0, 0.05, "square", 0.03);
  }

  function buildCategoryGrid(){
    const wrap = $("categoryGrid");
    wrap.innerHTML = "";
    CATEGORY_KEYS.forEach((key) => {
      const cat = BANK[key];
      const btn = document.createElement("button");
      btn.className = "choice-card" + (key === state.category ? " selected" : "");
      btn.dataset.key = key;
      btn.innerHTML = `<span class="ic"><i class="${cat.iconClass}"></i></span><span class="lbl">${cat.label}</span>`;
      btn.addEventListener("click", () => {
        state.category = key;
        playClick();
        [...wrap.children].forEach((c) => c.classList.toggle("selected", c.dataset.key === key));
        refreshBestBox();
      });
      wrap.appendChild(btn);
    });
  }

  function buildDifficultyRow(){
    const wrap = $("difficultyRow");
    wrap.innerHTML = "";
    const diffs = [["easy","Easy"], ["medium","Medium"], ["hard","Hard"]];
    diffs.forEach(([key, label]) => {
      const btn = document.createElement("button");
      btn.className = "pill" + (key === state.difficulty ? " selected" : "");
      btn.dataset.key = key;
      btn.textContent = label;
      btn.addEventListener("click", () => {
        state.difficulty = key;
        playClick();
        [...wrap.children].forEach((c) => c.classList.toggle("selected", c.dataset.key === key));
        refreshBestBox();
      });
      wrap.appendChild(btn);
    });
  }

  function buildCountRow(){
    const wrap = $("countRow");
    wrap.innerHTML = "";
    [5, 10, 15].forEach((n) => {
      const btn = document.createElement("button");
      btn.className = "pill" + (n === state.numQuestions ? " selected" : "");
      btn.dataset.n = n;
      btn.textContent = n + " Qs";
      btn.addEventListener("click", () => {
        state.numQuestions = n;
        playClick();
        [...wrap.children].forEach((c) => c.classList.toggle("selected", Number(c.dataset.n) === n));
      });
      wrap.appendChild(btn);
    });
  }

  function refreshBestBox(){
    const cat = BANK[state.category];
    $("bestBoxLabel").textContent = `${cat.label.toUpperCase()} · ${state.difficulty.toUpperCase()}`;
    const best = getBest(state.category, state.difficulty);
    $("bestBoxValue").innerHTML = best
      ? `${best.pct}% <span style="font-size:13px; color:var(--ink-faint); font-weight:500;">· ${best.points} pts</span>`
      : `<span class="bb-empty">Not played yet</span>`;
  }

  function prepareQuestions(){
    const pool = shuffle(BANK[state.category][state.difficulty]);
    const picked = pool.slice(0, Math.min(state.numQuestions, pool.length));
    state.questions = picked.map(([q, opts, correctIdx]) => {
      const order = shuffle(opts.map((text, i) => ({ text, orig: i })));
      const newCorrect = order.findIndex((o) => o.orig === correctIdx);
      return {
        question: q,
        options: order.map((o) => o.text),
        correct: newCorrect,
        userChoice: null,
        timedOut: false,
      };
    });
  }

  function switchScreen(name){
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $("screen-" + name).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz(){
    prepareQuestions();
    state.index = 0;
    state.correctCount = 0;
    state.points = 0;
    state.streak = 0;
    state.bestStreak = 0;
    switchScreen("quiz");
    buildProgressRow();
    renderQuestion();
  }

  function buildProgressRow(){
    const wrap = $("progressRow");
    wrap.innerHTML = "";
    state.questions.forEach(() => {
      const seg = document.createElement("div");
      seg.className = "progress-seg";
      seg.innerHTML = `<div class="fill"></div>`;
      wrap.appendChild(seg);
    });
  }

  function updateProgressRow(){
    const segs = $("progressRow").children;
    for(let i = 0; i < segs.length; i++){
      segs[i].classList.toggle("done", i < state.index);
      segs[i].classList.toggle("current", i === state.index);
    }
  }

  function renderQuestion(){
    state.answered = false;
    const q = state.questions[state.index];
    const cat = BANK[state.category];

    $("qCount").textContent = `Question ${String(state.index + 1).padStart(2, "0")} / ${String(state.questions.length).padStart(2, "0")}`;
    $("qTag").textContent = `${cat.label.toUpperCase()} · ${state.difficulty.toUpperCase()}`;
    $("questionText").textContent = q.question;
    updateProgressRow();
    updateStreakLabel();

    const wrap = $("optionsWrap");
    wrap.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.innerHTML = `<span class="badge">${letters[i]}</span><span class="txt">${text}</span>`;
      btn.addEventListener("click", () => selectOption(i));
      wrap.appendChild(btn);
    });

    $("nextBtn").disabled = true;
    $("nextBtn").innerHTML = state.index === state.questions.length - 1 
      ? `See Results <i class="fas fa-arrow-right" style="margin-left:6px;"></i>` 
      : `Next Question <i class="fas fa-arrow-right" style="margin-left:6px;"></i>`;

    startTimer();
  }

  function startTimer(){
    clearInterval(state.timerId);
    state.timeTotal = timePerDifficulty(state.difficulty);
    state.timeLeft = state.timeTotal;
    const ring = $("timerRing");
    ring.classList.remove("low");
    const circle = $("timerCircle");
    const r = 30, circumference = 2 * Math.PI * r;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = "0";
    $("timerNum").textContent = state.timeLeft;

    state.timerId = setInterval(() => {
      state.timeLeft--;
      const pct = Math.max(0, state.timeLeft / state.timeTotal);
      circle.style.strokeDashoffset = `${circumference * (1 - pct)}`;
      $("timerNum").textContent = Math.max(0, state.timeLeft);
      if(state.timeLeft <= Math.ceil(state.timeTotal * 0.3)) ring.classList.add("low");
      if(state.timeLeft <= 0){
        clearInterval(state.timerId);
        handleTimeout();
      }
    }, 1000);
  }

  function stopTimer(){ clearInterval(state.timerId); }

  function updateStreakLabel(){
    const el = $("streakLabel");
    el.innerHTML = `<i class="fas fa-fire"></i> ${state.streak} streak`;
    el.classList.toggle("on", state.streak >= 3);
  }

  function selectOption(i){
    if(state.answered) return;
    state.answered = true;
    stopTimer();
    playClick();

    const q = state.questions[state.index];
    q.userChoice = i;
    const isCorrect = i === q.correct;
    const options = $("optionsWrap").children;

    [...options].forEach((opt, idx) => { opt.disabled = true; });

    if(isCorrect){
      options[i].classList.add("selected", "correct");
      const stamp = document.createElement("span");
      stamp.className = "stamp ok";
      stamp.innerHTML = `<i class="fas fa-check-circle"></i> Correct`;
      options[i].appendChild(stamp);

      state.correctCount++;
      state.streak++;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      let gained = 100 + state.timeLeft * 10;
      if(state.streak >= 3 && state.streak % 3 === 0) gained += 50;
      state.points += gained;
      playCorrect();
    } else {
      options[i].classList.add("selected", "incorrect");
      const stamp = document.createElement("span");
      stamp.className = "stamp no";
      stamp.innerHTML = `<i class="fas fa-times-circle"></i> Incorrect`;
      options[i].appendChild(stamp);
      options[q.correct].classList.add("reveal");

      state.streak = 0;
      playWrong();
    }
    updateStreakLabel();
    $("nextBtn").disabled = false;
    $("nextBtn").focus();
  }

  function handleTimeout(){
    if(state.answered) return;
    state.answered = true;
    const q = state.questions[state.index];
    q.userChoice = null;
    q.timedOut = true;
    const options = $("optionsWrap").children;
    [...options].forEach((opt) => { opt.disabled = true; });
    options[q.correct].classList.add("reveal");
    state.streak = 0;
    updateStreakLabel();
    playWrong();
    $("nextBtn").disabled = false;
  }

  function nextQuestion(){
    if(!state.answered) return;
    state.index++;
    if(state.index < state.questions.length){
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function gradeFor(pct){
    if(pct >= 90) return ["A+", "Outstanding"];
    if(pct >= 80) return ["A", "Great job"];
    if(pct >= 70) return ["B", "Good effort"];
    if(pct >= 60) return ["C", "Not bad"];
    if(pct >= 50) return ["D", "Keep practicing"];
    return ["F", "Try again"];
  }

  function finishQuiz(){
    stopTimer();
    const total = state.questions.length;
    const pct = Math.round((state.correctCount / total) * 100);
    const isNewBest = setBestIfHigher(state.category, state.difficulty, pct, state.points);

    switchScreen("result");

    $("bestRibbonWrap").innerHTML = isNewBest ? `<div class="best-ribbon"><i class="fas fa-trophy"></i> New personal best</div>` : "";

    const [letter, caption] = gradeFor(pct);
    $("gradeLetter").textContent = letter;
    $("gradeCaption").textContent = caption.toUpperCase();
    $("scoreLine").textContent = `${state.correctCount}/${total}`;
    $("scorePct").textContent = `${pct}%`;

    $("statCorrect").textContent = state.correctCount;
    $("statWrong").textContent = total - state.correctCount;
    $("statStreak").textContent = state.bestStreak;
    $("statPoints").textContent = state.points;

    const dialFill = $("dialFill");
    const dialLength = dialFill.getTotalLength();
    dialFill.style.strokeDasharray = `${dialLength}`;
    dialFill.style.strokeDashoffset = `${dialLength}`;
    dialFill.style.stroke = pct >= 70 ? "var(--success)" : pct >= 50 ? "var(--gold)" : "var(--danger)";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dialFill.style.strokeDashoffset = `${dialLength * (1 - pct / 100)}`;
      });
    });

    buildReview();
    $("reviewList").classList.remove("open");
    $("reviewToggle").classList.remove("open");

    if(pct >= 80) launchConfetti();
  }

  function buildReview(){
    const wrap = $("reviewList");
    wrap.innerHTML = "";
    state.questions.forEach((q, i) => {
      const correctText = q.options[q.correct];
      const userText = q.userChoice === null ? null : q.options[q.userChoice];
      const isCorrect = q.userChoice === q.correct;
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="ri-q">
          <span class="ri-icon ${isCorrect ? "ok" : "no"}">
            <i class="${isCorrect ? "fas fa-check" : "fas fa-times"}"></i>
          </span>
          <span>${i + 1}. ${q.question}</span>
        </div>
        <div class="ri-a ${isCorrect ? "" : "wrong-ans"}">Your answer: <b>${userText === null ? "No answer (time out)" : userText}</b></div>
        ${isCorrect ? "" : `<div class="ri-a right-ans">Correct answer: <b>${correctText}</b></div>`}
      `;
      wrap.appendChild(item);
    });
  }

  function launchConfetti(){
    const colors = ["#3454D1", "#E8A33D", "#1F9D63", "#E1483C"];
    for(let i = 0; i < 40; i++){
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = 2.4 + Math.random() * 1.6 + "s";
      piece.style.opacity = String(0.7 + Math.random() * 0.3);
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4200);
    }
  }

  function showToast(msg){
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 1800);
  }

  function loadPrefs(){
    const sound = localStorage.getItem("quizly_sound");
    state.soundOn = sound === null ? true : sound === "1";
    $("soundToggle").innerHTML = state.soundOn ? `<i class="fas fa-volume-up"></i>` : `<i class="fas fa-volume-mute"></i>`;

    const theme = localStorage.getItem("quizly_theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
    $("themeToggle").innerHTML = theme === "dark" ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
  }

  function toggleSound(){
    state.soundOn = !state.soundOn;
    localStorage.setItem("quizly_sound", state.soundOn ? "1" : "0");
    $("soundToggle").innerHTML = state.soundOn ? `<i class="fas fa-volume-up"></i>` : `<i class="fas fa-volume-mute"></i>`;
    if(state.soundOn) playClick();
  }

  function toggleTheme(){
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("quizly_theme", next);
    $("themeToggle").innerHTML = next === "dark" ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
  }

  $("startBtn").addEventListener("click", startQuiz);
  $("nextBtn").addEventListener("click", nextQuestion);
  $("soundToggle").addEventListener("click", toggleSound);
  $("themeToggle").addEventListener("click", toggleTheme);
  $("playAgainBtn").addEventListener("click", startQuiz);
  $("newQuizBtn").addEventListener("click", () => { refreshBestBox(); switchScreen("start"); });

  $("reviewToggle").addEventListener("click", () => {
    $("reviewList").classList.toggle("open");
    $("reviewToggle").classList.toggle("open");
  });

  $("shareBtn").addEventListener("click", () => {
    const total = state.questions.length;
    const pct = Math.round((state.correctCount / total) * 100);
    const text = `I scored ${state.correctCount}/${total} (${pct}%) on the ${BANK[state.category].label} · ${state.difficulty} quiz on Quizly! 🎯`;
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(() => showToast("Result copied to clipboard")).catch(() => showToast(text));
    } else {
      showToast(text);
    }
  });

  document.addEventListener("keydown", (e) => {
    if($("screen-quiz").classList.contains("active")){
      if(["1","2","3","4"].includes(e.key)){
        const idx = Number(e.key) - 1;
        const opts = $("optionsWrap").children;
        if(opts[idx] && !opts[idx].disabled) selectOption(idx);
      } else if(["a","b","c","d","A","B","C","D"].includes(e.key)){
        const idx = "abcd".indexOf(e.key.toLowerCase());
        const opts = $("optionsWrap").children;
        if(opts[idx] && !opts[idx].disabled) selectOption(idx);
      } else if(e.key === "Enter"){
        if(!$("nextBtn").disabled) nextQuestion();
      }
    } else if($("screen-start").classList.contains("active")){
      if(e.key === "Enter") startQuiz();
    }
  });

  loadPrefs();
  buildCategoryGrid();
  buildDifficultyRow();
  buildCountRow();
  refreshBestBox();

})();