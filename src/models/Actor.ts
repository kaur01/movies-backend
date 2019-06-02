import {Types} from "mongoose";
import * as mongoose from 'mongoose';
import {prop, Typegoose} from "typegoose";

export class Actor extends Typegoose {
    public _id: Types.ObjectId;

    @prop()
    name: string

    @prop()
    public movies: string[];

    @prop()
    public directors: string[];

    constructor();
    constructor(name: string, movies: string[], directors: string[]);
    constructor(name?: string, movies?: string[], directors?: string[]) {
        super();
        this.name = name;
        this.movies = movies;
        this.directors = directors;
    }

    public static from(json: any): Actor {
        if (!json) {
            return json;
        }
        return Object.assign(new Actor(), json);
    }
}

export const ActorModel = new Actor().getModelForClass(Actor, {
    existingMongoose: mongoose,
    schemaOptions: {
        collection: 'actors',
        timestamps: true
    }
});
