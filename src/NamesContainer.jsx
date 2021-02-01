import React, { Component } from 'react'
import Name from './Name'
import styled from '@emotion/styled'
import { css } from '@emotion/react';

const dynamicStyle = props =>
    css`
        color: ${props.color};
    `

const Container = styled.div`
    ${dynamicStyle};
`


class NamesContainer extends Component {

    render() {

        return (
            <Container color="#004d66">
                {this.props.names.map((name, index) => <Name key={index} name={name} />)}
            </Container >
        )
    }
}
export default NamesContainer;