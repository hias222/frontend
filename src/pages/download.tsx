import React from 'react';
import { Container, Card, CardHeader } from '@material-ui/core';

export default class search extends React.Component<{}, {}> {

    render() {
        return (
            <Container maxWidth="md">
                <Card >
                    <CardHeader
                        title="Downloads"
                        subheader="todo"
                    />
                </Card>
            </Container>
        )
    }

}