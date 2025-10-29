import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

export default function AdminPage() {
  return (
    <>
      <div style={{ backgroundColor: '#e4e8ddff', padding: "20px", borderRadius: '20px' }}>

        <h1 style={{ color: 'black' }}>
          <u>Fertilizer Admin Panel</u>
        </h1>

        <br />
        <div style={{}}>
          <Button
            icon="pi pi-plus"
            label="New QR Code"
            style={{ marginLeft: "20px", borderColor: "black", backgroundColor: 'white' }}
          />
        </div>
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <InputText
            type="text"
            placeholder="Enter SL NO."
            style={{ color: "black", width: "300px", borderColor: '' }}
          />
          <Button
            icon="pi pi-search"
            label="Search"
            style={{ color: "black", borderColor: "black", backgroundColor: 'white' }}
          />
        </div>
      </div>
    </>
  );
}
