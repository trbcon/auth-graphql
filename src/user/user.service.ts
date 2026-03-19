import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        {id:1, username: 'piter', email: 'piter@gmail.com'},
        {id:2, username: 'john', email: 'john@gmail.com'},
        {id:3, username: 'tehnic', email: 'tehnic@gmail.com'},
    ]

    findAll() {
        return this.users
    }
}
