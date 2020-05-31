const User = require('../models/User')

module.exports = {
    async index(request, response) {
        return response.json(User)
    },
    async show(request, response) {
        const user_data = User[request.params.id - 1]
        if (user_data) return response.send(user_data)

        return response.send({ 'message': 'Not found' })
    },
    async store(request, response) {
        const { cpf,  points, parceiro, conta_rivelo, smiles, operacao } = request.body
        User.push({
            cpf,
            points,
            parceiro,
            conta_rivelo,
            smiles,
            operacao
        })
        return response.send(User[User.length - 1])
    },
}