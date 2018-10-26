import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react'

class ChatMessage extends Component{

    constructor(){
        super()
        this.state = {
            Intent: 'Begin by typing a query...',
            Confidence: '',
            Message: '',
            Query: ''
        }
    }

    onSubmit(){
        this.setState({Intent: 'Loading..'})
        fetch('https://mayankchatbot.herokuapp.com/predict',{
            method: 'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                query: this.state.Query
            })
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                Confidence: 'Confidence: '+data.Score+'%',
                Intent: 'Intent: '+data.Action,
                Message: data.Message
            })
        })
    }

    onQueryChange = (event) => {
        this.setState({Query: event.target.value})
    }
    render(){
        return(
            <Card>
                <Card.Content>
                <Card.Header>{this.state.Intent}</Card.Header>
                <Card.Meta>{this.state.Confidence}</Card.Meta>
                <Card.Description>{this.state.Message}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Input className='mb2' type='text' placeholder='Search...' action onChange={this.onQueryChange}>
                    <input />
                    <Button icon='send' onClick={() => this.onSubmit()}></Button>
                </Input>
                <p className='f6'>Eg: When is the event happening?</p>
                </Card.Content>
            </Card>
        );
    }
}

export default ChatMessage