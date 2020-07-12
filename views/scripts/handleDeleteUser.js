import api from "../../src/services/axios";

const handleDeleteUser = (id) => {
    await api.delete(`users/${id}`)
};