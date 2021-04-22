import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { Body, Button, Container, Content, Header, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
export default function App() {
  const [isReady, setisReady] = useState(false)
  const [showaddTodo, setShowaddTodo] =  useState(false)
  const [counter, setCounter] = useState(3)
  const [todoList, setTodoList] = useState([
    {
    id:1,
    title: 'First Todo',
    completed: false
  },
  {
    id:2,
    title: 'second Todo',
    completed: false
  }
])
  useEffect(() => {
    (
      async () => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setisReady(true)
      }
    )();
  }, [])

  const addTodoItem =(todoText: string)=>{
const todoItem={
  id: counter,
  title: todoText,
  completed: false
}
setCounter(counter+1)
setTodoList([...todoList, todoItem])
setShowaddTodo(false)
  }
  if (showaddTodo) {
   return  <AddTodo addTodoItem={addTodoItem}/>
  }
  if (!isReady) {
    return(
    <Text>Loading...</Text>
    )
  }
  
  return (
    <Container>
      <Header>
        <Body style={{alignItems:'center'}}>
          <Text style={{color:'white'}}>Home Todo</Text>
          
        </Body>
      </Header>
        <Content>
          <Button full style={{backgroundColor:'green', marginHorizontal:30, marginTop:30, marginBottom:20,borderRadius:10}}
          onPress={()=>{
            setShowaddTodo(true)
          }}
          ><Text>Add Todo</Text></Button>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Content>
    </Container>
  );
}