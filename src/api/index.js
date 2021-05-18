// import all (*) the methods from all Model.js files; then export them all as one object (default) so that whenever you import you get all of them

import * as Project from './Project.js'
import * as UserTask from './UserTask.js'
import * as Flag from './Flag.js'
import * as Function from './Function.js'
import * as User from './User.js'
import * as Task from './Task.js'

export default {Project, UserTask, Flag, Function, User, Task}