const multer = require('multer')
const path = require('path')
const fs = require('fs')


const storage = multer.diskStorage({
    destination: function (req, file, callB) {
        fs.mkdirSync('public/uploads', { recursive: true })
        callB(null, 'public/uploads')
    },
    filename: function (req, file, callB) {

        const ext = path.extname(file.originalname)
        const witeListFormat = ['.jpg', 'jpeg', '.png', 'webp']
        const witeListMinType = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']
        if (witeListMinType.includes(file.mimetype)) {
            const filename = Date.now() + ext
            callB(null, filename)
        } else {
            callB(new Error(" only .png .jpeg .jpg .webp format allowed"))
        }
    },

})


const _150KB=7500000
const uploadFile = multer({
    storage,
    limits: {
        fileSize:_150KB
}
})

module.exports = uploadFile