import React from "react"
// import "./Products.css"
import Axios from "axios"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";



const API_URL = `http://localhost:8083`

class Products extends React.Component {

    state= {
        selectedFile: null,
        formField: {
            nama: "",
            harga: 0,
            gambar: "",
        },
        produk: [],
        file: "",
        fileNames: "",
        editForm: {
            id: 0,
            nama: "",
            harga: "",
            gambar: ""
        },
        modalEditOpen: false,
    }

    editProdukHandler = () => {
        let formData = new FormData();

        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        formData.append("fieldData", JSON.stringify(this.state.editForm));
        Axios.put(
          `${API_URL}/produk/${this.state.editForm.id}`,
          formData
        )
          .then((res) => {
            swal("Success!", "Your item has been edited", "success");
            this.getProdukData()
            // this.setState({ modalEditOpen: false})
          })
          .catch((err) => {
            swal("Error!", "Your item could not be edited", "error");
            console.log(err);
          });
    };

    editProdukBtnHandler = (idx) => {
        this.setState({
            editForm: {
                ...this.state.produk[idx],
            },
            modalEditOpen: true,
        });
    };

    toggleEdit = () => this.setState({ modalEditOpen: !this.state.modalEditOpen });

    inputHandler = (e, field, form) => {
        let { value } = e.target;
        this.setState({
            [form]: {
                ...this.state[form],
                [field]: value,
            },
        });
    };

    fileChangeHandler = (e) => {
        this.setState({ selectedFile: e.target.files[0] });
    };

    fieldUploadDataHandler = () => {
        let formData = new FormData();

        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        formData.append("fieldData", JSON.stringify(this.state.formField))

        Axios.post(`${API_URL}/produk`, formData)
            .then((res) => {
                console.log(res.data)
                this.setState({ file: res.data })
                alert("tersimpan")
                this.renderProduk()
                this.getProdukData()
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });

            
        console.log(this.state.formField);
        console.log(JSON.stringify(this.state.formField));
  
    };

    getProdukData = () => {
        Axios.get(`${API_URL}/produk`)
        .then((res) => {
         
            this.setState({ produk: res.data }) 
            console.log(this.state.produk);
        })
        .catch((err) => {
            console.log(err); 
        })

    }

    componentDidMount() {
        this.getProdukData()
    }


    deleteDataHandler = (id) => {
        Axios.delete(`${API_URL}/produk/${id}`)
            .then((res) => {
                this.getProdukData()
                swal("Success!", "Your item has been delete", "success");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    renderProduk = () => {
        return this.state.produk.map((val, idx) => {
            return (
                <tr>
                    <td>{idx + 1}</td>
                    <td>{val.nama}</td>
                    <td>{val.harga}</td>
                    <td style={{ width: "50%"}}><img src={val.gambar} alt="" style={{ width: "15%", height:"100%", backgroundImage: "none"}}/></td>
                    <td colSpan={2}>
                        <input type="button" value="Edit" onClick={(_) => this.editProdukBtnHandler(idx)}/>
                        <input type="button" value="Delete" onClick={(_) => this.deleteDataHandler(val.id)}/>
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (
            <center>
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Gambar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderProduk()}
                    </tbody>
                </table>

                <div className="mt-5"> 
                    <table>
                        <thead>
                            <tr>
                                <th>nama produk</th>
                                <th> 
                                    <input 
                                        type="text" 
                                        placeholder="nama"
                                        onChange={(e) => this.inputHandler(e, "nama", "formField")}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>harga produk</th>
                                <th> 
                                    <input 
                                        type="text" 
                                        placeholder="harga"
                                        onChange={(e) => this.inputHandler(e, "harga", "formField")}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>gambar produk</th>
                                <th> 
                                    <input 
                                        type="file" 
                                        placeholder="gambar"
                                        onChange={this.fileChangeHandler}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <button className="p-2 mt-1 ml-5 mb-1 text-center" onClick={this.fieldUploadDataHandler}>simpan</button>
                        </tbody>
                        
                    </table>
                </div>

                <div>
                <Modal
                    toggle={this.toggleEdit}
                    isOpen={this.state.modalEditOpen}
                    className="edit-modal"
                >
                    <ModalHeader toggle={this.toggleEdit}>
                        <caption>
                            <h3>Edit User</h3>
                        </caption>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    className="text-input-toggle"   
                                    type="text"
                                    value={this.state.editForm.nama}
                                    placeholder="nama"
                                    onChange={(e) =>
                                        this.inputHandler(e, "nama", "editForm")
                                    }
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    className="text-input-toggle"   
                                    type="text"
                                    value={this.state.editForm.harga}
                                    placeholder="harga"
                                    onChange={(e) =>
                                        this.inputHandler(e, "harga", "editForm")
                                    }
                                />
                            </div>
                            <div className="col-12 mt-2">
                                    <input 
                                        type="file" 
                                        placeholder="gambar"
                                        onChange={this.fileChangeHandler}
                                    />
                            </div>
                        
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="d-flex mr-2">
                            <Button className="button-edit mr-1" onClick={this.editProdukHandler}>Edit</Button>
                            <Button color="secondary" style={{ borderRadius: "2px", height: "40px" }} onClick={this.toggleEdit}>Close</Button>
                        </div>
                  </ModalFooter>
                </Modal>
                </div>
            </div>
            </center>
        )
    }
}


export default Products;