import { Button, Table } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";
import React from "react";
import Link from "next/link";

const UsersTable = ({ users }) => {
  return (
    <div>
      <Table className="w-11/12 mx-auto">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell className={"flex gap-3"}>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger">
                      <TrashBin />
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersTable;
