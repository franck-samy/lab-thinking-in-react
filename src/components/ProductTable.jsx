import React from 'react'
import ProductRow from './ProductRow'


 class ProductTable extends React.Component {
    render() {
        return (
            <div>
               <h2>Product Table</h2> 
               <table>
                   <tr>
                   <th>Name</th>
                   <th>Price</th>
                   </tr>
                 
                    {this.props.products.map(
            (el) => <ProductRow key={el.id} {...el} />
          )}
                    
               </table>
            </div>
        )
    }
    
}


export default ProductTable
