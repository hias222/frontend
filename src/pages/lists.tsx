import React from 'react';
import { Container } from '@material-ui/core';
import Iframe from 'react-iframe';

export default class lists extends React.Component<{}, {}> {

    render() {
        return (
            <Container maxWidth="lg">
                <Iframe url="https://wssplash.azurewebsites.net"
                    height="1000"
                    width="100%"
                    id="myId"
                    display="inline"
                />
            </Container>
        )
    }

}