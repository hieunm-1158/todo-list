import taskApi from "../../api/taskApi";

const state=()=>({
    tasks:[],
    editTaskItem:{
        id:"",
        content:"",
        status:"disable"
    }
})

const getters={}

const actions={
    getTaskAll: async (context)=>{
        try {
            const tasks=await taskApi.getTasks();
            context.commit('setListTask', tasks)
        } catch (error) {
            console.log(error);
        }
        
    },
    addTask: async(context, task)=>{
        try {
            const res=await taskApi.addTask(task);
            context.commit('addTask', res)
        } catch (error) {
            console.log(error);
        }
        
    },
    deleteTask: async(context, id)=>{
        try {
            await taskApi.deleteTask(id);
            context.commit('deleteTask', id)
        } catch(error) {
            console.log(error);
        }
    },
    updateTask: async(context, task)=>{
        try {        
            const data= await taskApi.updateTask(task);
            context.commit('updateTask', data)
        } catch(error) {
            console.log(error);
        }
    },
    setEditTaskItem: (context, task)=>{
        context.commit('setEditTaskItem', task);
    }
}

const mutations = {
    setListTask: (state, tasks)=>{
        return state.tasks=tasks
    },
    addTask: (state, task)=>{
        return state.tasks=[...state.tasks, task];
    },
    deleteTask: (state, id) =>{
        const data=state.tasks.filter((task)=>{
            return task.id!==id;
        })
        return state.tasks=data;
    },
    updateTask: (state, task) =>{
        const editTaskIndex= state.tasks.findIndex(item => item.id===task.id );
        state.tasks[editTaskIndex]={
            ...state.tasks[editTaskIndex],
            content:task.content,
            status:task.status
        }
        return state.tasks.splice(editTaskIndex, 1, state.tasks[editTaskIndex])
    },
    setEditTaskItem: (state, task)=>{
        state.editTaskItem=task
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}