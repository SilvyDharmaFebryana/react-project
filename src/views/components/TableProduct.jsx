import React from "react";

const TableProduct = () => {

    class Orang {
        constructor(no, nama, pekerjaan) {
            this.no = no
            this.nama = nama
            this.pekerjaan = pekerjaan
        }
    }

    let array = [
        new Orang(0, 'Nana', 'Penyanyi'),
        new Orang(0, 'Nunu', 'Karyawan'),
        new Orang(0, 'Nini', 'Pengusaha')
    ]

    const renderArr = () => {
        return (
            array.map(({ nama, pekerjaan }, idx) => {
                return (
                    <>
                        <tr>
                            <th>{idx + 1}</th>
                            <th>{nama}</th>
                            <th>{pekerjaan}</th>
                        </tr>
                    </>
            )})
        )
    }


    return (
        <div style={{ textAlign: "center" , alignContent: "center"}}>
            <table >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderArr()
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct