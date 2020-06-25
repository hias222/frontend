import React from 'react';
import { BaseHeatsComponent } from '../heats/BaseHeatsComponent';
import { Container } from '@material-ui/core';
import { ResultInterface } from '../heats/interfaces/ResultInterface';

export default class heats extends React.Component<ResultInterface, {}> {

    render() {
        return (
            <Container maxWidth="md">
                <BaseHeatsComponent
                    id={this.props.id}
                />
            </Container>
        )
    }

}