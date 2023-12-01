//Constante middleware que valida el body bajo requisitos
export const taskBodyValidation = (req, res, next) => {
    if (
        req.body.title === undefined ||
        req.body.title === null ||
        req.body.title === "" ||
        req.body.status === undefined ||
        req.body.status === null ||
        req.body.status === ""
    ) {
        res.status(404).send({ msg: "Faltan datos amigo: status o description" });
        return;
    }
    else {
        next()
    }
}