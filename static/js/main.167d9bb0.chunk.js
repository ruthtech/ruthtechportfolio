(this.webpackJsonpruthtech=this.webpackJsonpruthtech||[]).push([[0],[,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/ruthtech.da12427d.svg"},,,function(e,t,a){e.exports=a.p+"static/media/voting-application.52e6ca0e.png"},function(e,t,a){e.exports=a.p+"static/media/trusael-min.d15dbfb8.jpg"},function(e,t,a){e.exports=a.p+"static/media/torontoarearesources-min.23ca5cf6.jpg"},function(e,t,a){e.exports=a.p+"static/media/employee-tracker-min.13bd5565.jpg"},function(e,t,a){e.exports=a.p+"static/media/profile-photo.780f9b5f.png"},function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(15),r=a.n(o),c=(a(29),a(7)),i=a(5),s=a(16),m=a.n(s);a(9);var u=function(){return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav nav-bar"},n.a.createElement("li",{className:"col-12 col-sm-2 nav-item logo-block"},n.a.createElement("div",null,n.a.createElement("a",{href:"/ruthtech"},n.a.createElement("img",{src:m.a,alt:"Ruth Lee Logo",className:"logo"}))),n.a.createElement("div",{className:"logo-text"},"Get things done.")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(c.b,{to:"/ruthtech",className:"/ruthtech"===window.location.pathname?"nav-link active":"nav-link"},"Home")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(c.b,{to:"/portfolio",className:"/portfolio"===window.location.pathname?"nav-link active":"nav-link"},"Portfolio")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(c.b,{to:"/contact",className:"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Contact"))))};var d=function(){return n.a.createElement("div",{className:"row footer"},n.a.createElement("div",{className:"col-12 col-sm-2"},n.a.createElement("a",{href:"https://linkedin.com/in/ruthsarahlee"},"LinkedIn")),n.a.createElement("div",{className:"col-12 col-sm-2"},n.a.createElement("a",{href:"https://github.com/ruthtech"},"GitHub")))},p=a(19),h=a.n(p),g=a(20),v=a.n(g),E=a(21),k=a.n(E),b=a(22),f=a.n(b);function N(e){return n.a.createElement("div",null,function(){if(void 0!==e.project.logins)return n.a.createElement("div",null,n.a.createElement("span",null,"Logins to use in the demo:"),n.a.createElement("ul",{className:"login"},e.project.logins.map((function(e,t){return n.a.createElement("li",{key:"login"+t},e.title,": ",n.a.createElement("span",{className:"login-literal"},e.userid),", password: ",n.a.createElement("span",{className:"login-literal"},e.password))}))))}())}function w(e){var t="PrjImg"+e.project.index;return n.a.createElement("div",{className:"details definition details-flex"},n.a.createElement("div",{className:"col-12 col-sm-7 details-image-col"},n.a.createElement("img",{src:e.project.image[t],alt:e.project.title,className:"details-image"})),n.a.createElement("div",{className:"col-12 col-sm-5 details-text"},n.a.createElement("h2",null,e.project.title),n.a.createElement("p",null,e.project.summary),n.a.createElement("ul",{className:"project-skills"},e.project.skills.map((function(e,t){return n.a.createElement("li",{key:"detail"+t},e)}))),n.a.createElement(N,{project:e.project}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.project.github}},"See the code")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.project.heroku}},"View demo")))))}var y=function(){var e=[{title:"Canada Votes Online",summary:"Enable eligible voters to vote online and view election results.",skills:["MongoDB","Mongoose","React","mapbox","Server (Node, Express)","Heroku","dotenv","loglevel","loglevel-plugin-remote","axios","Bootstrap","HTML","CSS"],github:"https://github.com/ruthtech/voting-app",heroku:"https://arcane-mountain-21933.herokuapp.com/",colour:"bg-darkBlue",image:{PrjImg0:h.a},logins:[{title:"Admin",userid:"admin",password:"admin"},{title:"Voter",userid:"happyfrog374",password:"technics"}],index:0},{title:"Trus\xc6L Online Marketplace",summary:"Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.",skills:["Server (Node, Express)","Heroku","dotenv","MySQL","Crypto-JS","JavaScript","Bootstrap","AJAX","jQuery","HTML","CSS"],github:"https://github.com/BCButcher/TRUS-L",heroku:"https://murmuring-cove-22350.herokuapp.com/",colour:"bg-lightBlue",image:{PrjImg1:v.a},logins:[{title:"Agent",userid:"abbybanksy@broker.ca",password:"password"},{title:"Seller",userid:"louiekritski@fake.com",password:"password"}],index:1},{title:"Toronto Area Resources",summary:"Query the City of Toronto data to find out what resources exist and plot them on an interactive map.",skills:["MapBox","HTML","CSS","JavaScript","AJAX","City of Toronto Open Data API"],github:"https://github.com/ruthtech/torontoAreaResources",heroku:"https://ruthtech.github.io/torontoAreaResources",colour:"bg-mediumBlue",image:{PrjImg2:k.a},index:2},{title:"Employee Tracker",summary:"Command line tool that manages a company's employees: add employee, view departments, remove employee etc.",skills:["Node","Inquirer","JavaScript","MySQL"],github:"https://github.com/ruthtech/employee-tracker",heroku:"https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif",colour:"bg-darkBlue",image:{PrjImg3:f.a},index:3}];return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h6",{className:"mt-3"},"The projects on this page demonstrate a variety of roles: full stack, working with maps, and a command line application."))),n.a.createElement("div",{className:"row"},e.map((function(e,t){return n.a.createElement(w,{key:"projectdetails"+t,project:e})}))))},C=(a(35),a(23)),x=a.n(C);var S=[{title:"Tools and Tests",skills:["Git","JUnit","JEST","Visual Code","Eclipse"],skillColour:"bg-lightBlue"},{title:"Soft skills",skills:["Organized","Reliable","Problem solver","Strong work ethic","Thorough"],skillColour:"bg-mediumBlue"},{title:"Programming",skills:["Java","JavaScript","SQL","React","Node"],skillColour:"bg-darkBlue"}];function j(e){return e.skillSets.map((function(e,t){return n.a.createElement("div",{className:"col-12 col-sm-4",key:"skillSet"+t},n.a.createElement("div",{className:"card skills-card"},n.a.createElement("div",{className:"card-header portfolio-header"},n.a.createElement("h6",{className:"skills-title"},e.title)),n.a.createElement("div",{className:"card-body skills-body "+e.skillColour},n.a.createElement("ul",{className:"card-text pl-3"},e.skills.map((function(e,t){return n.a.createElement("li",{key:"skill"+t},e)}))))))}))}var B=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box bg-lightBlue"},"Write")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box bg-mediumBlue"},"Organize")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box bg-darkBlue"},"Code"))),n.a.createElement("div",{className:"row home-row"},n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{className:"home"},n.a.createElement("h5",null,"I get things done."),n.a.createElement("p",null,"I've coded, tested, built, liaisoned, managed, project managed, and worked on teams that spanned companies and continents. Having just completed a bootcamp that taught me Full Stack Web Development, I will continue to learn new technologies and solve problems."),n.a.createElement("p",null,"I am returning to work after a 10 year career break. While on break I volunteered at my children's school regularly. Some highlights include working on teams that raised over $10K per school year and working with the TDSB to repair and replace Kindergarten yards."),n.a.createElement("img",{src:x.a,alt:"Ruth Lee"})))),n.a.createElement("div",{className:"row bottom-row"},n.a.createElement(j,{skillSets:S})))};a(36);var L=function(e){return n.a.createElement("div",{className:"container d-flex align-items-center h-100"},n.a.createElement("div",{className:"row home-row"},n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{className:"contact"},n.a.createElement("h5",null,"Contact Me"),n.a.createElement("p",null,"Send me an email at ",n.a.createElement("span",{className:"login-literal"},"leeruths@gmail.com")," or message through my ",n.a.createElement("a",{href:"https://linkedin.com/in/ruthsarahlee"},"LinkedIn"),". Looking forward to hearing from you!"),n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"30, 150, 400, 300",preserveAspectRatio:"xMaxYMax meet"},n.a.createElement("g",{id:"Layer_1"},n.a.createElement("path",{className:"vertical",d:"M120.5,247.5 C91.805,287.648 63.458,330.584 41.5,374.5"}),n.a.createElement("path",{className:"R",d:"M10.5,237.5 C48.142,242.586 188.017,177.517 213,202.5 C260.436,249.936 92.581,294.5 66,294.5 C55.206,294.5 93.248,292.079 97.5,302 C107.129,324.468 94.693,362.341 125,371"}),n.a.createElement("path",{className:"long",d:"M174,301 C170.691,307.735 148.556,346.802 161.5,350.5 C184.682,357.123 207.114,308.386 204.5,311 C176.261,339.239 206.31,360.69 235,332 C260.369,306.631 279.617,278.01 301,249.5 C301.717,248.544 306.134,238.5 306.5,238.5 C307.281,238.5 294.588,256.707 284.5,274 C274.275,291.529 259.368,312.344 255,332 C247.45,365.973 286.753,267.126 268.5,258 C251.794,249.647 245.618,296.697 251.5,306.5 C267.006,332.343 323.815,262.64 330.5,255 C337.795,246.663 361.833,223.667 354,231.5 C331.113,254.387 319.003,280.163 300,305.5 C292.161,315.952 286.343,351.186 280.5,339.5 C278.577,335.654 308.518,296.513 316.5,302.5 C326.633,310.1 316.614,369.568 356.5,335"})))))))};var I=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"full-screen"},n.a.createElement(u,null),n.a.createElement(i.a,{exact:!0,path:["/","/ruthtech",""],component:B}),n.a.createElement(i.a,{path:"/portfolio",component:y}),n.a.createElement(i.a,{path:"/contact",component:L}),n.a.createElement(d,null)))};a(37);r.a.render(n.a.createElement(I,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.167d9bb0.chunk.js.map