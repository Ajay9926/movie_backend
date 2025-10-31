"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (err) {
            const errors = err.errors ? err.errors.map((e) => e.message) : [err.message];
            res.status(400).json({ errors });
        }
    };
};
exports.validateBody = validateBody;
