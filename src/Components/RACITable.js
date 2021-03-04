import React from "react";
import { useTable } from 'react-table';
import { Icon, Label, Menu, Tab, Table, Button } from 'semantic-ui-react';

export default class RACITable extends React.Component {
    constructor() {
      super();

      this.state = {
        projectName: '',
        tasks: [],
        creator: {}

      }
    }

    componentDidMount() {
      fetch('http://localhost:3001/api/v1/projects/1')
      .then(res => res.json())
        .then(data => this.setState({ 
          projectName: data.data.attributes.name,
          tasks: data.data.attributes.tasks,
          creator: data.data.attributes.creator, 
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
            {this.state.tasks.map(task => {
              return (<Table.Row>
                <Table.Cell>{task.task_name}</Table.Cell>
                <Table.Cell>{
                  task.responsible.map((user_task, i) => {
                    if (i === task.responsible.length - 1) {
                      return `${user_task.user_full_name}`
                    } 
                    return `${user_task.user_full_name}, `
                  } )}
                </Table.Cell>
                <Table.Cell>{
                    task.accountable.map((user_task, i) => {
                    if (i === task.accountable.length - 1) {
                      return `${user_task.user_full_name}`
                    }
                    return `${user_task.user_full_name}, `
                  } )}
                </Table.Cell>
                <Table.Cell>{
                  task.consulted.map((user_task, i) => {
                    if (i === task.consulted.length - 1) {
                      return `${user_task.user_full_name}`
                    }
                    return `${user_task.user_full_name}, `
                  })}
                </Table.Cell>
                <Table.Cell>{
                  task.informed.map((user_task, i) => {
                    if (i === task.informed.length - 1) {
                      return `${user_task.user_full_name}`
                    }
                    return `${user_task.user_full_name}, `
                  })}
                </Table.Cell>
              </Table.Row>)
            })}
    
          </Table>
        </div>
      )
    }

}