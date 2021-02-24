import React from "react";
import { useTable } from 'react-table';
import { Icon, Label, Menu, Tab, Table, Button } from 'semantic-ui-react';

export default class RACITable extends React.Component {
    constructor() {
      super();

      this.state = {
        userTasks: [],
        creator: {},
        projectName: '',

      }
    }

    componentDidMount() {
      fetch('http://localhost:3001/api/v1/projects/1')
      .then(res => res.json())
        .then(data => this.setState({ 
          userTasks: data.data.attributes.user_tasks, 
          creator: data.data.attributes.creator, 
          projectName: data.data.attributes.name
        }))
    }

    render() {
      return(
        <div>
          <h1>{this.state.projectName}</h1>
          <Button>Edit project</Button>
          <Table celled> 
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Task</Table.HeaderCell>
                <Table.HeaderCell>Responsible</Table.HeaderCell>
                <Table.HeaderCell>Accountable</Table.HeaderCell>
                <Table.HeaderCell>Consulted</Table.HeaderCell>
                <Table.HeaderCell>Informed</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.state.userTasks.map(task => {
              return (<Table.Row>
                <Table.Cell>task_id: {task.task_id}</Table.Cell>
                <Table.Cell>{task.function_id === 1 && "✅"}</Table.Cell>
                <Table.Cell>{task.function_id === 2 && "✅"}</Table.Cell>
                <Table.Cell>{task.function_id === 3 && "✅"}</Table.Cell>
                <Table.Cell>{task.function_id === 4 && "✅"}</Table.Cell>
              </Table.Row>)
            })}
    
          </Table>
        </div>
      )
    }

}