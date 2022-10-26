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
exports.createContactController = void 0;
const service_factory_1 = require("../../../../core/dependecy_injection/service_factory");
const contact_creator_1 = require("../../application/use_cases/contact_creator");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactService = (0, service_factory_1.contactServiceFactory)();
    const contactCreator = new contact_creator_1.ContactCreator(contactService);
    const response = yield contactCreator.execute(req.body);
    res.send(response);
});
exports.createContactController = createContactController;
