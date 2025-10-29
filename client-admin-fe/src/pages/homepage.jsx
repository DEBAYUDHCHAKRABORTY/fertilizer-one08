import {InputText} from "primereact/inputtext";
import "primeicons/primeicons.css";
import {Button} from "primereact/button";
import logo from "./logo.jpg";

export default function AdminPage() {
    return (<>
          <div style={{backgroundColor: '#e4e8ddff', padding: "20px", borderRadius: '20px'}}>
              <h1 className="text-6xl"><u>Fertilizer Admin Panel</u></h1>

              <div>
                  <Button icon="pi pi-plus" label="New QR Code"
                          style={{marginLeft: "20px", borderColor: "black", backgroundColor: 'white'}}/>
              </div>

              <div style={{backgroundColor: "#EEEEEE", padding: "20px", borderRadius: "20px",}}>
                  <img src={logo} alt="200px"
                       style={{
                           marginRight: "1000px",
                           border: "border-box",
                           display: "inline-block",
                           flex: "left",
                           width: "200px",
                           position: "relative",
                       }}
                  />
                  <InputText type="text" placeholder="Enter SL NO."
                             style={{color: "black", width: "300px", borderColor: ''}}/>
                  <Button
                    icon="pi pi-search"
                    label="Search"
                    style={{color: "black", borderColor: "black", backgroundColor: 'white'}}
                  />

                  <div style={{position: 'relative', bottom: '100px'}}>
                      <h1 style={{color: "black"}}>
                          <u>Fertilizer Admin Panel</u>
                      </h1>

                      <div style={{}}>
                          <Button
                            icon="pi pi-plus"
                            label="New QR Code"
                            style={{
                                marginLeft: "20px",
                                borderColor: "black",
                                backgroundColor: "white",
                                color: "black",
                            }}
                          />
                      </div>
                      <div
                        style={{
                            marginTop: "30px",
                        }}
                      />

                      <InputText
                        type="text"
                        placeholder="Enter Unique Identifier No."
                        style={{color: "black", width: "300px", borderColor: "black"}}
                      />
                      <Button
                        icon="pi pi-search"
                        label="Search"
                        style={{
                            color: "black",
                            borderColor: "black",
                            backgroundColor: "white",
                        }}
                      />
                  </div>
              </div>
          </div>
      </>
    )
      ;
}
