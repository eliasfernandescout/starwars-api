import mongoose from 'mongoose';

import { ICreateJedisDTO } from '../../dtos/ICreateJedisDTO';
import { Jedi } from '../../entities/Jedi';
import { IJedisRepository } from '../IJedisRepository';

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
});

const JediDoc = mongoose.model<Jedi>('Jedi', contactSchema);

class JedisRepository implements IJedisRepository {
    create(jediData: ICreateJedisDTO): Jedi {
        const jediInstance = new Jedi(jediData);

        const jedi = new JediDoc(jediInstance);
        jedi.save();
        return jedi;
    }

    async list() {
        const jedi = await JediDoc.find();
        return jedi;
    }
}

export { JedisRepository };
