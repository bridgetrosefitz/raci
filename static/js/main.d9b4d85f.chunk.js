(this.webpackJsonpraci=this.webpackJsonpraci||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"index",(function(){return R})),n.d(a,"show",(function(){return z})),n.d(a,"create",(function(){return G})),n.d(a,"destroy",(function(){return q})),n.d(a,"update",(function(){return V}));var r={};n.r(r),n.d(r,"create",(function(){return W})),n.d(r,"destroy",(function(){return Y}));var s={};n.r(s),n.d(s,"create",(function(){return K})),n.d(s,"destroy",(function(){return Q}));var c={};n.r(c),n.d(c,"index",(function(){return X}));var o={};n.r(o),n.d(o,"index",(function(){return te})),n.d(o,"login",(function(){return ne})),n.d(o,"signup",(function(){return ae})),n.d(o,"profile",(function(){return re})),n.d(o,"available_projects",(function(){return se}));var i={};n.r(i),n.d(i,"create",(function(){return ce})),n.d(i,"update",(function(){return oe})),n.d(i,"destroy",(function(){return ie}));var u={};n.r(u),n.d(u,"create",(function(){return ue})),n.d(u,"destroy",(function(){return le}));var l=n(0),d=n.n(l),j=n(62),h=n.n(j),p=(n(167),n(7)),b=n(35),f=n(36),m=n(41),O=n(38),x=(n(168),n(151)),g=n(195),k=n(196),C=n(193),T=n(202),v=n(204),S=n(205),w=n(203),_=n(116),I=n(194),y=n(199),P=n(89),D=n(39),E=n(198),N=n(2);var M=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(N.jsxs)(w.a,{floated:"left",icon:!0,labelPosition:"left",primary:!0,onClick:e.onTriggerButtonClick,size:"small",children:[Object(N.jsx)(P.a,{name:"plus square"})," Add Task"]}),children:[Object(N.jsx)(E.a.Header,{children:"Create new task"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Text"}),Object(N.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns()]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsx)(w.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(N.jsx)(w.a,{type:"submit",icon:"checkmark",onClick:function(t,n){var a=n.taskName;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Create task"})]})]})};var U=function(e){var t=Object(l.useState)(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(N.jsx)(w.a,{icon:!0,onClick:function(){e.putSelectedTaskDataInState(e.task.id)},floated:"right",children:Object(N.jsx)(P.a,{name:"pencil square"})}),children:[Object(N.jsx)(E.a.Header,{children:"Edit task"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Text"}),Object(N.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns(e.task)]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsxs)(w.a,{icon:!0,labelPosition:"right",color:"red",floated:"left",onClick:function(){var t=e.task;r(!1),e.handleDelete(t)},children:["Delete task",Object(N.jsx)(P.a,{name:"trash alternate outline"})]}),Object(N.jsx)(w.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(N.jsx)(w.a,{type:"submit",onClick:function(t,n){var a=e.task;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Update task"})]})]})},F=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{basic:!0,onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,size:"small",trigger:Object(N.jsxs)(w.a,{color:"red",floated:"right",children:[Object(N.jsx)(P.a,{name:"trash alternate outline"}),"Delete project"]}),children:[Object(N.jsxs)(v.a,{icon:!0,children:[Object(N.jsx)(P.a,{name:"trash alternate outline"}),Object(N.jsx)("br",{}),"Are you sure you want to delete this Project?"]}),Object(N.jsx)(E.a.Content,{children:Object(N.jsxs)(S.a,{children:[Object(N.jsx)(S.a.Column,{width:3}),Object(N.jsx)(S.a.Column,{width:10,children:Object(N.jsx)("p",{children:'Delete "'.concat(e.projectName,'" along with all associated tasks?')})}),Object(N.jsx)(S.a.Column,{width:3})]})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsxs)(w.a,{basic:!0,color:"grey",inverted:!0,onClick:function(){return r(!1)},children:[Object(N.jsx)(P.a,{name:"remove"})," No, go back"]}),Object(N.jsxs)(w.a,{color:"red",inverted:!0,onClick:function(){e.deleteProject(e.projectId),r(!1)},children:[Object(N.jsx)(P.a,{name:"checkmark"})," Yes, delete"]})]})]})},A=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(N.jsx)("span",{children:Object(N.jsx)(w.a,{style:{marginLeft:"1.5vh",backgroundColor:"white"},icon:!0,color:"white",size:"big",onClick:function(){e.populateMembersToEdit()},children:Object(N.jsx)(P.a,{name:"pencil square"})})}),children:[Object(N.jsx)(E.a.Header,{children:"Edit Project"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Project name"}),Object(N.jsx)(k.a.Input,{error:e.projectNameHasError?{content:"Project must have a name",pointing:"below"}:null,onChange:e.onProjectNameChange,value:e.projectName})]}),Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Team members"}),e.createDropdown]})]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsx)(w.a,{onClick:function(){r(!1)},children:"Cancel"}),Object(N.jsx)(w.a,{type:"submit",onClick:function(t){r(!1),e.onSubmit(t)},positive:!0,children:"Update project"})]})]})},H=n(197),L=function(e){return Object(N.jsx)(H.a,{borderless:!0,attached:"top",style:{border:"none"},children:Object(N.jsxs)(H.a.Menu,{position:"right",children:[Object(N.jsx)(H.a.Item,{children:e.userFullName?"Logged in as ".concat(e.userFullName):""}),e.onBack&&Object(N.jsx)(H.a.Item,{children:Object(N.jsx)(w.a,{onClick:e.onBack,floated:"right",children:e.backText})}),Object(N.jsx)(H.a.Item,{children:Object(N.jsx)(w.a,{onClick:e.logOut,children:"Log out"})})]})})},B="https://enigmatic-fortress-89780.herokuapp.com/api/v1",J={headers:Object(p.a)(Object(p.a)({},{Accept:"application/json","Content-Type":"application/json"}),{},{Authorization:"Bearer ".concat(localStorage.token)})},R=function(){return fetch("".concat(B,"/projects"),J).then((function(e){return e.json()}))},z=function(e){return fetch("".concat(B,"/projects/").concat(e),J).then((function(e){return e.json()}))},G=function(e){return fetch("".concat(B,"/projects"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},q=function(e){return fetch("".concat(B,"/projects/").concat(e),Object(p.a)({method:"DELETE"},J))},V=function(e,t,n){return fetch("".concat(B,"/projects/").concat(e),Object(p.a)({method:"PUT",body:JSON.stringify({name:t})},J)).then((function(e){return e.json()}))},W=function(e){return fetch("".concat(B,"/user_tasks"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},Y=function(e){return fetch("".concat(B,"/user_tasks/").concat(e),Object(p.a)({method:"DELETE"},J))},K=function(e,t){return fetch("".concat(B,"/flags"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify({user_id:e,task_id:t})}))},Q=function(e){return fetch("".concat(B,"/flags/").concat(e),Object(p.a)(Object(p.a)({},J),{},{method:"DELETE"}))},X=function(){return fetch("".concat(B,"/functions"),J).then((function(e){return e.json()}))},Z=n(30),$=n.n(Z),ee=n(67),te=function(){return fetch("".concat(B,"/users/"),J).then((function(e){return e.json()}))},ne=function(e){var t=e.email,n=e.password;return fetch("".concat(B,"/login"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify({email:t,password:n})})).then(function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ae=function(e){var t=e.first_name,n=e.last_name,a=e.email,r=e.password;return fetch("".concat(B,"/signup"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify({first_name:t,last_name:n,email:a,password:r})})).then(function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},re=function(){return fetch("".concat(B,"/profile"),J).then((function(e){return e.json()}))},se=function(){return fetch("".concat(B,"/available_projects"),J).then(function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ce=function(e,t){return fetch("".concat(B,"/tasks"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify({text:e,project_id:t})})).then((function(e){return e.json()}))},oe=function(e,t,n){return fetch("".concat(B,"/tasks/").concat(e),Object(p.a)(Object(p.a)({},J),{},{method:"PUT",body:JSON.stringify({text:t,projectId:n})}))},ie=function(e){return fetch("".concat(B,"/tasks/").concat(e),Object(p.a)(Object(p.a)({},J),{},{method:"DELETE"}))},ue=function(e,t){return fetch("".concat(B,"/memberships"),Object(p.a)(Object(p.a)({},J),{},{method:"POST",body:JSON.stringify({user_id:e,project_id:t})})).then(function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},le=function(e){return fetch("".concat(B,"/memberships/").concat(e),Object(p.a)(Object(p.a)({},J),{},{method:"DELETE"})).then(function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},de={Project:a,UserTask:r,Flag:s,Function:c,User:o,Task:i,Membership:u},je=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).putProjectDataInState=function(){var t=e.props.match.params.id;de.Project.show(t).then((function(t){return e.setState({projectId:t.data.id,projectName:t.data.attributes.name,projectNameForUpdating:t.data.attributes.name,tasks:t.data.attributes.tasks,creator:t.data.attributes.creator,members:t.data.attributes.members})})),de.Function.index().then((function(t){return e.setState({functions:t.data})}))},e.putAllUsersDataInState=function(){de.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.createTeamMemberOptions=function(){return e.state.members.map((function(e){return{key:e.id,text:e.first_name,value:e.id}}))},e.mapAllUsersToDropdown=function(){return e.state.allUsers.map((function(e){return{key:parseInt(e.id),text:e.attributes.full_name,value:parseInt(e.id)}}))},e.createDropdownForEditProjectModal=function(){var t=e.state.members?e.state.members.map((function(e){return e.id})):[];return Object(N.jsx)(g.a,{placeholder:"Add team members",fluid:!0,multiple:!0,selection:!0,options:e.mapAllUsersToDropdown(),defaultValue:t,onChange:function(t,n){e.handleDropdownChangeForEditProjectModal(n)}})},e.createDropdownsForEditTaskModal=function(t){return e.state.functions.map((function(n,a){var r=n.attributes.name.toLowerCase(),s=t?t[r].map((function(e){return e.user_id})):[];return Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:n.attributes.name}),Object(N.jsx)(g.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(n.id)),defaultValue:[3,4].includes(parseInt(n.id))?s:s[0],selection:!0,options:e.createTeamMemberOptions(),onChange:function(t,a){e.handleDropdownChangeForEditTaskModal(a,n)}})]},a)}))},e.createDropdownsForCreateTaskModal=function(t){return e.state.functions.map((function(t,n){t.attributes.name.toLowerCase();return Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:t.attributes.name}),Object(N.jsx)(g.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(t.id)),selection:!0,options:e.createTeamMemberOptions(),onChange:function(n,a){e.handleDropdownChangeForCreateModal(a,t)}})]},n)}))},e.handleDropdownChangeForCreateModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{informed:t.value})})},e.handleDropdownChangeForEditTaskModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{informed:t.value})})},e.handleDropdownChangeForEditProjectModal=function(t){e.setState({projectToEditMembers:t.value})},e.handleTextFieldChange=function(t){e.setState({taskNameForUpdating:t.target.value})},e.createUserTasks=function(t){var n=parseInt(t.data.id),a=[],r=e.state.taskToCreateUserIds;r.responsible.forEach((function(e){a.push({task_id:n,function_id:1,user_id:e})})),r.accountable.forEach((function(e){a.push({task_id:n,function_id:2,user_id:e})})),r.consulted.forEach((function(e){a.push({task_id:n,function_id:3,user_id:e})})),r.informed.forEach((function(e){a.push({task_id:n,function_id:4,user_id:e})})),a.forEach((function(t){de.UserTask.create(t).then(e.putProjectDataInState)})),e.setState({userTasksToCreate:[]})},e.handleSubmitOnTaskModal=function(t){t.preventDefault();var n=e.state.projectId,a=e.state.selectedTask.task_name;de.Task.create(a,n).then((function(t){return e.createUserTasks(t)}))},e.handleSubmitOnEditTaskModal=function(t,n){t.preventDefault();var a=e.state.projectId,r={responsible:[],accountable:[],consulted:[],informed:[]},s={responsible:[],accountable:[],consulted:[],informed:[]},c={responsible:[],accountable:[],consulted:[],informed:[]},o={responsible:[],accountable:[],consulted:[],informed:[]},i=e.state.taskToEditUserIds;c.responsible=e.state.selectedTask.responsible.map((function(e){return e.user_id})),c.accountable=e.state.selectedTask.accountable.map((function(e){return e.user_id})),c.consulted=e.state.selectedTask.consulted.map((function(e){return e.user_id})),c.informed=e.state.selectedTask.informed.map((function(e){return e.user_id})),s.responsible=c.responsible.filter((function(e){return!i.responsible.includes(e)})),s.accountable=c.accountable.filter((function(e){return!i.accountable.includes(e)})),s.consulted=c.consulted.filter((function(e){return!i.consulted.includes(e)})),s.informed=c.informed.filter((function(e){return!i.informed.includes(e)})),r.responsible=i.responsible.filter((function(e){return!c.responsible.includes(e)})),r.accountable=i.accountable.filter((function(e){return!c.accountable.includes(e)})),r.consulted=i.consulted.filter((function(e){return!c.consulted.includes(e)})),r.informed=i.informed.filter((function(e){return!c.informed.includes(e)})),o.responsible=e.state.selectedTask.responsible.map((function(e){if(s.responsible.includes(e.user_id))return e.user_task_id})),o.accountable=e.state.selectedTask.accountable.map((function(e){if(s.accountable.includes(e.user_id))return e.user_task_id})),o.consulted=e.state.selectedTask.consulted.map((function(e){if(s.consulted.includes(e.user_id))return e.user_task_id})),o.informed=e.state.selectedTask.informed.map((function(e){if(s.informed.includes(e.user_id))return e.user_task_id}));var u=Object.values(o),l=[].concat.apply([],u).filter((function(e){return void 0!==e})),d=n.id,j=[];r.responsible.forEach((function(e){j.push({task_id:d,function_id:1,user_id:e})})),r.accountable.forEach((function(e){j.push({task_id:d,function_id:2,user_id:e})})),r.consulted.forEach((function(e){j.push({task_id:d,function_id:3,user_id:e})})),r.informed.forEach((function(e){j.push({task_id:d,function_id:4,user_id:e})}));var h=[];l.forEach((function(e){h.push(de.UserTask.destroy(e))})),j.forEach((function(e){h.push(de.UserTask.create(e))})),e.state.taskNameForUpdating!==e.state.selectedTask.taskName&&""!==e.state.taskNameForUpdating&&h.push(de.Task.update(d,e.state.taskNameForUpdating,a)),Promise.allSettled(h).then(e.putProjectDataInState)},e.handleSubmitOnEditProjectModal=function(t){t.preventDefault();var n=e.state.projectId,a=e.state.members.map((function(e){return e.id})),r=e.state.projectToEditMembers,s=[],c=[],o=[];r.forEach((function(e){a.includes(e)||c.push(e)})),a.forEach((function(e){r.includes(e)||s.push(e)}));var i=[];c.forEach((function(e){i.push(de.Membership.create(e,n))})),e.state.members.forEach((function(e){s.includes(e.id)&&o.push(e.membership_id)})),o.forEach((function(e){i.push(de.Membership.destroy(e))})),e.state.projectName!==e.state.projectNameForUpdating&&""!==e.state.projectNameForUpdating&&i.push(de.Project.update(n,e.state.projectNameForUpdating)),Promise.allSettled(i).then(e.putProjectDataInState)},e.putSelectedProjectMembersDataInState=function(){var t=[];e.state.members.forEach((function(e){t=[].concat(Object(x.a)(t),[e.id])})),e.setState({projectToEditMembers:t})},e.putSelectedTaskDataInState=function(t){var n=null,a=null,r={responsible:[],accountable:[],consulted:[],informed:[]};e.state.tasks.forEach((function(e){e.id===t&&(n=e,a=e.task_name,r.responsible=e.responsible.map((function(e){return e.user_id})),r.accountable=e.accountable.map((function(e){return e.user_id})),r.consulted=e.consulted.map((function(e){return e.user_id})),r.informed=e.informed.map((function(e){return e.user_id})))})),e.setState({selectedTask:n,taskNameForUpdating:a,taskToEditUserIds:r})},e.handleDelete=function(t){de.Task.destroy(t.id).then(e.putProjectDataInState)},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleFlagging=function(t){t.flags.map((function(e){return e.user_id})).includes(e.props.userId)?t.flags.forEach((function(t){t.user_id===e.props.userId&&de.Flag.destroy(t.flag_id).then(e.putProjectDataInState)})):de.Flag.create(e.props.userId,t.id).then(e.putProjectDataInState)},e.createNewMembers=function(){e.state.newMembersToAdd.forEach((function(t){de.Membership.create(t,e.state.projectId).then(e.putProjectDataInState).catch((function(t){e.setState({topMessage:{header:"Error",message:t.errors},hideTopMessage:!1}),setTimeout((function(){return e.setState({hideTopMessage:!0,topMessage:{header:"",message:""}})}),2e3)}))})),e.setState({showAddUsers:!1})},e.deleteUserTask=function(t){de.UserTask.destroy(t.user_task_id).then(e.putProjectDataInState)},e.deleteProject=function(t){de.Project.destroy(t).then(e.redirectToProjectsIndexPage)},e.redirectToProjectsIndexPage=function(){e.props.history.push("/projects")},e.handleProjectNameChange=function(t){var n=t.target.value;e.setState({projectNameForUpdating:n})},e.state={allUsers:[],newMembersToAdd:[],showAddUsers:!1,hideTopMessage:!0,topMessage:{header:"",message:""},projectId:"",projectName:"",projectNameForUpdating:"",functions:[],tasks:[],creator:{},members:[],projectToEditMembers:[],selectedTask:{taskId:null,taskText:null,responsible:[],accountable:[],consulted:[],informed:[]},taskNameForUpdating:"",taskToCreateUserIds:{responsible:[],accountable:[],consulted:[],informed:[]},taskToEditUserIds:{responsible:[],accountable:[],consulted:[],informed:[]}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putProjectDataInState(),this.putAllUsersDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(N.jsxs)(C.a,{children:[Object(N.jsxs)(T.a,{hidden:this.state.hideTopMessage,children:[Object(N.jsx)(T.a.Header,{children:this.state.topMessage.header}),Object(N.jsx)("p",{children:this.state.topMessage.message})]}),Object(N.jsx)(L,{logOut:this.props.logOut,onBack:this.redirectToProjectsIndexPage,backText:"Back to Projects",userFullName:this.props.userFullName}),Object(N.jsxs)(v.a,{as:"h1",children:[this.state.projectName,Object(N.jsx)(A,{populateMembersToEdit:this.putSelectedProjectMembersDataInState,onProjectNameChange:this.handleProjectNameChange,projectName:this.state.projectNameForUpdating,createDropdown:this.createDropdownForEditProjectModal(),handleDropdownChange:this.handleDropdownChangeForEditProjectModal,onSubmit:this.handleSubmitOnEditProjectModal})]}),Object(N.jsx)(S.a,{children:this.state.showAddUsers?Object(N.jsx)(S.a.Column,{width:8,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(g.a,{placeholder:"Add Users",onChange:this.handleNewMemberSelection,fluid:!0,multiple:!0,selection:!0,options:this.mapAllUsersToDropdown()}),Object(N.jsx)(w.a,{onClick:this.createNewMembers,children:"Add users"})]})}):Object(N.jsx)(S.a.Column,{width:8,children:Object(N.jsx)(_.a.Group,{circular:!0,children:this.state.members.map((function(e,t){return Object(N.jsx)(I.a,{size:"tiny",position:"bottom center",style:{padding:6},content:e.full_name,trigger:Object(N.jsx)(_.a,{children:e.initials},t)})}))})})}),Object(N.jsxs)(y.a,{celled:!0,children:[Object(N.jsx)(y.a.Header,{children:Object(N.jsxs)(y.a.Row,{children:[Object(N.jsx)(y.a.HeaderCell,{width:"four",children:"Task"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Responsible"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Accountable"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Consulted"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Informed"})]})}),Object(N.jsx)(y.a.Body,{children:this.state.tasks.map((function(t,n){return Object(N.jsxs)(y.a.Row,{error:t.flags.length>0,children:[Object(N.jsxs)(y.a.Cell,{children:[t.task_name,Object(N.jsx)(_.a.Group,{circular:!0,children:t.flags.map((function(e,t){return Object(N.jsx)(I.a,{size:"tiny",position:"bottom center",style:{padding:6},content:e.user_full_name,trigger:Object(N.jsx)(_.a,{color:"red",children:e.user_initials},t)})}))}),Object(N.jsx)(U,{task:t,projectId:e.state.projectId,createDropdowns:function(){return e.createDropdownsForEditTaskModal(t)},putSelectedTaskDataInState:e.putSelectedTaskDataInState,taskName:e.state.taskNameForUpdating,handleTextFieldChange:e.handleTextFieldChange,handleDropdownChange:e.handleDropdownChangeForEditTaskModal,handleSubmit:e.handleSubmitOnEditTaskModal,handleDelete:e.handleDelete}),Object(N.jsx)(w.a,{icon:!0,onClick:function(){e.handleFlagging(t)},inverted:!!!t.flags.map((function(e){return e.user_id})).includes(e.props.userId),floated:"right",children:Object(N.jsx)(P.a,{color:"grey",name:"flag outline"})})]}),Object(N.jsx)(y.a.Cell,{children:t.responsible.map((function(t,n){return Object(N.jsxs)(_.a,{children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.accountable.map((function(t,n){return Object(N.jsxs)(_.a,{children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.consulted.map((function(t,n){return Object(N.jsxs)(_.a,{children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.informed.map((function(t,n){return Object(N.jsxs)(_.a,{children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))})]},n)}))}),Object(N.jsx)(y.a.Footer,{fullWidth:!0,children:Object(N.jsxs)(y.a.Row,{children:[Object(N.jsx)(y.a.HeaderCell,{children:Object(N.jsx)(M,{projectId:this.state.projectId,raciFunctions:this.state.functions,createDropdowns:this.createDropdownsForCreateTaskModal,taskName:this.state.selectedTask.task_name,handleTextFieldChange:this.handleTextFieldChange,handleDropdownChange:this.handleDropdownChangeForCreateModal,onTriggerButtonClick:function(){e.setState({selectedTask:{taskId:null,task_name:null,responsible:[],accountable:[],consulted:[],informed:[]}})},handleSubmit:this.handleSubmitOnTaskModal})}),Object(N.jsx)(y.a.HeaderCell,{colSpan:"4",children:Object(N.jsx)(F,{projectName:this.state.projectName,projectId:this.state.projectId,deleteProject:this.deleteProject})})]})})]})]})}}]),n}(d.a.Component),he=n(70),pe=n(200),be=n(47),fe=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),de.User.login(e.state.loginInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){e.setState({errors:t.errors[0]}),setTimeout((function(){return e.setState({errors:null})}),2e3)}))},e.handleChange=function(t){e.setState((function(e){return{loginInfo:Object(p.a)(Object(p.a)({},e.loginInfo),{},Object(he.a)({},t.target.name,t.target.value))}}))},e.state={loginInfo:{email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.history.push("/projects")}},{key:"render",value:function(){return Object(N.jsx)(C.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(N.jsxs)(pe.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(N.jsx)("h2",{children:"Login"}),Object(N.jsxs)(k.a,{error:this.state.errors,children:[Object(N.jsx)(k.a.Input,{placeholder:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(N.jsx)(T.a,{error:!0,header:"Error",content:this.state.errors}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(w.a,{onClick:this.handleSubmit,type:"submit",children:"Log in"})]}),Object(N.jsx)("br",{}),"Don't have an account? ",Object(N.jsx)(be.b,{to:"/signup",children:"Sign up"})]})})}}]),n}(d.a.Component),me=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState((function(e){return{signupInfo:Object(p.a)(Object(p.a)({},e.signupInfo),{},Object(he.a)({},t.target.name,t.target.value))}}))},e.handleSubmit=function(t){t.preventDefault(),de.User.signup(e.state.signupInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){t?(e.setState({errors:t.errors[0]}),setTimeout((function(){e.setState({errors:null})}),2e3)):e.setState({errors:"There was a problem creating your account. Please try again"})}))},e.state={signupInfo:{first_name:"",last_name:"",email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(N.jsx)(C.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(N.jsxs)(pe.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(N.jsx)("h2",{children:"Sign up"}),Object(N.jsxs)(k.a,{error:this.state.errors,children:[Object(N.jsx)(k.a.Input,{placeholder:"First name",type:"text",name:"first_name",value:this.state.first_name,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Last name",type:"text",name:"last_name",value:this.state.last_name,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(N.jsx)(T.a,{error:!0,header:"Error",content:this.state.errors}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(w.a,{onClick:this.handleSubmit,type:"submit",children:"Create account"})]}),Object(N.jsx)("br",{}),"Already have an account?  ",Object(N.jsx)(be.b,{to:"/login",children:"Login"})]})})}}]),n}(d.a.Component),Oe=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:e.trigger,children:[Object(N.jsx)(E.a.Header,{children:"Create Project"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Project name"}),Object(N.jsx)(k.a.Input,{error:e.projectNameHasError?{content:"Please enter your first name",pointing:"below"}:null,onChange:e.onProjectNameChange,value:e.projectName,placeholder:"Describe the project"})]}),Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Team members"}),Object(N.jsx)(g.a,{placeholder:"Add team members",onChange:e.onDropdownChange,fluid:!0,multiple:!0,selection:!0,options:e.dropdownOptions})]})]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsx)(w.a,{onClick:function(){r(!1),e.onCancel()},children:"Cancel"}),Object(N.jsx)(w.a,{type:"submit",onClick:function(t){r(!1),e.onSubmit(t)},positive:!0,children:"Create project"})]})]})},xe=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).putAllUsersDataInState=function(){de.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.putProjectsDataInState=function(){de.User.available_projects().then((function(t){e.setState({projects:t.data})}))},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleProjectNameChange=function(t){var n=t.target.value;e.setState({projectName:n})},e.mapAllUsersToDropdownOptions=function(){return e.state.allUsers.map((function(e){return{key:e.id,text:e.attributes.full_name,value:e.id}}))},e.clearProjectNameField=function(){e.setState({projectName:""})},e.createNewMembers=function(t){e.state.newMembersToAdd.forEach((function(e,n){de.Membership.create(e,t)}))},e.createNewProject=function(){de.Project.create({name:e.state.projectName,creator_id:e.props.userId}).then((function(t){var n=t.data.id;e.createNewMembers(n)})).then(e.putProjectsDataInState)},e.createProjectCards=function(){return e.state.projects.map((function(t,n){return Object(N.jsx)(pe.a,{header:t.attributes.name,style:{height:"15vh"},onClick:function(){var n=t.id;e.redirectToProjectPage(n)}},n)}))},e.redirectToProjectPage=function(t){e.props.history.push("/projects/".concat(t))},e.createCardGroup=function(){return Object(N.jsxs)(pe.a.Group,{itemsPerRow:3,style:{marginTop:20},children:[e.createProjectCards(),Object(N.jsx)(Oe,{projectNameHasError:e.state.newProjectNameHasError,trigger:Object(N.jsx)(pe.a,{color:"blue",header:Object(N.jsxs)("span",{children:[Object(N.jsx)(P.a,{name:"plus",color:"blue"}),Object(N.jsx)(v.a,{color:"blue",children:"Add project"})]})}),onDropdownChange:e.handleNewMemberSelection,dropdownOptions:e.mapAllUsersToDropdownOptions(),onProjectNameChange:e.handleProjectNameChange,projectName:e.state.projectName,onSubmit:e.createNewProject,onCancel:e.clearProjectNameField})]})},e.state={projects:[],allUsers:[],projectName:"",newMembersToAdd:[],newProjectNameHasError:!1},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putProjectsDataInState(),this.putAllUsersDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){return Object(N.jsxs)(C.a,{children:[Object(N.jsx)(L,{logOut:this.props.logOut,userFullName:this.props.userFullName}),this.createCardGroup()]})}}]),n}(d.a.Component),ge=(n(177),n(11)),ke=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user_id:null,full_name:null},e.authenticateMe=function(){de.User.profile().then((function(t){e.setState({user_id:parseInt(t.data.id),full_name:t.data.attributes.full_name})}))},e.logOut=function(){localStorage.clear(),e.props.history.push("/login")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?this.authenticateMe():"/signup"!==this.props.location.pathname&&this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(N.jsx)("div",{children:Object(N.jsxs)(ge.c,{children:[Object(N.jsx)(ge.a,{path:"/login",render:function(t){return Object(N.jsx)(fe,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,user_id:e.state.user_id}))}}),Object(N.jsx)(ge.a,{path:"/signup",render:function(e){return Object(N.jsx)(me,Object(p.a)({},e))}}),Object(N.jsx)(ge.a,{path:"/projects/:id",render:function(t){return Object(N.jsx)(je,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(N.jsx)(ge.a,{path:"/projects",render:function(t){return Object(N.jsx)(xe,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(N.jsx)(ge.a,{path:"/",render:function(t){return Object(N.jsx)(xe,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}})]})})}}]),n}(d.a.Component),Ce=Object(ge.f)(ke),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};h.a.render(Object(N.jsx)(be.a,{basename:"/raci",children:Object(N.jsx)(d.a.StrictMode,{children:Object(N.jsx)(Ce,{})})}),document.getElementById("root")),Te()}},[[178,1,2]]]);
//# sourceMappingURL=main.d9b4d85f.chunk.js.map