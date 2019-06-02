var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const typegoose_1 = require("typegoose");
class Actor extends typegoose_1.Typegoose {
    constructor(name, movies, directors) {
        super();
        this.name = name;
        this.movies = movies;
        this.directors = directors;
    }
    static from(json) {
        if (!json) {
            return json;
        }
        return Object.assign(new Actor(), json);
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Actor.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Actor.prototype, "movies", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Actor.prototype, "directors", void 0);
exports.Actor = Actor;
exports.ActorModel = new Actor().getModelForClass(Actor, {
    existingMongoose: mongoose,
    schemaOptions: {
        collection: 'actors',
        timestamps: true
    }
});
