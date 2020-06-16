import React from 'react';
import { BaseResultComponent } from '../results/BaseResultComponent';
import { Container } from '@material-ui/core';
import { ResultInterface } from '../results/interfaces/ResultInterface';

export default class results extends React.Component<ResultInterface, {}> {

    render() {
        return (
            <Container maxWidth="md">
                <BaseResultComponent
                    id={this.props.id}
                />
            </Container>
        )
    }

}