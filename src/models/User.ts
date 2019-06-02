import {Types} from "mongoose";
import * as mongoose from 'mongoose';
import {prop, Typegoose} from "typegoose";

export class User extends Typegoose {
    public _id: Types.ObjectId;

    @prop()
    public name: string;

    @prop()
    public number: string;

    constructor();
    constructor(name: string, number: string);
    constructor(name?: string, number?: string) {
        super();
        this.name = name;
        this.number = number;
    }

    public static from(json: any): User {
        if (!json) {
            return json;
        }
        return Object.assign(new User(), json);
    }
}

export const UserModel = new User().getModelForClass(User, {
    existingMongoose: mongoose,
    schemaOptions: {
        collection: 'users',
        timestamps: true
    }
});
