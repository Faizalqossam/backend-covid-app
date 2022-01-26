// TODO 4: SETUP CONTROLLER
//import model patiens
const Patiens = require("../models/Patiens")

//membuat controller patiens
class PatiensController {

    /**
     * membuat method Index untuk menampilkan semua data
     */
    async index(req,res){
        //menggunakan method all
        const patiens = await Patiens.all()
        //cek data apakah ada atau tidak
        if(patiens.length > 0){
            //membuat response pesan dan menampilkan data yang ditemukan
            const data = {
                message : "Get All Resource",
                data : patiens,
            }
            //mengirim response dan data dengan kode 201
            return res.status(200).json(data);
        }//else
        //membuat response pesan jika data tidak ditemukan
        const data = {
            message : "Data is empty"
        }
        //mengirim response pesan data tidak ditemukan dengan kode 201
        return res.status(200).json(data)
    }

    /**
     * Membuat method Store untuk menambahkan resource data
     */
    async store(req,res){
        const patiens = await Patiens.create(req.body)
        //membuat response pesan dan menampilkan data yang baru di tambahkan
        const data = {
            message : "Resource is added successfully",
            data : patiens,
        }
        //mengirim response dan data dengan kode 201
        return res.status(201).json(data)

    }
    
    /**
     * Membuat method Update untuk memperbarui data berdasarkan idnya
     */
    async update(req,res){
        //ambil id dari request parameternya
        const {id} = req.params;
        //menggunakan method find untuk mencari id yang akan di update
        const patiens = await Patiens.find(id)
        //cek apakah datanya ada atau tidak
        if(patiens){
            //jika datanya ditemukan maka update menggunakan method update mengirimkan id dan data dari reqbody
            const patiensUpdated = await Patiens.update(id,req.body)
            //membuat response pesan dan menampilkan data yg berhasil di update
            const data = {
                message : "Resource is update successfully",
                data : patiensUpdated,
            }
            //mengirim response dan data dengan kode 201
            return res.status(200).json(data)
        }    
        //else
        //membuat response pesan jika data tidak ditemukan
        const data = {
            message : "Resource not found"
        }
        //mengirim response pesan data tidak ditemukan dengan kode 404
        return res.status(404).json(data)
    }

    /**
     * Membuat method Destroy untuk menghapus data berdasarkan idnya
     */
    async destroy(req,res){
        //ambil id dari request parameternya
        const {id} = req.params
        //menggunakan method find untuk mencari id yang akan di delete
        const patiens = await Patiens.find(id)
        //cek apakah datanya ada atau tidak
        if (patiens){
            //jika data ditemukan maka hapus dengan method delete
            await Patiens.delete(id)
            //membuat response pesan data berhasil di hapis
            const data = {
                message : " Resource is deleted successfully"
            }
            //mengirim response pesan sukses dengan kode 201
            return res.status(200).json(data)
        }//else
        //membuat response pesan jika datanya tidak ditemukan
        const data = {
            message : "Resource not found"
        }
        //mengirim response pesan data tidak ditemukan dengan kode 404
        return res.status(404).json(data)
    }

    /**
     * Membuat method Show untuk menampilkan data berdasarkan id
     */
    async show(req,res){
        //ambil status dari request parameter
        const {id} = req.params;
        //menggunakan method find
        const patiens = await Patiens.find(id)
        //cek data apakah ada atau tidak
        if (patiens){
            //membuat response pesan dan menampilkan data yang berhasil ditemukan
            const data = {
                message : `Get Detail resource`,
                data : patiens,
            }
            //mengirim response pesan dan data dengan kode 200
            return res.status(200).json(data)
        }//else
        //membuat response pesan jika data tidak ditemukan 
        const data = {
            message : "Resource not found"
        }
        //mengirim response pesan gagal ditemukan dengan kode 404
        return res.status(404).json(data)
    }

    /**
     * Membuat method Sarch untuk menampilkan data dari nama yang dicari
     */
    async search(req,res){
        //ambil name dari request parameter
        const {name} = req.params;
        //menggunakan method search
        const patiens = await Patiens.search(name)
        //cek data apakah ada atau tidak
        if (patiens){
            //membuat reponse pesan dan menampilkan data jika ditemukan
            const data = {
                message : `Get ${name} resource`,
                data : patiens,
            }
            //mengirim response pesan dan data sukses ditemukan dengan kode 200
            return res.status(200).json(data)
        }//else
        //membuat response pesan jika data tidak ditemukan
        const data = {
            message : "Resource not found"
        }
        //mengirim pesan data gagal ditemukan dengan kode 404
        return res.status(404).json(data)
    }

    /**
     * Membuat method ShowStatus untuk menampilkan data berdasarkan statusnya
     */
    async searchStatus(req,res){
        //ambil status dari request parameter
        const {status} = req.params;
        //menggunakan method findbystatus
        const patiens = await Patiens.findByStatus(status)
        //cek data apakah ada atau tidak
        if (patiens){
            //membuat response pesan dan menampilkan data jika ditemukan
            const data = {
                message : `Get ${status} resource`,
                data : patiens,
            }
            //mengirim reponse pesan dan data sukses dengan kode 200
            return res.status(200).json(data)
        }//else
        //membuat response pesan jika data tidak ditemukan
        const data = {
            message : "Resource not found"
        }
        //mengirim pesan data gagal ditemukan dengan kode 404
        return res.status(404).json(data)
    }
   
}

//membuat object controller
const object = new PatiensController;

//export controller
module.exports = object;
