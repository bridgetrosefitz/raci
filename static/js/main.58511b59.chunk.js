(this.webpackJsonpraci=this.webpackJsonpraci||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"index",(function(){return G})),n.d(a,"show",(function(){return q})),n.d(a,"create",(function(){return W})),n.d(a,"destroy",(function(){return Y})),n.d(a,"update",(function(){return K}));var r={};n.r(r),n.d(r,"create",(function(){return Q})),n.d(r,"destroy",(function(){return X}));var s={};n.r(s),n.d(s,"create",(function(){return Z})),n.d(s,"destroy",(function(){return $}));var o={};n.r(o),n.d(o,"index",(function(){return ee}));var c={};n.r(c),n.d(c,"index",(function(){return te})),n.d(c,"login",(function(){return ne})),n.d(c,"signup",(function(){return ae})),n.d(c,"profile",(function(){return re})),n.d(c,"available_projects",(function(){return se}));var i={};n.r(i),n.d(i,"create",(function(){return oe})),n.d(i,"update",(function(){return ce})),n.d(i,"destroy",(function(){return ie}));var u={};n.r(u),n.d(u,"create",(function(){return ue})),n.d(u,"destroy",(function(){return le}));var l=n(0),d=n.n(l),j=n(63),h=n.n(j),p=(n(167),n(7)),b=n(36),f=n(37),m=n(42),O=n(39),g=(n(168),n(150)),x=n(196),k=n(197),v=n(193),C=n(203),T=n(206),I=n(207),S=n(204),w=n(118),_=n(195),y=n(200),P=n(89),D=n(40),E=n(199),N=n(2);var U=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(N.jsxs)(S.a,{floated:"left",icon:!0,labelPosition:"left",primary:!0,onClick:e.onTriggerButtonClick,size:"small",children:[Object(N.jsx)(P.a,{name:"plus square"})," Add Task"]}),children:[Object(N.jsx)(E.a.Header,{children:"Create new task"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Text"}),Object(N.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns()]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsx)(S.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(N.jsx)(S.a,{type:"submit",icon:"checkmark",onClick:function(t,n){var a=n.taskName;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Create task"})]})]})};var M=function(e){var t=Object(l.useState)(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(N.jsx)(S.a,{icon:!0,onClick:function(){e.putSelectedTaskDataInState(e.task.id)},floated:"right",children:Object(N.jsx)(P.a,{name:"pencil square"})}),children:[Object(N.jsx)(E.a.Header,{children:"Edit task"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Text"}),Object(N.jsx)("input",{placeholder:"Define the task here...",value:e.taskName,onChange:e.handleTextFieldChange})]}),e.createDropdowns(e.task)]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsxs)(S.a,{icon:!0,labelPosition:"right",color:"red",floated:"left",onClick:function(){var t=e.task;r(!1),e.handleDelete(t)},children:["Delete task",Object(N.jsx)(P.a,{name:"trash alternate outline"})]}),Object(N.jsx)(S.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(N.jsx)(S.a,{type:"submit",onClick:function(t,n){var a=e.task;r(!1),e.handleSubmit(t,a)},positive:!0,children:"Update task"})]})]})},F=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{basic:!0,onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,size:"small",trigger:Object(N.jsxs)(S.a,{color:"red",floated:"left",children:[Object(N.jsx)(P.a,{name:"trash alternate outline"}),"Delete project"]}),children:[Object(N.jsxs)(T.a,{icon:!0,children:[Object(N.jsx)(P.a,{name:"trash alternate outline"}),Object(N.jsx)("br",{}),"Are you sure you want to delete this project?"]}),Object(N.jsx)(E.a.Content,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(I.a.Column,{width:3}),Object(N.jsx)(I.a.Column,{width:10,children:Object(N.jsx)("p",{children:'Delete "'.concat(e.projectName,'" along with all associated tasks?')})}),Object(N.jsx)(I.a.Column,{width:3})]})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsxs)(S.a,{basic:!0,color:"grey",inverted:!0,onClick:function(){return r(!1)},children:[Object(N.jsx)(P.a,{name:"remove"})," No, go back"]}),Object(N.jsxs)(S.a,{color:"red",inverted:!0,onClick:function(){e.deleteProject(e.projectId),r(!1)},children:[Object(N.jsx)(P.a,{name:"checkmark"})," Yes, delete"]})]})]})},A=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){r(!0)},open:a,trigger:Object(N.jsx)("span",{children:Object(N.jsx)(S.a,{style:{marginLeft:"1.5vh",backgroundColor:"white"},icon:!0,color:"white",size:"big",onClick:function(){e.populateMembersToEdit()},children:Object(N.jsx)(P.a,{name:"pencil square"})})}),children:[Object(N.jsx)(E.a.Header,{children:"Edit Project"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Project name"}),Object(N.jsx)(k.a.Input,{error:e.projectNameHasError?{content:"Project must have a name",pointing:"below"}:null,onChange:e.onProjectNameChange,value:e.projectName})]}),Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Team members"}),e.createDropdown]})]})})}),Object(N.jsxs)(E.a.Actions,{children:[F({projectName:e.projectName,projectId:e.projectId,deleteProject:e.deleteProject}),Object(N.jsx)(S.a,{onClick:function(){r(!1)},children:"Cancel"}),Object(N.jsx)(S.a,{type:"submit",onClick:function(t){r(!1),e.onSubmit(t)},positive:!0,children:"Update project"})]})]})},L=n(198),H=function(e){return Object(N.jsx)(L.a,{borderless:!0,attached:"top",style:{border:"none"},children:Object(N.jsxs)(L.a.Menu,{position:"right",children:[Object(N.jsx)(L.a.Item,{children:e.userFullName?"Logged in as ".concat(e.userFullName):""}),e.onBack&&Object(N.jsx)(L.a.Item,{children:Object(N.jsx)(S.a,{onClick:e.onBack,floated:"right",children:e.backText})}),Object(N.jsx)(L.a.Item,{children:Object(N.jsx)(S.a,{onClick:e.logOut,children:"Log out"})})]})})},B=n(23),J=n.n(B),R=n(44),z="https://enigmatic-fortress-89780.herokuapp.com/api/v1",V={headers:Object(p.a)(Object(p.a)({},{Accept:"application/json","Content-Type":"application/json"}),{},{Authorization:"Bearer ".concat(localStorage.token)})},G=function(){return fetch("".concat(z,"/projects"),V).then((function(e){return e.json()}))},q=function(e){return fetch("".concat(z,"/projects/").concat(e),V).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},W=function(e){return fetch("".concat(z,"/projects"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},Y=function(e){return fetch("".concat(z,"/projects/").concat(e),Object(p.a)({method:"DELETE"},V))},K=function(e,t,n){return fetch("".concat(z,"/projects/").concat(e),Object(p.a)({method:"PUT",body:JSON.stringify({name:t})},V)).then((function(e){return e.json()}))},Q=function(e){return fetch("".concat(z,"/user_tasks"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()}))},X=function(e){return fetch("".concat(z,"/user_tasks/").concat(e),Object(p.a)({method:"DELETE"},V))},Z=function(e,t){return fetch("".concat(z,"/flags"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify({user_id:e,task_id:t})}))},$=function(e){return fetch("".concat(z,"/flags/").concat(e),Object(p.a)(Object(p.a)({},V),{},{method:"DELETE"}))},ee=function(){return fetch("".concat(z,"/functions"),V).then((function(e){return e.json()}))},te=function(){return fetch("".concat(z,"/users/"),V).then((function(e){return e.json()}))},ne=function(e){var t=e.email,n=e.password;return fetch("".concat(z,"/login"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify({email:t,password:n})})).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ae=function(e){var t=e.first_name,n=e.last_name,a=e.email,r=e.password;return fetch("".concat(z,"/signup"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify({first_name:t,last_name:n,email:a,password:r})})).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},re=function(){return fetch("".concat(z,"/profile"),V).then((function(e){return e.json()}))},se=function(){return fetch("".concat(z,"/available_projects"),V).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},oe=function(e,t){return fetch("".concat(z,"/tasks"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify({text:e,project_id:t})})).then((function(e){return e.json()}))},ce=function(e,t,n){return fetch("".concat(z,"/tasks/").concat(e),Object(p.a)(Object(p.a)({},V),{},{method:"PUT",body:JSON.stringify({text:t,projectId:n})}))},ie=function(e){return fetch("".concat(z,"/tasks/").concat(e),Object(p.a)(Object(p.a)({},V),{},{method:"DELETE"}))},ue=function(e,t){return fetch("".concat(z,"/memberships"),Object(p.a)(Object(p.a)({},V),{},{method:"POST",body:JSON.stringify({user_id:e,project_id:t})})).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},le=function(e){return fetch("".concat(z,"/memberships/").concat(e),Object(p.a)(Object(p.a)({},V),{},{method:"DELETE"})).then(function(){var e=Object(R.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},de={Project:a,UserTask:r,Flag:s,Function:o,User:c,Task:i,Membership:u},je=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).putProjectDataInState=function(){e.props.toggleLoader(!0);var t=e.props.match.params.id;de.Function.index().then((function(t){return e.setState({functions:t.data})})),de.Project.show(t).then((function(t){e.setState({projectId:t.data.id,projectName:t.data.attributes.name,projectNameForUpdating:t.data.attributes.name,tasks:t.data.attributes.tasks,creator:t.data.attributes.creator,members:t.data.attributes.members}),e.props.toggleLoader(!1)})).catch((function(){return e.props.history.push("/projects")}))},e.putAllUsersDataInState=function(){de.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.createTeamMemberOptions=function(){return e.state.members.map((function(e){return{key:e.id,text:e.first_name,value:e.id}}))},e.mapAllUsersToDropdown=function(){return e.state.allUsers.map((function(e){return{key:parseInt(e.id),text:e.attributes.full_name,value:parseInt(e.id)}}))},e.createDropdownForEditProjectModal=function(){var t=e.state.members?e.state.members.map((function(e){return e.id})):[];return Object(N.jsx)(x.a,{placeholder:"Add team members",fluid:!0,multiple:!0,selection:!0,options:e.mapAllUsersToDropdown(),defaultValue:t,onChange:function(t,n){e.handleDropdownChangeForEditProjectModal(n)}})},e.createDropdownsForEditTaskModal=function(t){return e.state.functions.map((function(n,a){var r=n.attributes.name.toLowerCase(),s=t?t[r].map((function(e){return e.user_id})):[];return Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:n.attributes.name}),Object(N.jsx)(x.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(n.id)),defaultValue:[3,4].includes(parseInt(n.id))?s:s[0],selection:!0,options:e.createTeamMemberOptions(),onChange:function(t,a){e.handleDropdownChangeForEditTaskModal(a,n)}})]},a)}))},e.createDropdownsForCreateTaskModal=function(t){return e.state.functions.map((function(t,n){t.attributes.name.toLowerCase();return Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:t.attributes.name}),Object(N.jsx)(x.a,{placeholder:"Select team member",fluid:!0,multiple:[3,4].includes(parseInt(t.id)),selection:!0,options:e.createTeamMemberOptions(),onChange:function(n,a){e.handleDropdownChangeForCreateModal(a,t)}})]},n)}))},e.mapAllUsersToDropdownOptions=function(){return e.state.allUsers.map((function(e){return{key:e.id,text:e.attributes.full_name,value:e.id}}))},e.handleDropdownChangeForCreateModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToCreateUserIds:Object(p.a)(Object(p.a)({},e.state.taskToCreateUserIds),{},{informed:t.value})})},e.handleDropdownChangeForEditTaskModal=function(t,n){var a=parseInt(n.id);1===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{responsible:[t.value]})}):2===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{accountable:[t.value]})}):3===a?e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{consulted:t.value})}):4===a&&e.setState({taskToEditUserIds:Object(p.a)(Object(p.a)({},e.state.taskToEditUserIds),{},{informed:t.value})})},e.handleDropdownChangeForEditProjectModal=function(t){e.setState({projectToEditMembers:t.value})},e.handleTextFieldChange=function(t){e.setState({taskNameForUpdating:t.target.value})},e.createUserTasks=function(t){var n=parseInt(t.data.id),a=[],r=e.state.taskToCreateUserIds;r.responsible.forEach((function(e){a.push({task_id:n,function_id:1,user_id:e})})),r.accountable.forEach((function(e){a.push({task_id:n,function_id:2,user_id:e})})),r.consulted.forEach((function(e){a.push({task_id:n,function_id:3,user_id:e})})),r.informed.forEach((function(e){a.push({task_id:n,function_id:4,user_id:e})})),a.forEach((function(t){de.UserTask.create(t).then(e.putProjectDataInState)})),e.setState({userTasksToCreate:[]})},e.handleSubmitOnTaskModal=function(t){t.preventDefault();var n=e.state.projectId,a=e.state.taskNameForUpdating;de.Task.create(a,n).then((function(t){return e.createUserTasks(t)}))},e.handleSubmitOnEditTaskModal=function(t,n){t.preventDefault();var a=e.state.projectId,r={responsible:[],accountable:[],consulted:[],informed:[]},s={responsible:[],accountable:[],consulted:[],informed:[]},o={responsible:[],accountable:[],consulted:[],informed:[]},c={responsible:[],accountable:[],consulted:[],informed:[]},i=e.state.taskToEditUserIds;o.responsible=e.state.selectedTask.responsible.map((function(e){return e.user_id})),o.accountable=e.state.selectedTask.accountable.map((function(e){return e.user_id})),o.consulted=e.state.selectedTask.consulted.map((function(e){return e.user_id})),o.informed=e.state.selectedTask.informed.map((function(e){return e.user_id})),s.responsible=o.responsible.filter((function(e){return!i.responsible.includes(e)})),s.accountable=o.accountable.filter((function(e){return!i.accountable.includes(e)})),s.consulted=o.consulted.filter((function(e){return!i.consulted.includes(e)})),s.informed=o.informed.filter((function(e){return!i.informed.includes(e)})),r.responsible=i.responsible.filter((function(e){return!o.responsible.includes(e)})),r.accountable=i.accountable.filter((function(e){return!o.accountable.includes(e)})),r.consulted=i.consulted.filter((function(e){return!o.consulted.includes(e)})),r.informed=i.informed.filter((function(e){return!o.informed.includes(e)})),c.responsible=e.state.selectedTask.responsible.map((function(e){if(s.responsible.includes(e.user_id))return e.user_task_id})),c.accountable=e.state.selectedTask.accountable.map((function(e){if(s.accountable.includes(e.user_id))return e.user_task_id})),c.consulted=e.state.selectedTask.consulted.map((function(e){if(s.consulted.includes(e.user_id))return e.user_task_id})),c.informed=e.state.selectedTask.informed.map((function(e){if(s.informed.includes(e.user_id))return e.user_task_id}));var u=Object.values(c),l=[].concat.apply([],u).filter((function(e){return void 0!==e})),d=n.id,j=[];r.responsible.forEach((function(e){j.push({task_id:d,function_id:1,user_id:e})})),r.accountable.forEach((function(e){j.push({task_id:d,function_id:2,user_id:e})})),r.consulted.forEach((function(e){j.push({task_id:d,function_id:3,user_id:e})})),r.informed.forEach((function(e){j.push({task_id:d,function_id:4,user_id:e})}));var h=[];l.forEach((function(e){h.push(de.UserTask.destroy(e))})),j.forEach((function(e){h.push(de.UserTask.create(e))})),e.state.taskNameForUpdating!==e.state.selectedTask.taskName&&""!==e.state.taskNameForUpdating&&h.push(de.Task.update(d,e.state.taskNameForUpdating,a)),Promise.allSettled(h).then(e.putProjectDataInState)},e.handleSubmitOnEditProjectModal=function(t){t.preventDefault();var n=e.state.projectId,a=e.state.members.map((function(e){return e.id})),r=e.state.projectToEditMembers,s=[],o=[],c=[];r.forEach((function(e){a.includes(e)||o.push(e)})),a.forEach((function(e){r.includes(e)||s.push(e)}));var i=[];o.forEach((function(e){i.push(de.Membership.create(e,n))})),e.state.members.forEach((function(e){s.includes(e.id)&&c.push(e.membership_id)})),c.forEach((function(e){i.push(de.Membership.destroy(e))})),e.state.projectName!==e.state.projectNameForUpdating&&""!==e.state.projectNameForUpdating&&i.push(de.Project.update(n,e.state.projectNameForUpdating)),Promise.allSettled(i).then(e.putProjectDataInState)},e.putSelectedProjectMembersDataInState=function(){var t=[];e.state.members.forEach((function(e){t=[].concat(Object(g.a)(t),[e.id])})),e.setState({projectToEditMembers:t})},e.putSelectedTaskDataInState=function(t){var n=null,a=null,r={responsible:[],accountable:[],consulted:[],informed:[]};e.state.tasks.forEach((function(e){e.id===t&&(n=e,a=e.task_name,r.responsible=e.responsible.map((function(e){return e.user_id})),r.accountable=e.accountable.map((function(e){return e.user_id})),r.consulted=e.consulted.map((function(e){return e.user_id})),r.informed=e.informed.map((function(e){return e.user_id})))})),e.setState({selectedTask:n,taskNameForUpdating:a,taskToEditUserIds:r})},e.handleDelete=function(t){de.Task.destroy(t.id).then(e.putProjectDataInState)},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleFlagging=function(t){t.flags.map((function(e){return e.user_id})).includes(e.props.userId)?t.flags.forEach((function(t){t.user_id===e.props.userId&&de.Flag.destroy(t.flag_id).then(e.putProjectDataInState)})):de.Flag.create(e.props.userId,t.id).then(e.putProjectDataInState)},e.createNewMembers=function(){e.state.newMembersToAdd.forEach((function(t){de.Membership.create(t,e.state.projectId).then(e.putProjectDataInState).catch((function(t){e.setState({topMessage:{header:"Error",message:t.errors},hideTopMessage:!1}),setTimeout((function(){return e.setState({hideTopMessage:!0,topMessage:{header:"",message:""}})}),2e3)}))})),e.setState({showAddUsers:!1})},e.deleteUserTask=function(t){de.UserTask.destroy(t.user_task_id).then(e.putProjectDataInState)},e.deleteProject=function(t){de.Project.destroy(t).then(e.redirectToProjectsIndexPage)},e.redirectToProjectsIndexPage=function(){e.props.history.push("/projects")},e.handleProjectNameChange=function(t){var n=t.target.value;e.setState({projectNameForUpdating:n})},e.state={allUsers:[],newMembersToAdd:[],showAddUsers:!1,hideTopMessage:!0,topMessage:{header:"",message:""},projectId:"",projectName:"",projectNameForUpdating:"",functions:[],tasks:[],creator:{},members:[],projectToEditMembers:[],selectedTask:{taskId:null,taskText:null,responsible:[],accountable:[],consulted:[],informed:[]},taskNameForUpdating:"",taskToCreateUserIds:{responsible:[],accountable:[],consulted:[],informed:[]},taskToEditUserIds:{responsible:[],accountable:[],consulted:[],informed:[]}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putAllUsersDataInState(),this.putProjectDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(N.jsxs)(v.a,{children:[Object(N.jsxs)(C.a,{hidden:this.state.hideTopMessage,children:[Object(N.jsx)(C.a.Header,{children:this.state.topMessage.header}),Object(N.jsx)("p",{children:this.state.topMessage.message})]}),Object(N.jsx)(H,{logOut:this.props.logOut,onBack:this.redirectToProjectsIndexPage,backText:"Back to Projects",userFullName:this.props.userFullName}),Object(N.jsxs)(T.a,{as:"h1",children:[this.state.projectName,Object(N.jsx)(A,{projectId:this.state.projectId,populateMembersToEdit:this.putSelectedProjectMembersDataInState,onProjectNameChange:this.handleProjectNameChange,projectName:this.state.projectNameForUpdating,createDropdown:this.createDropdownForEditProjectModal(),handleDropdownChange:this.handleDropdownChangeForEditProjectModal,onSubmit:this.handleSubmitOnEditProjectModal,deleteProject:this.deleteProject})]}),Object(N.jsx)(I.a,{children:this.state.showAddUsers?Object(N.jsx)(I.a.Column,{width:8,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(x.a,{placeholder:"Add Users",onChange:this.handleNewMemberSelection,fluid:!0,multiple:!0,selection:!0,options:this.mapAllUsersToDropdown()}),Object(N.jsx)(S.a,{onClick:this.createNewMembers,children:"Add users"})]})}):Object(N.jsx)(I.a.Column,{width:8,children:Object(N.jsx)(w.a.Group,{circular:!0,children:this.state.members.map((function(e,t){return Object(N.jsx)(_.a,{size:"tiny",position:"bottom center",style:{padding:6},content:e.full_name,trigger:Object(N.jsx)(w.a,{children:e.initials},t)})}))})})}),Object(N.jsxs)(y.a,{celled:!0,children:[Object(N.jsx)(y.a.Header,{children:Object(N.jsxs)(y.a.Row,{children:[Object(N.jsx)(y.a.HeaderCell,{width:"four",children:"Task"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Responsible"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Accountable"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Consulted"}),Object(N.jsx)(y.a.HeaderCell,{width:"two",children:"Informed"})]})}),Object(N.jsx)(y.a.Body,{children:this.state.tasks.map((function(t,n){return Object(N.jsxs)(y.a.Row,{error:t.flags.length>0,children:[Object(N.jsx)(y.a.Cell,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsxs)(I.a.Column,{width:11,children:[t.task_name,Object(N.jsx)(w.a.Group,{circular:!0,children:t.flags.map((function(e,t){return Object(N.jsx)(_.a,{size:"tiny",position:"bottom center",style:{padding:6},content:e.user_full_name,trigger:Object(N.jsx)(w.a,{color:"red",children:e.user_initials},t)})}))})]}),Object(N.jsxs)(I.a.Column,{width:5,children:[Object(N.jsx)(M,{task:t,projectId:e.state.projectId,createDropdowns:function(){return e.createDropdownsForEditTaskModal(t)},putSelectedTaskDataInState:e.putSelectedTaskDataInState,taskName:e.state.taskNameForUpdating,handleTextFieldChange:e.handleTextFieldChange,handleDropdownChange:e.handleDropdownChangeForEditTaskModal,handleSubmit:e.handleSubmitOnEditTaskModal,handleDelete:e.handleDelete}),Object(N.jsx)(S.a,{icon:!0,onClick:function(){e.handleFlagging(t)},inverted:!!!t.flags.map((function(e){return e.user_id})).includes(e.props.userId),style:t.flags.map((function(e){return e.user_id})).includes(e.props.userId)?{backgroundColor:"white"}:null,floated:"right",children:Object(N.jsx)(P.a,{color:t.flags.length>0?"red":"grey",name:t.flags.length>0?"flag":"flag outline"})})]})]})}),Object(N.jsx)(y.a.Cell,{children:t.responsible.map((function(t,n){return Object(N.jsxs)(w.a,{style:{marginTop:2,marginBottom:2},color:t.user_id===e.props.userId&&"grey",children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.accountable.map((function(t,n){return Object(N.jsxs)(w.a,{style:{marginTop:2,marginBottom:2},color:t.user_id===e.props.userId&&"grey",children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.consulted.map((function(t,n){return Object(N.jsxs)(w.a,{style:{marginTop:2,marginBottom:2},color:t.user_id===e.props.userId&&"grey",children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))}),Object(N.jsx)(y.a.Cell,{children:t.informed.map((function(t,n){return Object(N.jsxs)(w.a,{style:{marginTop:2,marginBottom:2},color:t.user_id===e.props.userId&&"grey",children:[t.user_first_name,Object(N.jsx)(P.a,{onClick:function(){return e.deleteUserTask(t)},name:"delete"})]},n)}))})]},n)}))}),Object(N.jsx)(y.a.Footer,{fullWidth:!0,children:Object(N.jsxs)(y.a.Row,{children:[Object(N.jsx)(y.a.HeaderCell,{children:Object(N.jsx)(U,{projectId:this.state.projectId,raciFunctions:this.state.functions,createDropdowns:this.createDropdownsForCreateTaskModal,taskName:this.state.selectedTask.task_name,handleTextFieldChange:this.handleTextFieldChange,handleDropdownChange:this.handleDropdownChangeForCreateModal,onTriggerButtonClick:function(){e.setState({selectedTask:{taskId:null,task_name:null,responsible:[],accountable:[],consulted:[],informed:[]}})},handleSubmit:this.handleSubmitOnTaskModal})}),Object(N.jsx)(y.a.HeaderCell,{colSpan:"4"})]})})]})]})}}]),n}(d.a.Component),he=n(70),pe=n(201),be=n(48),fe=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).isValidEmailAddress=function(e){return!!e.match(/.+@.+/)},e.loginInfoIsFull=function(){return e.state.loginInfo.password.length>1},e.handleSubmit=function(t){t.preventDefault(),de.User.login(e.state.loginInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){e.setState({errors:t.errors[0]}),setTimeout((function(){return e.setState({errors:null})}),2e3)}))},e.handleChange=function(t){e.setState((function(e){return{loginInfo:Object(p.a)(Object(p.a)({},e.loginInfo),{},Object(he.a)({},t.target.name,t.target.value))}}))},e.state={loginInfo:{email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.toggleLoader(!1),localStorage.token&&this.props.history.push("/projects")}},{key:"render",value:function(){return Object(N.jsx)(v.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(N.jsxs)(pe.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(N.jsx)("h2",{children:"Login"}),Object(N.jsxs)(k.a,{error:this.state.errors,children:[Object(N.jsx)(k.a.Input,{placeholder:"Email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(N.jsx)(C.a,{error:!0,header:"Error",content:this.state.errors}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(S.a,{onClick:this.handleSubmit,color:!(!this.isValidEmailAddress(this.state.loginInfo.email)||!this.loginInfoIsFull())&&"blue",type:"submit",children:"Log in"})]}),Object(N.jsx)("br",{}),"Don't have an account? ",Object(N.jsx)(be.b,{to:"/signup",children:"Sign up"})]})})}}]),n}(d.a.Component),me=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).isValidEmailAddress=function(e){return!!e.match(/.+@.+/)},e.signupInfoIsFull=function(){return e.state.signupInfo.first_name.length>1&&e.state.signupInfo.last_name.length>1&&e.state.signupInfo.password.length>1},e.handleChange=function(t){e.setState((function(e){return{signupInfo:Object(p.a)(Object(p.a)({},e.signupInfo),{},Object(he.a)({},t.target.name,t.target.value))}}))},e.handleSubmit=function(t){t.preventDefault(),de.User.signup(e.state.signupInfo).then((function(t){t.token&&(localStorage.token=t.token,e.props.history.push("/projects"))})).catch((function(t){t?(e.setState({errors:t.errors[0]}),setTimeout((function(){e.setState({errors:null})}),2e3)):e.setState({errors:"There was a problem creating your account. Please try again"})}))},e.state={signupInfo:{first_name:"",last_name:"",email:"",password:""},errors:null},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.toggleLoader(!1)}},{key:"render",value:function(){return Object(N.jsx)(v.a,{style:{height:"100vh",marginTop:"10%"},textAlign:"center",children:Object(N.jsxs)(pe.a,{centered:!0,style:{paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20},children:[Object(N.jsx)("h2",{children:"Sign up"}),Object(N.jsxs)(k.a,{error:this.state.errors,children:[Object(N.jsx)(k.a.Input,{placeholder:"First name",type:"text",name:"first_name",value:this.state.first_name,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Last name",type:"text",name:"last_name",value:this.state.last_name,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange}),Object(N.jsx)("br",{}),Object(N.jsx)(k.a.Input,{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(N.jsx)(C.a,{error:!0,header:"Error",content:this.state.errors}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(S.a,{onClick:this.handleSubmit,color:!(!this.isValidEmailAddress(this.state.signupInfo.email)||!this.signupInfoIsFull())&&"blue",type:"submit",children:"Create account"})]}),Object(N.jsx)("br",{}),"Already have an account?  ",Object(N.jsx)(be.b,{to:"/login",children:"Login"})]})})}}]),n}(d.a.Component),Oe=function(e){var t=d.a.useState(!1),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(N.jsxs)(E.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:e.trigger,children:[Object(N.jsx)(E.a.Header,{children:"Create Project"}),Object(N.jsx)(E.a.Content,{children:Object(N.jsx)(E.a.Description,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Project name"}),Object(N.jsx)(k.a.Input,{error:e.projectNameHasError?{content:"Please enter your first name",pointing:"below"}:null,onChange:e.onProjectNameChange,value:e.projectName,placeholder:"Describe the project"})]}),Object(N.jsxs)(k.a.Field,{children:[Object(N.jsx)("label",{children:"Team members"}),Object(N.jsx)(x.a,{placeholder:"Add team members",onChange:e.onDropdownChange,fluid:!0,multiple:!0,selection:!0,options:e.dropdownOptions})]})]})})}),Object(N.jsxs)(E.a.Actions,{children:[Object(N.jsx)(S.a,{onClick:function(){r(!1),e.onCancel()},children:"Cancel"}),Object(N.jsx)(S.a,{type:"submit",onClick:function(t){r(!1),e.onSubmit(t)},positive:!0,children:"Create project"})]})]})},ge=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).putAllUsersDataInState=function(){return de.User.index().then((function(t){return e.setState({allUsers:t.data})}))},e.putProjectsDataInState=function(){e.props.toggleLoader(!0),de.User.available_projects().then((function(t){e.props.toggleLoader(!1),e.setState({projects:t.data})}))},e.handleNewMemberSelection=function(t,n){e.setState({newMembersToAdd:n.value})},e.handleProjectNameChange=function(t){var n=t.target.value;e.setState({projectName:n})},e.mapAllUsersToDropdownOptions=function(){return e.state.allUsers.map((function(e){return{key:e.id,text:e.attributes.full_name,value:e.id}}))},e.clearProjectNameField=function(){e.setState({projectName:""})},e.createNewMembers=function(t){e.state.newMembersToAdd.forEach((function(e,n){de.Membership.create(e,t)}))},e.createNewProject=function(){de.Project.create({name:e.state.projectName,creator_id:e.props.userId}).then((function(t){var n=t.data.id;e.createNewMembers(n)})).then(e.putProjectsDataInState)},e.createProjectCards=function(){return e.state.projects.map((function(t,n){return Object(N.jsx)(pe.a,{header:t.attributes.name,style:{height:"15vh"},onClick:function(){var n=t.id;e.redirectToProjectPage(n)}},n)}))},e.redirectToProjectPage=function(t){e.props.history.push("/projects/".concat(t))},e.createCardGroup=function(){return Object(N.jsxs)(pe.a.Group,{itemsPerRow:3,style:{marginTop:20},children:[e.createProjectCards(),Object(N.jsx)(Oe,{projectNameHasError:e.state.newProjectNameHasError,trigger:Object(N.jsx)(pe.a,{color:"blue",header:Object(N.jsxs)("span",{children:[Object(N.jsx)(P.a,{name:"plus",color:"blue"}),Object(N.jsx)(T.a,{color:"blue",children:"Add project"})]})}),onDropdownChange:e.handleNewMemberSelection,dropdownOptions:e.mapAllUsersToDropdownOptions(),onProjectNameChange:e.handleProjectNameChange,projectName:e.state.projectName,onSubmit:e.createNewProject,onCancel:e.clearProjectNameField})]})},e.state={projects:[],allUsers:[],projectName:"",newMembersToAdd:[],newProjectNameHasError:!1},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?(this.props.authenticateMe(),this.putProjectsDataInState(),this.putAllUsersDataInState()):this.props.history.push("/login")}},{key:"render",value:function(){return Object(N.jsxs)(v.a,{children:[Object(N.jsx)(H,{logOut:this.props.logOut,userFullName:this.props.userFullName}),this.createCardGroup()]})}}]),n}(d.a.Component),xe=n(205),ke=n(194),ve=(n(177),n(11)),Ce=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loaderIsActive:!0,user_id:null,full_name:null},e.authenticateMe=function(){de.User.profile().then((function(t){e.setState({user_id:parseInt(t.data.id),full_name:t.data.attributes.full_name})}))},e.logOut=function(){localStorage.clear(),e.props.history.push("/login")},e.toggleLoader=function(t){e.setState({loaderIsActive:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?this.authenticateMe():"/signup"!==this.props.location.pathname&&this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)(xe.a,{inverted:!0,active:this.state.loaderIsActive,children:Object(N.jsx)(ke.a,{inverted:!0,content:"Loading"})}),Object(N.jsxs)(ve.c,{children:[Object(N.jsx)(ve.a,{path:"/login",render:function(t){return Object(N.jsx)(fe,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,loaderIsActive:e.state.loaderIsActive,toggleLoader:e.toggleLoader,user_id:e.state.user_id}))}}),Object(N.jsx)(ve.a,{path:"/signup",render:function(t){return Object(N.jsx)(me,Object(p.a)(Object(p.a)({},t),{},{loaderIsActive:e.state.loaderIsActive,toggleLoader:e.toggleLoader}))}}),Object(N.jsx)(ve.a,{path:"/projects/:id",render:function(t){return Object(N.jsx)(je,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,loaderIsActive:e.state.loaderIsActive,toggleLoader:e.toggleLoader,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(N.jsx)(ve.a,{path:"/projects",render:function(t){return Object(N.jsx)(ge,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,loaderIsActive:e.state.loaderIsActive,toggleLoader:e.toggleLoader,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}}),Object(N.jsx)(ve.a,{path:"/",render:function(t){return Object(N.jsx)(ge,Object(p.a)(Object(p.a)({},t),{},{authenticateMe:e.authenticateMe,loaderIsActive:e.state.loaderIsActive,toggleLoader:e.toggleLoader,userId:e.state.user_id,userFullName:e.state.full_name,logOut:e.logOut}))}})]})]})}}]),n}(d.a.Component),Te=Object(ve.f)(Ce),Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};h.a.render(Object(N.jsx)(be.a,{children:Object(N.jsx)(d.a.StrictMode,{children:Object(N.jsx)(Te,{})})}),document.getElementById("root")),Ie()}},[[178,1,2]]]);
//# sourceMappingURL=main.58511b59.chunk.js.map