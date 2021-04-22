import { CheckBox, Icon, List, ListItem, Text, View } from 'native-base'
import React from 'react'

export default function TodoList(props: any) {
const updateCheckbox =(id: Number) =>{
const updatedList = props.todoList.map((item:any)=>{
    if (item.id == id) {
        return {
            ...item, completed: !item.completed
        }
    }
    return item
})
props.setTodoList(updatedList)
}
    
const deleteTodo =(id: Number)=>{
    const deleteItem = props.todoList.filter((item:any)=>{
        return item.id !=id
    })
    props.setTodoList(deleteItem)
}
    return (
        <List>
            {props.todoList.map((item: any) => (
                <ListItem key={item.id}>
                    <Text style={{ flex: 1 }}>{item.id}</Text>
                    <View style={{ flex: 1 }}>
                        <CheckBox onPress={()=>{
                            updateCheckbox(item.id)
                        }} checked={item.completed} />
                    </View>

                    <Text style={{ flex: 6 }}>{item.title}</Text>
                    <Icon style={{ flex: 1 }} name="trash"
                    onPress={()=>{
                        deleteTodo(item.id)
                    }} />
                </ListItem>
            ))}
        </List>
    )
}
