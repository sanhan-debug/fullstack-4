import { productModel } from "../Model/productModel.js";


let getAllProducts = async (req, res) => {
    try {
        let products = await productModel.find()
        res.send(products).status(200)
    } catch (err) {
        console.error("get all Product error : ", err)
        res.status(500).send({ error: "get all Product eror : ", detail: err.message })
    }
}

let addProduct = async (req, res) => {
    try {
        let newProduct = await productModel.create(req.body)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error("addProduct error : ", err)
        res.status(500).send({ error: "add Product error : ", detail: err.message })
    }
}

let updateProduct = async (req, res) => {
    try {
        let updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ error: "Product not found" });
        }

        res.status(200).send(updatedProduct);
    } catch (err) {
        console.error("updateProduct error : ", err);
        res.status(500).send({ error: "update Product error : ", detail: err.message });
    }
};




let getProductById = async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id)
        if (!product) {
            return res.send({ message: "Product not found" }).status(404)
        }
        res.send(product).status(200)
    } catch (err) {
        console.error("delete Product error : ", err)
        res.status(500).send({ error: "getbyid  error : ", detail: err.message })
    }
}

let deleteProductById = async (req, res) => {
    try {
        let product = await productModel.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.send("Product not found").status(200)
        }
        res.status(200).send(`deleted element `)

    } catch (err) {
        console.error("delete Product error : ", err)
        res.status(500).send({ error: "delete Product error : ", detail: err.message })
    }
}





export { addProduct, getAllProducts, deleteProductById, getProductById ,updateProduct}