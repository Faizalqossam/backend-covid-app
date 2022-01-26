// TODO 5: SETUP MODEL
//import db
const res = require("express/lib/response")
const db = require("../config/database")

//membuat model Patiens untuk melakukan query database
class Patiens {

    /**
     * Membuat method All untuk mendapatkan seluruh data
     */
    static all(){
        return new Promise((resolve,reject) => {
            //query select all
            const sql = "SELECT * FROM patiens"
            db.query(sql,(err,results)=>{
                resolve(results)
            })
        })
    }

    /**
     * Membuat method create untuk memasukan data ke database
     */
    static async create(data){
        //promise 1 : untuk melakukan insert ke database
        const id = await new Promise((resolve,reject) => {
            //query inser data ke database
            const sql ='INSERT INTO patiens SET ?'
            db.query(sql,data,(err,results) =>{
                resolve(results.insertId);
            })
        })
        //promise 2 : menampilkan data yang baru di insert berdasarkan idnya
        const patiens = await this.find(id)
        return patiens;
    }

    /**
     * Membuat method FindByStatus untuk mendapatkan data berdasarkan statusnya
     */
    static findByStatus(status){
        return new Promise((resolve,reject) =>{
            //query select by status
            const sql = `SELECT * FROM patiens WHERE status = ?`
            db.query(sql,status,(err,results) =>{
                resolve(results)
            })
        })
    }

    /**
     * Membuat method Search untuk mendapatkan data berdasarkan namanya
     */
    static search(name){
        return new Promise((resolve,reject) =>{
            //query select by name like name
            const sql = `SELECT * FROM patiens WHERE name LIKE '%${name}%'`
            db.query(sql,name,(err,results) =>{
                resolve(results)
            })
        })
    }

    /**
     * Membuat method update untuk memperbarui data berdasarkan idnya
     */
    static async update(id,data){
        await new Promise((resolve,reject) =>{
            //query update data by id
            const sql = "UPDATE patiens SET ? WHERE id = ?"
            db.query(sql,[data,id],(err,results)=>{
                resolve(results)
            })
        })
        //promise 2 : menampilkan data yang baru di insert berdasarkan idnya
        const patiens = await this.find(id)
        return patiens;
    }

    /**
     * Membuat method Find untuk mendapatkan data berdasarkan idnya
     */
    static find(id){
        return new Promise((resolve,reject) =>{
            //query select by id
            const sql = "SELECT * FROM patiens WHERE id = ?"
            db.query(sql,id,(err,results) =>{
                resolve(results[0])
            })
        })
    }

    /**
     * Membuat method delete untuk menghapus data berdasarkan id 
     */
    static delete(id){
        return new Promise((resolve,reject) => {
            //query delete data
            const sql = "DELETE FROM patiens WHERE id = ?"
            db.query(sql,id,(err,results) => {
                resolve(results)
            })
        })
    }

}

//export model
module.exports = Patiens;