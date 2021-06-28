import React, { Component} from 'react';


class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Kho hàng</h3>
              </div>
              
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Gía</th>
                      <th>Trạng Thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.children}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductList;
