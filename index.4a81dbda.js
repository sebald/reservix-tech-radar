function e(e){return e&&e.__esModule?e.default:e}const t=[{id:"adopt",name:"Adopt",color:"#74b816"},{id:"trial",name:"Trial",color:"#228be6"},{id:"assess",name:"Assess",color:"#fab005"},{id:"onHold",name:"On Hold",color:"#fa5252"}],a=t.reduce(((e,t,a)=>(e[t.id]=a,e)),{});var o;o={name:"CI/CD, Infrastructure & Automation",quadrant:3,entries:[{label:"Docker",description:'<a href="https://www.docker.com/">Docker</a> is an open source containerization platform. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.\nDevelopment teams love Docker, as the Docker image format makes it easier to achieve parity between development and production, making for reliable deployments. It is a natural fit in a microservices-style application as a packaging mechanism for self-contained services. On the operational front, Docker support in monitoring tools (Sensu, Prometheus, cAdvisor, etc.), orchestration tools (Kubernetes, Marathon, etc.) and deployment-automation tools reflect the growing maturity of the platform and its readiness for production use.\n',ring:"adopt",active:!0,moved:0},{label:"GitLab CI/CD",description:'<a href="https://docs.gitlab.com/ee/ci/">GitLab CI/CD</a> is a tool for software development using the continuous methodologies: Continuous Integration (CI), Continuous Delivery (CD) and Continuous Deployment (CD). It helps to catch bugs and errors early in the development cycle and ensures that all the code deployed to production complies with the code standards you established for your app. GitLab CI/CD can automatically build, test, deploy, and monitor your applications.\nSince we are using GitLab as to develop and manage our software, using its integrated CI/CD tools is our preferred way to make sure our projects are healthy and meet our quality standards.\n',ring:"adopt",active:!0,moved:0},{label:"GitHub Actions",description:'<a href="https://github.com/features/actions">GitHub Actions</a> are a way to automate, customize, and execute software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you\'d like, including CI/CD, and combine actions in a completely customized workflow.\nProjects, especially the open source ones, that are hosted on GitHub should make use of Github Actions to ensure that the projects meet our quality standards.\n',ring:"adopt",active:!0,moved:0},{label:"Kibana",description:'When combining modern techniques and architecture styles, such as microservices, DevOps and QA in production, development teams need increasingly sophisticated monitoring. Simply looking a graphs of disk usage and CPU utilization is not sufficient anymore, and many teams collect application and business-specific metrics using tools. <a href="https://www.elastic.co/kibana/">Kibana</a> is a tools that can help with gathering this data and boos observability.\nWe use Kibana extensively to ensure our applications run smoothly even under high-load scenarios. Kibana helps us to find issues with our system fast and react accordingly. Based on its strengths, Kibana has become our default choice for observing our production environments.\n',ring:"adopt",active:!0,moved:0},{label:"Terraform",description:'With <a href=" https://www.terraform.io/">Terraform</a>, you can manage cloud infrastructure by writing declarative definitions. The configuration of the servers instantiated by Terraform is usually left to tools like Puppet, Chef or Ansible.\n',ring:"trial",active:!0,moved:0},{label:"SonarQube",description:'<a href="SonarQube">SonarQube</a> is a open-source platform for the continuous inspection of code quality. It performs automatic reviews with static analysis of code which can detect bugs, code smells in many programming languages.\nWe infrequently set it up for projects but are not sure about the additional value we get from the analysis. We need more teams actively using it to make a decision.\n',link:"https://www.sonarqube.org/",ring:"assess",active:!0,moved:0},{label:"Chromatic",description:'<a href="https://www.chromatic.com/">Chromatic</a> is a cloud-based tool for visual regression tests, based on <a href="https://storybook.js.org/">Storybook</a>. It streamlines the process of shipping UI components with higher quality by providing a shared workspace for teams to comment and review UI work together.\nWe started using Chromatic for reviewing work on our design system in the hope that we more confidently can manage the different themes withour accidental breaking things. So far it looks very promising and an improvement to our previous workflow.\n',ring:"assess",active:!0,moved:0}]};var i;i={name:"Platform & Services",quadrant:1,entries:[{label:"MySQL",ring:"adopt",active:!0,moved:0},{label:"PostgreSQL",ring:"trial",active:!0,moved:0},{label:"Elasticsearch",ring:"adopt",active:!0,moved:0},{label:"Redis",ring:"adopt",active:!0,moved:0},{label:"MongoDB",description:'For problems that fit the document database model, <a href="https://www.mongodb.com/">MongoDB</a> is now the most popular choice. In addition to ease of use and a solid technical implementation, the community and ecosystem contributed to this success. We are aware of problems where teams were tempted by the popularity of MongoDB when a document database was not a good fit or they did not understand the inherent complexity. When used appropriately, however, MongoDB has proven itself on many projects.',ring:"adopt",active:!0,moved:0},{label:"DynamoDB",ring:"assess",active:!0,moved:0},{label:"AWS Lambda",ring:"adopt",active:!0,moved:0},{label:"SQS",ring:"adopt",active:!0,moved:0},{label:"SNS",ring:"adopt",active:!0,moved:0},{label:"Keycloak",ring:"adopt",active:!0,moved:0},{label:"Kubernetes",ring:"trial",active:!0,moved:0},{label:"Helm",ring:"trial",active:!0,moved:0},{label:"GraphQL",description:"There are many successful <a href=\"https://github.com/facebook/graphql\">GraphQL</a> implementations in our projects. That said, we've concerns about misuse of this framework and some of the problems that can occur. Examples include performance gotchas around N+1 queries and lots of boilerplate code needed when adding new models, leading to complexity. There are workarounds to these gotchas such as query caching.\nEven though it's not a silver bullet, we still think it's worth trying it as part of your architecture.",ring:"trial",active:!0,moved:0},{label:"HTTP/REST",description:"A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.\nWhile REST APIs have their shortcommings (e.g. under or over data-fetching), REST APIs are scalable and allows developers to structure data as per their needs and the client knows what structure of data to expect. Moreover, this enables you to use many third-party APIs as well, by just simply seeing their sample data responses, and the best part is you probably don't have to manage any of these third-party APIs.",ring:"adopt",active:!0,moved:0},{label:"Event-driven",description:'Message-driven system integration provides multiple benefits. One remarkable benefit is that this integration style uses asynchronous communication, i.e. the temporal decoupling of sender and receiver. At Reservix, we have started to establish an event-driven architecture as our preferred way of system integration.\nYou can read more about this topics <a href="https://reservix.atlassian.net/l/c/H4Hvr9k0">here</a>.',ring:"trial",active:!0,moved:0},{label:"Serverless",link:"https://www.serverless.com/",ring:"trial",active:!0,moved:0}]};var n;n={name:"Tooling",quadrant:0,entries:[{label:"npm",description:'<a href="https://www.npmjs.com/">npm</a> is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.\nEven though npm comes preinstalled with Node.js it lacks behind its competition, namely yarn and pnpm. The competitors also come with more relevant features and installing dependencies with npm is a magnitude slower than with other package manager. Because of this we recommend to use pnpm or yarn in your project instead.\n',link:"https://www.npmjs.com/",ring:"onHold",active:!0,moved:0},{label:"pnpm",description:'<a href="https://pnpm.io/">pnpm</a> is an up-and-coming package manager for Node.js. It has higher speed and greater efficiency compared to other package managers (e.g. yarn and npm). Dependencies are saved in a single place on the disk and are linked into the respective node_modules directories. pnpm also supports incremental optimization on file level, provides a solid API foundation to allow extension/customization and supports store server mode, which speeds up dependency download even more.\nThis is why we recommend using pnpm over other package managers.\n',ring:"adopt",active:!0,moved:0},{label:"yarn (v1)",description:'<a href="https://classic.yarnpkg.com/">Yarn</a> is a fast, reliable and secured package manager for JavaScript. Using a lock file and a deterministic algorithm, Yarn is able to guarantee that an installation that worked on one system will work exactly the same way on any other system. By efficiently queuing up requests, Yarn maximizes network utilization and as a result we\'ve seen faster package downloads. Yarn continues to be the package manager of choice for many teams.\nFair warning though, Yarn 1 is now in maintenance mode and pnpm is the preferred package manager over Yarn 2.\n',ring:"adopt",active:!0,moved:0},{label:"yarn (v2)",description:"<a href=\"https://yarnpkg.com/\">Yarn 2</a>, a major new release with a long list of changes and improvements. In addition to usability tweaks and improvements in the area of workspaces, Yarn 2 introduces the concept of zero-installs, which allows developers to run a project directly after cloning it. However, Yarn 2 includes some breaking changes which makes the upgrade nontrivial. It also defaults to plug'n'play (PnP) environments and at the same time doesn't support React Native in PnP environments. Teams can, of course, opt out of PnP or stay on Yarn 1.\nWe advise against using Yarn 2, since even after years of its release the adoption rate of it is very low and toolins support is very poor.\n",ring:"onHold",active:!0,moved:0},{label:"composer",description:"<a href=\"https://getcomposer.org/\">Composer</a> is a tool for dependency management in PHP. It is strongly influenced by tools from other technology stacks like Node's npm and Ruby's Bundler. We are now seeing wide adoption across PHP projects and it is fairly mature. You can still have to do some shims for internal libraries, you can use it for most external libraries.\n",ring:"adopt",active:!0,moved:0},{label:"Webpack",description:'<a href="http://webpack.github.io/">Webpack</a> has solidified itself as the go-to JavaScript module bundler. With its ever-growing list of loaders, it provides a single dependency tree for all your static assets, allowing flexible manipulation of JavaScript, CSS, etc. and minimizing production builds.\nThat said, newer bundlers (vite, Parcel, esbuild, tsup) have simpler configuration, allowing people to add/create plugins and configure the setup more easily, and some utilize ESM to make ultra fast reload speeds and smaller bundles. Because of this, Webpack is not the best tool to use anymore. We recommend to switch to another bundler for your projects.\n',ring:"onHold",active:!0,moved:0},{label:"Parcel",description:'<a href="https://parceljs.org/">Parcel</a> is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.\nIt has all the standard bundling features and provides true zero-configuration experience, making it really easy to get started with and use. It has fast bundle times and beats its competitors in many benchmarks. Parcel has gained a lot of community interest and continues to innovate.\nWe started using Parcel in some projects to quickly set up a great development environment. Since it doesn\'t require a lot of configuration, if any at all, it is easy to replace other bundlers like Webpack.\n',ring:"assess",active:!0,moved:0},{label:"tsup",description:'<a href="https://tsup.egoist.sh/">tsup</a> is zero-config TypeScript bundler, powered by <a href="esbuild">esbuild</a>. It comes with all the necessary features and can be used as a drop-in replacement for the default TypeScript compiler (tsc). Since it\'s written in Rust, it\'s also much faster than the tsc.\nWe started using tsup in some projects that previously used tsc. Migration was very smooth and we also found some potential bugs inside the TypeScript code, since tsup is much strciter thant tsc.\n',ring:"trial",active:!0,moved:0},{label:"jest",description:'<a href="https://jestjs.io/">jest</a> is a powerful Javascript testing framework that supports running tests in a (virtuell) browser environment as well as in Node.js. It is a very efficient and feature packed test runner that supports TypeScript, React and other technologies out of the box.\nWe recommend using jest as your default test runner for Javascript and Typescript based projects.\n',ring:"adopt",active:!0,moved:0},{label:"Cypress",description:'<a href="https://cypress.io/">Cypress</a> is an end-to-end test framework. It aims to address the pain points developers or QA engineers face while testing an application. Cypress is a more developer-friendly tool that uses a unique DOM manipulation technique and operates directly in the browser.\nFixing end-to-end test failures in CI can be a painful experience, especially in headless mode. Cypress is a useful tool that helps developers build end-to-end tests easily and records all test steps as a video in an MP4 file. Instead of reproducing the issue in headless mode, developers can watch the testing video in order to fix it.\nWe started using Cypress in some projects instead of Behat and the first results look very promising.\n',ring:"assess",active:!0,moved:0},{label:"Behat",description:'<a href="https://behat.org/">Behat</a> is a PHP testing framework which can be used to automate acceptance tests in a human readable language called Gherkin. Since it is based on Cucumber, it also helps teams to adopt and implement Behavioral Driven Development (BDD).\nWhile Behat is still a good solution, other frameworks like Cypress are more feature rich and developer friendly. We recommend to use an alternative like Cypress for new projects.\n',ring:"onHold",active:!0,moved:0}]};const r=[e({name:"Languages & Frameworks",quadrant:2,entries:[{label:"PHP",description:'<a href="https://www.php.net/">PHP</a> is popular general-purpose scripting language that is especially suited to web development. It is widely used and our developers are very proficient solving business problems with PHP.',ring:"adopt",active:!0,moved:0},{label:"Symfony",description:'The <a href="https://symfony.com/">Symfony</a> PHP framework is a well-organized, feature-rich PHP framework whose architecture paves the way for developers to build sustainable web applications in the easiest way possible which further enhances the users\' experience. It is widely used in our organization and our developers have a lot of experience solving business problems with it.',ring:"adopt",active:!0,moved:0},{label:"TypeScript",description:'<a href="https://www.typescriptlang.org/">TypeScript</a>, a statically typed language and superset of JavaScript, has become our sensible default. Large-scale projects benefit most from the type safety. TypeScritp requires minimal configuration management, has well-integrated IDE support and its ability to refactor code safely and gradually adopt types. The support from tooling and libraries is excellent.',ring:"adopt",active:!0,moved:0},{label:"JavaScript",description:'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (JS)</a> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime, which leads to errors only show during production. JavaScript is only suited for small-scale applications. TypeScript should be favored over JavaScript. TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier.',ring:"onHold",active:!0,moved:0},{label:"React",description:'In the avalanche of front-end JavaScript frameworks, <a href="https://reactjs.org/">React.js</a> stands out due to its design around a reactive data flow. Allowing only one-way data binding greatly simplifies the rendering logic and avoids many of the issues that commonly plague applications written with other frameworks. We\'re seeing the benefits of React.js on a growing number of projects, large and small, while at the same time we continue to be concerned about the state and the future of other popular frameworks like AngularJS. This has led to React.js becoming our default choice for JavaScript frameworks.',ring:"adopt",active:!0,moved:0},{label:"Vue",description:'<a href="https://vuejs.org/">Vue.js</a> has become one of the successfully applied, loved and trusted frontend JavaScript frameworks among our community. Although there are other, well-adopted alternatives, such as React.js, the simplicity of Vue.js in API design, its clear segregation of directives and components (one file per component idiom) and its simpler state management have made it a compelling option among others.',ring:"trial",active:!0,moved:0},{label:"C#",description:'<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a> is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET.',ring:"adopt",active:!0,moved:0},{label:"Java",ring:"trial",active:!0,moved:0},{label:"Zend",ring:"onHold",active:!0,moved:0},{label:"LESS",ring:"onHold",active:!0,moved:0},{label:"Marigold",ring:"trial",active:!0,moved:0},{label:"Next.js",description:'<a href="https://nextjs.org/">Next.js</a> is an opinionated, zero-configuration framework that includes simplified routing, automatic compilation and bundling with Webpack and Babel, fast hot reloading for a convenient developer workflow among other features. It provides server-side rendering by default, improves search engine optimization and the initial load time and supports incremental static generation. We\'ve had positive experience reports from teams using Next.js and, given its large community, continue to be excited about the evolution of the framework.',ring:"assess",active:!0,moved:0},{label:"express",ring:"onHold",active:!0,moved:0},{label:"fastify",ring:"assess",active:!0,moved:0}]}),e(n),e(o),e(i)].sort(((e,t)=>e.quadrant-t.quadrant)),s=r.map((e=>e.entries.map((({description:t="",ring:o,...i})=>({...i,quadrant:e.quadrant,ring:a[o],description:t.split(/\r?\n/).filter(Boolean).map((e=>`<p>${e}</p>`)).join("")}))))).flat();radar_visualization({svg_id:"radar",title:"Reservix Tech Radar — 2022 Q3 (work in progress)",width:1500,height:1e3,colors:{background:"#fff",grid:"#adb5bd",inactive:"#dee2e6"},quadrants:r,rings:t,print_layout:!0,entries:s});const l=document.getElementById("radar"),d=document.getElementById("dialog"),c=document.getElementById("dialog-title"),p=document.getElementById("dialog-content"),m=document.getElementById("dialog-badge");document.addEventListener("click",(e=>{e.preventDefault();const a=e.target;if((e=>l.contains(e)&&"text"===e.tagName&&"a"===e.parentElement?.tagName)(a)){const e=(o=(e=>/\s(.*)/.exec(e.textContent)[1])(a),s.find((e=>e.label===o)));return c.innerHTML=e.label,p.innerHTML=e.description||"TDB",m.innerHTML=t[e.ring].name,m.style=`background: ${t[e.ring].color}`,void d.showModal()}var o;"dialog"===a.tagName.toLocaleLowerCase()&&d.close()}));
//# sourceMappingURL=index.4a81dbda.js.map
