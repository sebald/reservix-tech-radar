function e(e){return e&&e.__esModule?e.default:e}const a=[{id:"adopt",name:"Adopt",color:"#74b816"},{id:"trial",name:"Trial",color:"#228be6"},{id:"assess",name:"Assess",color:"#fab005"},{id:"onHold",name:"On Hold",color:"#fa5252"}],t=a.reduce(((e,a,t)=>(e[a.id]=t,e)),{});var i;i={name:"CI/CD & Automation",quadrant:3,entries:[{label:"Docker",description:'<a href="https://www.docker.com/">Docker</a> is a platform that automates the deployment and management of applications within lightweight, portable containers, ensuring consistency across different environments.\nOur entire infrastructure is built using Docker, making it the default method for both deploying and locally developing software,\n',ring:"adopt",active:!0,moved:0},{label:"GitLab CI/CD",description:'<a href="https://docs.gitlab.com/ee/ci/">GitLab CI/CD</a>  is an integrated toolset for continuous integration and continuous delivery, enabling automated testing, building, and deployment of code within GitLab.\nIt is the default platform we use to manage and develop all of our closed-source software, ensuring consistency and efficiency across our products, esuring our projects are healthy and meet our quality standards.\n',ring:"adopt",active:!0,moved:0},{label:"GitHub Actions",description:'<a href="https://github.com/features/actions">GitHub Actions</a> is a feature that enables automation of tasks and workflows directly within GitLab, similar to GitHub Actions. It allows developers to define custom workflows, automate processes, and integrate seamlessly with their existing CI/CD pipelines, enhancing productivity and collaboration.\nProjects, especially the open source ones, that are hosted on GitHub should make use of Github Actions to ensure that the projects meet our quality standards.\n',ring:"adopt",active:!0,moved:0}]};var n;n={name:"Infrastructure",quadrant:1,entries:[{label:"MySQL",ring:"adopt",active:!0,moved:0,description:'<a href="https://www.mysql.com/">MySQL</a> is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter My, and "SQL", the acronym for Structured Query Language.\nIn our software products, MySQL remains our preferred database management system, although we may consider putting it on hold in the future. Other systems, such as PostgreSQL, have also demonstrated excellent performance and might replace MySQL in new products.\n'},{label:"PostgreSQL",ring:"trial",active:!0,moved:0,description:'<a href="https://www.postgresql.org/">PostgreSQL</a> also known as  Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.\nIn our software products PostgreSQL is kind of new, even though it is already a solid component of our software landscape.\n'},{label:"Elasticsearch",description:'<a href="https://www.elastic.co/">Elastic Search</a> is an open source search platform. It is an extensible, multi-tenanted, and horizontally scalable search solution based on Apache Lucene. It allows complex data structures to be indexed and retrieved through a JSON based REST API. It provides an elegant model of operation with automatic discovery of peers in a cluster, failover, and replication. Elastic Search can be extended with a plugin system that allows adding new functionality and changing existing behavior. The community around this tool is quite vibrant as illustrated by the number of client libraries available in languages like Java, C#, Ruby, and JavaScript.\nIn our software products, we utilize Elasticsearch as a search cluster for end users. In other cases, we still maintain custom solutions that  may eventually be migrated to Elasticsearch.\nElasticsearch also serves as our primary solution for observability, see Kibana for a detailed description.\n',ring:"adopt",active:!0,moved:0},{label:"Redis",description:'<a href="https://redis.io/">Redis</a> is an open source, in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.\nRedis has proven a useful tool on multiple projects as structured cache.\n',ring:"adopt",active:!0,moved:0},{label:"MongoDB",description:'For problems that fit the document database model, <a href="https://www.mongodb.com/">MongoDB</a> is now the most popular choice. In addition to ease of use and a solid technical implementation, the community and ecosystem contributed to this success. We are aware of problems where teams were tempted by the popularity of MongoDB when a document database was not a good fit or they did not understand the inherent complexity. When used appropriately, however, MongoDB has proven itself on many projects.\n',ring:"onHold",active:!0,moved:-1},{label:"DynamoDB",ring:"assess",active:!0,moved:0},{label:"AWS Lambda",description:'<a href="https://aws.amazon.com/lambda/">AWS Lambda</a> is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. These events may include changes in state or an update, such as a user placing an item in a shopping cart on an ecommerce website.\nFor stateless services, this means you don’t need to worry about running any long-lived machines, potentially reducing costs and improving security. Despite other forays into the PaaS space by AWS, Lambda looks the closest to getting this right.\nOur teams continue to enjoy using AWS Lambda and are beginning to use it for serverless architectures which are built for the future.\n',ring:"adopt",active:!0,moved:0},{label:"SQS",ring:"adopt",active:!0,moved:0,description:"In our systems, we leverage Amazon SQS (Simple Queue Service) as a  reliable message queuing service to decouple and scale microservices.  It ensures smooth communication between distributed components by managing message delivery efficiently.\nSQS also supports various use cases, including event-driven architecture, load leveling, and background task processing, making it an integral part of our asynchronous workflows.\n"},{label:"SNS",ring:"adopt",active:!0,moved:0,description:"In our systems, we utilize Amazon SNS (Simple Notification Service) as a scalable and reliable messaging service for pub/sub (publish/subscribe)  communication. It enables the dissemination of messages to multiple  subscribers, ensuring real-time updates across distributed systems.\nSNS is particularly useful for event notifications, system alerts, and  cross-application messaging, allowing us to build highly responsive and  decoupled architectures.\n"},{label:"AWS S3",ring:"adopt",active:!0,moved:0},{label:"Keycloak",ring:"adopt",active:!0,moved:0,link:"https://www.keycloak.org/",description:"Keycloak is an open source software product to allow single sign-on with identity and access management aimed at modern applications and services.\nWe use Keycloak to provide our users with a unified Single Sign-On (SSO) environment. This enables us to offer both employees and end users a  seamless user experience while ensuring security compliance.\n"},{label:"Kubernetes",ring:"trial",active:!0,moved:0,description:"Kubernetes is an open-source container orchestration system for  automating software deployment, scaling, and management. Originally designed by Google, the project is now maintained by a worldwide  community of contributors, and the trademark is held by the Cloud Native Computing Foundation.\nWe currently use it internally only to provide developer tools.\n"},{label:"Serverless",description:"The Serverless Framework is an open-source tool that simplifies the deployment and management of serverless applications, allowing developers to build and run applications without managing infrastructure.\nWe are currently evaluating the Serverless Framework due to changes in their pricing model in version 4, and we are uncertain if it remains sustainable for our use case moving forward.\n",link:"https://www.serverless.com/",ring:"onHold",active:!0,moved:-1},{label:"CDK",description:'The <a href="https://aws.amazon.com/de/cdk/">AWS Cloud Development Kit (CDK)</a> is an open-source framework that enables developers to define cloud infrastructure using familiar programming languages.\nIt is currently being evaluated as an alternative to the Serverless Framework, offering more flexibility and potential alignment with our infrastructure needs.\n',link:"https://aws.amazon.com/de/cdk/",ring:"trial",active:!0,moved:2},{label:"ECS",description:"Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that helps you to more efficiently deploy, manage, and scale containerized applications.\nOur containerized production workloads were migrated from classic data centers to ECS wherever possible. With ECS we can run our workloads  at scale without bigger changes on the software components. With fargate we have a serverless experience that gives our development teams to space to focus on developing.\n",link:"https://aws.amazon.com/de/ecs/",ring:"adopt",active:!0,moved:2},{label:"Kibana",description:'When combining modern techniques and architecture styles, such as microservices, DevOps and QA in production, development teams need increasingly sophisticated monitoring. Simply looking a graphs of disk usage and CPU utilization is not sufficient anymore, and many teams collect application and business-specific metrics using tools. <a href="https://www.elastic.co/kibana/">Kibana</a> is a tools that can help with gathering this data and boos observability.\nWe use Kibana extensively for our observability needs. It ensures that our applications run smoothly even under high-load scenarios. Kibana helps us to find issues with our system fast and react accordingly. Based on its strengths, Kibana has become our default choice for observing our  production environments.\n',ring:"adopt",active:!0,moved:0},{label:"Terraform",description:'<a href=" https://www.terraform.io/">Terraform</a> is an open-source infrastructure as code tool that allows developers to define and provision data center infrastructure using a declarative configuration language. It enables consistent and repeatable deployment of cloud and on-premises resources, simplifying infrastructure management across multiple environments.\nTerraform is widely used to power and manage our infrastructure, ensuring consistent and scalable deployment.\n',ring:"adopt",active:!0,moved:1}]};var s;s={name:"Tooling",quadrant:0,entries:[{label:"npm",description:'<a href="https://www.npmjs.com/">npm</a> is a widely-used package manager for JavaScript that helps developers install, share, and manage code dependencies for Node.js projects.\nHowever, it is not recommended to use npm; instead, we suggest using pnpm for better performance and efficiency. With the addition of Corepack, npm is no longer the default Node package manager.\n',ring:"onHold",active:!0,moved:0},{label:"pnpm",description:'<a href="https://pnpm.io/">pnpm</a> is a fast, disk space-efficient package manager for JavaScript that uses a unique approach to manage dependencies by creating a global store for packages.\nIt is the recommended package manager due to its efficiency and performance, and it is widely used and battle-tested in our existing projects.\n',ring:"adopt",active:!0,moved:0},{label:"yarn",description:'<a href="https://classic.yarnpkg.com/">Yarn</a> Yarn is a package manager for JavaScript that offers fast and reliable dependency management with features like offline caching and deterministic installs.\nHowever, it is not recommended to use Yarn; instead, we suggest using PNPM for better performance and efficiency in managing dependencies.\n',ring:"onHold",active:!0,moved:-1},{label:"composer",description:'<a href="https://getcomposer.org/">Composer</a> Composer is a dependency management tool for PHP that handles libraries and packages, ensuring smooth integration and version control within projects.\nIt is the default method for managing packages in our PHP-based projects.\n',ring:"adopt",active:!0,moved:0},{label:"Webpack",description:'<a href="http://webpack.github.io/">Webpack</a> is a powerful module bundler for JavaScript applications that enables developers to bundle and optimize assets such as JavaScript, CSS, and images.\nIt is not recommended to use Webpack for new projects; instead, more modern bundlers like vite or tsup, which require less configuration and setup, are preferred. If you need to migrate away from Webpack or start a new project, please contact your area architect for support and guidance.\n',ring:"onHold",active:!0,moved:0},{label:"tsup",description:'<a href="https://tsup.egoist.sh/">tsup</a> is a fast and efficient bundler designed specifically for building TypeScript libraries, offering a streamlined setup with minimal configuration.\nWhile tsup is recommended for library development in TypeScript, Vite is preferred for building applications due to its superior development experience and performance.\n',ring:"adopt",active:!0,moved:0},{label:"vite",description:'<a href="https://vitejs.dev/">vite</a> is a modern build tool that provides a fast and efficient development experience, especially well-suited for building TypeScript applications, including those using React.\nIt is recommended for writing apps in TypeScript and has been successfully implemented in multiple projects, demonstrating its reliability and effectiveness.\n',ring:"adopt",active:!0,moved:2},{label:"jest",description:'<a href="https://jestjs.io/">jest</a> is a powerful Javascript testing framework that supports running tests in a (virtuell) browser environment as well as in Node.js. It is a very efficient and feature packed test runner that supports TypeScript, React and other technologies out of the box.\nWe recommend using jest as your default test runner for Javascript and Typescript based projects.\n',ring:"adopt",active:!0,moved:0},{label:"Cypress",description:'<a href="https://cypress.io/">Cypress</a> is an end-to-end testing framework that offers a robust and user-friendly solution for automating and verifying web application functionality.\nIt is recommended for writing end-to-end tests and has proven to be reliable in large projects, ensuring thorough and consistent test coverage.\n',ring:"adopt",active:!0,moved:1},{label:"Behat",description:'<a href="https://behat.org/">Behat</a> is a PHP testing framework which can be used to automate acceptance tests in a human readable language called Gherkin. Since it is based on Cucumber, it also helps teams to adopt and implement Behavioral Driven Development (BDD).\nWhile Behat is still a good solution, other frameworks like Cypress are more feature rich and developer friendly. We recommend to use an alternative like Cypress for new projects.\n',ring:"onHold",active:!0,moved:0}]};const o=[e({name:"Languages & Frameworks",quadrant:2,entries:[{label:"PHP",description:'<a href="https://www.php.net/">PHP</a> is a widely-used server-side scripting language known for its simplicity and flexibility in web development.\nWe are using PHP because it offers robust community support, extensive libraries, and seamless integration with various databases. It is our primary language for backend development.\n',ring:"adopt",active:!0,moved:0},{label:"Symfony",description:'The <a href="https://symfony.com/">Symfony</a> PHP framework is a well-organized, feature-rich PHP framework whose architecture paves the way for developers to build sustainable web applications in the easiest way possible which further enhances the users\' experience.\nIt is widely used in our organization and our developers have a lot of experience solving business problems with it. When writing a backend in PHP, consider using Symfony.\n',ring:"adopt",active:!0,moved:0},{label:"TypeScript",description:'<a href="https://www.typescriptlang.org/">TypeScript</a> is a strongly-typed  superset of JavaScript that adds static typing to the language, improving code  quality and maintainability.\nWe are using TypeScript because it catches errors early in development, add the  ability to refactor code safely and enhances collaboration in large codebases.  It is our primary language when developing a UI and writing a backend with Node.js.\n',ring:"adopt",active:!0,moved:0},{label:"JavaScript",description:'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (JS)</a> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime, which leads to errors only show during production.\nJavaScript is only suited for small-scale applications. TypeScript should be favored over JavaScript. TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier.\nWe are no longer using JavaScript for new developments, and any time existing  JS code needs modification or updates, it’s important to consider refactoring  it to TypeScript.\n',ring:"onHold",active:!0,moved:0},{label:"jQuery",description:'<a href="https://jquery.com/">jQuery</a> is a lightweight JavaScript library that simplifies HTML document manipulation, event handling, and animation with an easy-to-use API. It was widely popular for making cross-browser development easier, though its use has declined with the rise of modern frameworks like React.\nReact has become our go-to choice for building UIs, particularly when paired with Marigold. We are not using jQuery for new developments, and whenever we modify, add, or change existing JavaScript code, it should be considered for refactoring to React.\n',ring:"onHold",active:!0,moved:0},{label:"React",description:'<a href="https://react.dev/">React</a> is a popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering. It supports reusable components, offers a streamlined development process, and has a large, comprehensive ecosystem that provides numerous tools and resources.\nReact has become our go-to choice for building UIs, particularly when paired with Marigold. This combination enables us to develop our UIs more efficiently and consistently.\n',ring:"adopt",active:!0,moved:0},{label:"Vue",description:'<a href="https://vuejs.org/">Vue.js</a> is a progressive JavaScript framework for building user interfaces, designed with an approachable core and a focus on incrementally adaptable architecture. It offers features like two-way data binding and a component-based structure.\nWhile we use Vue.js in a few apps, we don\'t see any significant benefits over the more established React. To streamline our efforts and enhance developer experience, we focus on a single framework, opting to use React and Marigold for developing new features or apps.\n',ring:"onHold",active:!0,moved:-1},{label:"C#",description:'<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a> is a versatile,  object-oriented programming language developed by Microsoft, commonly used for building  a wide range of applications from web to desktop.\nWe use C# for specific scenarios where hardware integration is required, such as ticket  scanner software. However, we prefer to focus on PHP as our primary backend language  to maintain consistency and efficiency across our projects.\n',ring:"onHold",active:!0,moved:-1},{label:"Java",description:'<a href="https://www.java.com/">Java</a> is a robust, object-oriented programming  language renowned for its portability and performance across various platforms.\nWe are currently testing Java to address specific scenarios within the domain of authentication, as it is better suited for this purpose due to its compatibility with the underlying technology, which is also written in Java. This trial period aims to evaluate its effectiveness, and if a team wishes to use Java for other projects, they should first consult with their respective area architect.\n',active:!0,ring:"trial",moved:0},{label:"Zend",description:'<a href="https://framework.zend.com/">Zend Framework</a> is a collection of professional PHP packages. It can be used to develop web applications and services using PHP 5.6+, and provides 100% object-oriented code using a broad spectrum of language features.\nOur teams switched or are using Symfony to build our applications and thus the later should be preferred for projects.\n',ring:"onHold",active:!0,moved:0},{label:"Marigold",description:'<a href="https://marigold-ui.io/">Marigold</a> is a React implementation of Reservix\' design language. It aims to provides a robust and modular foundation for building digital products that are accessible and adaptive across screen sizes while delivering a consistent, delightful experience for all users.\nAfter an intensive trial period, it was confirmed that Marigold significantly  improves UI development both from an engineering and design perspective. When  developing UIs, especially with React, Marigold is essential for ensuring  accessible and consistent user interfaces.\n',ring:"adopt",active:!0,moved:1},{label:"Next.js",description:'<a href="https://nextjs.org/">Next.js</a> is a robust React framework designed  to enhance web application performance and developer productivity. It offers features such as server-side rendering, static site generation, and API routes, which improve performance, SEO, and scalability.\nAfter assessing it in multiple projects, including those in the financial domain  and for documentation, we feel confident moving it to “trial.” Teams interested in  adopting Next.js should contact their area architect for guidance.\n',ring:"trial",active:!0,moved:0},{label:"Express",description:'<a href="https://expressjs.com/">Express</a> is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js in the past.\nThe developer experience of Express feels dated. Todays standard tooling and patterns, like async/await, need to be stack ontop of Express. There is no good support for TypeScript. And worst of it all, Epxress is not actively maintained. An attempt to realse a new major version was started over 7 years ago.\nThus we highly recommend new projects to use alternatives, like Fastify.\n',ring:"onHold",active:!1,moved:0},{label:"Fastify",description:'<a href="https://www.fastify.io/">Fastify</a> is inspired by Hapi and Express and provides a faster alternative to Express with less overhead. It is built as a general-purpose web framework, but it shines when it comes to its fast HTTP APIs. It offers ease in handling request-response validations, support for TypeScript and a plugin ecosystem giving  teams an easier experience developing software.\nUnlike Express, Fastify\'s core is implemented with asynchronous code, which not only leads to a better developer experience but also to less memory leaks, a problem often times associated with Express. Besides that Fastify comes with a much better performance than Express. Thus we recommend to assess Fastify for new projects.\n',ring:"assess",active:!1,moved:0},{label:"GraalVM",description:'<a href="https://www.graalvm.org/">GraalVM</a> is a high-performance runtime that provides support for multiple programming languages and execution modes, enabling seamless interoperability between them. \nAfter assessing it in projects within the business integration domain, we see potential benefits and are open to exploring its use further. Teams interested in adopting GrailM should contact their area architect for guidance.\n',ring:"assess",active:!1,moved:0},{label:"Spring Boot",description:'<a href="https://spring.io/projects/spring-boot">Spring Boot</a> is a framework that simplifies the development of Java-based applications by providing pre-configured setups and an embedded server, allowing for quick and efficient deployment.\nAfter assessing it in projects within the business integration domain, we see potential benefits and are open to exploring its use further. Teams interested in adopting GrailM should contact their area architect for guidance.\n',ring:"assess",active:!1,moved:0},{label:"GraphQL",description:'There are many successful <a href="https://github.com/facebook/graphql">GraphQL</a> implementations in our projects. That said, we\'ve concerns about misuse of this framework and some of the problems that can occur. Examples include performance gotchas around N+1 queries and lots of boilerplate code needed when adding new models, leading to complexity. There are workarounds to these gotchas such as query caching.\nTODO\n',ring:"onHold",active:!0,moved:1},{label:"Event-driven",description:'Message-driven system integration provides multiple benefits. One remarkable benefit is that this integration style uses asynchronous communication, i.e. the temporal decoupling of sender and receiver. At Reservix, we have started to establish an event-driven architecture as our preferred way of system integration.\nYou can read more about this topics <a href="https://reservix.atlassian.net/l/c/H4Hvr9k0">here</a> (internal link).\n',ring:"adopt",active:!0,moved:1}]}),e(s),e(i),e(n)].sort(((e,a)=>e.quadrant-a.quadrant)),r=o.map((e=>e.entries.map((({description:a="",ring:i,...n})=>({...n,quadrant:e.quadrant,ring:t[i],description:a.split(/\r?\n/).filter(Boolean).map((e=>`<p>${e}</p>`)).join("")}))))).flat();radar_visualization({svg_id:"radar",title:"Reservix Tech Radar — 2024 Q3 (work in progress)",width:1500,height:1e3,colors:{background:"#fff",grid:"#adb5bd",inactive:"#dee2e6"},quadrants:o,rings:a,print_layout:!0,entries:r});const d=document.getElementById("radar"),c=document.getElementById("dialog"),l=document.getElementById("dialog-title"),p=document.getElementById("dialog-content"),u=document.getElementById("dialog-badge");document.addEventListener("click",(e=>{e.preventDefault();const t=e.target;if((e=>d.contains(e)&&"text"===e.tagName&&"a"===e.parentElement?.tagName)(t)){const e=(i=(e=>/\s(.*)/.exec(e.textContent)[1])(t),r.find((e=>e.label===i)));return l.innerHTML=e.label,p.innerHTML=e.description||"TDB",u.innerHTML=a[e.ring].name,u.style=`background: ${a[e.ring].color}`,void c.showModal()}var i;"dialog"===t.tagName.toLocaleLowerCase()&&c.close()}));
//# sourceMappingURL=index.f0556ec6.js.map
