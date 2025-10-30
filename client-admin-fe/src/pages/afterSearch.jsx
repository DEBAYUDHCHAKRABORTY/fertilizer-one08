import logo from "./demoData.jpg";

export default function DemoDetail() {
  return (
    <>
      <div style={{ marginTop:'20px'}}>
        <h1 className="text-4xl font-semibold">
          <u>Searched Product</u>
        </h1>
        <img src={logo} alt="20px" width="400px" style={{display:'flex' , justifyContent:'center', margin:'auto' , marginTop:'30px' , marginBottom:'30px'}} />
        <div>
          <table
            style={{
              border: "1px solid",
              padding: "5px 5px 10px",
              backgroundColor: "#EEEEEE",
              borderSpacing: "0",
              borderCollapse: "collapse",
              marginLeft: "250px",
              fontFamily: 'Chilanka'
            }}
          >
            <tbody>
              <tr style={{ borderBottom: "1px solid" }}>
                <th
                  style={{
                    padding: "15px",
                    borderRight: "1px solid",
                    width: "200px",
                  }}
                >
                  Product Name
                </th>
                <td style={{ padding: "5px 10px", width: "500px" }}>
                  Plant Growth Booster{" "}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Unique Identifier
                </th>
                <td style={{ padding: "5px 10px" }}>5REJJZGF23WCU</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  GTIN
                </th>
                <td style={{ padding: "5px 10px" }}>89044133701696</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Batch No
                </th>
                <td style={{ padding: "5px 10px" }}>WL24PGA035</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Mfg.Date
                </th>
                <td style={{ padding: "5px 10px" }}>06-12-2024</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Exp.Date
                </th>
                <td style={{ padding: "5px 10px" }}>06-12-2026</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Manufactured By
                </th>
                <td style={{ padding: "5px 10px" }}>WCL-U1</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Marketed By
                </th>
                <td style={{ padding: "5px 10px" }}>
                  Willowood Chemicales Limited
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Autidote Statement
                </th>
                <td style={{ padding: "5px 10px" }}>
                  No specific antidote is known. Treat symptomatically
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Customer Care Email Id
                </th>
                <td style={{ padding: "5px 10px" }}>care@willowood.com</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Customer Care Phone No
                </th>
                <td style={{ padding: "5px 10px" }}>01133701696</td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Label information
                </th>
                <td style={{ padding: "5px 10px" , color:'blue' , cursor:'pointer'}}>
                  Click here to view product Label
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Leaflet Information
                </th>
                <td style={{ padding: "5px 10px" , color:'blue' , cursor:'pointer' }}>
                  Click here to view product Leaflet
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid" }}>
                <th style={{ padding: "15px", borderRight: "1px solid" }}>
                  Address.
                </th>
                <td style={{ padding: "5px 10px" }}>
                  Madgul Lounge,4th Floor,Flat-41,23,Chetal Central
                  Road,Kolkata,West Bangel-700027
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
