(this.webpackJsonpruthtech=this.webpackJsonpruthtech||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/ruthtech.da12427d.svg"},19:function(e,t,a){e.exports=a.p+"static/media/trusael-min.ec38234d.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/toronto-min.78bf90c4.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/employee-tracker.23bd4d59.gif"},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(16),c=a.n(o),r=(a(28),a(7)),i=a(5),s=a(10),m=a.n(s);a(9);var u=function(){return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav nav-bar"},n.a.createElement("li",{className:"col-12 col-sm-2 nav-item logo-block"},n.a.createElement("div",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:m.a,alt:"Ruth Lee Logo",className:"logo"}))),n.a.createElement("div",{className:"logo-text"},"Get things done.")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(r.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Home")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(r.b,{to:"/about",className:"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),n.a.createElement("li",{className:"nav-item nav-tab"},n.a.createElement(r.b,{to:"/contact",className:"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Contact"))))};var d=function(){return n.a.createElement("div",{className:"row footer"},n.a.createElement("div",{className:"col-12 col-sm-2"},n.a.createElement("a",{type:"button",href:"https://linkedin.com/in/ruthsarahlee"},"LinkedIn")),n.a.createElement("div",{className:"col-12 col-sm-2"},n.a.createElement("a",{href:"https://github.com/ruthtech"},"GitHub")))},p=a(22),h=a(19),v=a.n(h),E=a(20),b=a.n(E),g=a(21),k=a.n(g);function f(e){return n.a.createElement("div",null,function(){if(void 0!==e.project.logins)return n.a.createElement("div",null,n.a.createElement("span",null,"Logins to use in the demo:"),n.a.createElement("ul",{className:"login"},e.project.logins.map((function(e,t){return n.a.createElement("li",{key:"login"+t},e.title,": ",n.a.createElement("span",{className:"loginliteral"},e.userid),", password: ",n.a.createElement("span",{className:"loginliteral"},e.password))}))))}())}function N(e){var t="PrjImg"+e.project.index;return n.a.createElement("div",{className:"details definition d-flex"},n.a.createElement("div",{className:"col-12 col-sm-5 details-text"},n.a.createElement("h2",null,e.project.title),n.a.createElement("p",null,e.project.summary),n.a.createElement("ul",{className:"project-skills"},e.project.skills.map((function(e,t){return n.a.createElement("li",{key:"detail"+t},e)}))),n.a.createElement(f,{project:e.project}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.project.github}},"See the code")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.project.heroku}},"View demo")))),n.a.createElement("div",{className:"col-12 col-sm-7 details-image"},n.a.createElement("img",{src:e.project.image[t],alt:e.project.title})))}function w(e){return e.projects.map((function(e,t){return n.a.createElement("div",{className:"col-12 col-sm-4 mt-3",key:"project"+t,onClick:function(){e.setActiveProjectIndex(e.index)}},n.a.createElement("div",{className:"card card-portfolio box"},n.a.createElement("div",{className:"card-header portfolio-header"},n.a.createElement("h5",{className:"card-title"},e.title)),n.a.createElement("div",{className:"card-body "+e.colour},n.a.createElement("p",{className:"card-text"},e.summary)),n.a.createElement("div",{className:"card-buttons "+e.colour},n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.github}},"See the code"),n.a.createElement("button",{type:"button",className:"btn portfolio-button",onClick:function(){window.location=e.heroku}},"View demo"))))}))}var y=function(){var e=Object(l.useState)(0),t=Object(p.a)(e,2),a=t[0],o=t[1],c=[{title:"Trus\xc6L Online Marketplace",summary:"Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.",skills:["Server (Node, Express)","Heroku","dotenv","MySQL","Crypto-JS","JavaScript","Bootstrap","AJAX","jQuery","HTML","CSS"],github:"https://github.com/BCButcher/TRUS-L",heroku:"https://murmuring-cove-22350.herokuapp.com/",colour:"bg-lightBlue",image:{PrjImg0:v.a},logins:[{title:"Agent",userid:"abbybanksy@broker.ca",password:"password"},{title:"Seller",userid:"louiekritski@fake.com",password:"password"}],setActiveProjectIndex:o,index:0},{title:"Toronto Area Resources",summary:"Query the City of Toronto data to find out what resources exist and plot them on an interactive map.",skills:["MapBox","HTML","CSS","JavaScript","AJAX","City of Toronto Open Data API"],github:"https://github.com/ruthtech/torontoAreaResources",heroku:"https://ruthtech.github.io/torontoAreaResources",colour:"bg-mediumBlue",image:{PrjImg1:b.a},setActiveProjectIndex:o,index:1},{title:"Employee Tracker",summary:"Command line tool that manages a company's employees: add employee, view departments, remove employee etc.",skills:["Node","Inquirer","JavaScript","MySQL"],github:"https://github.com/ruthtech/employee-tracker",heroku:"https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif",colour:"bg-darkBlue",image:{PrjImg2:k.a},setActiveProjectIndex:o,index:2}];return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row display-flex"},n.a.createElement(N,{project:c[a]})),n.a.createElement("div",{className:"row display-flex bottom-row"},n.a.createElement(w,{projects:c})))};a(34);var x=[{title:"Tests and Tools",skills:["Git","JUnit","JEST","Visual Code","Figma"],skillColour:"bg-lightBlue"},{title:"Soft skills",skills:["Organized","Reliable","Problem solver","Strong work ethic","Thorough"],skillColour:"bg-mediumBlue"},{title:"Programming",skills:["JavaScript","Java","SQL","React","Node"],skillColour:"bg-darkBlue"}];function j(e){return e.skillSets.map((function(e,t){return n.a.createElement("div",{className:"col-12 col-sm-4",key:"skillSet"+t},n.a.createElement("div",{className:"card skills-card"},n.a.createElement("div",{className:"card-header portfolio-header"},n.a.createElement("h6",{className:"skills-title"},e.title)),n.a.createElement("div",{className:"card-body skills-body "+e.skillColour},n.a.createElement("ul",{className:"card-text pl-3"},e.skills.map((function(e,t){return n.a.createElement("li",{key:"skill"+t},e)}))))))}))}var S=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row main"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box first"},"Write")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box second"},"Organize")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("div",{className:"colour-box third"},"Code"))),n.a.createElement("div",{className:"row justify-content-center d-flex"},n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{className:"definition box"},n.a.createElement("h5",{className:"text-center mb-3"},"I get things done."),n.a.createElement("p",null,"While I stayed home to raise my children I volunteered at their school regularly. We submitted grant applications, wrote social media for Council, served pizza lunch to over 730 kids, and worked with the TDSB to get Kindergarten yards repaired."),n.a.createElement("p",null,"I've coded, tested, built, liaisoned, managed, project managed, and worked on teams that spanned companies and continents. Having just completed a bootcamp that taught me Full Stack Web Development, I will continue to learn new technologies and solve problems.")))),n.a.createElement("div",{className:"row bottom-row"},n.a.createElement(j,{skillSets:x})))};a(35);var C=function(e){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row justify-content-center d-flex"},n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{className:"definition box"},n.a.createElement("h5",{className:"text-center mb-3"},"Contact Me"),n.a.createElement("p",null,"Send me an email at ",n.a.createElement("span",{className:"loginliteral"},"leeruths@gmail.com")," or message through my ",n.a.createElement("a",{href:"https://linkedin.com/in/ruthsarahlee"},"LinkedIn"),". Looking forward to hearing from you!"),n.a.createElement("img",{src:m.a,alt:"Ruth Lee"})))))};var I=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"full-screen"},n.a.createElement(u,null),n.a.createElement(i.a,{exact:!0,path:"/",component:y}),n.a.createElement(i.a,{exact:!0,path:"/about",component:S}),n.a.createElement(i.a,{exact:!0,path:"/contact",component:C}),n.a.createElement(d,null)))};a(36),a(37);c.a.render(n.a.createElement(I,null),document.getElementById("root"))},9:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.1699d709.chunk.js.map