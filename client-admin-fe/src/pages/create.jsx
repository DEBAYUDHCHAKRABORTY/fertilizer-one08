
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function ProjectAdmin() {

    

    return (
        <div>

            <div className="heading font-bold font-stretch-150% mask-radial-from-stone-950 text-[50px] pb-10">
                <h1>Project Fertilizer </h1>
            </div>

            <div>
                <h2>Your Search Product's details is here</h2>
            </div>

            <div className="container">
                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    {/* <thead>
                        <th>
                            Product query :
                        </th>
                        <th>
                            Product Data :
                        </th>
                    </thead> */}

                <div>
                <Column field="name" header="productName">Queries</Column>
                <th>WILLO-MITE - 250 ml.</th>
                <th>Unique Indentifier</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </div>


                <div>
                <Column field="name" header="Name">Query Details</Column>
                </div>

            </DataTable>
            </div>
        </div>
    );
}