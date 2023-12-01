
const statuses = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN PROGRESS",
    COMPLETED: "COMPLETED"
};

const tasks = [
    {
        title: "Preparar las malestas",
        description: "El viaje a Marte",
        status: statuses.PENDING,
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "5123512",
        user: "labartaa97",
        createdAt: "2023-11-08 21:00:00",
        modifiedAt: null
    },
    {
        title: "Otra tarea",
        description: "Otro viaje",
        status: statuses.IN_PROGRESS,
        datestart: "2023-11-10 10:00:00",
        dateend: "2023-11-15 15:00:00",
        id: "12351235",
        user: "otrousuario",
        createdAt: "2023-11-09 12:00:00",
        modifiedAt: "2023-11-10 11:00:00"
    },
    {
        title: "Preparar la comida del Jueves",
        description: "Necesito comida Manolo",
        status: statuses.COMPLETED,
        datestart: "2023-11-10 10:00:00",
        dateend: "2023-11-15 15:00:00",
        id: "1523512",
        user: "otrousuario",
        createdAt: "2023-11-09 12:00:00",
        modifiedAt: "2023-11-10 11:00:00"
    },
    {
        title: "Planchando la ropa",
        description: "Necesito ropa",
        status: statuses.IN_PROGRESS,
        datestart: "2023-11-10 10:00:00",
        dateend: "2023-11-15 15:00:00",
        id: "12432311",
        user: "otrousuario",
        createdAt: "2023-11-09 12:00:00",
        modifiedAt: "2023-11-10 11:00:00",
    },
];


export {tasks as default, statuses};