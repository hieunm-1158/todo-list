import configAPI from "./configApi";

const taskApi={
    getTasks: async()=>{
        const url="/tasks";
        return await configAPI.get(url).then(function(res) {
            return res.data;
        })
    },
    addTask: async(body)=>{
        const url="/tasks";
        return await configAPI.post(url, body).then(function(res) {         
            return res.data;
        })
    },
    deleteTask: async(id)=>{
        const url=`/tasks/${id}`;
        return await configAPI.delete(url).then(function(res) {
            return res.data;
        })
    },
    updateTask: async(task)=>{
        const url=`/tasks/${task.id}`;
        return await configAPI.patch(url, task).then(function(res) {
            return res.data;
        })
    }
}

export default taskApi;