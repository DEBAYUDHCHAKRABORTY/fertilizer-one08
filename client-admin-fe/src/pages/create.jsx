import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { useState } from "react";
import logo from "./QRcode.png"

export default function ProjectAdmin() {
    const [formData, setFormData] = useState({
        productName: "",
        uniqueIdentifier: "",
        gtin: "",
        batchNo: "",
        manufacture: "",
        expire: "",
        manufactureBy: "",
        marketBy: "",
        cautionaryLogo: "",
        antidote: "",
        mail: "",
        phoneNo: "",
        label: "",
        leaflet: "",
        address: "",
    });

    const [loading, setLoading] = useState(false);
    const [showQRcode, setShowQRcode] = useState(false);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const load = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setShowQRcode(true);
        }, 2000);
    };

    return (
        <div>

            <h5 className="text-6xl text-teal-600">Babai</h5>
            <div style={{fontFamily:"fantasy", fontSize:"80px", fontStretch:"extra-expanded", fontWeight:"bold", paddingBottom:"10px"}}>
                <h1>Project Fertilizer</h1>
            </div>

            <div style={{paddingBottom:"20px", fontFamily:"cursive", fontSize:"17px", fontWeight:"bolder"}}>
                <h2>Please enter the Product's details you want to search for</h2>
            </div>

            <div onSubmit={load} >
                <FloatLabel style={{paddingBottom:"5px"}} >
                    <InputText name="productName" onChange={onInputChange} />
                    <label htmlFor="productName">Product Name</label>
                </FloatLabel>
 
                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="uniqueIdentifier" onChange={onInputChange} />
                    <label htmlFor="uniqueIdentifier">Unique Identifier</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="gtin" onChange={onInputChange} />
                    <label htmlFor="gtin">GTIN</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="batchNo" onChange={onInputChange} />
                    <label htmlFor="batchNo">Batch No</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="manufacture" onChange={onInputChange} />
                    <label htmlFor="manufacture">Mfg. Date</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="expire" onChange={onInputChange} />
                    <label htmlFor="expire">Exp. Date</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="manufactureBy" onChange={onInputChange} />
                    <label htmlFor="manufactureBy">Manufacture By</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="marketBy" onChange={onInputChange} />
                    <label htmlFor="marketBy">Marketed by</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="cautionaryLogo" onChange={onInputChange} />
                    <label htmlFor="cautionaryLogo">Cautionary Logo</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="antidote" onChange={onInputChange} />
                    <label htmlFor="antidote">Antidote Statement</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="mail" onChange={onInputChange} />
                    <label htmlFor="mail">Customer Care Email</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="phoneNo" onChange={onInputChange} />
                    <label htmlFor="phoneNo">Customer Care Phone No</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px", height:"56px" }}>
                    <InputText name="label" onChange={onInputChange} />
                    <label htmlFor="label">Label Information</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="leaflet" onChange={onInputChange} />
                    <label htmlFor="leaflet">Leaflet Information</label>
                </FloatLabel>

                <FloatLabel style={{paddingBottom:"5px"}}>
                    <InputText name="address" onChange={onInputChange} />
                    <label htmlFor="address">Address</label>
                </FloatLabel>

                <div className="col-12 flex justify-content-center mt-3">
                    <Button
                        type="submit" label="Generate QR Code" icon="pi pi-qrcode" loading={loading}/>
                </div>
            </div>

            <hr className="my-5 pb-2.5" />

            {showQRcode && (
                <div className="flex flex-column align-items-center mt-5 p-4 border-round-md shadow-4 surface-card">
                    <h3 className="text-2xl font-semibold mb-3">QR Code</h3>
                    <img className= ""
                        src={logo}
                        alt="Generated QR Code"
                        style={{ width: "250px", height: "250px", display:"flex", justifyContent:"center", margin:"auto" }}
                    />  
                    <p className="mt-3 text-sm text-700">
                        This QR code contains the submitted form data.
                    </p>
                </div>
            )}
        </div>
    );
}
