import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Header, Container, Input, Button, Form } from 'semantic-ui-react';
import messages from './messages';

export default function SetReminderPage() {
  return (
    <Container>
      <Header as="h1">
        <FormattedMessage {...messages.header} />
      </Header>
      <Form>
        <Form.Field required>
          <Input placeholder="Title" fluid />
        </Form.Field>
        <Form.Field required>
          <Input placeholder="Category" fluid />
        </Form.Field>
        <Form.Field required>
          <Input placeholder="Provider" fluid />
        </Form.Field>
        <Form.Field required>
          <Input placeholder="Contract End Date" fluid />
        </Form.Field>
        <Form.Field>
          <Input placeholder="Notice Period" fluid />
        </Form.Field>
        <Button type="submit">next</Button>
      </Form>
    </Container>
  );
}
