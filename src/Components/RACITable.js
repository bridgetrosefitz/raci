import React from "react";
import { useTable } from 'react-table';
import { Icon, Label, Menu, Tab, Table, Button } from 'semantic-ui-react';

export default class RACITable extends React.Component {
    constructor() {
      super();

      // this.state = {

      // }
    }

    render() {
      return(
        <div>
          <h1>Project Title</h1>
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
              <Table.Row>          
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell> 
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
          </Table>
        </div>
      )
    }

}