(this.webpackJsonpraci=this.webpackJsonpraci||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"index",(function(){return L})),n.d(a,"show",(function(){return B})),n.d(a,"create",(function(){return J})),n.d(a,"destroy",(function(){return R}));var r={};n.r(r),n.d(r,"create",(function(){return G})),n.d(r,"destroy",(function(){return z}));var s={};n.r(s),n.d(s,"create",(function(){return q})),n.d(s,"destroy",(function(){return V}));var c={};n.r(c),n.d(c,"index",(function(){return W}));var o={};n.r(o),n.d(o,"index",(function(){return X})),n.d(o,"login",(function(){return Z})),n.d(o,"signup",(function(){return $})),n.d(o,"profile",(function(){return ee})),n.d(o,"available_projects",(function(){return te}));var i={};n.r(i),n.d(i,"create",(function(){return ne})),n.d(i,"destroy",(function(){return ae}));var u={};n.r(u),n.d(u,"create",(function(){return re}));var l=n(0),d=n.n(l),j=n(60),h=n.n(j),b=(n(158),n(7)),p=n(34),f=n(35),m=n(38),O=n(36),x=(n(159),n(182)),g=n(181),k=n(180),C=n(188),T=n(190),v=n(191),S=n(189),_=n(112),w=n(185),I=n(87),y=n(54),D=n(184),P=n(2);var M=function(e){var t=d.a.useState(!1),n=Object(y.a)(t,2),a=n[0],r=n[1];return Object(P.jsxs)(D.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(P.jsxs)(S.a,{floated:"left",icon:!0,labelPosition:"left",primary:!0,onClick:e.onTriggerButtonClick,size:"small",children:[Object(P.jsx)(I.a,{name:"plus square"})," Add Task"]}),children:[Object(P.jsx)(D.a.Header,{children:"Create new task"}),Object(P.jsx)(D.a.Content,{children:Object(P.jsx)(D.a.Description,{children:Object(P.jsxs)(x.a,{children:[Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:"Text"}),Object(P.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns()]})})}),Object(P.jsxs)(D.a.Actions,{children:[Object(P.jsx)(S.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(P.jsx)(S.a,{type:"submit",icon:"checkmark",onClick:function(t,n){var a=n.taskName;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Create task"})]})]})};var U=function(e){var t=Object(l.useState)(!1),n=Object(y.a)(t,2),a=n[0],r=n[1];return Object(P.jsxs)(D.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(P.jsx)(S.a,{icon:!0,onClick:function(){e.putSelectedTaskDataInState(e.task.id)},floated:"right",children:Object(P.jsx)(I.a,{name:"pencil square"})}),children:[Object(P.jsx)(D.a.Header,{children:"Edit task"}),Object(P.jsx)(D.a.Content,{children:Object(P.jsx)(D.a.Description,{children:Object(P.jsxs)(x.a,{children:[Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:"Text"}),Object(P.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns(e.task)]})})}),Object(P.jsxs)(D.a.Actions,{children:[Object(P.jsxs)(S.a,{icon:!0,labelPosition:"right",color:"red",floated:"left",onClick:function(){var t=e.task;r(!1),e.handleDelete(t)},children:["Delete task",Object(P.jsx)(I.a,{name:"trash alternate outline"})]}),Object(P.jsx)(S.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(P.jsx)(S.a,{type:"submit",onClick:function(t,n){var a=e.task;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Update task"})]})]})},E=function(e){var t=d.a.useState(!1),n=Object(y.a)(t,2),a=n[0],r=n[1];return Object(P.jsxs)(D.a,{basic:!0,onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,size:"small",trigger:Object(P.jsxs)(S.a,{color:"red",floated:"right",children:[Object(P.jsx)(I.a,{name:"trash alternate outline"}),"Delete project"]}),children:[Object(P.jsxs)(T.a,{icon:!0,children:[Object(P.jsx)(I.a,{name:"trash alternate outline"}),Object(P.jsx)("br",{}),"Are you sure you want to delete this Project?"]}),Object(P.jsx)(D.a.Content,{children:Object(P.jsxs)(v.a,{children:[Object(P.jsx)(v.a.Column,{width:3}),Object(P.jsx)(v.a.Column,{width:10,children:Object(P.jsx)("p",{children:'Delete "'.concat(e.projectName,'" along with all associated tasks?')})}),Object(P.jsx)(v.a.Column,{width:3})]})}),Object(P.jsxs)(D.a.Actions,{children:[Object(P.jsxs)(S.a,{basic:!0,color:"grey",inverted:!0,onClick:function(){return r(!1)},children:[Object(P.jsx)(I.a,{name:"remove"})," No, go back"]}),Object(P.jsxs)(S.a,{color:"red",inverted:!0,onClick:function(){e.deleteProject(e.projectId),r(!1)},children:[Object(P.jsx)(I.a,{name:"checkmark"})," Yes, delete"]})]})]})},N=n(183),F=function(e){return Object(P.jsx)(N.a,{borderless:!0,attached:"top",style:{border:"none"},children:Object(P.jsxs)(N.a.Menu,{position:"right",children:[Object(P.jsx)(N.a.Item,{children:"Logged in as ".concat(e.userFullName)}),e.onBack&&Object(P.jsx)(N.a.Item,{children:Object(P.jsx)(S.a,{onClick:e.onBack,floated:"right",children:e.backText})}),Object(P.jsx)(N.a.Item,{children:Object(P.jsx)(S.a,{onClick:e.logOut,children:"Log out"})})]})})},A="https://enigmatic-fortress-89780.herokuapp.com/api/v1",H={headers:Object(b.a)(Object(b.a)({},{Accept:"application/json","Content-Type":"application/json"}),{},{Authorization:"Bearer ".concat(localStorage.token)})},L=function(){return fetch("".concat(A,"/projects"),H).then((function(e){return e.json()}))},B=function(e){return fetch("".concat(A,"/projects/").concat(e),H).then((function(e){return e.json()}))},J=function(e){return fetch("".concat(A,"/projects"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},R=function(e){return fetch("".concat(A,"/projects/").concat(e),Object(b.a)({method:"DELETE"},H))},G=function(e){return fetch("".concat(A,"/user_tasks"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},z=function(e){return fetch("".concat(A,"/user_tasks/").concat(e),Object(b.a)({method:"DELETE"},H))},q=function(e,t){return fetch("".concat(A,"/flags"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify({user_id:e,task_id:t})}))},V=function(e){return fetch("".concat(A,"/flags/").concat(e),Object(b.a)(Object(b.a)({},H),{},{method:"DELETE"}))},W=function(){return fetch("".concat(A,"/functions"),H).then((function(e){return e.json()}))},Y=n(40),K=n.n(Y),Q=n(85),X=function(){return fetch("".concat(A,"/users/"),H).then((function(e){return e.json()}))},Z=function(e){var t=e.email,n=e.password;return fetch("".concat(A,"/login"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify({email:t,password:n})})).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},$=function(e){var t=e.first_name,n=e.last_name,a=e.email,r=e.password;return fetch("".concat(A,"/signup"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify({first_name:t,last_name:n,email:a,password:r})})).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ee=function(){return fetch("".concat(A,"/profile"),H).then((function(e){return e.json()}))},te=function(){return fetch("".concat(A,"/available_projects"),H).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ne=function(e,t){return fetch("".concat(A,"/tasks"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify({text:e,project_id:t})})).then((function(e){return e.json()}))},ae=function(e){return fetch("".concat(A,"/tasks/").concat(e),Object(b.a)(Object(b.a)({},H),{},{method:"DELETE"}))},re=function(e,t){return fetch("".concat(A,"/memberships"),Object(b.a)(Object(b.a)({},H),{},{method:"POST",body:JSON.stringify({user_id:e,project_id:t})})).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},se={Project:a,UserTask:r,Flag:s,Function:c,User:o,Task:i,Membership:u},ce=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).putProjectDataInState=function(){var t=e.props.match.params.id;se.Project.show(t).then((function(t){return e.setState({projectId:t.data.id,projectName:t.data.attributes.name,tasks:t.data.attributes.tasks,creator:t.data.attributes.creator,members:t.data.attributes.members})})),se.Function.index().then((function(t){return e.setState({functions:t.data})}))},e.putAllUsersDataInState=function(){se.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.createTeamMemberOptions=function(){return e.state.members.map((function(e){return{key:e.first_name,text:e.first_name,value:e.id}}))},e.createDropdownsForEditModal=function(t){return e.state.functions.map((function(n,a){var r=n.attributes.name.toLowerCase(),s=t?t[r].map((function(e){return e.user_id})):[];return Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:n.attributes.name}),Object(P.jsx)(g.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(n.id)),defaultValue:[3,4].includes(parseInt(n.id))?s:s[0],selection:!0,options:e.createTeamMemberOptions(),onChange:function(t,a){e.handleDropdownChangeForEditModal(a,n)}})]},a)}))},e.createDropdownsForCreateModal=function(t){return e.state.functions.map((function(t,n){t.attributes.name.toLowerCase();return Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:t.attributes.name}),Object(P.jsx)(g.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(t.id)),selection:!0,options:e.createTeamMemberOptions(),onChange:function(n,a){e.handleDropdownChangeForCreateModal(a,t)}})]},n)}))},e.handleDropdownChangeForCreateModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToCreateUserIds:Object(b.a)(Object(b.a)({},e.state.taskToCreateUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToCreateUserIds:Object(b.a)(Object(b.a)({},e.state.taskToCreateUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToCreateUserIds:Object(b.a)(Object(b.a)({},e.state.taskToCreateUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToCreateUserIds:Object(b.a)(Object(b.a)({},e.state.taskToCreateUserIds),{},{informed:t.value})})},e.handleDropdownChangeForEditModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToEditUserIds:Object(b.a)(Object(b.a)({},e.state.taskToEditUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToEditUserIds:Object(b.a)(Object(b.a)({},e.state.taskToEditUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToEditUserIds:Object(b.a)(Object(b.a)({},e.state.taskToEditUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToEditUserIds:Object(b.a)(Object(b.a)({},e.state.taskToEditUserIds),{},{informed:t.value})})},e.handleTextFieldChange=function(t){e.setState({selectedTask:Object(b.a)(Object(b.a)({},e.state.selectedTask),{},{task_name:t.target.value})})},e.createUserTasks=function(t){var n=parseInt(t.data.id),a=[],r=e.state.taskToCreateUserIds;r.responsible.forEach((function(e){a.push({task_id:n,function_id:1,user_id:e})})),r.accountable.forEach((function(e){a.push({task_id:n,function_id:2,user_id:e})})),r.consulted.forEach((function(e){a.push({task_id:n,function_id:3,user_id:e})})),r.informed.forEach((function(e){a.push({task_id:n,function_id:4,user_id:e})})),a.forEach((function(t){se.UserTask.create(t).then(e.putProjectDataInState)})),e.setState({userTasksToCreate:[]})},e.handleSubmitOnTaskModal=function(t){t.preventDefault();var n=e.state.projectId,a=e.state.selectedTask.task_name;se.Task.create(a,n).then((function(t){return e.createUserTasks(t)}))},e.handleSubmitOnEditTaskModal=function(t,n){t.preventDefault();var a={responsible:[],accountable:[],consulted:[],informed:[]},r={responsible:[],accountable:[],consulted:[],informed:[]},s={responsible:[],accountable:[],consulted:[],informed:[]},c={responsible:[],accountable:[],consulted:[],informed:[]},o=e.state.taskToEditUserIds;s.responsible=e.state.selectedTask.responsible.map((function(e){return e.user_id})),s.accountable=e.state.selectedTask.accountable.map((function(e){return e.user_id})),s.consulted=e.state.selectedTask.consulted.map((function(e){return e.user_id})),s.informed=e.state.selectedTask.informed.map((function(e){return e.user_id})),r.responsible=s.responsible.filter((function(e){return!o.responsible.includes(e)})),r.accountable=s.accountable.filter((function(e){return!o.accountable.includes(e)})),r.consulted=s.consulted.filter((function(e){return!o.consulted.includes(e)})),r.informed=s.informed.filter((function(e){return!o.informed.includes(e)})),a.responsible=o.responsible.filter((function(e){return!s.responsible.includes(e)})),a.accountable=o.accountable.filter((function(e){return!s.accountable.includes(e)})),a.consulted=o.consulted.filter((function(e){return!s.consulted.includes(e)})),a.informed=o.informed.filter((function(e){return!s.informed.includes(e)})),c.responsible=e.state.selectedTask.responsible.map((function(e){if(r.responsible.includes(e.user_id))return e.user_task_id})),c.accountable=e.state.selectedTask.accountable.map((function(e){if(r.accountable.includes(e.user_id))return e.user_task_id})),c.consulted=e.state.selectedTask.consulted.map((function(e){if(r.consulted.includes(e.user_id))return e.user_task_id})),c.informed=e.state.selectedTask.informed.map((function(e){if(r.informed.includes(e.user_id))return e.user_task_id}));var i=Object.values(c),u=[].concat.apply([],i).filter((function(e){return void 0!==e})),l=n.id,d=[];a.responsible.forEach((function(e){d.push({task_id:l,function_id:1,user_id:e})})),a.accountable.forEach((function(e){d.push({task_id:l,function_id:2,user_id:e})})),a.consulted.forEach((function(e){d.push({task_id:l,function_id:3,user_id:e})})),a.informed.forEach((function(e){d.push({task_id:l,function_id:4,user_id:e})})),u.forEach((function(t){se.UserTask.destroy(t).then(e.putProjectDataInState)})),d.forEach((function(t){se.UserTask.create(t).then(e.putProjectDataInState)}))},e.putSelectedTaskDataInState=function(t){var n=null,a={responsible:[],accountable:[],consulted:[],informed:[]};e.state.tasks.forEach((function(e){e.id===t&&(n=e,a.responsible=e.responsible.map((function(e){return e.user_id})),a.accountable=e.accountable.map((function(e){return e.user_id})),a.consulted=e.consulted.map((function(e){return e.user_id})),a.informed=e.informed.map((function(e){return e.user_id})))})),e.setState({selectedTask:n,taskToEditUserIds:a})},e.handleDelete=function(t){se.Task.destroy(t.id).then(e.putProjectDataInState)},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleFlagging=function(t){t.flags.map((function(e){return e.user_id})).includes(e.props.userId)?t.flags.forEach((function(t){t.user_id===e.props.userId&&se.Flag.destroy(t.flag_id).then(e.putProjectDataInState)})):se.Flag.create(e.props.userId,t.id).then(e.putProjectDataInState)},e.createNewMembers=function(){e.state.newMembersToAdd.forEach((function(t){se.Membership.create(t,e.state.projectId).then(e.putProjectDataInState).catch((function(t){e.setState({topMessage:{header:"Error",message:t.errors},hideTopMessage:!1}),setTimeout((function(){return e.setState({hideTopMessage:!0,topMessage:{header:"",message:""}})}),2e3)}))})),e.setState({showAddUsers:!1})},e.deleteUserTask=function(t){se.UserTask.destroy(t.user_task_id).then(e.putProjectDataInState)},e.deleteProject=function(t){se.Project.destroy(t).then(e.redirectToProjectsIndexPage)},e.mapAllUsersToDropdown=function(){return e.state.allUsers.filter((function(t){return!e.state.members.map((function(e){return e.id})).includes(parseInt(t.id))})).map((function(e){return{key:e.id,text:e.attributes.full_name,value:e.id}}))},e.redirectToProjectsIndexPage=function(){e.props.history.push("/projects")},e.state={allUsers:[],newMembersToAdd:[],showAddUsers:!1,hideTopMessage:!0,topMessage:{header:"",message:""},projectId:"",projectName:"",functions:[],tasks:[],creator:{},members:[],selectedTask:{taskId:null,taskText:null,responsible:[],accountable:[],consulted:[],informed:[]},taskToCreateUserIds:{responsible:[],accountable:[],consulted:[],informed:[]},taskToEditUserIds:{responsible:[],accountable:[],consulted:[],informed:[]}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putProjectDataInState(),this.putAllUsersDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(P.jsxs)(k.a,{children:[Object(P.jsxs)(C.a,{hidden:this.state.hideTopMessage,children:[Object(P.jsx)(C.a.Header,{children:this.state.topMessage.header}),Object(P.jsx)("p",{children:this.state.topMessage.message})]}),Object(P.jsx)(F,{logOut:this.props.logOut,onBack:this.redirectToProjectsIndexPage,backText:"Back to Projects",userFullName:this.props.userFullName}),Object(P.jsx)(T.a,{as:"h1",children:this.state.projectName}),Object(P.jsx)(v.a,{children:this.state.showAddUsers?Object(P.jsx)(v.a.Column,{width:8,children:Object(P.jsxs)("div",{children:[Object(P.jsx)(g.a,{placeholder:"Add Users",onChange:this.handleNewMemberSelection,fluid:!0,multiple:!0,selection:!0,options:this.mapAllUsersToDropdown()}),Object(P.jsx)(S.a,{onClick:this.createNewMembers,children:"Add users"})]})}):Object(P.jsx)(v.a.Column,{width:8,children:Object(P.jsxs)(_.a.Group,{circular:!0,children:[this.state.members.map((function(e,t){return Object(P.jsx)(_.a,{children:e.initials},t)})),Object(P.jsx)(_.a,{color:"blue",onClick:function(){return e.setState({showAddUsers:!0})},as:"a",children:"+"})]})})}),Object(P.jsxs)(w.a,{celled:!0,children:[Object(P.jsx)(w.a.Header,{children:Object(P.jsxs)(w.a.Row,{children:[Object(P.jsx)(w.a.HeaderCell,{width:"four",children:"Task"}),Object(P.jsx)(w.a.HeaderCell,{width:"two",children:"Responsible"}),Object(P.jsx)(w.a.HeaderCell,{width:"two",children:"Accountable"}),Object(P.jsx)(w.a.HeaderCell,{width:"two",children:"Consulted"}),Object(P.jsx)(w.a.HeaderCell,{width:"two",children:"Informed"})]})}),Object(P.jsx)(w.a.Body,{children:this.state.tasks.map((function(t,n){return Object(P.jsxs)(w.a.Row,{error:t.flags.length>0,children:[Object(P.jsxs)(w.a.Cell,{children:[t.task_name,Object(P.jsx)(_.a.Group,{circular:!0,children:t.flags.map((function(e,t){return Object(P.jsx)(_.a,{color:"red",children:e.user_initials},t)}))}),Object(P.jsx)(U,{task:t,projectId:e.state.projectId,createDropdowns:function(){return e.createDropdownsForEditModal(t)},putSelectedTaskDataInState:e.putSelectedTaskDataInState,taskName:e.state.selectedTask.task_name,handleTextFieldChange:e.handleTextFieldChange,handleDropdownChange:e.handleDropdownChangeForEditModal,handleSubmit:e.handleSubmitOnEditTaskModal,handleDelete:e.handleDelete}),Object(P.jsx)(S.a,{icon:!0,onClick:function(){e.handleFlagging(t)},inverted:!!!t.flags.map((function(e){return e.user_id})).includes(e.props.userId),floated:"right",children:Object(P.jsx)(I.a,{color:"grey",name:"flag outline"})})]}),Object(P.jsx)(w.a.Cell,{children:t.responsible.map((function(t,n){return Object(P.jsxs)(_.a,{children:[t.user_full_name,Object(P.jsx)(I.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(P.jsx)(w.a.Cell,{children:t.accountable.map((function(t,n){return Object(P.jsxs)(_.a,{children:[t.user_full_name,Object(P.jsx)(I.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(P.jsx)(w.a.Cell,{children:t.consulted.map((function(t,n){return Object(P.jsxs)(_.a,{children:[t.user_full_name,Object(P.jsx)(I.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(P.jsx)(w.a.Cell,{children:t.informed.map((function(t,n){return Object(P.jsxs)(_.a,{children:[t.user_full_name,Object(P.jsx)(I.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))})]},n)}))}),Object(P.jsx)(w.a.Footer,{fullWidth:!0,children:Object(P.jsxs)(w.a.Row,{children:[Object(P.jsx)(w.a.HeaderCell,{children:Object(P.jsx)(M,{projectId:this.state.projectId,raciFunctions:this.state.functions,createDropdowns:this.createDropdownsForCreateModal,taskName:this.state.selectedTask.task_name,handleTextFieldChange:this.handleTextFieldChange,handleDropdownChange:this.handleDropdownChangeForCreateModal,onTriggerButtonClick:function(){e.setState({selectedTask:{taskId:null,task_name:null,responsible:[],accountable:[],consulted:[],informed:[]}})},handleSubmit:this.handleSubmitOnTaskModal})}),Object(P.jsx)(w.a.HeaderCell,{colSpan:"4",children:Object(P.jsx)(E,{projectName:this.state.projectName,projectId:this.state.projectId,deleteProject:this.deleteProject})})]})})]})]})}}]),n}(d.a.Component),oe=n(67),ie=n(186),ue=n(45),le=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),se.User.login(e.state.loginInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){e.setState({errors:t.errors[0]}),setTimeout((function(){return e.setState({errors:null})}),2e3)}))},e.handleChange=function(t){e.setState((function(e){return{loginInfo:Object(b.a)(Object(b.a)({},e.loginInfo),{},Object(oe.a)({},t.target.name,t.target.value))}}))},e.state={loginInfo:{email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.history.push("/projects")}},{key:"render",value:function(){return Object(P.jsx)(k.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(P.jsxs)(ie.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(P.jsx)("h2",{children:"Login"}),Object(P.jsxs)(x.a,{error:!!this.state.error,children:[Object(P.jsx)(x.a.Input,{placeholder:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(P.jsx)("br",{}),Object(P.jsx)(x.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(P.jsx)(C.a,{error:!0,header:"Error",content:this.state.errors}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(S.a,{onClick:this.handleSubmit,type:"submit",children:"Log in"})]}),Object(P.jsx)("br",{}),"Don't have an account? ",Object(P.jsx)(ue.b,{to:"/signup",children:"Sign up"})]})})}}]),n}(d.a.Component),de=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState((function(e){return{signupInfo:Object(b.a)(Object(b.a)({},e.signupInfo),{},Object(oe.a)({},t.target.name,t.target.value))}}))},e.handleSubmit=function(t){t.preventDefault(),se.User.signup(e.state.signupInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){t?(e.setState({errors:t.errors[0]}),setTimeout((function(){e.setState({errors:null})}),2e3)):e.setState({errors:"There was a problem creating your account. Please try again"})}))},e.state={signupInfo:{first_name:"",last_name:"",email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(P.jsx)(k.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(P.jsxs)(ie.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(P.jsx)("h2",{children:"Sign up"}),Object(P.jsxs)(x.a,{error:this.state.errors,children:[Object(P.jsx)(x.a.Input,{placeholder:"First name",type:"text",name:"first_name",value:this.state.first_name,onChange:this.handleChange}),Object(P.jsx)("br",{}),Object(P.jsx)(x.a.Input,{placeholder:"Last name",type:"text",name:"last_name",value:this.state.last_name,onChange:this.handleChange}),Object(P.jsx)("br",{}),Object(P.jsx)(x.a.Input,{placeholder:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(P.jsx)("br",{}),Object(P.jsx)(x.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(P.jsx)(C.a,{error:!0,header:"Error",content:this.state.errors}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(S.a,{onClick:this.handleSubmit,type:"submit",children:"Create account"})]}),Object(P.jsx)("br",{}),"Already have an account?  ",Object(P.jsx)(ue.b,{to:"/login",children:"Login"})]})})}}]),n}(d.a.Component),je=function(e){var t=d.a.useState(!1),n=Object(y.a)(t,2),a=n[0],r=n[1];return Object(P.jsxs)(D.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:e.trigger,children:[Object(P.jsx)(D.a.Header,{children:"Create Project"}),Object(P.jsx)(D.a.Content,{children:Object(P.jsx)(D.a.Description,{children:Object(P.jsxs)(x.a,{children:[Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:"Project Name"}),Object(P.jsx)(x.a.Input,{error:e.projectNameHasError?{content:"Please enter your first name",pointing:"below"}:null,onChange:e.onProjectNameChange,value:e.projectName,placeholder:"Describe the project"})]}),Object(P.jsxs)(x.a.Field,{children:[Object(P.jsx)("label",{children:"Add Team Members"}),Object(P.jsx)(g.a,{placeholder:"Add team members",onChange:e.onDropdownChange,fluid:!0,multiple:!0,selection:!0,options:e.dropdownOptions})]})]})})}),Object(P.jsxs)(D.a.Actions,{children:[Object(P.jsx)(S.a,{onClick:function(){r(!1),e.onCancel()},children:"Cancel"}),Object(P.jsx)(S.a,{type:"submit",onClick:function(t){r(!1),e.onSubmit(t)},positive:!0,children:"Create Project"})]})]})},he=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).putAllUsersDataInState=function(){se.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.putProjectsDataInState=function(){se.User.available_projects().then((function(t){e.setState({projects:t.data})}))},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleProjectNameChange=function(t){var n=t.target.value;e.setState({projectName:n})},e.mapAllUsersToDropdownOptions=function(){return e.state.allUsers.map((function(e){return{key:e.id,text:e.attributes.full_name,value:e.id}}))},e.clearProjectNameField=function(){e.setState({projectName:""})},e.createNewMembers=function(t){e.state.newMembersToAdd.forEach((function(e,n){se.Membership.create(e,t)}))},e.createNewProject=function(){se.Project.create({name:e.state.projectName,creator_id:e.props.userId}).then((function(t){var n=t.data.id;e.createNewMembers(n)})).then(e.putProjectsDataInState)},e.createProjectCards=function(){return e.state.projects.map((function(t,n){return Object(P.jsx)(ie.a,{header:t.attributes.name,style:{height:"15vh"},onClick:function(){var n=t.id;e.redirectToProjectPage(n)}},n)}))},e.redirectToProjectPage=function(t){e.props.history.push("/projects/".concat(t))},e.createCardGroup=function(){return Object(P.jsxs)(ie.a.Group,{itemsPerRow:3,style:{marginTop:20},children:[e.createProjectCards(),Object(P.jsx)(je,{projectNameHasError:e.state.newProjectNameHasError,trigger:Object(P.jsx)(ie.a,{color:"blue",header:Object(P.jsxs)("span",{children:[Object(P.jsx)(I.a,{name:"plus",color:"blue"}),Object(P.jsx)(T.a,{color:"blue",children:"Add project"})]})}),onDropdownChange:e.handleNewMemberSelection,dropdownOptions:e.mapAllUsersToDropdownOptions(),onProjectNameChange:e.handleProjectNameChange,projectName:e.state.projectName,onSubmit:e.createNewProject,onCancel:e.clearProjectNameField})]})},e.state={projects:[],allUsers:[],projectName:"",newMembersToAdd:[],newProjectNameHasError:!1},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putProjectsDataInState(),this.putAllUsersDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){return Object(P.jsxs)(k.a,{children:[Object(P.jsx)(F,{logOut:this.props.logOut,userFullName:this.props.userFullName}),this.createCardGroup()]})}}]),n}(d.a.Component),be=(n(168),n(11)),pe=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user_id:null,full_name:null},e.authenticateMe=function(){se.User.profile().then((function(t){e.setState({user_id:parseInt(t.data.id),full_name:t.data.attributes.full_name})}))},e.logOut=function(){localStorage.clear(),e.props.history.push("/login")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?this.authenticateMe():"/signup"!==this.props.location.pathname&&this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(P.jsx)("div",{children:Object(P.jsxs)(be.c,{children:[Object(P.jsx)(be.a,{path:"/login",render:function(t){return Object(P.jsx)(le,Object(b.a)(Object(b.a)({},t),{},{authenticateMe:e.authenticateMe,user_id:e.state.user_id}))}}),Object(P.jsx)(be.a,{path:"/signup",render:function(e){return Object(P.jsx)(de,Object(b.a)({},e))}}),Object(P.jsx)(be.a,{path:"/projects/:id",render:function(t){return Object(P.jsx)(ce,Object(b.a)(Object(b.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(P.jsx)(be.a,{path:"/projects",render:function(t){return Object(P.jsx)(he,Object(b.a)(Object(b.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(P.jsx)(be.a,{path:"/",render:function(t){return Object(P.jsx)(he,Object(b.a)(Object(b.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}})]})})}}]),n}(d.a.Component),fe=Object(be.f)(pe),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};h.a.render(Object(P.jsx)(ue.a,{basename:"/raci",children:Object(P.jsx)(d.a.StrictMode,{children:Object(P.jsx)(fe,{})})}),document.getElementById("root")),me()}},[[169,1,2]]]);
//# sourceMappingURL=main.c072041d.chunk.js.map