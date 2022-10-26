"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoContactRepository = void 0;
const MOCK_CONTACT = {
    contactId: "0000-0000-0000",
    names: "Names Mock",
    lastNames: "Apellidos Mock",
    phoneNumber: "0999081750",
    email: "mock@gmail.com",
};
class MongoContactRepository {
    constructor() {
        this.create = (contact) => __awaiter(this, void 0, void 0, function* () {
            console.log("MongoContactRepository => create()");
            const contactCreated = MOCK_CONTACT;
            return contactCreated;
        });
        this.get = (uuid) => __awaiter(this, void 0, void 0, function* () {
            console.log("MongoContactRepository => get()");
            const contactGeted = MOCK_CONTACT;
            return contactGeted;
        });
        this.update = (uuid, contact) => __awaiter(this, void 0, void 0, function* () {
            console.log("MongoContactRepository => update()");
            const contactUpdated = MOCK_CONTACT;
            return contactUpdated;
        });
        this.delete = (uuid) => __awaiter(this, void 0, void 0, function* () {
            console.log("MongoContactRepository => delete()");
            const contactDeleted = MOCK_CONTACT;
            return true;
        });
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.MongoContactRepository = MongoContactRepository;
