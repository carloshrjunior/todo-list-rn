import React, {useState} from "react";

import { FlatList, Keyboard, Text, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';

import Header from "./src/components/Header";
import Form from "./src/components/Form";
import Filter from "./src/components/Filter";
import Task from "./src/components/Task";

import styles from "./styles";

export default function App() {
  // task digitada pelo usuário
  const [task, setTask] = useState("");

  // array de tasks
  const [tasks, setTasks] = useState<any[]>([]);

  // quantidade de tasks criadas
  const [createdTasks, setCreatedTasks] = useState(tasks.length);
  // array de tasks conluídas
  const [doneTasks, setDoneTasks] = useState<any[]>([]);

  // função para adicionar uma nova task
  // recebe o texto digitado pelo usuário como parâmetro
  function handleTaskAdd(taskDescription: string) {
    if(task !== "") {
      // cria uma nova task (objeto)
      const newTask = {
        id: uuid.v4(),
        description: taskDescription,
        done: false
      }

      // armazena no array de tasks: as tasks existentes + nova task
      setTasks([...tasks, newTask]);
      // tasks criadas passam a ser a quantidade de elementos no array de tasks + 1
      setCreatedTasks(tasks.length + 1);
      // limpa o campo do input
      setTask("");

      // esconde o teclado após adicionar uma nova task
      Keyboard.dismiss();
    }
  }

  // função para deletar uma task
  // recebe a task clicada (objeto) como parâmetro
  function handleTaskDelete(clickedTask: any) {
    // armazena no array de tasks todas as tasks menos a task clicada
    setTasks(tasks.filter(task => task.id !== clickedTask.id));

    // tasks criadas passam a ser a quantidade de elementos no array de tasks - 1
    setCreatedTasks(tasks.length - 1);
    // retira do array doneTasks a task que foi cliacada para ser excluída da lista
    setDoneTasks(doneTasks.filter(task => task.id !== clickedTask.id));
  }

  // função que muda o status de uma task (concluída / não concluída)
  // recebe a task clicada (objeto) como parâmetro
  function handleStatusChange(clickedTask: any) {
    // cria um novo array com as tasks existentes, alterando apenas o status da task clicada
    const newTask = tasks.map(task => {
      if(task.id === clickedTask.id) {
        return {...task, done: !task.done}
      }

      return task;
    });

    // o array de tasks concluídas passa a armazenar apenas as tasks cujo o atributo 'done' tenha valor 'true'
    setDoneTasks(newTask.filter(task => task.done === true));

    // o array geral das tasks armazena todas as tasks já existentes, com a alteração do status da task que foi clicada
    setTasks(newTask);
  }

  return (
    <View style={styles.container}>
      <Header />

      <Form task={task} setTask={setTask} onTaskAdd={() => handleTaskAdd(task)}/>

      <Filter createdTasksNumber={createdTasks} doneTasksNumber={doneTasks.length}/>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task task={item} onStatusChange={() => handleStatusChange(item)} onRemove={() => handleTaskDelete(item)}/>
        )}
        
        ListEmptyComponent={(
          <View style={styles.emptyListContainer}>
            <Icon name='list-outline' style={styles.emptyListIcon}/>
            <Text style={[styles.emptyListText, {fontWeight: "bold"}]}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}