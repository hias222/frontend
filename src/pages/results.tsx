import React from 'react';
import { BaseResultComponent } from '../results/BaseResultComponent';
import { Container } from '@material-ui/core';

export default class results extends React.Component<{}, {}> {

    render() {
        return (
            <Container maxWidth="md">
                <BaseResultComponent
                    name={"hello"}
                />
            </Container>
        )
    }

}