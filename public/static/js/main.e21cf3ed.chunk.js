(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,a,n){e.exports=n(58)},46:function(e,a,n){},47:function(e,a,n){},48:function(e,a,n){e.exports=n.p+"static/media/logo.7dab9996.jpg"},58:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),c=n(33),r=n.n(c),s=(n(46),n(47),n(48),function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"SpaceX Mission Statistics"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"}))))}),m=n(17),o=n(8),i=n(16),u=n(14),h=n(21),g=n(19),E=n(22),p=n.n(E),d=n(34),b=n.n(d),f=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,c=a.launch_date_local,r=a.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,"Mission: ",l.a.createElement("span",{className:p()({"text-success":r,"text-danger":!r})},t)),l.a.createElement("p",null,"Launch Date: ",l.a.createElement(b.a,{format:"YYYY-MM-DD HH:mm"},c))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(i.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},v=function(){return l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"}),"= Success"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"}),"= Failure"))};function N(){var e=Object(h.a)(["\n    query LaunchesQuery{\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return N=function(){return e},e}var _=Object(m.b)(N()),y=function(){var e=Object(g.a)(_),a=e.loading,n=e.error,c=e.data;return a?l.a.createElement("p",null,"Loading..."):n?l.a.createElement("p",null,"Error..."):l.a.createElement(t.Fragment,null,l.a.createElement("h1",{className:"display-4 my-3"},"Launches"),l.a.createElement(v,null),function(e){var a=e.launches;return l.a.createElement(t.Fragment,null,a.map((function(e){return l.a.createElement(f,{key:e.flight_number,launch:e})})))}(c))};function k(){var e=Object(h.a)(["\n    query LaunchQuery($flight_number: String!){\n        launch(flight_number: $flight_number){\n            flight_number\n            launch_date_local\n            mission_name\n            launch_year\n            launch_success\n            rocket{\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return k=function(){return e},e}var x=Object(m.b)(k()),w=function(e){var a=e.match.params.flight_number,n=Object(g.a)(x,{variables:{flight_number:a}}),t=n.loading,c=n.error,r=n.data;return t?l.a.createElement("p",null,"Loading..."):(c&&console.log(c),function(e){var a=e.mission_name,n=e.flight_number,t=e.launch_year,c=e.launch_success,r=e.rocket,s=r.rocket_id,m=r.rocket_name,o=r.rocket_type;return l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 my-3"},l.a.createElement("span",{className:"text-dark"},a)),l.a.createElement("h4",{className:"mb-3"},"Launch Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",n),l.a.createElement("li",{className:"list-group-item"},"Launch Year: ",t),l.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",l.a.createElement("span",{className:p()({"text-success":c,"text-danger":!c})},c?"Yes":"No")),l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",n)),l.a.createElement("h4",{className:"my-3"},"Rocket Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",s),l.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",m),l.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",o)),l.a.createElement("hr",null),l.a.createElement(i.b,{to:"/",className:"btn btn-secondary"},"Back"))}(r.launch))},L=new m.a({uri:"/graphql"});var j=function(){return l.a.createElement(o.a,{client:L},l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{exact:!0,path:"/",component:y}),l.a.createElement(u.a,{exact:!0,path:"/launch/:flight_number",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.e21cf3ed.chunk.js.map