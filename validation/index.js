//Import object dari express validator
const { check, validationResult } = require('express-validator');

//buat validasi pesan eror
exports.runValidation = ( req, res, next ) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(404).json({
            message: errors.array()[0].msg
        })
    }
    next()
}

//buat cek validasi dengan persyaratan tidak boleh kosong
exports.validationCheck = [
    check('name', 'name cannot be empty').notEmpty(),
    check('phone', 'phone cannot be empty').notEmpty().isNumeric().withMessage('phone must be a number'),
    check('address', 'address cannot be empty').notEmpty(),
    check('status', 'status cannot be empty').notEmpty(),
    check('in_date_at', 'in_date_at cannot be empty').optional(),
    check('out_date_at', 'out_date_at cannot be empty').optional()
]