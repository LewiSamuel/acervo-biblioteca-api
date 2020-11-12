const Obra = require("../model/obra");

module.exports = {

  
    /****************************/
    //
    //      OBRA LIST
    //
    /****************************/

    async list(req, res){ 
        
        await Obra.findAll({
            order: [
                ['id', 'ASC'],
            ],
            where: req.body
        }).then(result => {
            return res.send(result);
        }).catch(err => {
            return res.send("NOT FOUND");
        })
    },




    /****************************/
    //
    //      OBRA LISTONE
    //
    /****************************/

    async listOne(req, res){
        await Obra.findOne({
                where: {
                id: req.params.id
            }
        }).then(result => {
            if(result)
            return res.send(result);
            else
            return res.send({err: "Not found"});
        }).catch(err => {
            return res.send({err: err});
        })
    },



    /****************************/
    //
    //      OBRA SAVE
    //
    /****************************/
    async save(req, res){
        // Update
            await Obra.create( req.body ).then(result => {

                if(result)
                return res.send({status: "OK", obj_save: result });
                else
                return res.send({status: "ERRO", obj_save: result });
            }).catch(err => {
                return res.send({err: err});
            });
        
    },


    /****************************/
    //
    //      OBRA UPDATE
    //
    /****************************/
    async update(req, res){
        
        await Obra.update( req.body ,{
            where: { id: req.body.id }
        }).then(result => {
            if(result)
            return res.send({status: "OK", obj_save: result});
            else
            return res.send({status: "ERRO", obj_save: result});
        }).catch(err => {
            return res.send({err: err});
        });

    },





    
    /****************************/
    //
    //      OBRA DELETE
    //
    /****************************/

    async delete(req, res){

        let objExcluir = await Obra.findOne({where: {id: req.body.id}}).catch(function(erro){
            return res.status(400).send("Erro: "+erro);
        });
        if(objExcluir.destroy())
        return res.send({status: "OK", obj: objExcluir});
        else
        return res.status(400).send({status: "ERRO", obj: objExcluir});
    }

}