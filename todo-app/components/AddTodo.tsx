import { Body, Button, Container, Form, Header, Input, Item, Label, Text } from 'native-base'
import React, { useState } from 'react'

export default function AddTodo(props: any) {
    const [text, setText] = useState("")
    return (
        <Container>
            <Header>
            <Body style={{alignItems:'center'}}>
               <Text style={{color:'white'}}>Add Todo</Text> 
            </Body>
            </Header>
            <Form style={{margin:20}}>
            <Item inlineLabel>
              <Label>addTodo</Label>
              <Input onChangeText={setText} />
            </Item>
            <Button onPress={()=>{
            props.addTodoItem(text)}}
            full success style={{borderRadius:10, marginTop: 30}}><Text>Add</Text></Button>
          </Form>
        </Container>
        
    )
}
