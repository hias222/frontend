import React from 'react';
import { Container, Card, CardHeader } from '@material-ui/core';

export default class lists extends React.Component<{}, {}> {

    render() {
        return (
            <Container maxWidth="md">
                <Card >
                    <CardHeader
                        title="Ergebnislisten"
                        subheader="todo"
                    />
                </Card>
            </Container>
        )
    }

}